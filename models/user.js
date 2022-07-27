const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength: [40 , 'Name should be under 40 characters']
    },
    calorieRequirement:{
        type:Number,
        required:true,
    },
    mealPlan:[

        {
            date:{
                type:Date,
                required:true,
            },
            meals:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Meal"
            }

        }

    ]


})

module.exports=mongoose.model('User' , userSchema);
