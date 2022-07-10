
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbum {
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbum {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface CreateMember {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface CreateBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<CreateMember>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<CreateMember>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface AddFavourites {
    type: string;
    id: string;
}

export interface CreateGenre {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface CreateTrack {
    title: string;
    album?: Nullable<string>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrack {
    title?: Nullable<string>;
    album?: Nullable<string>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<string>[]>;
}

export interface RegisterUser {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface Albums {
    items?: Nullable<Nullable<Album>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Albums> | Promise<Nullable<Albums>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artists> | Promise<Nullable<Artists>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Bands> | Promise<Nullable<Bands>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genres> | Promise<Nullable<Genres>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Tracks> | Promise<Nullable<Tracks>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(login?: Nullable<Login>): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(album?: Nullable<CreateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateAlbum(id: string, album?: Nullable<UpdateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(artist?: Nullable<CreateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateArtist(id: string, artist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(band?: Nullable<CreateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    addArtistToFavourites(favourites?: Nullable<AddFavourites>): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addBandToFavourites(favourites?: Nullable<AddFavourites>): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addGenreToFavourites(favourites?: Nullable<AddFavourites>): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addTrackToFavourites(favourites?: Nullable<AddFavourites>): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(genre?: Nullable<CreateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateGenre(id: string, genre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(track?: Nullable<CreateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateTrack(id: string, track?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    register(user?: Nullable<RegisterUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Artists {
    items?: Nullable<Nullable<Artist>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface DeleteResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Bands {
    items?: Nullable<Nullable<Band>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Member {
    artist: Artist;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Genres {
    items?: Nullable<Nullable<Genre>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Tracks {
    items?: Nullable<Nullable<Track>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JWT {
    jwt: string;
}

type Nullable<T> = T | null;
