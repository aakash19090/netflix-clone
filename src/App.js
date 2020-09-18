import React from 'react';
import './App.css';
import './style.css';
import Row from "./Row";
import requests from "./requests"
import Banner from './Banner'
import Navbar from './Navbar'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <div className="inner">
                <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />
            </div>
        </div>
    );
}

export default App;
