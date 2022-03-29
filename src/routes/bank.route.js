const express = require('express');
const handler = require('../handlers/bank.handler');

const bankRouter = express.Router();
bankRouter.post('/bankData', handler.loadBankData);
bankRouter.get('/bank-name', handler.getBankNames);
bankRouter.get('/:bankName/branches', handler.getBankBranches);
bankRouter.get('/:bankName/branch/:branchName/details', handler.getBankBranchDetails);
bankRouter.get('/ifsc/:ifscCode/details', handler.getBankDetailsByIfscCode);

module.exports = {
  bankRouter,
};


