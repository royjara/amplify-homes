import './App.css';
import { NOTESNIPPETCollection, NavBar, MarketingFooter } from './ui-components'
import MinimalTextEditor from './components/MinimalNote';

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      {/* <CardECollection isPaginated itemsPerPage={3} /> */}
      <MinimalTextEditor />
      <NOTESNIPPETCollection isPaginated itemsPerPage={3} />
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
