import { useState } from 'react';

import Display from '../Display/Display';
import Editor from '../Editor/Editor';

import './Main.css';

export default function Main() {

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [head, setHead] = useState('');
  const [torso, setTorso] = useState('');

  return (
    <main>
      <Display title={ title } setTitle={ setTitle } caption={ caption } setCaption={ setCaption } head={ head } setHead={ setHead } torso={ torso } setTorso={ setTorso } />
      <Editor title={ title } setTitle={ setTitle } caption={ caption } setCaption={ setCaption } head={ head } setHead={ setHead } torso={ torso } setTorso={ setTorso } />
    </main>
  );
}
