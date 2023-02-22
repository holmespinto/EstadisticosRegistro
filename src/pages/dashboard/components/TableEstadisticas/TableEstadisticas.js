// @flow
import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import ButtonExportar from '../ButtonExportar/ButtonExportar';

const ResponsiveTable = ({data,columns,titulo}) => {
  //console.log(columns)
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Total de {titulo} por Categorias</h4>
                <p className="text-muted font-14 mb-4">
               <ButtonExportar numtable={titulo}/></p>
                <Table className="mb-0" responsive  striped bordered id={titulo} >
                    <thead>
                        <tr>
                            <th>Periodo</th>
                            <th>Categorias</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                        data?.map((record, i) => {
                        return (
                                <tr key={i+1}>
                                    <th scope="row">{record.periodo}</th>
                                {
                                columns?.map((col, k) => {
                                  return (
                                      <tr key={k+1}>
                                        <th key={k+1}>{col.Header}</th>
                                        <th>{record[`${col.accessor}`]}</th>
                                        <th></th>
                                        </tr>

                                      )
                                    })}

                                </tr>
                                )
                        })
                        }
                          <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const TableEstadisticas = ({data,columns,titulo}): React$Element<React$FragmentType> => {
  //console.log(estadistInscritos,columns)
  return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <ResponsiveTable data={data} columns={columns} titulo={titulo}/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TableEstadisticas;
