import React, { useState, useCallback } from 'react';
import BuscadorProgramas from './BuscadorProgramas/BuscadorProgramas';
import { environment } from '../../../environments/environments';
import { APICore } from '../../../helpers/api/apiCore';
const api = new APICore();

const SearchCustomizations = ({ itemsmenu, itemsmenuprincipal, itemUrl,consultData }) => {
    const [itemsForm, setItemsForm] = useState([{}]);
    const [itemsProgramas, setProgramas] = useState([]);
    const onItemSedes = useCallback(
        (arg, date) => {
            const items = [];
            let newItems = {
                id: items.length + 1,
                sede: date.target.value ? date.target.value : arg.sede,
                programa: arg.programa ? arg.programa : arg.programa,
                fechainicio: date.target.value ? date.target.value : arg.fechainicio,
                fechafinal: date.target.value ? date.target.value : arg.fechafinal,
                etiqueta: itemsmenu,
                itemsmenuprincipal: itemsmenuprincipal,
                itemUrl: itemUrl,
            };
            items.push(newItems);
            setItemsForm(items);
            const url = `${environment.baseURL}accion=programas&opcion=consulta&etiqueta=${itemsmenu}&sede=${date.target.value}&table=programas&datable=${itemsmenuprincipal}`;
            const respuesta = api.getDatos(`${url}`);
            respuesta.then(function (resp) {
                if (resp?.length > 0) {
                    setProgramas(resp);
                }
            });
        },
        [itemsmenu, setProgramas, itemsmenuprincipal, itemUrl]
    );

    const onItemInicial = useCallback(
        (arg, date) => {
            const items = [];
            let newItems = {
                id: items.length + 1,
                sede: arg.sede ? arg.sede : arg.sede,
                programa: arg.programa ? arg.programa : arg.programa,
                fechainicio: date.target.value ? date.target.value : arg.fechainicio,
                fechafinal: arg.fechafinal ? arg.fechafinal : arg.fechafinal,
                etiqueta: itemsmenu,
                itemsmenuprincipal: itemsmenuprincipal,
                itemUrl: itemUrl,
            };
            items.push(newItems);
            setItemsForm(items);
        },
        [itemsmenu, itemsmenuprincipal, itemUrl]
    );
    const onItemFinal = useCallback(
        (arg, date) => {
            const items = [];
            let newItems = {
                id: items.length + 1,
                sede: arg.sede ? arg.sede : arg.sede,
                programa: arg.programa ? arg.programa : arg.programa,
                fechainicio: arg.fechainicio ? arg.fechainicio : arg.fechainicio,
                fechafinal: date.target.value ? date.target.value : arg.fechafinal,
                etiqueta: itemsmenu,
                table: itemsmenuprincipal,
                itemUrl: itemUrl,
            };
            items.push(newItems);
            setItemsForm(items);
        },
        [itemsmenu, itemsmenuprincipal, itemUrl]
    );
    const onItemProgramas = useCallback(
        (arg, date) => {
            const items = [];
            let newItems = {
                id: items.length + 1,
                sede: arg.sede ? arg.sede : arg.sede,
                programa: date.target.value ? date.target.value : arg.programa,
                fechainicio: arg.fechainicio ? arg.fechainicio : arg.fechainicio,
                fechafinal: date.target.value ? date.target.value : arg.fechafinal,
                etiqueta: itemsmenu,
                table: itemsmenuprincipal,
                itemUrl: itemUrl,
            };
            items.push(newItems);
            setItemsForm(items);
        },
        [itemsmenu, itemsmenuprincipal, itemUrl]
    );
    return (
        <React.Fragment>
            <BuscadorProgramas
                onItemSedes={onItemSedes}
                onItemInicial={onItemInicial}
                onItemFinal={onItemFinal}
                onItemProgramas={onItemProgramas}
                consultData={consultData}
                itemsForm={itemsForm}
                itemsmenu={itemsmenu}
                itemUrl={itemUrl}
                resProgramas={itemsProgramas}
                itemsmenuprincipal={itemsmenuprincipal}
            />
        </React.Fragment>
    );
};

export default SearchCustomizations;
