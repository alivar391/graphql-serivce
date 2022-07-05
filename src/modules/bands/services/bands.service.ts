import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateBand, UpdateBand } from 'src/graphql';

@Injectable()
export class BandsService {
  private readonly band: AxiosInstance;
  constructor() {
    this.band = axios.create({
      baseURL: 'http://localhost:3003/v1/bands',
    });
  }

  async create(band: CreateBand, token: string) {
    try {
      const { data } = await this.band.post('/', band, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.band.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, band: UpdateBand, token: string) {
    try {
      const { data } = await this.band.put(`/${id}`, band, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBands(limit: number, offset: number) {
    try {
      const { data } = await this.band.get(`?limit=${limit}&offset=${offset}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBand(id: string, token: string) {
    try {
      const { data } = await this.band.get(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
