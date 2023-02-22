import React,{useState,useCallback} from 'react';
import Graduados from './Graduados';
import Matriculados from './Matriculados';
import Admitidos from './Admitidos';
import Inscritos from './Inscritos';


const ProjectDashboardPage = ({ itemsmenu, itemsmenuprincipal,itemUrl }) => {
  const VALUE_INIT_PROGRAMAS =[{
    Items:[],
    Chart:[],
    DonutData:[],
    Totales:[],
    InscritosAdmitidosMatriculados:[],
    ApexBarChartData:[],
    Piechart:[],
    EstadistInscritos:[],
    EstadistAdmitidos:[],
  }];
  const VALUE_INIT_MATRICULADOS =[{
    Items:[],
  }];
  const [categoryGraduados, setStateGraduados] = useState(VALUE_INIT_PROGRAMAS[0]);
  const [categoryMatriculados, setStateMatriculados] = useState(VALUE_INIT_MATRICULADOS[0]);
  const [categoryAdmitidos, setStateAdmitidos] = useState(VALUE_INIT_MATRICULADOS[0]);
  const [categoryInscritos, setStateInscritos] = useState(VALUE_INIT_MATRICULADOS[0]);


  /*
   * handle date change consultaProgramasData
   */

  const consultaGraduadosData = useCallback((resp) =>{
    const objet=[{
      Items:resp?.items?resp?.items:[],
      Chart:resp?.chart?resp?.chart:[],
      DonutData:resp?.donutData?resp?.donutData:[],
      Totales:resp?.general?resp?.general:[],
      InscritosAdmitidosMatriculados:resp?.InscritosAdmitidosMatriculados?resp?.InscritosAdmitidosMatriculados:[],
      ApexBarChartData:resp?.apexBarChartData?resp?.apexBarChartData:[],
      Piechart:resp?.piechart?resp?.piechart:[],
      EstadistInscritos:resp?.EstadistInscritos?resp?.EstadistInscritos:[],
      EstadistAdmitidos:resp?.EstadistAdmitidos?resp?.EstadistAdmitidos:[],
    }];

       setStateGraduados(objet[0]);

  },[]);

  const consultaMatriculadosData = useCallback((resp) =>{
    const objet=[{
      Items:resp?.items?resp?.items:[],
      Genero:resp?.genero?resp?.genero:[],
      Estracto:resp?.estracto?resp?.estracto:[],
      Chart:resp?.chart?resp?.chart:[],
      Donut:resp?.donut?resp?.donut:[],
      ApexBarChartGenero:resp?.apexBarChartGenero?resp?.apexBarChartGenero:[],
      ApexBarChartEstracto:resp?.apexBarChartEstracto?resp?.apexBarChartEstracto:[],
    }];

       setStateMatriculados(objet[0]);

  },[]);

  const consultaAdmitidosData = useCallback((resp) =>{
    const objet=[{
      Items:resp?.items?resp?.items:[],
    }];

       setStateAdmitidos(objet[0]);

  },[]);
  const consultaInscritosData = useCallback((resp) =>{
    const objet=[{
      Items:resp?.items?resp?.items:[],
    }];

       setStateInscritos(objet[0]);

  },[]);


    return (
        <React.Fragment>
            {(() => {
                switch (itemsmenuprincipal) {
                    case 'graduados':
                        return (
                            <>
                            <Graduados
                            itemsmenu={itemsmenu}
                            itemsmenuprincipal={itemsmenuprincipal}
                            itemUrl={itemUrl}
                            consultaGraduadosData={consultaGraduadosData}
                            categoryGraduados={categoryGraduados}
                            />
                            </>
                        );
                      case 'matriculados':
                        return (
                          <>
                          <Matriculados
                          itemsmenu={itemsmenu}
                          itemsmenuprincipal={itemsmenuprincipal}
                          itemUrl={itemUrl}
                          consultaMatriculadosData={consultaMatriculadosData}
                          categoryMatriculados={categoryMatriculados}
                          />
                          </>
                      );
                      case 'inscritos':
                        return (<>
                          <Inscritos
                          itemsmenu={itemsmenu}
                          itemsmenuprincipal={itemsmenuprincipal}
                          itemUrl={itemUrl}
                          consultaInscritosData={consultaInscritosData}
                          categoryInscritos={categoryInscritos}
                          />
                          </>);
                      case 'admitidos':
                      return (<>
                        <Admitidos
                        itemsmenu={itemsmenu}
                        itemsmenuprincipal={itemsmenuprincipal}
                        itemUrl={itemUrl}
                        consultaAdmitidosData={consultaAdmitidosData}
                        categoryAdmitidos={categoryAdmitidos}
                        />
                        </>);
                    default:
                      return (
                        <>{''}</>
                    );
                }
            })()}
        </React.Fragment>
    );
};
ProjectDashboardPage.defaultProps = {
    itemsmenu: '/',
};
export default ProjectDashboardPage;
