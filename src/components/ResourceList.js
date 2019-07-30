import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ category }) => {
    const [categories, setCategories] = useState([]);

    // the arrow function argument is called only when the second array argument - category element(the props) is different
    // in javascript you can define an annonymous function and immediately call it - example:
    //                  (() => console.log('hi'))()
    useEffect(
        () => { // first argument
            (async (cat) => { // defining annonymous function that takes an argument
                const response = await axios.get(`http://jsonplaceholder.typicode.com/${cat}`);
                setCategories(response.data);
            })(category); // immediately calling the annonymous function
        },
        [category] // second argument
    );

    return <div>{categories.length}</div>
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