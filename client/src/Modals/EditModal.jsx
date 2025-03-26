// src/Modals/EditModal.jsx

import React, { useState } from 'react';
import { useTaskContext } from '../Context/TaskContext';
import '../Styles/EditModal.css'; // Import the separate CSS file

function EditModal({ isOpen, closeModal, taskId, initialTitle = '' }) {
    const { editTask } = useTaskContext();
    const [title, setTitle] = useState(initialTitle);

    const handleSubmit = () => {
        editTask(taskId, title);
        closeModal();
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`} >
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Edit Task</h3>
                    <button className="close-button" onClick={closeModal}>X</button>
                </div>
                <div className="modal-body">
                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            id="title" 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="save-button" onClick={handleSubmit}>Save</button>
                        <button className="cancel-button" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;
