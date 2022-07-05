import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTrack, UpdateTrack } from 'src/graphql';
import { TracksService } from '../services/tracks.service';

@Resolver()
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}
  @Query('getTracks')
  getTracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getTracks(limit, offset);
  }

  @Query('getTrack')
  getTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.getTrack(id, token);
  }

  @Mutation('createTrack')
  createTrack(
    @Args('track') track: CreateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.create(track, token);
  }

  @Mutation('deleteTrack')
  deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.delete(id, token);
  }

  @Mutation('updateTrack')
  updateTrack(
    @Args('id') id: string,
    @Args('track') track: UpdateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.update(id, track, token);
  }
}
