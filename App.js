import './App.css';
import Card from './components/Card/Card';
import Card2 from './components/Card/Card2';
import Card3 from './components/Card/Card3';
import Card4 from './components/Card/Card4';
import Card5 from './components/Card/Card5';
import Card6 from './components/Card/Card6';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Card/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
