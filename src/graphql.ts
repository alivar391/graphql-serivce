
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
    instruments?: Nullable<string>;
}

export interface UpdateArtist {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<string>;
}

export interface CreateMember {
    artist?: Nullable<string>;
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
    favouriteArtistIds?: Nullable<Nullable<string>[]>;
    favouriteSongsIds?: Nullable<Nullable<string>[]>;
    favouriteBandsIds?: Nullable<Nullable<string>[]>;
    favouriteGenresIds?: Nullable<Nullable<string>[]>;
}

export interface Login {
    email: string;
    password: string;
}

export interface Album {
    _id: string;
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
    getAlbums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Albums> | Promise<Nullable<Albums>>;
    getAlbum(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    getArtists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artists> | Promise<Nullable<Artists>>;
    getArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    getBands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Bands> | Promise<Nullable<Bands>>;
    getBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Favourites>[]> | Promise<Nullable<Nullable<Favourites>[]>>;
    favourite(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    getGenres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genres> | Promise<Nullable<Genres>>;
    getGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    getTracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Tracks> | Promise<Nullable<Tracks>>;
    getTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    login(login?: Nullable<Login>): Nullable<JWT> | Promise<Nullable<JWT>>;
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
    createGenre(genre?: Nullable<CreateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateGenre(id: string, genre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(track?: Nullable<CreateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateTrack(id: string, track?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    register(user?: Nullable<RegisterUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<string>;
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
    artist?: Nullable<string>;
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

export interface Favouritess {
    items?: Nullable<Nullable<Favourites>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
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
    _id: string;
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
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
    favouriteArtistIds?: Nullable<Nullable<string>[]>;
    favouriteSongsIds?: Nullable<Nullable<string>[]>;
    favouriteBandsIds?: Nullable<Nullable<string>[]>;
    favouriteGenresIds?: Nullable<Nullable<string>[]>;
}

export interface JWT {
    jwt: string;
}

type Nullable<T> = T | null;
