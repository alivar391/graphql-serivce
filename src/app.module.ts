import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './modules/artists/artists.module';
import { HelloResolver } from './modules/artists/resolvers/artists.resolver';
import { TracksModule } from './modules/tracks/tracks.module';
import { BandsModule } from './modules/bands/bands.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { GenresModule } from './modules/genres/genres.module';
import { UsersModule } from './modules/users/users.module';
import { AlbumsModule } from './modules/albums/albums.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      // playground: false,
    }),
    ArtistsModule,
    TracksModule,
    BandsModule,
    FavouritesModule,
    GenresModule,
    UsersModule,
    AlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService, HelloResolver],
})
export class AppModule {}
