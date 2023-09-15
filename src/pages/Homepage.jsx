import React, {useState, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/movie/Featured'
import Footer from '../components/footer/Footer'
import { CircularProgress } from "@chakra-ui/react";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?";
  const API_KEY = "d67c9a2042169f50e7f353c76bd18906";

  useEffect(() => {
    fetch(`${API_URL}api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <section>
            <Navbar />
        </section>
        <section>
            <Featured movies={movies} />
            <div className="loading">
            {loading && (
                <CircularProgress isIndeterminate color="#BE123C" size="120px" />
            )}
            </div>
            {errorMessage && (
            <>
                {" "}
                <p>No result found</p>
            </>
            )}
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Homepage
