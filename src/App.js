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
    (theme == 'light') ? setTheme('dark') : setTheme('light');
  }

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
    
      <div theme={theme} style={{ display: 'flex', justifyContent: 'center', background: (theme == 'light') ? 'white' : 'black' }}>
        {/* TOggle theme Div Button */}
        <Switchtheme theme={theme} onClick={switchTheme}>{theme} mode</Switchtheme>

        <Formcontainer>
          <Formtitle theme={theme}>Créer votre compte</Formtitle>
          <Checkboxcontainer >
            <input type="checkbox" />
            <label>Mr</label>
            <input type="checkbox" />
            <label>Mme</label>
          </Checkboxcontainer>

          <Input type="text" placeholder="Nom *" />
          <Input type="text" placeholder="Prenom *" />
          <Input type="email" placeholder="Email *" />
          <Input type="password" placeholder="Password *" />
          <Input type="date" placeholder="Date de naissance *" dateInput/>

          <Checkboxcontainer flexCol>
            <Checkboxcontainer>
              <input type="checkbox" />
              <label>Recevoir les offres de nos partenaires</label>
            </Checkboxcontainer>

            <Checkboxcontainer>
              <input type="checkbox" />
              <label>Inscrivez-moi à la newsletter</label>
            </Checkboxcontainer>
          </Checkboxcontainer>

          <Button>se connecter</Button>

        </Formcontainer>

      </div>
    </div>
  );
}

export default App;
