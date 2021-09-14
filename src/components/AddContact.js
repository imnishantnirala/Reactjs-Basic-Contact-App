import React from 'react';
import { Link } from 'react-router-dom';


class AddContact extends React.Component{
    state  = {
        name: "",
        email: "" 
    };
    add = (e)=>{
        e.preventDefault();
        if(this.state.name ==='' || this.state.email ===''){
            alert('Feild is empty !');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="ui main container" style={{marginTop:'100px'}} >
                <h2>Add Contact
                    <Link to="/">  
                        <button className="ui primary button right floated left aligned" > 
                            <i className="address book icon"></i>
                            Contact List
                        </button>
                    </Link>
                </h2>
                <form className="ui form" onSubmit={this.add} >
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e)=> this.setState({ name:e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={(e)=> this.setState({email:e.target.value})}    
                        />
                    </div>
                    <button type="submit" className="ui button blue"> Add </button>
                </form>
            </div>
        );
    }
}

export default AddContact ;