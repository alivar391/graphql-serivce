import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBand, UpdateBand } from 'src/graphql';
import { BandsService } from '../services/bands.service';

@Resolver()
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Query('getBands')
  getBands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getBands(limit, offset);
  }

  @Query('getBand')
  getBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.getBand(id, token);
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
