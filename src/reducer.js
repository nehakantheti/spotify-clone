import { act } from "react";

// Initial state of the object in data layer
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    discoverWeekly:null,
    // Remove after developing - authorizes initially
    token:null
    // token:'BQAMeM6mCptA6KEvoDsD-NmBPPYRAo-Unn3MDjxRy0yPea6XOqI1VGFs5en2M48mVEmJ6b33IVtmqYmog9EI1uTh-h_MDG0MlEq9G_rsnFTNa1RzJBLjyBegn6wK98fOkdc0Wb3Lp9obFS9PHzISZhsMfHEDMp6hPYvd7S3PAXqP8Q0mep1fxZOZK6OOpUPY-4GHNUlPvtNh0ESTNBnfgtUsMVpQ'
}

const reducer = (state, action) => {
    console.log(action);

    // Action has 2 attributes : type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user : action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discoverWeekly: action.discoverWeekly
            }

        default : 
            return state;
    }
}

export default reducer;
