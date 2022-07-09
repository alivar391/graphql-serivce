import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { AddFavourites } from 'src/graphql';

@Injectable()
export class FavouritesService {
  private readonly favourites: AxiosInstance;
  constructor() {
    this.favourites = axios.create({
      baseURL: 'http://localhost:3007/v1/favourites',
    });
  }

  async create(favourites: AddFavourites, token: string) {
    try {
      const { data } = await this.favourites.post('/', favourites, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getFavourites(token: string) {
    try {
      console.log(1);
      const { data } = await this.favourites.get('/', {
        headers: { Authorization: token },
      });
      // data.items = data.items.map((item) => {
      //   return { ...item, id: item._id };
      // });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
