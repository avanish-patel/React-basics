import React from 'react';


const ShowNinjas = (props) => {

    const ninjaList = props.ninjas.map(ninja => {
            return(
                <div key={ninja.id}>
                    <div>Name : {ninja.name}, Age : {ninja.age}, ID: {ninja.id} <button onClick={() => props.deleteNinja(ninja.id)}>Delete</button></div>
                </div>);   
        });
    return(
        <div>
            {ninjaList}
        </div>
    );
}
export default ShowNinjas;