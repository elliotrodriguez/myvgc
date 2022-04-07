import mockAxios from 'axios';

import {getApiInstance} from './my-vgc-api';
import {RAWG_API_BASE_URL, RAWG_API_KEY} from '@env';

describe('Base API tests', () => {
  describe('Instantiation', () => {
    let mockUrlPath;
    let mockApiEndpoint;

    beforeEach(() => {
      mockUrlPath = 'mock/things';
      mockApiEndpoint = `${RAWG_API_BASE_URL}/${mockUrlPath}?key=${RAWG_API_KEY}`;
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return an Axios instance without params if none are provided', () => {
      return getApiInstance(mockUrlPath).then(res => {
        expect(mockAxios.create).toHaveBeenCalledWith({
          baseURL: mockApiEndpoint,
        });
      });
    });

    it('should return an Axios instance with params argument as params', () => {
      const mockUrlParams = '&foo=bar';
      return getApiInstance(mockUrlPath, mockUrlParams).then(res => {
        expect(mockAxios.create).toHaveBeenCalledWith({
          baseURL: `${mockApiEndpoint}${mockUrlParams}`,
        });
      });
    });
  });
});
