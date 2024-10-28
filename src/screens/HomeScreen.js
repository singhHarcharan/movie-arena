import React from 'react'
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navigation Bar */}  
      <Nav/>
      
      {/* Banner */}
      <Banner/>

      {/* Multiple Rows having Movies icon. */}
      {/* Different Rows with having Different props/properties */}
      {/* <a href="https://docs.google.com/document/d/10d5ISbOS2ty-X756lNZoCOqwjKzp7wtjYRO7TZEgvJk/edit">Link</a> */}
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen;