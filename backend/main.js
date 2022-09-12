const express = require("express");
const app = express();

app.listen(3000, (error)=>{
    if (error){
        console.log(error);
        process.exit(0);
    } else {
        console.log("Server started, listening on port 3000");
    }
});
