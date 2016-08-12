"use strict"
const joinCategory = require('../models/joinCategory.js');

exports.addJoinCategory = (mCat,sCat) => {
  new joinCategory({mainCatId: mCat,subCatId: sCat}).save();
};
