import { Module } from '@nestjs/common';
import { GenresResolver } from './resolvers/genres.resolver';
import { GenresService } from './services/genres.service';

@Module({
  providers: [GenresResolver, GenresService],
})
export class GenresModule {}
