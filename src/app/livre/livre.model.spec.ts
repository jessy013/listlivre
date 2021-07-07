import { livre } from './livre.model';

describe('Livre', () => {
  it('should create an instance', () => {
    expect(new livre('','','')).toBeTruthy();
  });
});
