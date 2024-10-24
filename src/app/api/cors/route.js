import Cors from 'cors';


const cors = Cors({
  origin: '*',
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
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

export async function GET(req, res) {
  await runMiddleware(req, res, cors);

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
