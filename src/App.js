import './App.css';
import Tour from './components/Body/Tour';
import Header from './components/Header/Header';

function App() {
  const url = 'https://course-api.com/react-tours-project';

  return (
    <div className="App">
      <Header />
      <Tour />
    </div>
  );
}

export default App;
