const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const foodRouter = require("./routes/foodRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectando ao banco de dados MongoDB
mongoose.connect(
  "mongodb+srv://dbUser:dbUserPass@atpweb.f7s52kp.mongodb.net/?retryWrites=true&w=majority&appName=atpweb"
);

app.use("/api", userRouter);
app.use("/api", foodRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
