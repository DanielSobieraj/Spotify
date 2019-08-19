import request from './../request'

export default {
    // Get an Album
    getAlbum(id) {
        return request.get(`albums/${id}`);
    },


    // Get Several Albums
    getAlbums(ids, market) {
        return request.get(`albums`, {
            ids,
            market
        });
    },

    // 	Get an Album's Tracks
    getAlbumTracks(id, offset = 0, limit = 50, market) {
        return request.get(`albums/${id}/tracks`, {
            params: {
                limit,
                offset,
                market
            }
        });
    }
};