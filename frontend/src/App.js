import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import './App.css';

// page & layout imports
import Homepage from './pages/Homepage'
import BlogDetails from './pages/BlogDetails'
import Category from './pages/Category'
import LatestFour from './pages/LatestFour'
import SiteHeader from "./components/SiteHeader"

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})



function App() {



  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route exact path="/">
            <SiteHeader />
              {/* <Homepage /> */}
            </Route>
            <Route path="/details/:id">
            <SiteHeader />
              <BlogDetails />
            </Route>  
            <Route path="/category/:id">
            <SiteHeader />
              <Category />
            </Route>
            <Route path="/latestfour/:id">

              <LatestFour />
            </Route>
            
          </Switch>
          
        </div>
      </ApolloProvider>
    </Router>
  );
}



export default App