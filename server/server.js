import app from "./src/app.js";
import connectDB from "./config/database.js";

connectDB();

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})