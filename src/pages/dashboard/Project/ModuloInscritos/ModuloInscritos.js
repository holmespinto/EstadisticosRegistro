/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import PermisoAlert from '../../components/PermisoAlert/PermisoAlert';
import { PorFechas } from './PorFechas/PorFechas';


const ModuloInscritos = (props) => {
  const permisos = props?.permisos || {};

  return (
    <>
      {(() => {
        switch (props?.tipo) {
          case 'PorFechas':
            return <>
              {permisos?.query?.length === 1 ?
                (<PorFechas
                  accion={props.accion}
                  tipo={props.tipo}
                  permisos={props.permisos}
                /> ): <PermisoAlert />}
            </>
          default:
            return (
              <>{''}</>
            );
        }
      })()}
    </>
  );
};

export default ModuloInscritos;
