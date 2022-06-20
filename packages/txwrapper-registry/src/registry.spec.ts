import { createRegistry } from './index';

describe('createRegistry', () => {
	it('Should correctly create a registry', () => {
		expect(createRegistry()).toBe(true);
	});
});
