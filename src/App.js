import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './companents/Header';
import Hero from './companents/Hero';
import Popular from './companents/Popular';
import TopRated from './companents/TopRated';
import MovieDetalis from './MovieDetalis';
import ActorDetalis from './ActorsDetalis';
import Search from './companents/Search';
import { useContext } from 'react';
import { LanguageContext } from './companents/Context';
import Favarite from './companents/Facvarite';

function App() {
  const {dark}=useContext(LanguageContext)
  return (
    <div className="App" style={{background:dark?"black":"white"}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/toprated" element={<TopRated/>}/>
        <Route path='/moviedetalis/:kinoId' element={<MovieDetalis/>}/>
        <Route path='/actorsdetalis/:actorId' element={<ActorDetalis/>}/>
        <Route path='/search/:nameMovie' element={<Search/>}/>
        <Route path='/favarite' element={<Favarite/>}/>
      </Routes>
    </div>
  );
}

export default App;
