import React from 'react';
import styled from "@emotion/styled";
import {primerMayuscula} from "../helper";
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
  background-color: #00838F;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  color: white;
`;

const Resumen = ({datos}) => {
    const {marca,year,plan} =datos;
    //No se muestra el componente si vienen vacios
    if(marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacon</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año: {primerMayuscula(year)}</li>
            </ul>
        </ContenedorResumen>


    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;
