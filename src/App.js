import React, { useState } from 'react';
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0  auto;
`;
const ContenedorFormulariro = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

const App = () => {

    const [resumen, guardarResumen] = useState( {
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan: '',
        }
    } )
    const [cargando, guardarCargando] = useState( false );

    const { cotizacion, datos } = resumen;

    return (
        <Contenedor>
            <Header titulo='Cotizador de seguros'/>
            <ContenedorFormulariro>
                <Formulario
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />
                {cargando ? <Spiner/> : null}

                <Resumen
                    datos={datos}
                />

                {!cargando ? ( <Resultado
                    cotizacion={cotizacion}
                /> ) : null}

            </ContenedorFormulariro>
        </Contenedor>
    );
};

export default App;
