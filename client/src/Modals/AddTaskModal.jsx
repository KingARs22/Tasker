// src/Modals/AddTaskModal.jsx

import React, { useState } from 'react';
import { useTaskContext } from '../Context/TaskContext';
import '../Styles/AddTaskModal.css'; // Import the separate CSS file

function AddTaskModal({ isOpen, closeModal }) {
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');

    const handleSubmit = () => {
        addTask(title, description, status);
        setTitle('');
        setDescription('');
        setStatus('todo');
        closeModal();
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Add New Task</h3>
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
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input 
                            id="description" 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button className="add-button" onClick={handleSubmit}>
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
