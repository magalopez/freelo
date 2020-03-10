let Vimeo = require('vimeo').Vimeo;
const client_id = "de82cc272cb2280d16c31dedf01040e591d64682";
const client_secret = "qqIttG6DZJmvDmhDe0gSvpdQVbKL75zdqm1PNYH84bv7iU8qPa7zIZl41zOTzU+UCe0TxSF/2kfkNWdzqlQKpaLdYj66H4pNRsryX/zstk6k7IuLHPpoiWlmJE9P2KPM";
const access_token = "65224945227cebb04de4dcb4e76e3266";
let client = new Vimeo(client_id, client_secret, access_token);

export default (video_id) => {
    return client.request({
        method: 'GET',
        path: '/tutorial'
    }, (error, body, status_code, headers) => {
        if(error){console.log(error)};
        console.log('body', body)
        console.log('status_code', status_code)
        console.log('headers', headers)
    })
}