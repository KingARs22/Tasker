// src/Components/Navbar.jsx

import React, { useState } from 'react';
import AddTaskModal from '../Modals/AddTaskModal';
import '../Styles/Navbar.css'; // Import CSS file for styling

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    <span className="navbar-title">Task-er</span>
                </div>
                <div>
                    <button className="add-task-btn" onClick={openModal}>
                        Add Task
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <AddTaskModal isOpen={isModalOpen} closeModal={closeModal} />
            )}
        </nav>
    );
}

export default Navbar;
