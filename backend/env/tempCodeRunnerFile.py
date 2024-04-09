import os
import requests
from bs4 import BeautifulSoup
import json

def scrape_tengrinews(num_pages=3):
    base_url = 'https://tengrinews.kz/news/'
    other_url = 'https://tengrinews.kz'
    data = []
    news_id = 0 
    
    for page in range(1, num_pages + 1):
        url = base_url + f'?page={page}'
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            news_items = soup.find_all('div', class_='content_main_item')
            for item in news_items:
                real_title = item.find('span', class_='content_main_item_title').find('a').text.strip()
                article_url = item.find('a')['href']
                date = item.find('div', class_='content_main_item_meta').find('span').text.strip()
                image = item.find('a').find('picture').find('img')['src']
                views = item.find('div', class_='content_main_item_meta').find_all('span')[1].find('span', class_='content_item_meta_viewings').find('span').text.strip()
                comments = item.find('div', class_='content_main_item_meta').find_all('span')[1].find('span', class_='content_item_meta_comments').find('span').text.strip()
                news_data = {
                    'id': news_id,
                    'title': real_title,
                    'url': other_url + article_url,
                    'date': date,
                    'image': 'https://en.tengrinews.kz/' + image,
                    'views': views,
                    'comments': comments
                }
                news_id += 1
                data.append(news_data)
        else:
            print(f"Failed to retrieve data from page {page}.")
    
    src_folder = os.path.join(os.getcwd(), 'src')
    json_path = os.path.join(src_folder, 'tengrinews_data.json')
    with open(json_path, 'w') as f:
        json.dump(data, f, indent=4)
    print("Scraped data saved to tengrinews_data.json")

scrape_tengrinews(num_pages=1)
