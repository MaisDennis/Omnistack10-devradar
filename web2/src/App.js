import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
// import telephone from './assets/telephone.jpeg';

function App() {
  const [devs, setDevs] = useState([]);

  // const [github_username, setGithubUsername] = useState('');
  // const [techs, setTechs] = useState('');

  // const [latitude, setLatitude] = useState('');
  // const[longitude, setLongitude] = useState('');
  
/*
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);
*/

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
  // async function handleAddDev(e) {
    // e.preventDefault();
    
    const response = await api.post('/devs', data)
  /*
    {
      github_username,
      techs,
      latitude,
      longitude,
    })
  */

    // console.log(response.data);
    // setGithubUsername('');
    // setTechs('');
    setDevs([...devs, response.data]);
    // é assim que faz uma adição dentro de array no JS.
    // p/ remoção -> usar .filter
    // p/ alteração -> .map
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
