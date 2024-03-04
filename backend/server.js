require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
  //listen request
  app.listen(process.env.PORT, () => {
    console.log(" connected on db %  listening on port", process.env.PORT);
  });
});
