import React,{useState,memo} from 'react';

// components
import { Alert, Button,Form } from 'react-bootstrap';
import { environment } from '../../../../environments/environments';
import classnames from 'classnames';
//import Swal from 'sweetalert2';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();

const BuscadorFecha = ({
  onItemInicio,
  onItemFinal,
  onrespitems,
  onrespchart,
  onrespdonutData,
  onrespTotales,
  onrespInsAdmMat,
  onrespBarChartData,
  onrespPieChart,
  itemsForm,
  itemsmenu,
  itemUrl,
  itemsmenuprincipal,
}) => {
  const [validated, setValidated] = useState(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event) => {
    event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }else{
        var elemitemsmenu = document.getElementById('itemsmenu').value;
        var item = document.getElementById('itemsmenuprincipal').value;
        const datosfiles =[...itemsForm]
        const queryDatos = datosfiles[0]
        ? Object.keys(datosfiles[0])
              .map((key) => key + '=' + datosfiles[0][key])
              .join('&')
        : '';
        const url = `${environment.baseURL}accion=${item}&opcion=consultar&${queryDatos}&table=${elemitemsmenu}`;
        const respuesta = api.getDatos(`${url}`);
        respuesta.then(function (resp) {
          console.log(resp);

          /*
          if (resp?.items?.length > 0) {
            onrespitems(resp?.items);
            onrespchart(resp?.chart);
            onrespdonutData(resp?.donutData);
            onrespTotales(resp?.general);
            onrespInsAdmMat(resp?.InscritosAdmitidosMatriculados);
            onrespBarChartData(resp?.apexBarChartData);
            onrespPieChart(resp?.piechart);
            }
         */
        });

        setValidated(true);
      }


  };

  return (
    <>
    <Alert variant={'success'}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className={classnames("mh-100 d-flex flex-row")}>

            <Form.Group className={classnames("w-15 p-0")}>
                <Form.Group className="form-group mb-3">
                    <label className="form-label">Fecha Inicial</label> <br />
                      <Form.Control type="date"
                         label="FechaInicial"
                          defaultValue={itemsForm.fechainicial}
                           onChange={(e) => {
                            onItemInicio(...itemsForm,e);
                             }}
                             required
                             name="FechaInicial"
                            key="FechaInicial"
                            id="FechaInicial"
                      placeholder="FechaInicial"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Fecha Inicial.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Group>
            <Form.Group className={classnames("w-15 p-0")}>
                <Form.Group className="form-group mb-3">
                    <label className="form-label">Fecha Final</label> <br />
                    <Form.Control type="date"
                                             label="FechaFinal"
                                             defaultValue={itemsForm.fechafinal}
                                              onChange={(e) => {
                                                onItemFinal(...itemsForm,e);
                                              }}
                                              required
                                              name="FechaFinal"
                                              key="FechaFinal"
                                              id="FechaFinal"
                      placeholder="FechaFinal"
                      />
                      <Form.Control type="hidden"
                         label="itemsmenu"
                          value={itemsmenu}
                            name="itemsmenu"
                            key="itemsmenu"
                            id="itemsmenu"
                      /><Form.Control type="hidden"
                         label="itemsmenuprincipal"
                          value={itemUrl}
                            name="itemsmenuprincipal"
                            key="itemsmenuprincipal"
                            id="itemsmenuprincipal"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Final.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Group>
            <Form.Group className="w-15 p-1">
                <div className="form-group mb-3">
                    <label className="form-label">{''}</label> <br />
                    <Button type="submit" variant="success">
                        Consultar
                    </Button>
                </div>
            </Form.Group>
        </Form.Group>
        </Form>
    </Alert>

    </>
    );
};
export default memo(BuscadorFecha);
