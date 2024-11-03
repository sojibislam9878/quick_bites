const express = require('express');
require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const { MongoClient } = require('mongodb');
const SSLCommerzPayment = require('sslcommerz-lts')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');

// Generate a unique transaction ID
const transactionId = uuidv4();


// just for check

const app = express();
app.use(express.json());
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: [, "http://localhost:3000", 'http://localhost:3000'],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    }

));
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    }
});
const PORT = process.env.PORT || 4000;

// MongoDB connection string (replace with your MongoDB URL)
const uri = `mongodb+srv://endGameProject:ezyPAm3Cgs6gT0IL@cluster0.lel6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const { ServerApiVersion, ObjectId } = require('mongodb');
const { default: axios } = require('axios');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const database = client.db("Quick_Bites")
const transaction = database.collection("Transaction");
const userCollection = database.collection("allUser");
const foodRequest = database.collection("foodRequest");




async function run() {

    try {
        app.post('/checkout', async (req, res) => {
            const data = req.body;
            // console.log(data?.productData[0])
            const paymentData = {
                total_amount: data?.amount, // payment amount
                currency: 'USD', // e.g., 'BDT'
                tran_id: transactionId, // unique transaction id
                success_url: 'http://localhost:5000/payment-success',
                fail_url: 'http://localhost:5000/payment-fail',
                cancel_url: 'http://localhost:5000/payment-cancel',
                ipn_url: 'http://localhost:5000/ipn',
                shipping_method: 'No',
                product_name: data?.productData?.length > 1 ? 'Multiple Food items' : 'food',
                product_category: 'Food',
                product_data: data,
                product_profile: 'general',
                cus_name: data?.name,
                cus_email: data?.email,
                cus_address: data?.userAddress,
                cus_country: 'Bangladesh',
                cus_phone: data?.userPhoneNumber,
            };

            try {
                const sslcz = new SSLCommerzPayment(`${process.env.PAYMENT_ID}`, `${process.env.PAYMENT_PASSWORD}`, false); // Use true for live, false for sandbox
                const paymentResponse = await sslcz.init(paymentData);
                // console.log(paymentResponse);

                if (paymentResponse.GatewayPageURL) {
                    transaction.insertOne(paymentData)


                    res.status(200).send({ url: paymentResponse.GatewayPageURL });
                } else {
                    res.status(400).send({ error: 'Failed to initiate payment' });
                }
            } catch (error) {
                res.status(500).send({ error: error.message });
            }

        })

        // when use click the payment success
        app.post('/payment-success', async (req, res) => {
            const data = req.body
            console.log(data);


            const query = {
                tran_id: data?.tran_id,
            }
            const update = {
                $set: {
                    status: 'pending',
                    validId: data.val_id
                },
            }
            const updateData = await transaction.updateOne(query, update)


            // console.log(updateData)
            // Handle success response
            res.status(200).redirect(`http://localhost:3000/transaction/${data.tran_id}`);
        });


        //   when user cancel the payment request
        app.post('/payment-cancel', async (req, res) => {
            const data = req.body

            const query = {
                tran_id: data?.tran_id,
            }

            await transaction.deleteOne(query)
            res.status(200).redirect('http://localhost:3000');


        })

        //   when use click the payment failed
        app.post('/payment-fail', async (req, res) => {
            const data = req.body

            const query = {
                tran_id: data?.tran_id,
            }

            await transaction.deleteOne(query)

            res.status(200).redirect('http://localhost:3000');


        })

        //   get payment information by transaction id 
        app.get('/order/:id', async (req, res) => {
            const data = req.params.id
            const query = {
                tran_id: data,
            }
            const result = await transaction.findOne(query)
            // console.log(result)
            // Handle success response
            res.status(200).json(result);
        })


        //   for ipn

        app.post('/ipn', async (req, res) => {

            res.send(req.body)

        })
        //   for validation payment methods
        app.post('/validate', async (req, res) => {

            const data = req.body;
            const query = {
                tran_id: data?.transactionId,
            }

            const paymentData = await transaction.findOne(query)


            if (paymentData?.validId == data?.id) {

                const foodData = {
                    customer_phone: paymentData?.cus_phone,
                    customer_address: paymentData?.cus_address,
                    customer_oder_time: new Date().toLocaleString(),
                    customer_total_foodItems: paymentData?.product_data,
                    food_status: "cooking",

                }
                // console.log(foodData);


                await foodRequest.insertOne(foodData)

                // from user data to send data to delivery man
                io.emit('new-order', result.ops[0]); // Notify all delivery personnel
                res.status(201).json({ message: 'Order created', order: result.ops[0] });

                const userData = {
                    email: data?.userData
                }

                const dataa = await userCollection.findOne(userData)
                console.log(dataa);



                const amount = parseInt(Math.ceil(paymentData?.product_data?.amount * (20 / 100))) + parseInt(dataa?.points) || 0

                // console.log(paymentData?.product_data?.amount,Math.ceil(paymentData?.product_data?.amount*(20/100)),parseInt(Math.ceil(paymentData?.product_data?.amount*(20/100))),amount);

                const point = {
                    $set: {
                        points: amount
                    }

                }

                await userCollection.updateOne(userData, point)
                const update = {
                    $set: {
                        status: 'completed',
                    },
                }


                console.log(data?.transactionId, 'transactionId is here ');

                await transaction.updateOne(query, update)
                res.status(200).send({ status: 'completed' });



            }
            else {
                res.status(403).send({ error: 'Invalid ID' });
            }
        })


    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}



