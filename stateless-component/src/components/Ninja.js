import React from 'react';

const Ninja = (props) => {

    const ninjaList = props.ninjas.map( ninja => {
        return(
            <div key={ninja.id}>
                <h4>Name : {ninja.name}, Age : {ninja.age}, ID: {ninja.id}</h4>
            </div>
        );
    })

    return(
        <div>
            {ninjaList}
        </div>
    );
}


export default Ninja;