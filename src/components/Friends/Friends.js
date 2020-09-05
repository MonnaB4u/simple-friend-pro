import React from 'react';
import './Friends.css'
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name,email,id} =props.friend;
 
    const history = useHistory()

const handleClick=(friendId)=> {
    const url=`/friend/${friendId}`
    history.push(url);

}

    return (
        <div className="frnd-component">
            <h1>Name: {name}</h1>
           <p>Email: {email}</p>
            
           <Link to={`/friend/${id}`} > click me </Link>     
     <button onClick={() => handleClick(id)}>click me</button>

        </div>
    );
};

export default Friends;