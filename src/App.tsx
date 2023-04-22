import Button from './Button';
import './App.css';

function App() {
  return (
    <Button
      variant="default"
      color="primary"
      attributes={{name: 'hi', type: 'submit'}}
    >
      hi
    </Button>
  );
}

export default App;
