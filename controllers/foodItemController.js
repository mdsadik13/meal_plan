const Fooditem =require('../models/foodItem')
const Promise = require('../middlewares/promise');


exports.addfoodItem=Promise(async (req , res, next) =>{
    
    const {name , calories, protein , carb, fat , acceptedUnits , itemWeight} =req.body

    const foodItem = await Fooditem.create({
        name,
        calories,
        protein,
        carb,
        fat,
        acceptedUnits,
        itemWeight
    })



    res.status(200).json({
        success: true ,
        foodItem
    });
 

})



exports.searchFoodItem=Promise(async (req , res, next) =>{
    
    // const {calories} =req.body
    const highcalory=300;
    const lowcalory=100;
    const FoodItem=await Fooditem.find();
    var ans=[];
    function checkProtein(protein,calory){
        var pr=4*protein;
        if(pr<=(calory*0.3)&&pr>=(calory*0.2)){
            return true;
        }
        else{
            return false;
        }
    }
    for (var i=0; i < FoodItem.length; i++) {
        if(FoodItem[i].calories<highcalory&&FoodItem[i].calories>lowcalory){
            if(checkProtein(FoodItem[i].protein,FoodItem[i].calories)){
            ans.push(FoodItem[i]);
            }
        }
     }


//    res.status(200).json({
//     success:true,
//     food
//    })
   res.send(ans);
 

})

