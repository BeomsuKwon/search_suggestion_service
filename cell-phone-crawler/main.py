import requests
import csv
from bs4 import BeautifulSoup

print('Searching...')

res = requests.get('https://en.wikipedia.org/wiki/List_of_Android_smartphones')

soup = BeautifulSoup(res.content, 'html.parser')
tbody = soup.select('table.wikitable tbody th[scope=row]')

print('{} models writing into csv file.'.format(str(len(tbody))))

f = open('../files/cell-phone-names.csv','w', newline='')
fieldnames = ['product_name']
wr = csv.DictWriter(f, fieldnames=fieldnames)

for elem in tbody:
    pName = elem.text.strip()
    wr.writerow({'product_name': pName})
f.close()

print('Done')