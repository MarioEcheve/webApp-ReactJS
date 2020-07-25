import React, { Fragment, useState , useEffect } from 'react'
import GridItem from './GridItem';

function GridGif({ categoria }) {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        getGifs();
    },[])
    const getGifs = async ()=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=J9NJp16KMDxMd41OnXZZXx8YOncIekHD&q=${categoria}`; 
        const response = await fetch(url);
        const { data } = await response.json();
        const gifs = data.map(
            img=>{
                return {
                    id : img.id,
                    title : img.title,
                    url : img.images?.downsized_medium.url
                }
            }
        );
        setImages(gifs);
    }
    
    return (
        <Fragment>
            <h3> { categoria } </h3>
                {
                    images.map( image =>
                        <GridItem 
                            key={image.id} 
                            {...image}
                        />
                    ) 
                }
        </Fragment>
    )
}

export default GridGif;
