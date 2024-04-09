import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer_bottom from './components/Footer_bottom';
import Footer_middle from './components/Footer_middle';
import { Divider, Paper } from '@mui/material';
import Footer_verytop from './components/Footer_verytop';
import Footer_top from './components/Footer_top';
import NewsList from './components/NewsList';
import Article from './components/Article';

function App() {

  // Фильтрация по категориям
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Остановка фильтрации по категориям при нажатии на логотип
  const resetCategoryFilter = () => {
    setSelectedCategory(null);
  };

  // Фильтрация по словам
  const [searchedWord, setSearchedWord] = useState('');
  const handleSearch = (word) => {
    setSearchedWord(word);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} resetCategoryFilter={resetCategoryFilter}/>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Paper
            style={{
              width: 1200,
              height: 'auto',
              marginTop: 20,
              marginBottom: 20,
            }}
            elevation={3}>
            <Routes>
              <Route path="/" element={
                  <NewsList
                    searchedWord={searchedWord}
                    selectedCategory={selectedCategory}
                  />
                }
              />
              <Route path="/article" element={<Article />} />
            </Routes>
          </Paper>
        </div>
        <Footer_verytop />
        <Divider style={{ backgroundColor: 'grey' }} />
        <Footer_top setSelectedCategory={setSelectedCategory} />
        <Divider style={{ backgroundColor: 'grey' }} />
        <Footer_middle />
        <Divider style={{ backgroundColor: 'grey' }} />
        <Footer_bottom />
      </div>
    </Router>
  );
}

export default App;
