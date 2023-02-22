import React from 'react';
import { Row, Col, Tab, Card, Nav} from 'react-bootstrap';
import classnames from 'classnames';
import Table from '../../../components/Table';

import SearchCustomizations  from '../components/SearchCustomizations';
import ApexBarChartData  from '../estadisticas/ApexBarChartData';
import GraficaUno  from '../estadisticas/GraficaUno';
import LineChart from '../estadisticas/LineChart';
import PieChart from '../estadisticas/PieChart';
import MixedChart from '../estadisticas/MixedChart';
import  {
  tabItems,
  columItemsPrincipal,columTotales,columAdInsMa,sizePerPageList}  from './menu';
const Graduados = ({itemsmenu,
  itemsmenuprincipal,
  itemUrl,
  consultaGraduadosData,
  categoryGraduados,
}) => {
return (
    <React.Fragment>
      <Row>
        <Card>
          <Card.Body>
            <Tab.Container defaultActiveKey="1">
              <Nav variant="tabs" className="nav-bordered" as="ul">
                {tabItems?.map((tab, index) => {
                  return (
                    <Nav.Item as="li" key={index}>
                      <Nav.Link href="#" eventKey={tab.id} >
                        <i className={classnames(tab.icon, 'd-md-none', 'd-block', 'me-1')}></i>
                        <span className="d-none d-md-block">{tab.title}</span>
                      </Nav.Link>
                    </Nav.Item>

                  )
                })}
              </Nav>
              <Tab.Content className="px-4 pb-4 pt-0 mx-auto">
                {tabItems?.map((tab, index) => {
                  return (
                    <Tab.Pane eventKey={tab.id} id={tab.id} key={index}>
                      <Row>
                        <Col sm="12 mt-1">
                          {(() => {
                            switch (tab.id) {
                              case 1:
                                return ( <>
                                  <Row>
                                  <Col sm="12 mt-1">
                                  <SearchCustomizations
                                  itemsmenu={itemsmenu}
                                  itemsmenuprincipal={itemsmenuprincipal}
                                  itemUrl={itemUrl}
                                  consultData={consultaGraduadosData}
                                  />
                                  </Col>
                                </Row>
                                   <Row>
                                   <Col sm="12 mt-1">
                                {
                                categoryGraduados?.Items?.length >0 &&
                                  <Table
                                        columns={columItemsPrincipal}
                                        data={categoryGraduados?.Items}
                                        pageSize={5}
                                        sizePerPageList={sizePerPageList}
                                        isSortable={true}
                                        pagination={true}
                                        isSearchable={true}
                                        numtable={'3'}
                                        isVisible={true}
                                        />
                                    }
                                  </Col>
                                </Row>
                                </> );
                              case 2:
                                return (
                                    <>
                                        <Row>
                                            <Col xl={6}>
                                            {
                                                categoryGraduados?.DonutData?.length> 0 &&
                                                <GraficaUno barChartData={categoryGraduados.Chart} donutData={categoryGraduados.DonutData} />

                                            }
                                            </Col>
                                            <Col xl={6}>
                                              {
                                                categoryGraduados?.ApexBarChartData?.axial?.length> 0 &&
                                              <ApexBarChartData ApexBarChartData={categoryGraduados?.ApexBarChartData} />
                                          }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl={6}>
                                              {
                                              categoryGraduados?.ApexBarChartData?.axial?.length> 0 &&
                                             <LineChart barChartData={categoryGraduados?.ApexBarChartData} />
                                            }
                                            </Col>
                                            <Col xl={6}>
                                            {
                                              categoryGraduados?.Piechart?.programa?.length> 0 &&
                                              <PieChart pieChart={categoryGraduados?.Piechart} />
                                            }
                                              </Col>
                                            </Row>
                                            <Row>
                                          <Col>
                                            {
                                              categoryGraduados?.Piechart?.programa?.length> 0 &&
                                              <MixedChart grafiCuatro={categoryGraduados?.ApexBarChartData} />
                                            }

                                          </Col>
                                      </Row>
                                    </>
                                );
                              case 3:
                                  return (
                                  <>
                                      <Table
                                            columns={columTotales}
                                            data={categoryGraduados?.Totales}
                                            pageSize={0}
                                            isSortable={true}
                                            isSearchable={false}
                                            numtable={'1'}
                                            isVisible={false}
                                            />
                                      <Table
                                            columns={columAdInsMa}
                                            data={categoryGraduados?.InscritosAdmitidosMatriculados}
                                            pageSize={0}
                                            isSortable={true}
                                            isSearchable={false}
                                            numtable={'2'}
                                            isVisible={true}
                                             />
                              </>);
                              // eslint-disable-next-line no-fallthrough
                              case 4:
                                    return (<>
                                      <Row>
                                        <Col sm="12 mt-1">
                                        {'4'}
                                        </Col>
                                      </Row></>);
                              default:
                                return (
                                  'defould'
                                );
                            }
                          })()}

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

export default Graduados;
