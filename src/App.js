import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';


export default function App() {
  const user = false;
  return (
   <Home />
  );
}
