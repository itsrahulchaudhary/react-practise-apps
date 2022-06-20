import logo from './logo.svg';
import './App.css';
import Greet from './components/01-functionalComponent/Greet';
import Welcome from './components/02-classComponent/Welcome';
import Hello from './components/03-jsx/Hello';
import GreetName from './components/04-property/GreetName';
import WelcomeName from './components/04-property/WelcomeName';
import Message from './components/05-state/Message';
import Counter from './components/06-setState/Counter';
import NewGreet from './components/07-destructuringPropsandState/NewGreet';
import NewWelcome from './components/07-destructuringPropsandState/NewWelcome';
import FunctionClick from './components/08-eventHandling/FunctionClick';
import ClassClick from './components/08-eventHandling/ClassClick';
import EventBind from './components/09-bindingEventHandler/EventBind';
import EventBind2 from './components/09-bindingEventHandler/EventBind2';
import ParentComponent from './components/10-methodvsprops/ParentComponent';

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
      <h3>-------------State----------------------------</h3>
      <Message />
      <h3>-------------setState-------------------------</h3>
      <Counter />
      <h3>-------------Destructuring Props and State-------------------------</h3>
      <NewGreet name="Ajay" heroName="Superman" />
      <NewGreet name="Vijay" heroName="Batman" />
      <NewWelcome name="Ajay" heroName="Superman" />
      <NewWelcome name="Sanjay" heroName="Heman" />
      <h3>-------------Event Handling-------------------------</h3>
      <FunctionClick />
      <ClassClick />
      <h3>-------------Binding Event Handling-------------------------</h3>
      <EventBind />
      <EventBind2 />
      <h3>-------------method vs props-------------------------</h3>
      <ParentComponent />
    </div>
  );
}


export default App;
