import './App.less';
import Layout from './layouts/index.jsx'
import {HashRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
