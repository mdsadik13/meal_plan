const User=require('../models/user')
const Promise = require('../middlewares/promise');


exports.createUser = Promise(async(req,res)=>{
    const {name , calorieRequirement , mealPlan} = req.body

    const user = await User.create({
        name,
        calorieRequirement,
        mealPlan

    })

    
    res.status(200).json({
        success: true ,
        user
    });

});

exports.updateMealPlan =Promise(async (req , res, next) =>{

    const user= await User.findById(req.params.id)

    if(!user){
        return ;
    }

    user.mealPlan= req.body.mealPlan;
    
    await user.save()


    res.status(200).json({
        success: true ,
        user
    });
 

})
