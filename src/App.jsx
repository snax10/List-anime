
import {Home} from './pages/Home'
import {Animes} from './pages/Animes'

import { BrowserRouter, Route } from 'react-router-dom'

import './styles/global.css'

function App() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Animes" component={Animes} />
    </BrowserRouter>
  )
}

export default App;
