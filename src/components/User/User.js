import React from 'react';
import'./User.css';
import react, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
 

const User = (props) => {
    const {email, picture, cell, salary} = props.user;
    const [mobile,  setMobile] =  useState('');
    const handleAddUser = props.handleAddUser;
    const style= {
        height: '300px',
    }
    const  showPhone = () =>  setMobile(cell);
    return (
        <div className="user-content">
            <div className="div">
             <img style ={style} src={picture.large} alt=""/>
           </div>
            <div className="div">
                <div className="style">
                    <h1 >User-name: {props.user.name.first +" "+ props.user.name.last}</h1>
                    <h2>User-email: {email}</h2>
                    <h4>User-salary: {salary}</h4>
                    <p>Phone: {mobile}</p>
                    <button onClick ={showPhone}>Display phone number</button>
                    <br/>   
                    <br/>
                    <button className='add-button' onClick ={() =>handleAddUser(props.user)}><FontAwesomeIcon icon={faPlus }/>  Add user</button>
                </div>
            </div>
        </div>
        
        
    );
};

export default User;