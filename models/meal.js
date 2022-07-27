const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({

    category: {
        type:String,
        required:true,
        enum:{
            values:[
                'Breakfast',
                'Lunch',
                'Snack',
                'Dinner'
            ]
        },
        message:'Please specify the meal Breakfast, Lunch , Snack, Dinner'

        
    },

    name:{
        type:String,
        required:true
    },

    foodItems:[
        {
        item:{
            type:  mongoose.Schema.ObjectId,
            ref: 'Fooditem',
            required:true
        }  
        }
    ]

})

module.exports=mongoose.model('Meal' , mealSchema);