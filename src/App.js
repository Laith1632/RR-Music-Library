import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { createResource as fetchData } from './helper'




function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if(searchTerm) {
          setData(fetchData(searchTerm))
            const fetchData = async () => {
                document.title = `${search} Music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found')
                }
            }
            fetchData()
        }
    }, [search])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }
<Nav activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/about">About Us</Nav.Link>
    </Nav.Item>
/Nav>


<Form.Group>
    <Form.Label>Form Dropdown with favorite movies</Form.Label>
    <Form.Control as="select">
      <option>Inception</option>
      <option>Forrest Gump</option>
      <option>Shawshank Redemption</option>
      <option>Spiderman: Into the Spiderverse</option>
      <option>Avengers: Endgame</option>
    </Form.Control>
</Form.Group>

const renderGallery = () => {
    if(data) {
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
}


return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Suspense fallback={<h1>Loading...</h1>}>
            // <Gallery data={data} />
        </Suspense>
    </div>
)
}

export default App;





