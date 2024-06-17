import {  Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json';
import { useState } from 'react';
import UserComponent from './components/UserComponent';
import { ThemeContext, AuthContext } from './modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';


function App() {

  /* let type = 'fantasy';
  let setType = (val) => {
    type = val;
  } */
/* 
  let pippo = useState('fantasy');
  console.log(pippo);

  let type = pippo[0];
  let setType = pippo[1]; */

  let [type, setType] = useState('fantasy');
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState('light');
  let [authUser, setAuthUser] = useState('Mario Rossi');

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <AuthContext.Provider value={[authUser]}>
        <BrowserRouter>

        <MyNav search={search} handleSearch={handleSearch} /> 
        <Container className="my-3">
           <Welcome />
           <Routes>
              <Route index element={<AllTheBooks books={fantasy} searchQuery={search} />} />
              <Route path='/details/:asin' element={<BookDetail />} />
              <Route path='*' element={<NotFound />} />
           </Routes>
          
        </Container>
        <MyFooter />

        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
