import request from "@/api/spotify/request";

export default {
    // Get a Track
    getTrack(id, market) {
        return request.get(`tracks/${id}`, market);
    },

    // Get Several Tracks
    getTracks() {
        return request.get(`tracks/`);
    }
}