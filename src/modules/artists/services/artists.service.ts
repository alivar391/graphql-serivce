import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
// import { Login, RegisterUser } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private readonly user: AxiosInstance;
  constructor() {
    this.user = axios.create({
      baseURL: 'http://localhost:3002/v1/artists',
    });
  }
  // async create(user: RegisterUser) {
  //   const { data } = await this.user.post('/register', user);
  //   return data;
  // }
  // async findOneById(id: string) {
  //   const { data } = await this.user.get(`/${id}`);
  //   return data;
  // }
  async getArtists() {
    const { data } = await this.user.get(`/`);
    return data;
  }
}
