const functions = require("firebase-functions");


// express app and host it on the cloud funtion.
// full backend on the clud function.

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQMylHRWnHC9NQPNoW2kMICniX8zmKeHXrRpy2UqDzlxuQmajGSahkRR7S0OpNmEOKIqfQNKkt1xuLemDVdv3mF001xryy7KP"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command the cloud funtion backend express work 
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/fir-8bfcb/us-central1/api