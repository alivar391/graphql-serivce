import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateGenre, UpdateGenre } from 'src/graphql';

@Injectable()
export class GenresService {
  private readonly genre: AxiosInstance;
  constructor() {
    this.genre = axios.create({
      baseURL: 'http://localhost:3001/v1/genres',
    });
  }

  async create(genre: CreateGenre, token: string) {
    try {
      const { data } = await this.genre.post('/', genre, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.genre.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, genre: UpdateGenre, token: string) {
    try {
      const { data } = await this.genre.put(`/${id}`, genre, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }

  async getGenres(limit: number, offset: number) {
    try {
      const { data } = await this.genre.get(`?limit=${limit}&offset=${offset}`);
      data.items = data.items.map((item) => {
        return { ...item, id: item._id };
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getGenre(id: string) {
    try {
      const { data } = await this.genre.get(`/${id}`);
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }
}
