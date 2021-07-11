import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Nav from './Components/Nav';
import Container from './Components/Container';
import NotFound from './Components/NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
    <Route component={Nav}/>
      <Switch>
      <Route exact path='/' render={ () => <Redirect to={"/flowers"} /> } />
        <Route path="/search/:query" component={Container} />
        <Route path="/flowers" render={ () => {return <Container query={'flowers'} /> }} />
        <Route path="/sunsets" render={ () => {return <Container query={'sunsets'} /> }} />
        <Route path="/boats" render={ () => {return <Container query={'boats'} /> }} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  
)

export default App;

