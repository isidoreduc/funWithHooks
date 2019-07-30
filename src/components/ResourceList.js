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


// alternative syntax, cleaner, but more verbious
// const ResourceList = ({ category }) => {
//     const [categories, setCategories] = useState([]);

//     const getData = async (cat) => {
//         const response = await axios.get(`http://jsonplaceholder.typicode.com/${cat}`);
//         setCategories(response.data);
//     }

//     useEffect(
//         () => { 
//             getData(category);
//         },
//         [category] // second argument
//     );

//     return <div>{categories.length}</div>
// }

// export default ResourceList;