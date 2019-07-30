import React from 'react';
import useResourceHook from './useResourceHook';

const ResourceList = ({ category }) => {

    const categories = useResourceHook(category);

    const renderList = categories.map(cat => {
        return (
            <li key={cat.id}>
                {cat.title}
            </li>
        )
    });

    return <div>{renderList}</div>

}

export default ResourceList;


