const handlers = require('./bank.handler');
const services = require('../services/bank.services');

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('load bank data' , ()=>{
    it('should send 200 response status if bank data is loaded' , async()=>{
        jest.spyOn(services, 'loadBankData').mockResolvedValue('Data successfully loaded');
        const res = mockResponse();
        await handlers.loadBankData('', res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith('Data successfully loaded');
    });
    it('should send error response status if some error is thrown', async () => {
        jest.spyOn(services, 'loadBankData').mockRejectedValue(new Error('Some error!'));
        const res = mockResponse();
        await handlers.loadBankData('', res);
        expect(res.send).toHaveBeenCalledWith('Some error!');
    });
})