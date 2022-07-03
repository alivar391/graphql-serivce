import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Login, RegisterUser } from 'src/graphql';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation('register')
  register(@Args('user') user: RegisterUser) {
    return this.usersService.create(user);
  }
  @Query('getUser')
  getUser(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
  @Query('login')
  login(@Args('login') login: Login) {
    return this.usersService.login(login);
  }
}
