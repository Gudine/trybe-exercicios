import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <>
      {['Athos', 'Porthos', 'Aramis', "D'Artagnan"].map(Task)}
    </>
  );
}

export default App;
