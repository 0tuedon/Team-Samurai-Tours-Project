import './App.css';
import Tour from './components/Body/Tour'
import Header from './components/Header/Header';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
        <main className="App">
      <Header />
      <Tour />
    </main>
    </ErrorBoundary>
  
  );
}

export default App;
