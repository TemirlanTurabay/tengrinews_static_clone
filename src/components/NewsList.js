import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'; 
import NewsCard from './NewsCard';
import Button from '@mui/material/Button';
import scrapedData from '../tengrinews_data.json';

export default function NewsList({selectedCategory, searchedWord}) {

  // Пагинация 
  const itemsInPage = 5;
  const [currPage, setCurrPage] = useState(1);
  const start = (currPage - 1) * itemsInPage;
  const end = start + itemsInPage;
  const handlePage = (i) => {
    setCurrPage(i);
  };

  // Фильтрация по категроиям
  const filteredByCategory = selectedCategory ? scrapedData.filter(item => item.category === selectedCategory) : scrapedData;

  // Фильтрация по ключевым словам в нужной категории
  const filteredBySearch = searchedWord ? filteredByCategory.filter(item => item.title.toLowerCase().includes(searchedWord.toLowerCase())) : filteredByCategory;

  // Фильтрация по дате среди нужных ключевых слов
  const [currNews, setCurrNews] = useState([]);
  useEffect(() => {
  const sorted = filteredBySearch.map(item => ({
      ...item,
      dateString: item.date.toLocaleString()
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
    setCurrNews(sorted.slice(start, end));
  }, [filteredBySearch, start, end]);

  return (
    <div>
      <Grid container spacing={2} style={{marginTop: 30, marginLeft: 6, marginBottom: 30}}>
        {currNews.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> 
            <Link to={item.url}>
              <NewsCard title={item.title} url={item.url} date={item.dateString} image={item.image} watches={item.watches} comments={item.comments}/>
            </Link>
          </Grid>
        ))}
      </Grid>
      <div style={{textAlign: 'center'}}>
        <Button 
          variant="contained" 
          style={{backgroundColor: 'green', borderRadius: 50}} 
          onClick={() => handlePage(currPage - 1)} 
          disabled={currPage === 1}
        >
          Back
        </Button>
        <span style={{margin: '0 10px', fontSize: 25}}>{currPage}</span>
        <Button 
          variant="contained" 
          style={{backgroundColor: 'green', borderRadius: 50}} 
          onClick={() => handlePage(currPage + 1)} 
          disabled={end >= filteredBySearch.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
