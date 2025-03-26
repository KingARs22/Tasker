// src/Modals/DeleteModal.jsx

import React from 'react';
import { useTaskContext } from '../Context/TaskContext';
import '../Styles/DeleteModal.css'; // Import the separate CSS file

function DeleteModal({ isOpen, closeModal, taskId }) {
    const { deleteTask } = useTaskContext();

    const handleDelete = () => {
        deleteTask(taskId);
        closeModal();
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Confirm Delete</h3>
                    <button className="close-button" onClick={closeModal}>X</button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this task?</p>
                    <div className="button-group">
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                        <button className="cancel-button" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
