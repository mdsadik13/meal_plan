const mongoose = require('mongoose')


const connect =()=>{

    
    mongoose.connect("mongodb://127.0.0.1:27017/meal_planner",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`DB GOT CONNECTED`))
    .catch(error =>{
        console.log(`DB CONNECTION ISSUES`);
        console.log(error)
        process.exit(1);
    })


}


module.exports = connect