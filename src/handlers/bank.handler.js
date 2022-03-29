const services = require('../services/bank.services');

const loadBankData = async (req, res) => {
  try {
    const result = await services.loadBankData();
    res.json(result).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(err.httpCode);
  }
};

module.exports = {
  loadBankData,
};
