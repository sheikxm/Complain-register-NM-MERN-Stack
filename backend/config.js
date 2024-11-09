const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sheikxm:sheik053123@sheikprojects.otin9.mongodb.net/?retryWrites=true&w=majority&appName=sheikprojects")
.then(()=>{
   console.log("connected to mongodb")
})