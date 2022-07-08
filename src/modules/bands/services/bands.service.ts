import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Band, CreateBand, UpdateBand } from 'src/graphql';

// export interface IBand {
//   _id: string;
//   name: string;
//   origin: string;
//   membersId: IMember[];
//   website: string;
//   genresIds: string[];
// }

// export interface IMember {
//   artist: string;
//   instrument: string;
//   years: string;
// }

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
      const sendBand = { ...band, genresIds: band.genres };
      const { data } = await this.band.post('/', sendBand, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id, genres: data.genresIds };
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
      const sendBand = { ...band, genresIds: band.genres };
      const { data } = await this.band.put(`/${id}`, sendBand, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id, genres: data.genresIds };
    } catch (error) {
      console.error(error);
    }
  }

  async getBands(limit: number, offset: number) {
    try {
      const { data } = await this.band.get(`?limit=${limit}&offset=${offset}`);
      data.items = data.items.map((item) => {
        return { ...item, id: item._id };
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBand(id: string) {
    try {
      const { data } = await this.band.get(`/${id}`);
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }
}
