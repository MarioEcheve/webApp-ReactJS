import React, { Fragment , useState } from 'react';
import  AddCategorias  from './AddCategorias'
import GridGif from './GridGif';


const GifExpertApp = ()=>{
    const [categorias, setCategorias] = useState(['hunter x ']);
    // handle = encargado de 
    const handleAdd = ()=> {
        setCategorias([...categorias,'HUNTER X']);
    }
    return(
        <Fragment>
            <h1>GifExpertApp</h1>
            <hr/>
            <AddCategorias setCategorias= { setCategorias } />
            <ol>
                {
                    categorias.map(
                        categoria=>{
                            return  <GridGif key={ categoria } categoria={ categoria }/>          
                        }
                    )
                }
            </ol>
        </Fragment>
    )
}
export default GifExpertApp;