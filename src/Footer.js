import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid2, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <img className='footer_albumLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Khone_Phapheng_Falls%2C_Si_Phan_Don%2C_Laos%2C_widest_waterfall_in_the_world.jpg/1920px-Khone_Phapheng_Falls%2C_Si_Phan_Don%2C_Laos%2C_widest_waterfall_in_the_world.jpg' alt=''/>
            <div className='footer_songInfo'>
                <h4> Yeah! </h4>
                <p> Working </p>
            </div>
        </div>
        <div className='footer_center'>
            <ShuffleIcon className='footer_green'/>
            <SkipPreviousIcon className='footer_icon'/>
            <PlayCircleOutlineIcon fontSize='large' className='footer_green'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
        </div>
        <div className='footer_right'>
            <Grid2 container spacing={2}>
                <Grid2 item>
                    <PlaylistPlayIcon/>
                </Grid2>
                <Grid2 item>
                    <VolumeDownIcon/>
                </Grid2>
                <Grid2 item xs>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Large"
                        valueLabelDisplay="auto"
                        sx={{ width: 125 }}
                    />
                </Grid2>
            </Grid2>
        </div>
    </div>
  )
}

export default Footer