import React, { Component } from 'react';


export default class ListaTutorial extends Component {

    render(){

         const {tutoriales}= this.props
        return(
            <div className="row">
              <div className="container p-4">
               <div className="col-md-4">
                 <h1>Lista de Tutoriales</h1>
                  <br/>
                    <ul className="list-group">
                        {
                            tutoriales.map(tutorial=> 
                         (<li className="list-group-item list-group-item-action " 
                                key={tutorial.id}> 
                                {tutorial.titulo}
                         </li>)
                         )
                        }
                    </ul>
                    <br/>
                    <button>Borrartodos</button>
                    </div>
             </div>
            </div>
        )
    }
}
