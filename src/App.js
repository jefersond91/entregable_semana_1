import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox';
import './App.css';

function App() {
  console.log(quotes)

  
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
