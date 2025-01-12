require('dotenv').config();
const express = require("express");
const mongoose =require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");



const {HoldingModel} =require("./model/HoldingModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrderModel } = require("./model/OrderModel");


const app = express();
app.use(cors());
app.use(bodyparser.json());

const PORT =process.env.PORT || 3002;
const uri =process.env.MONGO_URL;



// app.get("/addHoldings", async(req , res)=>{

//     let tempHolding =[
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//           },
//           {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//           },
//           {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//           },
//           {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//           },
//           {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//           },
//           {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//           },
//           {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//           },
//           {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//           },
//           {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//           },
//           {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//           },
//           {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//           },
//           {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//           },
//           {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//           },
//     ]
//     tempHolding.forEach((item)=>{
//         let newHolding = new HoldingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("done");
// });



    

// app.get("/addPosition", async(req , res)=>{
//     let tempPosition = [
//         {
//             product: "CNC",
//             name: "EVERYDAY",
//             qty: 2,
//             avg: 316.75,
//             price: 312.65,
//             net: "+0.04%",
//             day: "-1.35%",
//             isLoss: true,
//           },
//           {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//           },
//     ]
//     tempPosition.forEach((item)=>{
//         let newPosition = new PositionsModel({
//             product:item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss:item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Done");
// });


// app.get("/addOrder", async(req ,res)=>{
//      let newOrder = [
//         {
//             name: "INFY",
//             price: 1555.45,
//             percent: "-1.60%",
//             isDown: true,
//           },
//           {
//             name: "ONGC",
//             price: 116.8,
//             percent: "-0.09%",
//             isDown: true,
//           },
//           {
//             name: "TCS",
//             price: 3194.8,
//             percent: "-0.25%",
//             isDown: true,
//           },
//           {
//             name: "KPITTECH",
//             price: 266.45,
//             percent: "3.54%",
//             isDown: false,
//           },
//           {
//             name: "QUICKHEAL",
//             price: 308.55,
//             percent: "-0.15%",
//             isDown: true,
//           },
//           {
//             name: "WIPRO",
//             price: 577.75,
//             percent: "0.32%",
//             isDown: false,
//           },
//           {
//             name: "M&M",
//             price: 779.8,
//             percent: "-0.01%",
//             isDown: true,
//           },
//           {
//             name: "RELIANCE",
//             price: 2112.4,
//             percent: "1.44%",
//             isDown: false,
//           },
//           {
//             name: "HUL",
//             price: 512.4,
//             percent: "1.04%",
//             isDown: false,
//           },
//      ]

//      newOrder.forEach((item)=>{
//         let newOrderModel = new OrderModel({
//             name: item.name,
//              qty:item.qty,
//              price:item.price,
//             mode:item.mode,
   
//         });
//         newOrderModel.save();
//      });
//      res.send("order save");
// });


app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});
app.get("/allPosition", async(req, res)=>{
    let allPosition = await PositionsModel.find({});
    res.json(allPosition);
});

app.post("/newOrder", async(req, res)=>{
    let newOrder = new OrderModel({
        name: req.body.name,
       qty:req.body.qty,
       price: req.body.price,
       mode:req.body.mode,   
    });
    newOrder.save();
    res.send("order save")
});

app.listen(PORT, ()=>{
    console.log("App is Listing");
    mongoose.connect(uri);
    console.log("Database Connect");
});