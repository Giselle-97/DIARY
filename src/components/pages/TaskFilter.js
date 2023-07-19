import React from 'react';

function TaskFilter({ onFilterChange }) {
  const handleFilterChange = (e) => {
    const newSearchTerm = e.target.value;
    onFilterChange(newSearchTerm);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar por título'
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default TaskFilter;
