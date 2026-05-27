import { axiosInstance } from './client';
import {
  StocksResponse,
  StockDetailResponse,
  TopMoversResponse,
} from '@/types/market';

export const marketApi = {
  getStocks: async (search?: string, sector?: string, limit: number = 50) => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (sector) params.append('sector', sector);
    params.append('limit', limit.toString());

    const response = await axiosInstance.get(`/api/market/stocks?${params}`);
    return response.data as StocksResponse;
  },

  getStockDetail: async (symbol: string): Promise<StockDetailResponse> => {
    const response = await axiosInstance.get(`/api/market/stocks/${symbol}`);
    return response.data;
  },

  getTopMovers: async (limit: number = 10): Promise<TopMoversResponse> => {
    const response = await axiosInstance.get(`/api/market/topmovers?limit=${limit}`);
    return response.data;
  },
};
