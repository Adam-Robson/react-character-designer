import { useState } from 'react';
import Display from '../Display/Display';
import Editor from '../Editor/Editor';


import './Main.css';

export default function Main() {
  const [title, setTitle] = useState('');
  return (
    <main>
      <Display title={ title } setTitle={ setTitle } />
      <Editor title={title } setTitle={ setTitle } />
    </main>
  );
}
