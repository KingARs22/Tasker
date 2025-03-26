// src/Components/Filterbar.jsx

import React from 'react';
import { useTaskContext } from '../Context/TaskContext';
import '../Styles/Filterbar.css'; // Import the CSS file

function Filterbar() {
    const { handleFilterClick } = useTaskContext();

    return (
        <div className="filterbar-container">
            <button className="filter-button rounded-l" onClick={() => handleFilterClick('all')}>
                All
            </button>
            <button className="filter-button" onClick={() => handleFilterClick('completed')}>
                Completed
            </button>
            <button className="filter-button rounded-r" onClick={() => handleFilterClick('todo')}>
                To Do
            </button>
        </div>
    );
}

export default Filterbar;
