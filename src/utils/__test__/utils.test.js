// @utils
import { getValue } from '../index';

describe('utils test', () => {
    it('should return formatted value', () => {
        const price = {
            amount: '153000',
            currency: 'ARS',
            decimals: 0
        };

        const formattedValue = getValue(price);

        expect(formattedValue).toBe('$ 153.000');
    })
});