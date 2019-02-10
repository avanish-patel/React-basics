import React from 'react';

class Ninja extends React.Component {

    render(){

        console.log(this.props.ninjas);
        
        const ninjaList = this.props.ninjas.map( ninja => {
            return(
                <div>
                    <div>Name : {ninja.name}, Age : {ninja.age}, ID : {ninja.id}</div>
                </div> 
            );
        });
        return(
            <div>
                {ninjaList}
            </div>
        );
    }
}

export default Ninja;