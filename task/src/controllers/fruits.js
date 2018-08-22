const path = require('path');
const fruits = require('./../model/index');

exports.get = (req, res) => {
  res.render('fruits', { fruits });
};


