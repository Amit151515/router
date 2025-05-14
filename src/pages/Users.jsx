import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка загрузки пользователей:', error);
            }
        };

        getUsers();
    }, []);

    return (
    <>
            <div className="container">
            <h1>Страница пользователей</h1>
            
            {!users ? (
                <p>Загрузка пользователей...</p>
            ) : (
                <div className="box">
                    {users.map((item) => (
                        <div key={item.id} className="item">
                            <h2> Name: {item.name} </h2>
                            <h3> User: {item.username} </h3>

                            <p> Phone number: {item.phone}</p>
                            <Link to={`/users/${item.id}`}> More information </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
    );
};

export default Users

