"use strict"
const joinCategory = require('../models/joinCategory.js');

exports.addJoinCategory = (mCat,subCat) => {
  new joinCategory({mainCatId: mCat,subCatId: sCat}).save();
};
