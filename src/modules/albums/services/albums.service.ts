import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateAlbum, UpdateAlbum } from 'src/graphql';

@Injectable()
export class AlbumsService {
  private readonly album: AxiosInstance;
  constructor() {
    this.album = axios.create({
      baseURL: 'http://localhost:3005/v1/albums',
    });
  }

  async create(album: CreateAlbum, token: string) {
    try {
      const sendAlbum = {
        ...album,
        genresIds: album.genres,
        bandsIds: album.bands,
        trackIds: album.tracks,
        artistsIds: album.artists,
      };
      const { data } = await this.album.post('/', sendAlbum, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.album.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, album: UpdateAlbum, token: string) {
    try {
      const sendAlbum = {
        ...album,
        genresIds: album.genres,
        bandsIds: album.bands,
        trackIds: album.tracks,
        artistsIds: album.artists,
      };
      const { data } = await this.album.put(`/${id}`, sendAlbum, {
        headers: { Authorization: token },
      });
      return { ...data, id: data._id };
    } catch (error) {
      console.error(error);
    }
  }

  async getAlbums(limit: number, offset: number) {
    try {
      const { data } = await this.album.get(`?limit=${limit}&offset=${offset}`);
      data.items = data.items.map((item) => {
        return { ...item, id: item._id };
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getAlbum(id: string) {
    try {
      const { data } = await this.album.get(`/${id}`);
      return {
        ...data,
        id: data._id,
      };
    } catch (error) {
      console.error(error);
    }
  }
}
