import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'; 
import NewsCard from './NewsCard';
import Button from '@mui/material/Button';

export default function NewsList({selectedCategory, searchedWord}) {

  const newsItems = [
    { 
        category: 'Новости Актобе',
        image: require('../images/photo_468263.jpeg.webp'),
        title: "Названы регионы Казахстана с самым дорогим и самым дешевым жильем",
        date: new Date("2024-04-10T06:30:00"),
        watches: "16771",
        comments: "10",
        url: 'https://tengrinews.kz/kazakhstan_news/nazvanyi-regionyi-kazahstana-samyim-dorogim-samyim-deshevyim-531715/'
    },
    { 
        category: 'Новости Актау',
        image: require('../images/photo_468020.jpeg.webp'),
        title: "В Актау посетители кафе устроили стрельбу",
        date: new Date("2024-04-07T11:16:00"),
        watches: "12784",
        comments: "12",
        url: 'https://tengrinews.kz/kazakhstan_news/v-aktau-posetiteli-kafe-ustroili-strelbu-531492/'
    },
    { 
        category: 'Энергетика',
        image: require('../images/photo_467528.jpeg.webp'),
        title: "Я вам даю обещание: глава Минэнерго высказался о частных монополистах в энергетике",
        date: new Date("2024-04-03T11:52:00"),
        watches: "8873",
        comments: "9",
        url: 'https://tengrinews.kz/kazakhstan_news/ya-dayu-obeschanie-glava-minenergo-vyiskazalsya-chastnyih-531078/'
    },
    { 
        category: 'Теннис',
        image: require('../images/photo_435537.jpeg.webp'),
        title: "Елена Рыбакина узнала первую соперницу по турниру в Истборне",
        date: new Date("2023-06-26T08:56:00"),
        watches: "5482",
        comments: "6",
        url: 'https://tengrinews.kz/tennis/elena-ryibakina-uznala-pervuyu-sopernitsu-turniru-istborne-503168/'
    },
    { 
        category: 'Новости Усть-Каменогорска',
        image: require('../images/photo_465692.png.webp'),
        title: "Тела мужчин обнаружили возле двух кафе в Усть-Каменогорске",
        date: new Date("2024-03-16T09:12:00"),
        watches: "22214",
        comments: "6",
        url: 'https://tengrinews.kz/kazakhstan_news/tela-mujchin-obnarujili-vozle-dvuh-kafe-v-ust-kamenogorske-529450/'
    },
    { 
        category: 'Новости США',
        image: require('../images/photo_463451.jpeg.webp'),
        title: "США вводят более 500 санкций в отношении России",
        date: new Date("2024-02-23T20:32:00"),
        watches: "18082",
        comments: "49",
        url: 'https://tengrinews.kz/usa/ssha-vvodyat-bolee-500-sanktsiy-v-otnoshenii-rossii-527402/'
    },{ 
      category: 'Преступность',
      image: require('../images/photo_468430.jpeg.webp'),
      title: "Астанчанин солгал полиции - ему грозит до 5 лет лишения свободы",
      date: new Date("2024-04-10T15:44:00"),
      watches: "6954",
      comments: "5",
      url: 'https://tengrinews.kz/crime/astanchanin-solgal-politsii-grozit-5-let-lisheniya-svobodyi-531871/'
    },
    { 
      category: 'Киберспорт',
      image: require('../images/photo_468349.jpeg.webp'),
      title: "Айбек Токаев выбил из элитного турнира чемпионов The International",
      date: new Date("2024-04-10T08:31:00"),
      watches: "7390",
      comments: "1",
      url: 'https://tengrisport.kz/tnsport/aybek-tokaev-vyibil-elitnogo-turnira-chempionov-The-531789/'
    },
    { 
      category: 'Новости Алматы',
      image: require('../images/photo_468477.jpeg.webp'),
      title: "Жители Алматы почувствовали землетрясение",
      date: new Date("2024-04-10T20:15:00"),
      watches: "69110",
      comments: "23",
      url: 'https://tengrinews.kz/kazakhstan_news/jiteli-almatyi-pochuvstvovali-zemletryasenie-531909/'
    },{ 
      category: 'Новости Уральска',
      image: require('../images/photo_468077.png.webp'),
      title: "Уровень воды в реке Урал приблизился к отметке в семь метров",
      date: new Date("2024-04-08T06:00:00"),
      watches: "31182",
      comments: "10",
      url: 'https://tengrinews.kz/kazakhstan_news/uroven-vodyi-v-reke-ural-priblizilsya-k-otmetke-v-sem-metrov-531536/'
    },
    { 
      category: 'Новости России',
      image: require('../images/photo_468001.png.webp'),
      title: "Прорыв второй насыпной дамбы произошел в российском Орске",
      date: new Date("2024-04-07T00:25:00"),
      watches: "24415",
      comments: "6",
      url: 'https://tengrinews.kz/russia/proryiv-vtoroy-nasyipnoy-dambyi-proizoshel-rossiyskom-orske-531477/'
    },
    { 
      category: 'События',
      image: require('../images/photo_466884.jpeg.webp'),
      title: "Горящий мопед сняли на видео в Алматы",
      date: new Date("2024-03-28T16:52:00"),
      watches: "4483",
      comments: "6",
      url: 'https://tengrinews.kz/events/goryaschiy-moped-snyali-na-video-v-almatyi-530514/'
    },{ 
      category: 'Бокс',
      image: require('../images/photo_407335.jpeg.webp'),
      title: "Әрең жеңді. Бокс әлемі Головкин-Канело трилогиясы туралы не деп жатыр?",
      date: new Date("2022-09-19T16:58:00"),
      watches: "9861",
      comments: "1",
      url: 'https://tengrinews.kz/boxing/aren-jend-boks-alem-golovkin-kanelo-trilogiyasyi-turalyi-ne-478241/'
    },
    { 
      category: 'Новости Астаны',
      image: require('../images/photo_458628.png.webp'),
      title: "Давку на вокзале Астаны засняли пассажиры",
      date: new Date("2024-01-15T09:20:00"),
      watches: "21746",
      comments: "41",
      url: 'https://tengrinews.kz/kazakhstan_news/davku-na-vokzale-astanyi-zasnyali-passajiryi-523148/'
    },
    { 
      category: 'Новости Костаная',
      image: require('../images/photo_468063.jpeg.webp'),
      title: "Костанайцев оштрафовали за неповиновение при ЧС",
      date: new Date("2024-04-08T00:04:00"),
      watches: "14377",
      comments: "20",
      url: 'https://tengrinews.kz/kazakhstan_news/kostanaytsev-oshtrafovali-za-nepovinovenie-pri-chs-531528/'
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
