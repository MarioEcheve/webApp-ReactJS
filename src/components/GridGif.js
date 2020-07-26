import React, { Fragment, useState , useEffect } from 'react'
import GridItem from './GridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

function GridGif({ categoria }) {
    const { data: images, loading } = useFetchGifs(categoria);
    /*
    const [images, setImages] = useState([]);
    */
    return (
        
        <Fragment>
            <h3 className="animate__animated animate__fadeIn"> { categoria } </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map( image =>
                        <GridItem 
                            key={image.id} 
                            {...image}
                        />
                    ) 
                }
            </div>
        </Fragment>
    )
}
/*

    <div className="card-grid">
                {
                    images.map( image =>
                        <GridItem 
                            key={image.id} 
                            {...image}
                        />
                    ) 
                }
            </div>

*/
export default GridGif;
