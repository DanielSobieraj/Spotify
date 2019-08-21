/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */


let request = require('request'); // "Request" library

let client_id = '30232b8ef5334fd1b7e8cf579b5debcb'; // Your client id
let client_secret = '3a09569c559e412ba641c3018915c3de'; // Your secret

// your application requests authorization
let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
},
form: {
    grant_type: 'client_credentials'
},
    json: true
};

request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        let token = body.access_token;
        let options = {
            url: 'https://api.spotify.com/v1/users/11143584604?si=wQVCeE3MRbSzHoZxV2WIxg',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        };
        request.get(options, function (error, response, body) {
            console.log(body);
        });
        appToken = options.headers;
        console.log(appToken);
    }
});
