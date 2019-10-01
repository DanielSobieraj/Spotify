import request from "./request";

export default {
    search(q = this.search,
           type = 'album,artist,playlist,track',
           offset,
           limit = 6,
           market,
           include_external) {
        return request
            .get(`search`, {
                params: {
                    q,
                    type,
                    limit,
                    offset,
                    market,
                    include_external,
                }
            })
            .then(response => {
                    let responseTracks, responseArtists, responseAlbums;
                    responseTracks = response.data.tracks.items;
                    responseArtists = response.data.artists.items;
                    responseAlbums = response.data.albums.items;
                    const searchQuery = [responseTracks, responseArtists, responseAlbums];
                    return searchQuery
                }
            )
            .catch(err => {
                let responseError;
                responseError = err.response.data.error.message;
                return responseError
            })
    },
};