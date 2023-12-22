import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();
const port = 3000;

// Enable rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(express.json());

// Apply the rate limiting middleware to your form submission route
app.post('/submit-form', limiter, (req, res) => {
  const { user_name, user_email, message } = req.body;

  // Here, you can add your form submission logic. For example, you can send an email, save the data to a database, etc.
  
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});