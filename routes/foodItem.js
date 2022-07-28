const express= require('express');
const router = express.Router();

const{addfoodItem,searchFoodItem}= require('../controllers/foodItemController')

router.route("/addfooditem").post(addfoodItem);
router.route("/searchFoodItem").post(searchFoodItem);



module.exports=router