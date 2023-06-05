/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import PermisoAlert from '../../components/PermisoAlert/PermisoAlert';
import { Pregrado } from './Pregrado/Pregrado';


const ModuloMatriculados = (props) => {
  const permisos = props?.permisos || {};

  return (
    <>
      {(() => {
        switch (props?.tipo) {
          case 'Pregrado':
            return <>
              {permisos?.query?.length === 1 ?
                (<Pregrado
                  accion={'ModuloGraduados'}
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

export default ModuloMatriculados;
