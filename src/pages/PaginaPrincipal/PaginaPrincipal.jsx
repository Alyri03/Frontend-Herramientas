import React from 'react';
import Carrusel from './components/Carrusel';
import ModulosDeSalud from './components/ModulosDeSalud';
import EspecialidadesCarrusel from './components/EspecialidadesCarrusel';
import PresentacionServicios from './components/PresentacionServicios';
import Aseguradoras from '../../components/Aseguradoras';
import Preefooter from '../../components/Preefooter';
const PaginaPrincipal = () => {
    return (
        <>
            <Carrusel />
            <ModulosDeSalud />
            <EspecialidadesCarrusel />
            <PresentacionServicios />
            <Aseguradoras />
            <Preefooter />
        </>
    );
};

export default PaginaPrincipal;
