import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateArtist, UpdateArtist } from 'src/graphql';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}
  @Query('artists')
  artists(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistService.getArtists(limit, offset);
  }

  @Query('artist')
  artist(@Args('id') id: string) {
    return this.artistService.getArtist(id);
  }

  @ResolveField()
  bands(@Parent() artist) {
    const { bandsIds } = artist;
    return bandsIds.map(async (bandId) => {
      return this.bandsService.getBand(bandId);
    });
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
