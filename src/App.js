import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React, {useEffect, useState} from 'react';

import Button from './components/button/Button';

function App() {

  const [catFact, setCatFact] = useState({});
  const [catFactIsLoading, setCatFactIsLoading] = useState(false);


  useEffect(()=> {
    getNewCatFact();
  }, [])
 
  const getNewCatFact  = () => {
    setCatFactIsLoading(true);
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then((result) => {
      setCatFact(result);
      setCatFactIsLoading(false);
    });
  } 


  return (
    <div className="App">
      <Button label="Test Button"/>
      <hr />
      {catFact.fact}
      <div className="buttonContainer">
        <div className="button" onClick={() => getNewCatFact()}>
          <div className="buttonElementsContainer">
            <div className="iconLeft">
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
            </div>
            <div className="text">New Cat Fact</div>
            <div className="iconRight">
              {catFactIsLoading ?  
                <FontAwesomeIcon icon={faSyncAlt} /> :
                <FontAwesomeIcon icon={faArrowRight} />
              }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
