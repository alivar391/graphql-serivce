import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateArtist, UpdateArtist } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private readonly artist: AxiosInstance;
  constructor() {
    this.artist = axios.create({
      baseURL: 'http://localhost:3002/v1/artists',
    });
  }

  async create(artist: CreateArtist, token: string) {
    try {
      const { data } = await this.artist.post('/', artist, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.artist.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, artist: UpdateArtist, token: string) {
    try {
      const { data } = await this.artist.put(`/${id}`, artist, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getArtists(limit: number, offset: number) {
    try {
      const { data } = await this.artist.get(
        `?limit=${limit}&offset=${offset}`,
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getArtist(id: string, token: string) {
    try {
      const { data } = await this.artist.get(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
