// clicking login takes you to this endpoint and authorizes
export const authEndPoint = "https://accounts.spotify.com/authorize";
// then brings back to this localhost
const redirectUri = "http://localhost:3000/";

const clientId = "97fc01704cc845569fa41f7f463f30bc";

// NO delete operation allowed, only read, modify and update are allowed
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;
    },{});
}
// Use `%20` to encode spaces between scopes
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;