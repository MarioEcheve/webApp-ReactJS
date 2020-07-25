import React, { Fragment } from 'react'

function GridItem( { id , title, url } ) {
    console.log(id , title, url);
    return (
        <Fragment>
          <div>
            <img src={url} alt={title} />
            <p> { title}</p>
          </div>
        </Fragment>
    )
}

export default GridItem;
