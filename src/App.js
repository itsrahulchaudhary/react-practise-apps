import logo from './logo.svg';
import './App.css';
import Greet from './components/01-functionalComponent/Greet';
import Welcome from './components/02-classComponent/Welcome';
import Hello from './components/03-jsx/Hello';
import GreetName from './components/04-property/GreetName';
import WelcomeName from './components/04-property/WelcomeName';

function App() {
  return (
    <div className="App">
      <h3>-------------Functional Component-------------</h3>
      <Greet />
      <h3>-------------Class Component------------------</h3>
      <Welcome />
      <h3>-------------JSX------------------------------</h3>
      <Hello />
      <h3>-------------Property props-------------------</h3>
      <GreetName name="Ajay" heroName="Superman" >
        <p>This a childeren props</p>
      </GreetName>
      <GreetName name="Vijay" heroName="Batman">
        <button>Action</button>
      </GreetName>
      <WelcomeName name="Ajay" heroName="Superman" />
      <WelcomeName name="Sanjay" heroName="Heman" />
    </div>
  );
}

export default App;
