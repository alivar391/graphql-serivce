import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAlbum, UpdateAlbum } from 'src/graphql';
import { AlbumsService } from '../services/albums.service';

@Resolver()
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query('getAlbums')
  getAlbums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }

  @Query('getAlbum')
  getAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.getAlbum(id, token);
  }

  @Mutation('createAlbum')
  createAlbum(
    @Args('album') album: CreateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.create(album, token);
  }

  @Mutation('deleteAlbum')
  deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.delete(id, token);
  }

  @Mutation('updateAlbum')
  updateAlbum(
    @Args('id') id: string,
    @Args('album') album: UpdateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.update(id, album, token);
  }
}
