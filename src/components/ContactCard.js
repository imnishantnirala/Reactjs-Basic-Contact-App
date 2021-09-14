import React from 'react';
import user from '../images/profile.png';


const CardContact = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div style={{marginBottom:'10px'}}>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Profile Image</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name"> {id} </td>
                        <td> <img className="ui avatar image" src={user} alt="user" style={{height:'50px', width:'auto'}} /> </td>
                        <td data-label="Age"> {name} </td>
                        <td data-label="Job"> {email} </td>
                        <td> 
                            <i className="trash alternate outline icon" 
                                style={{color:'red'}}
                                onClick={()=> props.clickHander(id)}
                            >

                            </i> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CardContact;