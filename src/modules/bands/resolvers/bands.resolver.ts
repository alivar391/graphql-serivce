import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateBand, UpdateBand, Band } from 'src/graphql';
import { BandsService } from '../services/bands.service';
import { GenresService } from '../../genres/services/genres.service';

@Resolver()
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
  getBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.getBand(id, token);
  }

  @ResolveField('genres')
  async genres(@Parent() Band: Band) {
    console.log('aaa');
    // const { id } = getBand;
    // console.log('genres', id);
    // return this.genresService.getGenres({ _id: id });
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
