import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import TextArea from './components/text-area.jsx'
import VistaPrevia from './components/vistaPrevia.jsx';

function App() {
  return (
    <div className='App container d-flex'>
      <TextArea></TextArea>
      <VistaPrevia></VistaPrevia>
      <footer>Created by Enrique Labrada</footer>
    </div>
  );
}

export default App;
