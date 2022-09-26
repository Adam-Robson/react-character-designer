import { useState } from 'react';

import Display from '../Display/Display';
import Editor from '../Editor/Editor';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Stats from '../Stats/Stats';

import './Main.css';

export default function Main() {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [head, setHead] = useState('');
  const [torso, setTorso] = useState('');
  const [legs, setLegs] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [torsoCount, setTorsoCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);

  const handleChange = (kind, value) => {
    if (kind === 'head'){
      setHead(value);
      setHeadCount((prevCount) => prevCount + 1);
    }
    if (kind === 'torso'){
      setTorso(value);
      setTorsoCount((prevCount) => prevCount + 1);
    }
    if (kind === 'legs'){
      setLegs(value);
      setLegsCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <main className="container">
      <Header />
      <Display title={ title } caption={ caption } head={ head } torso={ torso } legs={ legs } />
      <Editor title={ title } setTitle={ setTitle } caption={ caption } setCaption={ setCaption } head={ head } torso={ torso } legs={ legs } handleChange={ handleChange } />
      <Stats headCount={ headCount } torsoCount={ torsoCount } legsCount={ legsCount } />
      <Footer />
    </main>
  );
}
