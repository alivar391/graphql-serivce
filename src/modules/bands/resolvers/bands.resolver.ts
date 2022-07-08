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
import { BandsService, IBand } from '../services/bands.service';
import { GenresService } from '../../genres/services/genres.service';

// interface Genre {
//   _id: string;
//   name: string;
//   description: string;
//   country: string;
//   year: string;
// }

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Query('getBands')
  getBands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getBands(limit, offset);
  }

  @Query('getBand')
  async getBand(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }

  @ResolveField()
  genres(@Parent() getBand: IBand) {
    const { genresIds } = getBand;
    return genresIds.map(async (genreId) => {
      return this.genresService.getGenre(genreId);
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
