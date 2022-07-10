import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ArtistsModule } from './modules/artists/artists.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { BandsModule } from './modules/bands/bands.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { GenresModule } from './modules/genres/genres.module';
import { UsersModule } from './modules/users/users.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => {
        const token = req.headers.authorization || '';
        return { token };
      },
      playground: true,
      driver: ApolloDriver,
    }),
    ArtistsModule,
    TracksModule,
    BandsModule,
    FavouritesModule,
    GenresModule,
    UsersModule,
    AlbumsModule,
  ],
})
export class AppModule {}
