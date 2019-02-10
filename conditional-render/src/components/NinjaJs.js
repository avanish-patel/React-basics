import React from 'react';


const NinjaJs = (props) => {

    // const ninjaList = props.ninjas.map( ninja  => {
    //     if(ninja.age > 25){
    //         return(
    //             <div>
    //                 <h3>Name : {ninja.name}, Age : {ninja.age}, ID : {ninja.id}</h3>
    //             </div>
    //         );
    //     }else {
    //         return null;
    //     }

    // })

    const ninjaList = props.ninjas.map( ninja => {
        return ninja.age > 25 ? (
            <div>
                <h3>Name : {ninja.name}, Age : {ninja.age}, ID : {ninja.id}</h3>
            </div>
        ) : null
    })

    return(
        <div>
        {ninjaList}
        </div>
    );
}

export default NinjaJs;