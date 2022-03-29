const bankDetails = require('../fixtures/bankDetails.json');
const { banks } = require('../../models');

const loadBankData = async () => {
  const finalBankData = bankDetails.map((bankData) => {
    // eslint-disable-next-line no-param-reassign
    bankData.STD_CODE = bankData['STD CODE'];
    return bankData;
  });
  await banks.destroy({
    truncate: true,
    cascade: true,
  });
  await banks.bulkCreate(finalBankData);
  return 'Data successfully loaded';
};

const getBankNames = async () => {
  
}

module.exports = {
  loadBankData,
  getBankNames
};
