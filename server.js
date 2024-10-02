const express = require('express');
const next = require('next');
const morgan = require('morgan'); // Logging middleware
const SSLCommerzPayment = require('sslcommerz-lts');
const bodyParser = require('body-parser');
require('dotenv').config();

// Determine the environment (development or production)
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Declare port here
const port = process.env.PORT || 3000;  // Default to 3000 if no environment variable is provided

app.prepare().then(() => {
  const server = express();

  // Middleware to parse JSON request bodies
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Middleware: Logging
  server.use(morgan('dev'));

  // Example API route to test data fetching
  server.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express with Middleware!' });
  });
 

  // SSLCommerz Payment Route
  server.post('/api/sslcommerz/init', (req, res) => {
    console.log('sf')
    const { amount, currency } = req.body;

    const transactionData = {
      total_amount: '100',
      currency: currency || 'BDT', // Default currency as BDT
      tran_id: 'REF123', // Unique transaction ID
      success_url: `http://localhost:3000/api/sslcommerz/success`,
      fail_url: `${req.protocol}://${req.get('host')}/api/sslcommerz/fail`,
      cancel_url: `${req.protocol}://${req.get('host')}/api/sslcommerz/cancel`,
      ipn_url: `${req.protocol}://${req.get('host')}/api/sslcommerz/ipn`,
      shipping_method: 'NO',
      product_name: 'Your Product',
      product_category: 'General',
      product_profile: 'non-physical-goods',
      cus_name: 'Customer Name',
      cus_email: 'customer@example.com',
      cus_add1: 'Address Line 1',
      cus_city: 'City',
      cus_postcode: '1234',
      cus_country: 'Bangladesh',
      cus_phone: '0123456789',
      ship_name: 'Shipping Name',
      ship_add1: 'Shipping Address',
      ship_city: 'Shipping City',
      ship_postcode: '1234',
      ship_country: 'Bangladesh',
    };
console.log(transactionData)
    const sslcommerz = new SSLCommerzPayment('zephy66edc01f83108', 'zephy66edc01f83108@ssl', false);
    console.log(sslcommerz)

    sslcommerz.init(transactionData).then((data) => {
      if (data?.GatewayPageURL) {
        res.json({ payment_url: data?.GatewayPageURL });
      } else {
        res.status(400).json({ message: `Failed to initiate SSLCommerz paymentddd ${data}`, },{mass:`${sslcommerz}`});
      }
    }).catch((error) => {
      console.error('SSLCommerz Error:', error);
      res.status(500).json({ message: 'Server error during SSLCommerz payment initialization' });
    });
  });

  server.post('/api/sslcommerz/success', (req, res) => {
    // Perform any additional logic you need here (e.g., verifying payment status, saving to the database)
  
    // Redirect the user to /cart
    res.writeHead(301, { Location: 'http://localhost:3000/cart' });
    res.end();  // You need to end the response after redirecting
  })

  // Handle all other requests using Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Declare port and listen on it
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
