import './App.css';
import React from 'react';
import News from './components/news/News';
import Search from './components/search/Search';
import Ads from './components/ads/Ads';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <div className="ya">

      <News />

      <Search />

      <Ads />
      
      <Widgets />

    </div>
  );
}

export default App;
