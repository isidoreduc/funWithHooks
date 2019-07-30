import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList'

const App = () => {
  // array destructuring. useState() returns an array with 2 elements, a default value and a setter
  const [category, setCategory] = useState('posts');
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <UserList />
      <div>
        <button className='ui button primary'
          onClick={() => setCategory('posts')}>
          Posts
          </button>
        <button className='ui button primary'
          onClick={() => setCategory('todos')}>
          Todos
          </button>
      </div>
      <ResourceList category={category} />
    </div>
  );
}

export default App;
