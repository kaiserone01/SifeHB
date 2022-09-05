import React from 'react'
import PropType from "prop-types";
import '../../styles/modal.css';

export const Modal2 = ({ setOpenModal, data }) => {
    console.log(data, "Line 6")
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue? {data}</h1>
                </div>
                <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
};
Modal2.propTypes = {
    setOpenModal: PropType.func,
    data: PropType.string
  };