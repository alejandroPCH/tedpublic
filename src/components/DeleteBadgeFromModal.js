import React, { Component } from 'react'
import Modal from './Modal'
function DeleteBadgeFromModal(props){

        return (
                <Modal modalIsOpen={props.modalIsOpen} isClose={props.isClose}>
                    <div className="DeleteBadge">
                        <h1>Hey Hey wait a minute</h1>
                            <p>You are about to delete this badge</p>
                            <div className="container--buttons">

                            <button onClick={props.handleDeleteBadge}className="button button-delete danger">
                                    Delete
                                </button>
                                <button onClick={props.isClose}className="button button-cancel cancel">
                                    Cancel
                                </button>
                            </div>
                    </div>

                </Modal>
        )
}

export default DeleteBadgeFromModal
