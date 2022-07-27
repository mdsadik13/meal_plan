const Meal =require('../models/meal')
const Promise = require('../middlewares/promise');

exports.createMeal=Promise(async (req , res, next) =>{

    const {category , name, foodItems} = req.body

    const meal= await Meal.create({
        category,
        name,
        foodItems
    })

    res.status(200).json({
        success: true ,
        meal
    });
 

})

exports.updateMeal=Promise(async (req , res, next) =>{

    const meal= await Meal.findById(req.params.id)

    if(!meal){
        return ;
    }

    meal.category = req.body.category;
    meal.foodItems= req.body.foodItems
    
    await meal.save()


    res.status(200).json({
        success: true ,
        meal
    });
 

})