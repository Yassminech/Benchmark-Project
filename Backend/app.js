const express =require("express");
const ConnectToDB = require("./config/ConnectToDB");
require("dotenv").config();



//Connection To DB
ConnectToDB();

//Init app
const app = express ();


//Middlewares
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/UsersRoute"));





//Running the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
));