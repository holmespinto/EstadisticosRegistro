/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import PermisoAlert from '../../components/PermisoAlert/PermisoAlert';
import { Doctorados } from './Doctorados/Doctorados';
import { Especializaciones } from './Especializaciones/Especializaciones';
import { Maestrias } from './Maestrias/Maestrias';
import { Pregrados } from './Pregrados/Pregrados';
import { Tecnologos } from './Tecnologos/Tecnologos';

const ModuloGraduados = (props) => {
  const permisos = props?.permisos || {};

  return (
    <>
      {(() => {
        switch (props?.tipo) {
          case 'Doctorados':
            return <>
              {permisos?.query?.length === 1 ?
                (<Doctorados
                  accion={'ModuloGraduados'}
                  tipo={props.tipo}
                  permisos={props.permisos}
                /> ): <PermisoAlert />}
            </>
            case 'Maestrias':
            return <>
              {permisos?.query?.length === 1 ?
                (<Maestrias
                  accion={'ModuloGraduados'}
                  tipo={props.tipo}
                  permisos={props.permisos}
                /> ): <PermisoAlert />}
            </>
            case 'Especializaciones':
            return <>
              {permisos?.query?.length === 1 ?
                (<Especializaciones
                  accion={'ModuloGraduados'}
                  tipo={props.tipo}
                  permisos={props.permisos}
                /> ): <PermisoAlert />}
            </>
            case 'Pregrados':
            return <>
              {permisos?.query?.length === 1 ?
                (<Pregrados
                  accion={'ModuloGraduados'}
                  tipo={props.tipo}
                  permisos={props.permisos}
                /> ): <PermisoAlert />}
            </>
            case 'Tecnologos':
            return <>
              {permisos?.query?.length === 1 ?
                (<Tecnologos
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

export default ModuloGraduados;