const chatCollection = database.collection("massages")

let users = {};  // Store users with socket IDs

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // User joins with their name
    socket.on('join', async ({ data }) => {
        users[socket.id] = data?.email;
        console.log(`${data.email} joined`);

        // Fetch and send all previous messages (user and admin) to the user
        const previousMessages = await chatCollection.find({ userEmail: users[socket.id] }).sort({ timestamp: 1 }).toArray();
        socket.emit('chat_history', previousMessages);  // Send chat history to the user
    });

    // Listen for messages from the user
    socket.on('user_message', async ({ msg, name, image }) => {
        console.log(`Message from ${users[socket.id]}: ${msg}`, `${name}`);

        // Save the user's message in MongoDB
        const newMessage = {
            socketId: socket.id,
            userEmail: users[socket.id],
            userName: name,
            message: msg,
            timestamp: new Date(),
            image: image
        };
        const data = await chatCollection.insertOne(newMessage);  // Insert message into MongoDB
        console.log(data);


        // Emit the message to the admin or broadcast to others
        io.emit('admin_receive', { socketId: socket.id, userEmail: users[socket.id], msg, userName: name, userImage: image });
    });





    // Delivery person accepts an order
app.post('/accept-order', async (req, res) => {
    try {
        const { orderId, deliveryPersonId } = req.body;

        const result = await ordersCollection.updateOne(
            { _id: new ObjectId(orderId), status: 'Pending' },
            { $set: { status: 'Accepted', deliveryPersonId } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Order not found or already accepted' });
        }

        // Emit the accepted order to notify all clients
        io.emit('order-accepted', { orderId, deliveryPersonId });

        // Send updated orders list excluding the accepted order
        const updatedOrders = await ordersCollection.find({ status: 'Pending' }).toArray();
        io.emit('update-orders', updatedOrders); // Notify clients with the updated order list

        res.status(200).json({ message: 'Order accepted', orderId });
    } catch (error) {
        res.status(500).json({ message: 'Error accepting order', error });
    }
});






    // Admin sends a message to a specific user
    socket.on('admin_message', async ({ userId, message }) => {
        console.log(`Admin sends message to ${userId}: ${message}`);

        // Save the admin's message in MongoDB even if the user is disconnected
        const newMessage = {
            socketId: userId,   // user socketId get from admin
            userEmail: users[userId],
            message,
            timestamp: new Date(),
            role: 'admin'  // Add admin role to the message in MongoDB
        };
        await chatCollection.insertOne(newMessage);  // Insert admin message into MongoDB

        // Check if the user is currently connected
        if (users[userId]) {
            io.to(userId).emit('message_from_admin', { message, role: 'admin' });  // Send message to the user if they're online
        }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        delete users[socket.id];  // Remove user from the list when they disconnect
    });
});

server.listen(PORT, () => {
    console.log('Server is running on port 4000');
});

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('done')
})

app.listen(5000)