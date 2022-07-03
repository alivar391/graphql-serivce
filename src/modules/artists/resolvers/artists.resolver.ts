import { Args, Query, Resolver } from '@nestjs/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private readonly usersService: ArtistsService) {}
  @Query('getArtists')
  getArtists() {
    return this.usersService.getArtists();
  }
}
