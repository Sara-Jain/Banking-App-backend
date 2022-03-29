const services = require('../services/bank.services');

const loadBankData = async (req, res) => {
  try {
    const result = await services.loadBankData();
    res.json(result).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(err.httpCode);
  }
};

const getBankNames = async (req,res) => {
  try {
    const result = await services.getBankNames();
    res.json(result).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(err.httpCode);
  }
}

const getBankBranches = async (req , res) => {
  try {
    const result = await services.getBankBranches(req.params.bankName);
    res.json(result).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(err.httpCode);
  }
}

module.exports = {
  loadBankData,
  getBankNames,
  getBankBranches
};
