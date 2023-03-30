import { Routes, Route, Navigate } from 'react-router-dom';
import Memotest from './screens/Memotest';
import WordsPerMinute from './screens/WordsPerMinute';
import Pokemon from './screens/Pokemon';

function App() {

  return (
    <Routes>
      <Route path='/memotest' element={<Memotest />}/>
      <Route path='/pokemon' element={<Pokemon />}/>
      <Route path='/wpm' element={<WordsPerMinute />}/>
      <Route path='/*' element={<Navigate to="/memotest"/>}/>
    </Routes>
  )
}

export default App
