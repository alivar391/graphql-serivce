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
      const sendTrack = {
        ...track,
        genresIds: track.genres,
        bandsIds: track.bands,
        artistIds: track.artists,
      };
      const { data } = await this.track.post('/', sendTrack, {
        headers: { Authorization: token },
      });
      return {
        ...data,
        id: data._id,
        genres: data.genresIds,
        bands: data.bandsIds,
        artist: data.artistsIds,
      };
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
      const sendTrack = {
        ...track,
        genresIds: track.genres,
        bandsIds: track.bands,
        artistIds: track.artists,
      };
      const { data } = await this.track.put(`/${id}`, track, {
        headers: { Authorization: token },
      });
      return {
        ...data,
        id: data._id,
        genres: data.genresIds,
        bands: data.bandsIds,
        artist: data.artistsIds,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async getTracks(limit: number, offset: number) {
    try {
      const { data } = await this.track.get(`?limit=${limit}&offset=${offset}`);
      data.items = data.items.map((item) => {
        return { ...item, id: item._id };
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getTrack(id: string) {
    try {
      const { data } = await this.track.get(`/${id}`);
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }
}
