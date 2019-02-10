import React from 'react';

const NinjaTemplate = (props) => {
   return(
       <div>
            {
                props.ninjas.map( ninja => {
                    return ninja.age > 25 ? (
                        <div>
                        <h2>Name: {ninja.name}, Age: {ninja.age}, ID : {ninja.id}</h2>
                        </div>
                    ) : null;
                })
            }
       </div>
   );
}

export default NinjaTemplate;