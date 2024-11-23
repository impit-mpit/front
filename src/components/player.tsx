import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

type PlayerType = {
    url:string|undefined,
    thumb:string|undefined,
    title:string|undefined
}


export const Player =({url,thumb,title}:PlayerType)=>{
    return(
        <MediaPlayer title={title} src={url} load='visible'>

        <MediaProvider > 
       
        </MediaProvider>
            <DefaultVideoLayout thumbnails={thumb} icons={defaultLayoutIcons} />
      </MediaPlayer> 
    )
}