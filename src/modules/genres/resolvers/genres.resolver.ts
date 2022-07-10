import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenre, UpdateGenre } from 'src/graphql';
import { GenresService } from '../services/genres.service';

@Resolver()
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}
  @Query('genres')
  genres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.genresService.getGenres(limit, offset);
  }

  @Query('genre')
  genre(@Args('id') id: string) {
    return this.genresService.getGenre(id);
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
