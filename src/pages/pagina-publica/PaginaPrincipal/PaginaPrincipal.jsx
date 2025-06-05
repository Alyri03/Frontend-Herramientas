import React from 'react';
import Carrusel from '@/pages/pagina-publica/PaginaPrincipal/components/Carrusel';
import ModulosDeSalud from '@/pages/pagina-publica/PaginaPrincipal/components/ModulosDeSalud';
import EspecialidadesCarrusel from '@/pages/pagina-publica/PaginaPrincipal/components/EspecialidadesCarrusel';
import PresentacionServicios from '@/pages/pagina-publica/PaginaPrincipal/components/PresentacionServicios';
import Aseguradoras from '@/components/Aseguradoras';
import Preefooter from '@/components/Preefooter';

const PaginaPrincipal = () => {
    console.log("Probando CICD con Jenkins 2")
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
