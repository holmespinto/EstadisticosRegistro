import React from 'react';
import { Row, Col, Tab, Card, Nav} from 'react-bootstrap';
import classnames from 'classnames';
import Table from '../../../components/Table';

import SearchCustomizations  from '../components/SearchCustomizations';
/*
import ApexBarChartDataMatriculados  from '../estadisticas/matriculados/ApexBarChartDataMatriculados';
import LineChartGenero  from '../estadisticas/matriculados/LineChartGenero';
import LineChartEstracto  from '../estadisticas/matriculados/LineChartEstracto';
import MixedChartEstracto  from '../estadisticas/matriculados/MixedChartEstracto';
import GraficaUno  from '../estadisticas/GraficaUno';
*/
import  {tabAdmitidos,columnsAdmitidos,sizePerPageList}  from './menu';


const Inscritos = ({
  itemsmenu,
  itemsmenuprincipal,
  itemUrl,
  consultaInscritosData,
  categoryInscritos,
}) => {

//console.log(categoryAdmitidos);
return (
    <React.Fragment>
      <Row>
        <Card>
          <Card.Body>
            <Tab.Container defaultActiveKey="1">
              <Nav variant="tabs" className={classnames("nav-bordered")} as="ul">
                {tabAdmitidos?.map((tab, index) => {
                  return (
                    <Nav.Item as="li" key={index}>
                      <Nav.Link href="#" eventKey={tab.id} >
                        <i className={classnames(tab.icon, 'd-md-none', 'd-block', 'me-1')}></i>
                        <span className={classnames("d-none d-md-block")}>{tab.title}</span>
                      </Nav.Link>
                    </Nav.Item>
                  )
                })}
              </Nav>
              <Tab.Content className={classnames("px-4 pb-4 pt-0 mx-auto")}>
                {tabAdmitidos?.map((tab, index) => {
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
                                  consultData={consultaInscritosData}
                                  />
                                  </Col>
                                </Row>
                                <Row>
                                   <Col sm="12 mt-1">
                                {
                                categoryInscritos?.Items?.length >0 &&
                                  <Table
                                        columns={columnsAdmitidos}
                                        data={categoryInscritos?.Items}
                                        pageSize={5}
                                        sizePerPageList={sizePerPageList}
                                        isSortable={true}
                                        pagination={true}
                                        isSearchable={true}
                                        numtable={'1'}
                                        isVisible={true}
                                        />
                                    }
                                  </Col>
                                </Row>
                                </> );
                              case 2:
                                return (<>{}</>);
                              case 3:
                                  return (<>{}</>);
                              // eslint-disable-next-line no-fallthrough
                              case 4:
                                    return (                                    <>
                                      <Row>
                                          <Col xl={6}>
                                            {}
                                              </Col>
                                          <Col xl={6}>
                                          {}

                                          </Col>
                                      </Row>
                                      <Row>
                                          <Col xl={6}>
                                          {}

                                          </Col>
                                          <Col xl={6}>
                                          {}

                                            </Col>
                                            <Col xl={12}>
                                          { }

                                            </Col>
                                          </Row>
                                          <Row>
                                        <Col>
                                        </Col>
                                    </Row>
                                  </>);
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

export default Inscritos;
