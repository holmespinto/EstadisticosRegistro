/* eslint-disable array-callback-return */
// @flow
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
// actions
import { changeSidebarType, changeSidebarTheme } from '../redux/actions';

import * as layoutConstants from '../constants/layout';

// components
import ThemeCustomizer from '../components/ThemeCustomizer';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));
const RightSidebar = React.lazy(() => import('./RightSidebar'));
const ProjectDashboard = React.lazy(() => import('../pages/dashboard/Project/'));
const loading = () => <div className=""></div>;


export function capitalize(str) {
  if (!str) return

  return str.trim().replace(/^\w/, c => c.toUpperCase())
}
type VerticalLayoutState = {
    isMenuOpened?: boolean,
    itemsmenu?: string,
};

const VerticalLayout = ( state: VerticalLayoutState): React$Element<any> => {
    const dispatch = useDispatch();

    const { leftSideBarTheme, leftSideBarType } = useSelector((state) => ({
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [itemsmenu, setitemsMenu] = useState('');
    const [itemsmenuprincipal, setitemsMenuPrincipal] = useState('');
    const [itemUrl, setitemsUrl] = useState('');

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened((prevState) => {
            setIsMenuOpened(!prevState);
        });

        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    const itemsMenuCallBack = useCallback((e) => {
          let n = e?.lastIndexOf('/');
          let totalcletras=e?.length;
          const items_sub = e?.substring(0,Number(n)).replace('/estadisticas_programas/','').replace('/','');
          const items = e?.substring(Number(n),Number(totalcletras)).replace('/estadisticas_programas/','').replace('/','');
          let itemsurl = e?.lastIndexOf('estadisticas_');

          if(itemsurl===1){
            const str1=e?.replace('estadisticas_programas','nivel_uno').replace('estadisticas_fecha','nivel_dos');
            setitemsUrl(str1?.substring(1,10))
            //console.log(items)
          }
          //

          setitemsMenuPrincipal(items_sub)
          setitemsMenu(items)


    }, []);

    const updateDimensions = useCallback(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        } else if (window.innerWidth > 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK));

        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        }

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dispatch, updateDimensions]);

    const isCondensed = leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
    const isLight = leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;
    //console.log(itemsmenu)
    return (
        <>
            <div className="wrapper">
                <Suspense fallback={loading()}>
                    <LeftSidebar isCondensed={isCondensed}
                    isLight={isLight}
                    hideUserProfile={true}
                    itemsMenuCallBack={itemsMenuCallBack}
                    />
                </Suspense>
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Topbar openLeftMenuCallBack={openMenu} hideLogo={true} />
                        </Suspense>
                        <Suspense fallback={loading()}>
                        <Container fluid>

                        <PageTitle
                            breadCrumbItems={[
                              { label: itemsmenu.length===0 ?'Bienvenidos':capitalize(itemsmenuprincipal)+' / '+capitalize(itemsmenu), path: '/'+capitalize(itemsmenuprincipal)+'/'+capitalize(itemsmenu)+ '/', active: true },
                            ]}
                            title={itemsmenu.length===0 ?'Bienvenidos, para comenzar seleccione uno de los items del menu principal':capitalize(itemsmenuprincipal)+'-' + capitalize(itemsmenu)}
                          />
                        <Suspense fallback={loading()}><ProjectDashboard itemsmenu={itemsmenu} itemsmenuprincipal={itemsmenuprincipal} itemUrl={itemUrl} /></Suspense>
                        </Container>
                        </Suspense>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>
                </div>
            </div>

            <Suspense fallback={loading()}>
                <RightSidebar>
                    <ThemeCustomizer />
                </RightSidebar>
            </Suspense>
        </>
    );
};
export default VerticalLayout;
