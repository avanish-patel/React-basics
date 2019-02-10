import React from 'react';

class AddNinja extends React.Component {

    state = {
        name: null,
        age: null
    }

    handleChagne = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNinja(this.state);
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChagne}></input>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={this.handleChagne}></input>
                    <button>Add</button>
                </form> 
            </div>
        );
    }
}

export default AddNinja;