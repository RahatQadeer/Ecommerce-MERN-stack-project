import express from 'express';
import { updateStatus,placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
     } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';    
const orderRouter = express.Router();
    //Admin Features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment Features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);
orderRouter.post('/cod', authUser, placeOrder);  // Add this line for COD


//User Features
orderRouter.post('/userOrders',authUser,userOrders);
export default orderRouter;