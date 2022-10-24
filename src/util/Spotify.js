let clientId = '78819ef9231c4b91af5b306d281a0bc8';
let redirectUri = 'http://localhost:3000/';

let accessToken;


const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken;
        }
        
        //check access token
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expireInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenMatch && expireInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expireInMatch[1])
            window.setTimeout(() => accessToken = "", expiresIn * 1000)
            window.history.pushState("Access token", null, "/")
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl
        }
    },

    async search(term) {
        const accessToken = Spotify.getAccessToken();
        return await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(!jsonResponse) {
                return [];
            }
            return jsonResponse.tracks.items?.map(track => ({
                id: track.id,
                name: track.name,
                album: track.album,
                artists: track.artists[0].name,
                uri: track.uri,
            }))
        });
    },

    savePlayList(name, tracksUris) {
        if(!name || !tracksUris.length) {
            return
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch("https://api.spotify.com/v1/me", {headers: headers})
        .then(response => {response.json()})
        .then(jsResponse => { 
            userId = jsResponse.id
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: "POST",
                body: JSON.stringify({name: name})
            }).then(response => {
                response.json()
            }).then(jsResponse => {
                const playListId = jsResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ uris: tracksUris})
                })
            })
        })
    }
}

export default Spotify