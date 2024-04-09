import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'; 
import NewsCard from './NewsCard';
import Button from '@mui/material/Button';

export default function NewsList({selectedCategory, searchedWord}) {

  const newsItems = [
    { 
        category: 'События',
        image: require('../images/photo_11758.jpeg.webp'),
        title: "In the footsteps of great Central Asian explorer",
        date: new Date("2014-09-02T18:12:00"),
        watches: "3001",
        comments: "1"
    },
    { 
        category: 'События',
        image: require('../images/photo_11125.jpg.webp'),
        title: "Consequences of mud flood near Almaty",
        date: new Date("2014-05-20T08:16:00"),
        watches: "3018",
        comments: "0"
    },
    { 
        category: 'События',
        image: require('../images/photo_10642.jpg.webp'),
        title: "My Kazakhstan photo exhibition",
        date: new Date("2014-05-30T14:00:00"),
        watches: "2426",
        comments: "0"
    },
    { 
        category: 'События',
        image: require('../images/photo_10212.jpg.webp'),
        title: "Kazakh village life",
        date: new Date("2014-05-20T14:42:00"),
        watches: "2832",
        comments: "1"
    },
    { 
        category: 'События',
        image: require('../images/photo_10498.jpg.webp'),
        title: "Geneva Motor Show 2014",
        date: new Date("2014-03-22T16:13:00"),
        watches: "2151",
        comments: "0"
    },
    { 
        category: 'Преступность',
        image: require('../images/3.jpeg'),
        title: "Прокурор - Бишимбаеву: Она умирала 6-8 часов, а вы позвонили гадалке",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },{ 
        category: 'Преступность',
        image: require('../images/photo_467720.jpeg'),
        title: "Суд над Бишимбаевым: трансляция 4 апреля",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'События',
        image: require('../images/2.jpeg'),
        title: "Аким Конаева ушел в отставку",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'Преступность',
        image: require('../images/3.jpeg'),
        title: "Прокурор - Бишимбаеву: Она умирала 6-8 часов, а вы позвонили гадалке",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },{ 
        category: 'Преступность',
        image: require('../images/photo_467720.jpeg'),
        title: "Суд над Бишимбаевым: трансляция 4 апреля",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'События',
        image: require('../images/2.jpeg'),
        title: "Аким Конаева ушел в отставку",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'Преступность',
        image: require('../images/3.jpeg'),
        title: "Прокурор - Бишимбаеву: Она умирала 6-8 часов, а вы позвонили гадалке",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },{ 
        category: 'Преступность',
        image: require('../images/photo_467720.jpeg'),
        title: "Суд над Бишимбаевым: трансляция 4 апреля",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'События',
        image: require('../images/2.jpeg'),
        title: "Аким Конаева ушел в отставку",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
    { 
        category: 'Преступность',
        image: require('../images/3.jpeg'),
        title: "Прокурор - Бишимбаеву: Она умирала 6-8 часов, а вы позвонили гадалке",
        date: "Сегодня в 09:51",
        watches: "83152",
        comments: "24"
    },
  ];

  // Пагинация 
  const itemsInPage = 5;
  const [currPage, setCurrPage] = useState(1);
  const start = (currPage - 1) * itemsInPage;
  const end = start + itemsInPage;
  const handlePage = (i) => {
    setCurrPage(i);
  };

  // Фильтрация по категроиям
  const filteredByCategory = selectedCategory ? newsItems.filter(item => item.category === selectedCategory) : newsItems;

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
            <Link to='/article'>
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
