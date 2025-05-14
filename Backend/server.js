import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/user' ,userRouter);
app.use('/api/product' ,productRouter);
app.use('/api/cart' ,cartRouter);
app.use('/api/order' ,orderRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});
// Example in Node.js with Express
app.get('/api/cart/:userId', async (req, res) => {
  const cart = await cart.findOne({ userId: req.params.userId });
  res.json(cart);
});


app.listen(port, () =>console.log(`Server is running on port `+port));