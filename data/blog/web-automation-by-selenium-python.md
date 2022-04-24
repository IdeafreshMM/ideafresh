---
slug: getting-start-selenium
title: Web automation by Selenium (Python)
date: 04/24/2022
tags: ['selenium','python']
lastmod: 04/24/2022
draft: false
summary: basic setup for selenium for web automation with python.
authors: ['tt']
canonicalUrl: ideafresh.me/blog/getting-start-selenium
---
Web automation automates websites by using some scripting languages. Selenium is an open-sourced web automation framework and it supports C#, Python, Java, Javascript, and Kotlin. The main purpose is for validating and testing for websites but it is also used for web scrapping. Moreover, other boring stuff can be done by using selenium and it is quite fun to learn and use Selenium.

Prerequisite:

1. install [Python](https://www.python.org/downloads/).
(**make sure python and pip can be used from the terminal.**)

2. install Selenium from pip:
```
pip install selenium
```

3. download the web driver related to your browser:

For me, I used chrome, so I download the [chrome driver](https://chromedriver.chromium.org/downloads).
  (**make sure your driver version and browser version are the same**)

Let's start some code.

- First, to import the webdriver.

```py:automation.py
from selenium import webdriver
driver = webdriver.Chrome("path/to/yourdriver")
```

- `get()` function to surf the website
```py:automation.py
driver.get("http://www.google.com")
```

- use the `find_element()` function to find an element

  There have several functions.
  - find_element_by_id()
  - find_element_by_name()
  - find_element_by_class_name()

  There are also other functions to find an element. I will show you later.

- To get the input text field of google search, we can use find_element_by_name("q"). This can be known by using inspect element function of the browser.
```py:automation.py
search = driver.find_element_by_name("q")
```

- To input values, we use send_keys() function
```py:automation.py
search.send_keys("hello world")
```
- To press `ENTER` key, we need to `import Keys`
```py:automation.py
from selenium.webdriver.common.keys import Keys
search.send_keys("hello world",Keys.ENTER)
```

- Final code will be:
```py:automation.py
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome("path/to/yourdriver")
driver.get("http://www.google.com")
search = driver.find_element_by_name("q")
search.send_keys("hello world",Keys.ENTER)
```

- save the file and run from the terminal.
```
python filename.py
```

This is some basic of Selenium. I will write about some more functions of Selenium, later.
![selenium-python](static/images/selenium.jpg)
