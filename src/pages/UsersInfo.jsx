import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Back from '../image/back.png'

const UsersInfo = () => {

    const [info, setInfo] = useState(null)

    const { id } = useParams()


    const getUsersById = async() => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let data = await response.json()
            setInfo(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    

    useEffect(() => {
      getUsersById()
    }, [])
    

  return (
    <>
      <h1>Полная информация о пользователе</h1>
      <div className="container">
        <div className="box posts">
            {info && <div className="item">
                <h2> Name: {info.name} </h2>
                <h2>ID user: {info.id}</h2>
                <h2> User: {info.username} </h2>
                <p> Phone number: {info.phone}</p>
                <p>Email: {info.email}</p>
                <div className="info__box">
                    <div className="info__box-left boxes">
                    <h4>Address:</h4>
                <p>{info.address.street}</p>
                <p>{info.address.suite}</p>
                <p>{info.address.city}</p>
                <p>{info.address.zipcode}</p>
                    </div>
                    <div className="info__box-right boxes">
                    <h4>Company:</h4>
                <p>{info.company.name}</p>
                <p>{info.company.catchPhrase}</p>
                <p>{info.company.bs}</p>
                    </div>
                </div>
            </div> }
        </div><div className="item__link">
        <Link to={'/users'} className="back">
        <img src={Back} alt="" />
        </Link>
        </div>

      </div>

    </>
  )
}

export default UsersInfo