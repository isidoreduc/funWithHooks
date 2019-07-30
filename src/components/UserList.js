import React from 'react';
import useResourceHook from './useResourceHook';

const UserList = () => {
    const users = useResourceHook('users');

    return <ul>
        {users.map(u =>
            <li key='u.id'>{u.name}</li>
        )}
    </ul>
}

export default UserList