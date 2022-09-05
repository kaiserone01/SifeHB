import React, { useState, useContext } from 'react'
import PropType from "prop-types";
import { Context } from '../store/appContext';

export const Modal = ({ userId, actionType, setOpenModal }) => {
    const [optionValue, setOptionValue] = useState("");
    const { actions } = useContext(Context);

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
    const handleOptionChange = (e) => {
        setOptionValue(e.target.options[e.target.selectedIndex].text)
    };

    let modalTitle = "";
    let optionTitle = "";
    let modalOptions = "";
    let property = "";
    let data = {};
    if (actionType === "changeLAStatus") {
        property = "status";
        modalTitle = "Estatus cuenta LA";
        optionTitle = "Seleccione un estatus";
        modalOptions = <><option value="1">registered</option><option value="2">processing</option><option value="3">verified</option><option value="3">blocked</option></>
    } else if (actionType === "changeUserLevel") {
        property = "level";
        optionTitle = "Seleccione un nivel";
        modalTitle = "Nivel de usuario";
        modalOptions = <><option value="1">1</option><option value="2">2</option></>

    } else {
        console.log("Nothing to do");
    }
    /* Change user Level */
    const handleChange = async (id) => {
        if (actionType === "changeLAStatus") {
            data[property] = optionValue;
        } else if (actionType === "changeUserLevel") {
            data[property] = parseInt(optionValue)
        }
        console.log(data, "line 43 modal component")
        console.log(actionType, "line 44 modal component")
        if (await actions.changeUserStatus(id, data)) {
            setOpenModal(false);
            actions.getAllUsers();
        }
    }

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>

                    </div>
                    <div className="modal-body">
                        <select className="form-select form-select-sm"
                            aria-label="form-select-sm example"
                            onChange={handleOptionChange}
                        >
                            <option>{optionTitle}</option>
                            {modalOptions}
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                            setOpenModal(false);
                        }}>Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => { handleChange(userId) }}>Cambiar</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
Modal.propTypes = {
    setOpenModal: PropType.func,
    userId: PropType.string,
    actionType: PropType.string
};