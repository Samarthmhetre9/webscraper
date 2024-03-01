import asyncio
import ssl
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import aiohttp
import urllib.parse

CUSTOM_HEADERS = {
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 "
                  "Safari/537.36",
    'accept-language': 'en-GB,en;q=0.9'}

domain = 'https://www.amazon.in/s?k='


ssl_context = ssl.SSLContext()
ssl_context.verify_mode = ssl.CERT_NONE

async def parse_listing(listing_url):
    print(listing_url)
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=ssl_context)) as session:
        async with session.get(listing_url, headers=CUSTOM_HEADERS) as response:
            html = await response.text()
            soup = BeautifulSoup(html, "lxml")

            img_element = soup.select('img.s-image')
            images = []
            titles = []
            for img in img_element:
                images.append(img.attrs.get('src')) 
                titles.append(img.attrs.get('alt').replace("Sponsored Ad - ","").replace("...",""))
            
            price_element = soup.select('span.a-price-whole')
            prices = []
            for p in price_element:
                prices.append(p.text.strip().replace(",","").replace(".","")) 
            
            link_element = soup.select("[data-asin] h2 a")
            urls = []
            for link in link_element:
                urls.append(urljoin(listing_url, link.attrs.get("href")))

            rating_element = soup.select("[data-asin] span.a-icon-alt")
            ratings = []
            for rate in rating_element:
                ratings.append(rate.text.replace("out of 5 stars",""))

            old_price_element = soup.select("[data-asin] span.a-text-price span.a-offscreen")
            old_prices = []
            for price in old_price_element:
                old_prices.append(price.text.replace("₹","").replace(",","").replace(".",""))

            description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit blanditiis fuga eos voluptate, similique soluta. Aliquid reprehenderit saepe pariatur recusandae autem corrupti maxime quam fuga voluptas optio sit, quod magni similique reiciendis molestias qui."

            products = []

            for i in range(min(4, len(titles), len(prices), len(old_prices), len(ratings), len(urls), len(images))):
                li = {
                    'title':titles[i],
                    'description' : description,
                    'price':int(prices[i]),
                    'old_price':int(old_prices[i]),
                    'discount':int(float(old_prices[i])-float(prices[i])),
                    'rating':float(ratings[i]),
                    'source_url':urls[i],
                    'image_url':images[i],
                    'domain':'amazon',
                }
                products.append(li)

            return products
  

async def scrape_amazon(search_data):
    url = domain + urllib.parse.quote(search_data)
    return await parse_listing(url)


