import Cors from 'cors';

// CORS পলিসি সেটআপ করা যেখানে সব মেথড এলাউ করা আছে
const cors = Cors({
  origin: '*', // সব ডোমেইন এলাউ করা
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // সব মেথড এলাউ করা
  allowedHeaders: ['Content-Type', 'Authorization'], // এলাউড হেডারস
});

// CORS middleware ফাংশন ব্যবহার করা
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// API রুট হ্যান্ডল করা যেখানে CORS এলাউ করা হবে
export async function GET(req, res) {
  // প্রথমে CORS middleware রান করাও
  await runMiddleware(req, res, cors);

  // তারপর রেসপন্স ফেরত দাও
  res.json({ message: 'GET request with CORS enabled!' });
}

export async function POST(req, res) {
  await runMiddleware(req, res, cors);
  res.json({ message: 'POST request with CORS enabled!' });
}

export async function PUT(req, res) {
  await runMiddleware(req, res, cors);
  res.json({ message: 'PUT request with CORS enabled!' });
}

export async function DELETE(req, res) {
  await runMiddleware(req, res, cors);
  res.json({ message: 'DELETE request with CORS enabled!' });
}
