import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Login, RegisterUser } from 'src/graphql';

@Injectable()
export class UsersService {
  private readonly user: AxiosInstance;
  constructor() {
    this.user = axios.create({ baseURL: 'http://localhost:3004/v1/users' });
  }
  async create(user: RegisterUser) {
    const { data } = await this.user.post('/register', user);
    return { ...data, id: data._id };
  }
  async findOneById(id: string) {
    const { data } = await this.user.get(`/${id}`);
    return { ...data, id: data._id };
  }
  async login(login: Login) {
    const { data } = await this.user.post(`/login`, login);
    return data;
  }
}
