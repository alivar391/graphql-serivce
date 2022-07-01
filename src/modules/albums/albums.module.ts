import { Module } from '@nestjs/common';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { AlbumsService } from './services/albums.service';

@Module({
  providers: [AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}
