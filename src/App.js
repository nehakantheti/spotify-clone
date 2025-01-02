import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebAPi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebAPi();

function App() {
  // Using Data layer to dispatch(push) and listen(fetch) the props
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash="";

      const _token = hash.access_token;
      
      console.log('I HAVE A TOKEN - BEFORE ONE >>> : ', _token);

      if(_token){
        // setToken(_token);
        dispatch({
          type:'SET_TOKEN',
          token:_token
        });

        spotify.setAccessToken(_token);


        // Returns user information
        spotify.getMe().then(user => {
          // console.log('USERRRRRR', user);

          dispatch({
            type : 'SET_USER',
            user : user
          })
        })

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists
          });
        });

        spotify.getPlaylist('7bN8zAvwKjMWeiVkXt458k').then(response => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discoverWeekly: response
          })
        )

      }

      // console.log('I HAVE A TOKEN >>> : ', token);
  }, []);

  // console.log('USERRRRRR', user);
  // console.log('TOKENNNNNNN', token);



  // refreshes everytime any item in [] changes, if it is empty, loads only once.

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
