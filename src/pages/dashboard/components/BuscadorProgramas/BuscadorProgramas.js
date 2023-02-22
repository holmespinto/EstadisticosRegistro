import React,{useState,memo} from 'react';
// components
import FormInput from '../FormInput';
import { Alert, Button,Form } from 'react-bootstrap';
import { environment } from '../../../../environments/environments';
import classnames from 'classnames';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();

const BuscadorProgramas = ({
  onItemSedes,
  onItemInicial,
  onItemFinal,
  onItemProgramas,
  consultData,
  itemsForm,
  itemsmenu,
  itemUrl,
  resProgramas,
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
        var itemUrl = document.getElementById('itemsmenuprincipal').value;
        const datosfiles =[...itemsForm]
        const queryDatos = datosfiles[0]
        ? Object.keys(datosfiles[0])
              .map((key) => key + '=' + datosfiles[0][key])
              .join('&')
        : '';
        const url = `${environment.baseURL}accion=${itemUrl}&opcion=consultar&${queryDatos}`;
        const respuesta = api.getDatos(`${url}`);
        respuesta.then(function (resp) {
          if (resp?.items?.length > 0) {
            consultData(resp);
          }
        });

        setValidated(true);
      }


  };

  return (
    <>
    <Alert variant={'success'}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className={classnames("mh-100 d-flex flex-row")}>
            <Form.Group className={classnames("w-65 p-0")}>
                <FormInput
                    type="select"
                    label="Sedes"
                    name="Sedes"
                    className="form-control"
                    containerClass={'w-65  p-0'}
                    key="Sedes"
                    id="Sedes"
                    required
                    onChange={(e) => {
                      onItemSedes(...itemsForm,e);
                    }}
                    >
                    <option value='0'>Selecione la sede</option>
                    <option value='Valledupar'>Valledupar</option>
                    <option value='Aguachica' >Aguachica</option>
                    {
                     (itemsmenu==='maestrias')?
                      (<>
                        <option value='A distancia' >Maestrías A distancia</option>
                        <option value='SUE' >Maestrías SUE</option>
                      </>):''
                    }
                </FormInput>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group >
            <Form.Group className={classnames("w-65 p-0")}>
                <FormInput
                    type="select"
                    label="Programas"
                    name="programas"
                    className="form-control"
                    containerClass={'w-65  p-0'}
                    key="programas"
                    id="programas"
                    required
                    onChange={(e) => {
                      onItemProgramas(...itemsForm,e);
                    }}
                    >
                    <option value='0'>Selecione el Programa</option>
                    {
                    resProgramas?.map((p, i) => {
                      return(
                      <option value={p.Programa} key={i+1}>{p.Programa}</option>
                      )
                       })}
                </FormInput>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group >
            <Form.Group className={classnames("w-15 p-0")}>
                <Form.Group className="form-group mb-3">
                    <label className="form-label">Fecha Inicial</label> <br />
                      <Form.Control type="date"
                         label="FechaInicial"
                          defaultValue={itemsForm.fechainicial}
                           onChange={(e) => {
                            onItemInicial(...itemsForm,e);
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
                          value={itemsmenuprincipal}
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
export default memo(BuscadorProgramas);
