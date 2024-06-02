import requests
from bs4 import BeautifulSoup

url = 'https://ridibooks.com/category/new-releases/2200'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser') # html 파서 씀

bookservices = soup.select('.fig-1etljec') # 클래스 짚어내기
for no, book in enumerate(bookservices, 1):
    print(no, book.text.strip())
