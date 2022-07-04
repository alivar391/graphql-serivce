import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenre, UpdateGenre } from 'src/graphql';
import { GenresService } from '../services/genres.service';

@Resolver()
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}
  @Query('getGenres')
  getGenres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.genresService.getGenres(limit, offset);
  }

  @Mutation('createGenre')
  createGenre(
    @Args('genre') genre: CreateGenre,
    @Context('token') token: string,
  ) {
    return this.genresService.create(genre, token);
  }

  @Mutation('deleteGenre')
  deleteGenre(@Args('id') id: string, @Context('token') token: string) {
    return this.genresService.delete(id, token);
  }

  @Mutation('updateGenre')
  updateGenre(
    @Args('id') id: string,
    @Args('genre') genre: UpdateGenre,
    @Context('token') token: string,
  ) {
    return this.genresService.update(id, genre, token);
  }
}
