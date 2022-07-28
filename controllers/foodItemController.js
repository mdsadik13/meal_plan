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
    
    const {caloryReq} =req.body
    
    const FoodItem=await Fooditem.find();

    function checkProtein(protein,calory){
        var pr=4*protein;
        if(pr<=(calory*0.3)&&pr>=(calory*0.2)){
            return true;
        }
        else{
            return false;
        }
    }
    async function check(temp){
        for(var i=0;i<ans.length;i++){
            if(ans[i].length==temp.length){
                for(var j=0;j<temp.length;j++){
                    if(ans[i][j]==temp[j]){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    var ans=[];
    var lo=caloryReq-100;
    var hi=caloryReq+100;
    var temp=[];
   async function search(temp,cal,ind){
       
        if(temp.length>5){
            return 0;
        }
        if(ind>=FoodItem.length){
            return 0;
        }
        if((cal<hi)&&(cal>lo)){
            if((temp.length>=2)&&(await check(temp))){
            var pr=0;
            for(var j=0;j<temp.length;j++){
                pr+=temp[j].protein;
            }
            if(await checkProtein(pr,cal)){
            var arr=[];
            for(var i=0;i<temp.length;i++){
                arr.push(temp[i]);
            }
            ans.push(arr);
        }
        }
        }
        if(cal>hi){
            return 0;
        }
            
            
             await search(temp,cal,ind+1);
             temp.push(FoodItem[ind]);
             cal+=FoodItem[ind].calories;
           await search(temp,cal,ind+1);
           temp.pop();
           cal-=FoodItem[ind].calories;
           
    }
    await search(temp,0,0);
        
        res.send(ans);
    
})

