import { useState } from 'react';

import Display from '../Display/Display';
import Editor from '../Editor/Editor';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

import './Main.css';

export default function Main() {
  <Header />;
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [head, setHead] = useState('');
  const [torso, setTorso] = useState('');
  const [legs, setLegs] = useState('');
  const [count, setCount] = useState(0);
  <Footer />;
  return (
    <main>
      <Display title={ title } setTitle={ setTitle } caption={ caption } setCaption={ setCaption } head={ head } setHead={ setHead } torso={ torso } setTorso={ setTorso } legs={ legs } setLegs={ setLegs } count={ count } setCount={ setCount } />
      <Editor title={ title } setTitle={ setTitle } caption={ caption } setCaption={ setCaption } head={ head } setHead={ setHead } torso={ torso } setTorso={ setTorso } legs={ legs } setLegs={ setLegs } count={ count } setCount={ setCount } />
    </main>
  );
}
