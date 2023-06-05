/* eslint-disable no-duplicate-case */
/* eslint-disable no-unreachable */
import React, { useContext } from 'react';
import Title from '../../../pages/dashboard/components/Title';
import { DashboardContext } from '../../../layouts/context/DashboardContext';
import { usePermisos } from '../../../hooks/usePermisos';
// PAGES
import PermisoAlert from '../components/PermisoAlert/PermisoAlert';
import AdminUsuarios from './AdminUsuarios/AdminUsuarios';
const ProjectDashboard = () => {
  const { itemsmenuprincipal, AdvertenciaLocalStorage } = useContext(DashboardContext)
  AdvertenciaLocalStorage();
  const { permisos, initPermiso } = usePermisos(itemsmenuprincipal);

  return (
    <React.Fragment>
      <Title />

      {(() => {
        switch (itemsmenuprincipal) {
          case 'Roles':
          case 'Usuarios':
            return <>
              {initPermiso === 1 ?
                (<AdminUsuarios
                  accion={'AdminUsuarios'}
                  tipo={itemsmenuprincipal}
                  permisos={permisos}
                />) : <PermisoAlert />}
            </>
            break;
          default:
            return (
              <>{''}</>
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
