import React, { Fragment , useState } from 'react'
import PropTypes from 'prop-types';

function AddCategorias({ setCategorias }) {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubMit = (e)=>{
        // e.preventDefault(); previene el refresh por defecto del navegador, metodo antiguo.
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            // se llama de esta forma porque es un callback
            // esto es util ya que el callback maneja el estado anterior, ya que no se tiene acceso al valor de las categorias
            setCategorias( categorias =>[inputValue,...categorias]);
            setInputValue('');
        }
    }

    return (
        <Fragment>
            <form onSubmit={ handleSubMit }>
                <input type="text" value={inputValue} onChange= { handleInputChange } />
            </form>
        </Fragment>
    )
}
AddCategorias.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
export default AddCategorias
