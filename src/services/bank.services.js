const bankDetails = require('../fixtures/bankDetails.json');
const sequelize = require('sequelize');
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
  const bankNames = await banks.findAll({
    attributes: [
      ['BANK' , 'bankName']
    ],
    group: ['BANK']
  })
  return bankNames;
}

const getBankBranches = async (bankName) => {
  const branches = await banks.findAll({
    where: {
      BANK : bankName
    },
    attributes: [
      'id',
      'BRANCH'
    ]
  })
  return branches;
}

module.exports = {
  loadBankData,
  getBankNames,
  getBankBranches
};
