import React from 'react';
import FormList from '../FormList';

const lista = () => {
    let array = ['Gina', 'Pina', 'Maria', 'Minu', 'Peppe', 'Ciccio'];

    return <>
        <FormList listaProps={array} />
    </>
}
export default lista;