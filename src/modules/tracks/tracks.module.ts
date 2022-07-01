import { Module } from '@nestjs/common';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  providers: [TracksResolver, TracksService],
})
export class TracksModule {}
