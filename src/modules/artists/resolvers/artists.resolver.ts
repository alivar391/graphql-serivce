import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateArtist, UpdateArtist } from 'src/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistService: ArtistsService) {}
  @Query('getArtists')
  getArtists(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistService.getArtists(limit, offset);
  }

  @Mutation('createArtist')
  createArtist(
    @Args('artist') artist: CreateArtist,
    @Context('token') token: string,
  ) {
    return this.artistService.create(artist, token);
  }

  @Mutation('deleteArtist')
  deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistService.delete(id, token);
  }

  @Mutation('updateArtist')
  updateArtist(
    @Args('id') id: string,
    @Args('artist') artist: UpdateArtist,
    @Context('token') token: string,
  ) {
    return this.artistService.update(id, artist, token);
  }
}
