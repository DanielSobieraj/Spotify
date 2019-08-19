import request from "@/api/spotify/request";

export default {
    // Get an Artist
    getArtist(id) {
        return request.get(`artists/${id}`);
    },

    // 	Get Several Artists
    getArtists() {
        return request.get(`artists/`)
    },

    // 	Get an Artist's Albums
    getArtistsAlbums(id, offset = 0, limit = 10, market, include_groups) {
        return request.get(`artists/${id}/albums`, {
            params: {
                offset,
                limit,
                market,
                include_groups
            }
        });
    },

    //  Get an Artist's Top Tracks
    getArtistsTopTracks(id, market) {
        return request.get(`artists/${id}/top-tracks`, {
            params: {
                market
            }
        });
    },
};