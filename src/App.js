import React, {useState} from 'react';

import styled from 'styled-components';

// NAVBAR COMPONENTS
import {Navbar} from './Navbar';
import {Logo} from './Logo';
import {Navlinks} from './Navlinks';
import {Navicon} from './Navicon';
import {Navlabel} from './Navlabel';
import {Navlinkscontainer} from './Navlinkscontainer';
import {Navlinkquantite} from './Navlinkquantite';
// BODY COMPONENTS
import {Formcontainer} from './Formcontainer';
import {Formtitle} from './Formtitle';
import {Checkboxcontainer} from './Checkboxcontainer';
import {Input} from './Input';
import {Button} from './Button';
// Theme Component
import {Switchtheme} from './Switchtheme';

function App( ) {

  // theme STATE
  const [theme, setTheme] = useState('light');

  // toggle theme function
  const switchTheme = () => {
    (theme === 'light') ? setTheme('dark') : setTheme('light');
  }

  // =========================

  // form data state
  const [formData, setFormData] = useState({});

  // Getting the form data
  const storeFormData = (e) => {
    // RADIO
    switch(e.target.name){
      case 'gender':
        (e.target.value !== '') && setFormData({...formData, gender: e.target.value})
        break;
    }

    // INPUT
    switch(e.target.id){
      case 'nom':
        (e.target.value !== '') && setFormData({...formData, nom: e.target.value})
        break;

      case 'prenom':
        (e.target.value !== '') && setFormData({...formData, prenom: e.target.value})
        break;

      case 'email':
        (e.target.value !== '') && setFormData({...formData, email: e.target.value})
        break;

      case 'password':
        (e.target.value !== '') && setFormData({...formData, password: e.target.value})
        break;

      case 'datenaissance':
        (e.target.value !== '') && setFormData({...formData, datenaisssance: e.target.value})
        break;

      // CHECKBOX
      case 'offres':
        (e.target.checked) ? setFormData({...formData, offres: 'on'}) : setFormData({...formData, offres: 'off'});
        break;

      case 'newsletter':
        (e.target.checked) ? setFormData({...formData, newsletter: 'on'}) : setFormData({...formData, newsletter: 'off'});
        break;
    }
  }

  // submit button
  const getFormData = (e) => {
    e.preventDefault();

    console.log('Form data here :');
    console.log(formData);
  }

  // =========================

  return (
    <div className="App">

      {/* NAVBAR */}
      <Navbar theme={theme}>
        <a href="https://imadlasri.github.io" target="_blank">
          <Logo imgsrc="img/sofa-logo.png" />
        </a>

        <Navlinkscontainer>
            <Navlinks href="">
              <Navicon imgsrc="img/icon-favoris.png" imgsrchover="img/icon-favoris-hover.png" />
              <Navlabel>Favoris</Navlabel>
            </Navlinks>

            <Navlinks href="">
              <Navicon imgsrc="img/icon-panier.png" imgsrchover="img/icon-panier-hover.png" />
              <Navlabel>Panier</Navlabel>
              <Navlinkquantite>4</Navlinkquantite>
            </Navlinks>
        </Navlinkscontainer>
      </Navbar>
      {/* END NAVBAR */}
      
      {/* FORM BODY */}
        {/* native html container to center the form component ?? */}
    
      <div theme={theme} style={{ position: 'relative', display: 'flex', justifyContent: 'center', background: (theme == 'light') ? 'white' : 'black' }}>
        {/* TOggle theme Div Button */}
        <Switchtheme theme={theme} onClick={switchTheme}>{theme} mode</Switchtheme>
        
        <Formcontainer>
          <Formtitle theme={theme}>Créer votre compte</Formtitle>
          <Checkboxcontainer >
            <input type="radio" name="gender" value="mr" onChange={storeFormData}/>
            <label>Mr</label>
            <input type="radio" name="gender" value="mme" onChange={storeFormData}/>
            <label>Mme</label>
          </Checkboxcontainer>

          <Input type="text" placeholder="Nom *" onChange={storeFormData} id="nom" />
          <Input type="text" placeholder="Prenom *" onChange={storeFormData} id="prenom" />
          <Input type="email" placeholder="Email *" onChange={storeFormData} id="email"/>
          <Input type="password" placeholder="Password *" onChange={storeFormData} id="password"/>
          <Input type="date" placeholder="Date de naissance *" dateInput onChange={storeFormData} id="datenaissance"/>

          <Checkboxcontainer flexCol>
            <Checkboxcontainer>
              <input type="checkbox" id="offres" onChange={storeFormData}/>
              <label>Recevoir les offres de nos partenaires</label>
            </Checkboxcontainer>

            <Checkboxcontainer>
              <input type="checkbox" id="newsletter" onChange={storeFormData}/>
              <label>Inscrivez-moi à la newsletter</label>
            </Checkboxcontainer>
          </Checkboxcontainer>

          <Button onClick={ getFormData }>se connecter</Button>
        </Formcontainer>

      </div>
    </div>
  );
}

export default App;
