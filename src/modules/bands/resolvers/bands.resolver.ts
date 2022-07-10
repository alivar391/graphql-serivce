import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateBand, UpdateBand } from 'src/graphql';
import { BandsService } from '../services/bands.service';
import { GenresService } from '../../genres/services/genres.service';
import { ArtistsService } from 'src/modules/artists/services/artists.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
  ) {}

  @Query('bands')
  bands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getBands(limit, offset);
  }

  @Query('band')
  async band(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }

  @ResolveField()
  genres(@Parent() band) {
    const { genresIds } = band;
    return genresIds.map(async (genreId) => {
      return this.genresService.getGenre(genreId);
    });
  }

  @ResolveField()
  members(@Parent() band) {
    const { members } = band;
    return members.map(async (member) => {
      const artist = await this.artistsService.getArtist(member.artist);
      return { ...member, artist };
    });
  }

  @Mutation('createBand')
  createBand(@Args('band') band: CreateBand, @Context('token') token: string) {
    return this.bandsService.create(band, token);
  }

  @Mutation('deleteBand')
  deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.delete(id, token);
  }

  @Mutation('updateBand')
  updateBand(
    @Args('id') id: string,
    @Args('band') band: UpdateBand,
    @Context('token') token: string,
  ) {
    return this.bandsService.update(id, band, token);
  }
}
