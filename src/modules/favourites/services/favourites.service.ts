import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class FavouritesService {
  private readonly favourites: AxiosInstance;
  constructor() {
    this.favourites = axios.create({
      baseURL: 'http://localhost:3007/v1/favourites',
    });
  }

  async addArtist(id: string, token: string) {
    const { data } = await this.favourites.put(
      '/add',
      { type: 'artists', id },
      { headers: { Authorization: token } },
    );
    return { ...data, id: data._id };
  }

  async addGenre(id: string, token: string) {
    const { data } = await this.favourites.put(
      '/add',
      { type: 'genres', id },
      { headers: { Authorization: token } },
    );
    return { ...data, id: data._id };
  }

  async addTrack(id: string, token: string) {
    const { data } = await this.favourites.put(
      '/add',
      { type: 'tracks', id },
      { headers: { Authorization: token } },
    );
    return { ...data, id: data._id };
  }

  async addBand(id: string, token: string) {
    const { data } = await this.favourites.put(
      '/add',
      { type: 'bands', id },
      { headers: { Authorization: token } },
    );
    return { ...data, id: data._id };
  }

  async getFavourites(token: string) {
    try {
      const { data } = await this.favourites.get('/', {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }
}
