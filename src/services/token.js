import request from "./request";

export default {
    search(q = this.search, type = 'album,artist,track', offset, limit = 6, market, include_external) {
        return request.get(`search`, {
            params: {
                q,
                type,
                limit,
                offset,
                market,
                include_external,
            }

        })
    },
};