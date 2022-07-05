import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateTrack, UpdateTrack } from 'src/graphql';

@Injectable()
export class TracksService {
  private readonly track: AxiosInstance;
  constructor() {
    this.track = axios.create({
      baseURL: 'http://localhost:3006/v1/tracks',
    });
  }

  async create(track: CreateTrack, token: string) {
    try {
      const { data } = await this.track.post('/', track, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.track.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, track: UpdateTrack, token: string) {
    try {
      const { data } = await this.track.put(`/${id}`, track, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getTracks(limit: number, offset: number) {
    try {
      const { data } = await this.track.get(`?limit=${limit}&offset=${offset}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getTrack(id: string, token: string) {
    try {
      const { data } = await this.track.get(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
