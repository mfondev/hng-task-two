import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';  
  import Homepage from "./pages/Homepage";
  import Layup from './components/sidebar/Layup';
import MovieDetails from './components/sidebar/MovieDetails'
  function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<Homepage />}/>
            </Route>
            <Route path="" element={<Layup />}>
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
  }
  
  export default App;
  