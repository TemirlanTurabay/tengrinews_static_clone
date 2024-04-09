import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Button from '@mui/material/Button';

export default function FooterTop({ setSelectedCategory }) {
  const categories = [
    ['Погода в Казахстане', 'Новости Актобе', 'Новости Актау', 'Энергетика', 'Теннис'],
    ['Карта Сайта', 'Новости Усть-Каменогорска', 'Новости США', 'Преступность', 'Киберспорт'],
    ['Новости Алматы', 'Новости Уральска', 'Новости России', 'События', 'Бокс'],
    ['Новости Астаны', 'Новости Костаная', 'Новости Украины', 'Черезвычайные происшествия', 'Хоккей'],
    ['Новости Шымкента', 'Новости Кызылорды', 'Новости ЕАЭС', 'Катастрофы', 'Политика'],
    ['Новости Караганды', 'Новости Атырау', 'Новости Узбекистана', 'Футбол', 'Новости спорта']
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BottomNavigation sx={{ height: 300, width: '100%', color: 'white', backgroundColor: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 150, marginTop: 10 }}>
        {categories.map((column, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            {column.map((category, idx) => (
              <Button key={idx} style={{ color: 'white' }} onClick={() => handleCategorySelect(category)}>{category}</Button>
            ))}
          </div>
        ))}
      </div>
    </BottomNavigation>
  );
}
