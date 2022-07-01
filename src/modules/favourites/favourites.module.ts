import { Module } from '@nestjs/common';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { FavouritesService } from './services/favourites.service';

@Module({
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
