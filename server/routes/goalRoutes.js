"use strict"
const express     = require('express')
    , router      = express.Router()
    , expenseUtil = require('../util/expenseUtil.js')
    , tokenUtil   = require('../util/tokenUtil.js')
    , goalUtil    = require('../util/goalUtil.js')
    , subCatUtil  = require('../util/subCategoryUtil.js')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /goals received!');
  next();
});

// TODO - choose correct endpoint name and structure response correctly
//get sub category totals for specific userID
router.get('/', (req,res,next) => {
  let result = [];
  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);

  expenseUtil.getExpensesFromDB({id: userID}).then((expenses)=>{
    goalUtil.getUserGoals({id: userID}).then((userGoals) => {
      subCatUtil.getAllSubCats().then((sCats) => {

        var catArr = []
        sCats.forEach((sCat)=>{
          var catObj = {}
          var sum = 0;
          expenses.forEach((expObj) => {
            if(expObj.categoryId === sCat[0]){
              sum += expObj.amount;
            }
          });

          catObj['id'] = sCat[0];
          catObj['category'] = sCat[1];
          catObj['currAmount'] = sum;
          catObj['goalAmount'] = userGoals[sCat[0]];
          catArr.push(catObj);
        });
        res.status(201).send(catArr)

      });
    });
  });
});

//Post upated goals for specific user
router.post('/updateGoals', (req ,res, next) => {

  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);

  if(req.body.goals){
    goalUtil.updateUserGoalsToDB(req.body.goals,userID);
  }
  res.status(201).send()
});

module.exports = router;
