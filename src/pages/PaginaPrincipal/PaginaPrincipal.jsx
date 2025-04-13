import React from 'react';
import Carrusel from './components/Carrusel';
import ModulosDeSalud from './components/ModulosDeSalud';
import EspecialidadesCarrusel from './components/EspecialidadesCarrusel';
import PresentacionServicios from './components/PresentacionServicios';
import Aseguradoras from '../../components/Aseguradoras';
const PaginaPrincipal = () => {
    return (
        <>
            <Carrusel />
            <ModulosDeSalud />
            <EspecialidadesCarrusel />
            <PresentacionServicios />
            <Aseguradoras />

        </>
    );
};

export default PaginaPrincipal;
