import request from "@/api/auth/request";

export default {
    getUserAuthUR: function () {
        return request.get('login')
    },
    refreshToken: function (refreshToken) {
        return request.get(`refresh_token?refresh_token=${refreshToken}`)
    }
};