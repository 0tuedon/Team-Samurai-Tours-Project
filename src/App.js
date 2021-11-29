import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  const url = 'https://course-api.com/react-tours-project';

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
