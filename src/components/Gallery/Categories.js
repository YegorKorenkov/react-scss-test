import React from 'react';

const Categories = ({ categoryName, active, onSetActiveId, id }) => {
    return (
        <button onClick={() => onSetActiveId(id)} className={active ? 'active' : ''}>
            {categoryName}
        </button>
    );
};

export default Categories;