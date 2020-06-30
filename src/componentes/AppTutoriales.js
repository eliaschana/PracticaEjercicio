import React, { Component } from 'react'
import ListaTutorial from '../componentes/ListaTutorial';

export default class AppTutoriales extends Component {
  state = {
    tutoriales: []
  }
  componentDidMount() {
    this.apiTutoriales()
  }
  apiTutoriales = async () => {
    try {
      const datos = await fetch('http://localhost:3001/api/tutoriales', { method: 'GET' })
      const tutoriales = await datos.json()
      console.log(tutoriales)
      this.setState({ tutoriales: tutoriales })
    } catch (err) {
      alert("Se produjo el siguiente error: " + err) 
    }
  }

  render() {
    const { tutoriales } = this.state;
  return (
    <div className="Tutoriales">
       <ListaTutorial tutoriales= {tutoriales}/>
    </div>
    );
  };
}
