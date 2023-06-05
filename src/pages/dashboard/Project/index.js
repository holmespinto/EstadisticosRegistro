/* eslint-disable no-duplicate-case */
/* eslint-disable no-unreachable */
import React, { useContext } from 'react';
import Title from '../../../pages/dashboard/components/Title';
import { DashboardContext } from '../../../layouts/context/DashboardContext';
import { usePermisos } from '../../../hooks/usePermisos';
// PAGES
import PermisoAlert from '../components/PermisoAlert/PermisoAlert';
import AdminUsuarios from './AdminUsuarios/AdminUsuarios';
import ModuloGraduados from './ModuloGraduados/ModuloGraduados';
import ModuloMatriculados from './ModuloMatriculados/ModuloMatriculados';
import  ModuloAdmitidos  from './ModuloAdmitidos/ModuloAdmitidos';
import  ModuloInscritos  from './ModuloInscritos/ModuloInscritos';

const ProjectDashboard = () => {
  const { tipo, AdvertenciaLocalStorage, itemUrl } = useContext(DashboardContext)
  AdvertenciaLocalStorage();
  const { permisos, initPermiso } = usePermisos(tipo);
  return (
    <React.Fragment>
      <Title />
      {(() => {
        switch (itemUrl) {
          case 'AdminUsuarios':
            return <React.Fragment>
              {initPermiso === 1 ?
                (<AdminUsuarios
                  accion={itemUrl}
                  tipo={tipo}
                  permisos={permisos}
                />) : <PermisoAlert />}
            </React.Fragment>
            break;
          case 'Graduados':
            return <React.Fragment>
              {initPermiso === 1 ?
                (<ModuloGraduados
                  accion={itemUrl}
                  tipo={tipo}
                  permisos={permisos}
                />) : <PermisoAlert />}
            </React.Fragment>
            break;
          case 'Matriculados':
            return <React.Fragment>
              {initPermiso === 1 ?
                (<ModuloMatriculados
                  accion={itemUrl}
                  tipo={tipo}
                  permisos={permisos}
                />) : <PermisoAlert />}
            </React.Fragment>
            break;
          case 'Admitidos':
            return <React.Fragment>
              {initPermiso === 1 ?
                (<ModuloAdmitidos
                  accion={itemUrl}
                  tipo={tipo}
                  permisos={permisos}
                />) : <PermisoAlert />}
           </React.Fragment>
            break;
          case 'Inscritos':
            return <React.Fragment>
              {initPermiso === 1 ?
                (<ModuloInscritos
                  accion={itemUrl}
                  tipo={tipo}
                  permisos={permisos}
                />) : <PermisoAlert />}
           </React.Fragment>
            break;
          default:
            return (
              <React.Fragment>{''}</React.Fragment>
            );
        }
      })()
      }
    </React.Fragment>
  );
};
ProjectDashboard.defaultProps = {
  itemsmenu: '/',
};
export default ProjectDashboard;
