const services =  require('./bank.services');
const { banks } = require('../../models');

describe('add all bank details to the database' , () => {
    it('should return successful message when data is added to the database ' ,async () => {
        jest.spyOn(banks , 'destroy').mockResolvedValue({
            truncate: true,
            cascade: true,
        })
        jest.spyOn(banks , 'bulkCreate').mockResolvedValue([{
            bank:'bank name' , 
            branch:'branchname'
        }]);
        expect(await services.loadBankData()).toBe('Data successfully loaded');
    });
    it('should throw error if some internal error', async () => {
        jest.spyOn(banks , 'destroy').mockResolvedValue({
            truncate: true,
            cascade: true,
        })
        jest.spyOn(banks , 'bulkCreate').mockRejectedValue(new Error('Some error!'));
        try {
            await services.loadBankData();
        } catch (err) {
          expect(err.message).toBe('Some error!');
        }
      });
});

describe('get all bank names' ,  ()=>{
    it('should return all bank names' , async ()=>{
        jest.spyOn(banks , 'findAll').mockResolvedValue([{
            "bankName": "THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK"
        }]);
        expect(await services.getBankNames()).toStrictEqual([{
            "bankName": "THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK"
        }]);
    });
    it('should throw error if some internal error', async () => {
        jest.spyOn(banks , 'findAll').mockRejectedValue(new Error('Some error!'));
        try {
            await services.getBankNames();
        } catch (err) {
          expect(err.message).toBe('Some error!');
        }
      });
});

describe('get all branches of a bank' , ()=>{
    it('should return all bracnhes of a particular bank' , async () => {
        jest.spyOn(banks , 'findAll').mockResolvedValue([{
            "id": 357,
            "BRANCH": "RTGS-HO"
        },
        {
            "id": 358,
            "BRANCH": "MARKET YARD BRANCH - AKOLA"
        }]);
        expect(await services.getBankBranches('THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK')).toStrictEqual([{
            "id": 357,
            "BRANCH": "RTGS-HO"
        },
        {
            "id": 358,
            "BRANCH": "MARKET YARD BRANCH - AKOLA"
        }]);
    })
    it('should throw error if some internal error', async () => {
        jest.spyOn(banks , 'findAll').mockRejectedValue(new Error('Some error!'));
        try {
            await services.getBankBranches('THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK');
        } catch (err) {
          expect(err.message).toBe('Some error!');
        }
      });
})