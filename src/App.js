import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './page/Home';
import Popular from './page/Popular';
import TopRated from './page/TopRated';
import UpComing from './page/UpComing';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/toprated" component={TopRated} />
          <Route path="/upcoming" component={UpComing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
