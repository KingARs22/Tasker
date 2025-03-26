import React, { useState } from 'react';
import { useTaskContext } from '../Context/TaskContext';
import DeleteModal from '../Modals/DeleteModal';
import EditModal from '../Modals/EditModal';
import AddTaskModal from '../Modals/AddTaskModal'; // Import AddTaskModal
import '../Styles/TaskList.css'; // Importing external CSS file

function TaskList() {
    const { filteredTasks, updateTaskStatus } = useTaskContext();
    const [taskId, setTaskId] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const handleDelete = (taskId) => {
        setTaskId(taskId);
        setIsDeleteModalOpen(true);
        setOpenDropdownId(null);
    };

    const handleEdit = (taskId, taskTitle, taskDescription) => {
        setTaskId(taskId);
        setTaskTitle(taskTitle);
        setTaskDescription(taskDescription);
        setIsEditModalOpen(true);
        setOpenDropdownId(null);
    };

    const handleComplete = (taskId) => {
        updateTaskStatus(taskId, 'completed');
        setOpenDropdownId(null);
    };

    const toggleDropdown = (taskId) => {
        setOpenDropdownId(openDropdownId === taskId ? null : taskId);
    };

    const isDropdownOpen = (taskId) => openDropdownId === taskId;

    return (
        <div className="task-list-container">
            {filteredTasks.map(task => (
                <div key={task._id} className={`task-card ${task.status}`}>
                    <div className="task-content">
                        <div className="task-header">
                            <h3 className="task-title">{task.title}</h3>
                            <button onClick={() => toggleDropdown(task._id)} className="dropdown-btn">
                                ☰
                            </button>
                        </div>
                        <p className="task-description">{task.description}</p>
                    </div>
                    {isDropdownOpen(task._id) && (
                        <div className="task-dropdown">
                            <button className="task-option" onClick={() => handleEdit(task._id, task.title, task.description)}>
                                Edit
                            </button>
                            <button className="task-option delete" onClick={() => handleDelete(task._id)}>
                                Delete
                            </button>
                            {task.status !== 'completed' && (
                                <button className="task-option" onClick={() => handleComplete(task._id)}>
                                    Mark as Completed
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}

            {/* "+" Button to Add a New Task */}
            <div className="tasklist-add-task-container">
                <button className="tasklist-add-task-btn" onClick={() => setIsAddModalOpen(true)}>+</button>
            </div>

            {/* Modals */}
            {isDeleteModalOpen && (
                <DeleteModal isOpen={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)} taskId={taskId} />
            )}
            {isEditModalOpen && (
                <EditModal isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)} taskId={taskId}
                    initialTitle={taskTitle} initialDescription={taskDescription} />
            )}
            {isAddModalOpen && (
                <AddTaskModal isOpen={isAddModalOpen} closeModal={() => setIsAddModalOpen(false)} />
            )}
        </div>
    );
}

export default TaskList;
