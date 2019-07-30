import { useState, useEffect } from 'react'
import axios from 'axios'

const useResourceHook = (res) => {
    const [resources, setResources] = useState([]);

    // the arrow function argument is called only when the second array argument - category element(the props) is different
    // in javascript you can define an annonymous function and immediately call it - example:
    //                  (() => console.log('hi'))()
    useEffect(
        () => { // first argument
            (async (rs) => { // defining annonymous function that takes an argument
                const response = await axios.get(`http://jsonplaceholder.typicode.com/${rs}`);
                setResources(response.data);
            })(res); // immediately calling the annonymous function
        },
        [res] // second argument
    );
    return resources
}

export default useResourceHook









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