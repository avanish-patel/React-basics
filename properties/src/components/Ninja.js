import React from 'react';

class Ninja extends React.Component {
    
    render(){
        console.log(this.props);

        return(
            <div>
                <h2>Name : {this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
            </div>
        );
    }
}

export default Ninja;