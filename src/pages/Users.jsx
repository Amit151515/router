import React, { useEffect  } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../store/users/usersSlice';

const Users = () => {
    const { users } = useSelector((state) => state.users) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
    <>
            <div className="container">
            <h1>Страница пользователей</h1>
            
                <div className="box">
                    {users && users.map((item) => (
                        <div key={item.id} className="item">
                            <h2> Name: {item.name} </h2>
                            <h3> User: {item.username} </h3>

                            <p> Phone number: {item.phone}</p>
                            <Link to={`/users/${item.id}`}> More information </Link>
                        </div>
                    ))}
                </div>

        </div>
    </>
    );
};

export default Users

