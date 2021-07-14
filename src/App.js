import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts';
import NotFound from './components/NotFound';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/blog" component={Posts} />
          <Route path="/blog/post/:id" component={PostDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
