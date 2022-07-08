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
  @Query('user')
  user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
  @Query('jwt')
  jwt(@Args('login') login: Login) {
    return this.usersService.login(login);
  }
}
