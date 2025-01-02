import React from 'react'
import "./Body.css"
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discoverWeekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <div className='body_info'>
            <img src={discoverWeekly?.images[0].url} alt='' />
            <div className='body_infoText'>
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discoverWeekly?.description}</p>
            </div>
        </div>
        <hr/>
        <div className='body_songs'>
            <div className='body_icons'>
                <PlayCircleFilledIcon className='body_shuffle'/>
                <FavoriteIcon fontSize='large'/>
                <MoreHorizIcon/>
            </div>
            <div>
                {/* List of Songs */}
                {discoverWeekly?.tracks.items.map(item => (
                    <SongRow track={item.track}/>
                ))}            
            </div>
        </div>
    </div>
  )
}
// Playlist ID - 7bN8zAvwKjMWeiVkXt458ks
export default Body