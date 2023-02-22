import React, { useState,useCallback } from 'react';
import { Row, Col, Tab, Card, Nav} from 'react-bootstrap';
import classnames from 'classnames';
import  BuscadorFecha  from '../components/BuscadorFecha/BuscadorFecha';
import  ApexBarChartData  from '../estadisticas/ApexBarChartData';
import  GraficaUno  from '../estadisticas/GraficaUno';
import Table from '../../../components/Table';
import LineChart from '../estadisticas/LineChart';
import PieChart from '../estadisticas/PieChart';
import MixedChart from '../estadisticas/MixedChart';

import  {tabItems,columns,columnstotales,columnsAdInsMa}  from './menu';
//import { environment } from '../../../environments/environments';
//import Swal from 'sweetalert2';
//import { APICore } from '../../../helpers/api/apiCore';
//const api = new APICore();


const EstadisticaFecha = ({ itemsmenu,itemsmenuprincipal,itemUrl }) => {

  const [itemsForm, setItemsForm] = useState([{}]);
  const [resBuscador, setResBuscador] = useState([]);
  const [barChartData, setResChart] = useState([]);
  const [donutData, setResDonut] = useState([]);
  const [totales, setResTotales] = useState([]);
  const [insAdmMat, setReSInsAdmMat] = useState([]);
  const [grafiCuatro, setGraficaCuatro] = useState([]);
  const [pieChart, setPieChart] = useState([]);
  const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: resBuscador.length,
    },
  ];
  /*
   * handle date change onDateFinal
   */
  const onrespitems = useCallback((resp) =>{
    setResBuscador(resp)
  },[]);
   const onrespchart = useCallback((resp) =>{
    setResChart(resp)
  },[]);
    const onrespdonutData = useCallback((resp) =>{
    setResDonut(resp)
  },[]);
     const onrespTotales = useCallback((resp) =>{
    setResTotales(resp)
  },[]);
  const onrespInsAdmMat = useCallback((resp) =>{
    setReSInsAdmMat(resp)
  },[]);

  const onrespBarChartData = useCallback((data,axial) =>{
      setGraficaCuatro(data)
  },[]);

  const onrespPieChart = useCallback((data) =>{
      setPieChart(data)
  },[]);


  const onItemInicio= useCallback((arg,date) => {
    const items = []
    let newItems = {
      id: items.length + 1,
      fechainicio: date.target.value ? date.target.value : arg.fechainicio,
      fechafinal:  arg.fechafinal ? arg.fechafinal : arg.fechafinal,
  };
    items.push(newItems)
    setItemsForm(items);

},[]);
const onItemFinal= useCallback((arg,date) => {

    const items = []
    let newItems = {
      id: items.length + 1,
      fechainicio: arg.fechainicio ?arg.fechainicio:arg.fechainicio,
      fechafinal:date.target.value ? date.target.value : arg.fechafinal,
  };
    items.push(newItems)
    setItemsForm(items);

  },[]);


  //console.log(grafiCuatro.admitidos)
return (
    <React.Fragment>
      <Row>
        <Card>
          <Card.Body>
            <Tab.Container defaultActiveKey="1">
              <Nav variant="tabs" className="nav-bordered" as="ul">
                {tabItems?.map((tab, index) => {
                  return (
                    <Nav.Item as="li" key={tab.id}>
                      <Nav.Link href="#" eventKey={tab.id} >
                        <i className={classnames(tab.icon, 'd-md-none', 'd-block', 'me-1')}></i>
                        <span className="d-none d-md-block">{tab.title}</span>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
              <Tab.Content className="px-4 pb-4 pt-0 mx-auto">
                {tabItems?.map((tab, index) => {
                  return (
                    <Tab.Pane eventKey={tab.id} id={tab.id} key={tab.id}>
                      <Row>
                        <Col sm="12 mt-1">

                          {(() => {
                            switch (index) {
                              case 0:
                                return (
                                <BuscadorFecha
                                  onItemInicio={onItemInicio}
                                  onItemFinal={onItemFinal}
                                  onrespitems={onrespitems}
                                  onrespchart={onrespchart}
                                  onrespdonutData={onrespdonutData}
                                  onrespTotales={onrespTotales}
                                  onrespInsAdmMat={onrespInsAdmMat}
                                  onrespBarChartData={onrespBarChartData}
                                  onrespPieChart={onrespPieChart}
                                  itemsForm={itemsForm}
                                  itemsmenu={itemsmenu}
                                  itemUrl={itemUrl}
                                  itemsmenuprincipal={itemsmenuprincipal}
                                  />
                                  );
                              case 1:
                                return (
                                    <>
                                        <Row>
                                            <Col xl={6}>
                                            {
                                             barChartData?.length> 0 &&
                                                <GraficaUno barChartData={barChartData} donutData={donutData} />
                                            }
                                                </Col>
                                            <Col xl={6}>
                                              {
                                              grafiCuatro.admitidos?.length> 0 &&
                                              <ApexBarChartData grafiCuatro={grafiCuatro} />
                                              }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl={6}>
                                            {
                                              grafiCuatro.admitidos?.length> 0 &&
                                            <LineChart barChartData={grafiCuatro} />
                                              }
                                            </Col>
                                            <Col xl={6}>
                                            {
                                              pieChart.programa?.length> 0 &&
                                              <PieChart pieChart={pieChart} />
                                            }
                                              </Col>
                                            </Row>
                                            <Row>
                                          <Col>
                                          {
                                              pieChart.programa?.length> 0 &&
                                              <MixedChart grafiCuatro={grafiCuatro} />
                                            }

                                          </Col>
                                      </Row>
                                    </>
                                );
                              case 2:
                                return (<>
                                  {
                                    totales?.length > 0 && index===2 &&
                                    <Table
                                          columns={columnstotales}
                                          data={totales}
                                          pageSize={0}
                                          isSortable={true}
                                          isSearchable={false} />
                                  }{
                                    insAdmMat?.length > 0 && index===2 &&
                                    <Table
                                          columns={columnsAdInsMa}
                                          data={insAdmMat}
                                          pageSize={0}
                                          isSortable={true}
                                          isSearchable={false} />

                                  }
                                  </>);
                              default:
                                return (
                                  'defould'
                                );
                            }
                          })()}

                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12 mt-1">
                      { resBuscador.length > 0 && index===0 &&
                        <Table
                              columns={columns}
                              data={resBuscador}
                              pageSize={5}
                              sizePerPageList={sizePerPageList}
                              isSortable={true}
                              pagination={true}
                              isSearchable={true} />
                          }
                        </Col>
                      </Row>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
};
EstadisticaFecha.defaultProps = {
  itemsmenu: '/'
};
export default EstadisticaFecha;
