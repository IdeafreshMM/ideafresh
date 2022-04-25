---
slug: useful-functions-selenium
title: Selenium ရဲ့ အသုံးများသော function များ
date: 04/24/2022
tags: ['selenium','python']
lastmod: 04/24/2022
draft: false
summary: Selenium ရဲ့ အသုံးများသော function များ
images: ['/static/images/selenium.jpg']
authors: ['tt']
canonicalUrl: ideafresh.me/blog/useful-functions-selenium
---

1. `get()` function

    argument ကတော့ ကိုယ် surf လုပ်ချင်တဲ့ link ပါ

    ```py
    driver.get("http://www.google.com")
    ```

2. find_element_by_id()
    - find_element_by_name()
    - Find_element_by_class_name()
    - Find_element_by_xpath()

    ကိုယ်ရှာချင်တဲ့ web element ကို id ၊ name ၊ css class ဒါမှမဟုတ် xpath ပေးပြီးတော့ ရှာလို့ရပါတယ်

    Example:

    ```html
    <html>
    <body>
    <div class="red blue" id="div-id" name="div-name">Hello world</div>
    <div class="blue" id="div-2-id">Hi</div>
    </body>
    </html>
    ```

    အပေါ်ကလိုမျိုး html file ထဲမှာ Hello world ဆိုတဲ့ element ကို ရှာချင်ရင်

    ```py
    driver.find_element_by_id("div-id")
    driver.find_element_by_name("div-name")
    driver.find_element_by_class_name("red")
    ```

    ဆိုပြီးတော့ ကြိုက်တဲ့ နည်းလမ်းနဲ့ ရှာလို့ရတယ်

    `Xpath` (XML Path Language) ဆိုတာဘာလဲ

    Xpath ဆိုတာ web element ထဲမှာပါတဲ့ ကြိုက်တဲ့ attribute နဲ့ value ကိုသုံးပြီးရှာတာပါ။
    ရေးနည်းကတော့

    ```html
    tagname[@attributename='valuename']
    ```

    Xpath က နှစ်မျိုးရှိတယ်

    Relative xpath နဲ့ Absolute xpath
    Relative xpath ကတော့ html path လမ်းကြောင်းကို အစအဆုံးမရေးပဲ ကိုယ်ရှာချင်တာကိုပဲ တိုက်ရိုက်ရေးတာ

    ```py
    driver.find_element_by_xpath("//div[@name='div-name']")
    ```

    အပေါ်ကလိုရေးနည်းက relative ပုံစံနဲ့ရေးတာ ဖြစ်တယ်။ absolute နဲ့ရေးမယ်ဆိုရင်တော့ html path လမ်းကြောင်းကို အစအဆုံးရေးရတယ်။

    ```py
    driver.find_element_by_xpath("html/body/div[0][@name='div-name']")
    ```

    `Xpath` ကို `html tag` တွေမှာ `id` တို့ `name` တို့ `class` တို့ စတဲ့ တွေ မပါရင်ဖြစ်ဖြစ် မသုံးချင်ရင်ဖြစ်ဖြစ် သုံးသလို သူ့ရဲ့ အသုံးဝင်တဲ့ `function` တွေကြောင့်လည်း သုံးတယ်။

    - `text()` - `tag` ထဲမှာရှိတဲ့ `text` နဲ့ရှာရင် သုံးတယ်။

    ```py
    driver.find_element_by_xpath("//div[text('Hello world']")
    ```

    - `contains()` - `attribute` မှာ value အတိအကျ သိစရာ မလိုပဲ ရှာလို့ ရတယ်။ css class ရဲ့ value နှစ်ခု လုံးပါတဲ့ element ကို မှ select လုပ်ချင်ရင်လည်း သုံးလို့ရတယ်။

    ```py
    driver.find_element_by_xpath("//div[contains(class,'red blue')]")
    ```

    - `starts-with()` - `contains()` နဲ့တူပါတယ်။ ဒါပေမဲ့ argument မှာပါတဲ့ value နဲ့ စတာ ကို ပဲ ရှာပေးတယ်။

    ```py
    driver.find_element_by_xpath("//div[starts-with(class,'re')]")
    ```

    ပြီးတော့ OR တို့ AND တို့လို operator တွေကိုလည်း အသုံးပြုလို့ရပါသေးတယ်။

    ```py
    driver.find_element_by_xpath("//div[@id='div-id' AND @name='div-name']")
    ```

    Xpath မှာ နောက်ထပ်တစ်ခြား function တွေနဲ့ တစ်ခြား အသုံးဝင်မှုတွေ အများကြီးရှိပါသေးတယ်။

    `find_elements_by_id()`
    `find_elements_by_name()`
    `find_elements_by_class_name()`
    `find_elements_by_xpath()`
    find_element function တွေနဲ့ အတူတူပါပဲ။ ဒါပေမဲ့ အခုက ကိုက်ညီ တဲ့ element အကုန် return ပြန်မှာပါ။

    3. Click()

    ဒီ function ကတော့ element တစ်ခုကို နှိပ်ချင်ရင်ဖြစ်ဖြစ် link တစ်ခုခုကို နှိပ်ချင်ရင်ဖြစ်ဖြစ် သုံးပါတယ်။
    Example:

    ```py
    submit = driver.find_element_by_id("submit")
    submit.click()
    ```

3. getText()

    Element ထဲမှာရေးထားတဲ့စာသားကို ယူချင်ရင် getText() ကိုသုံးပါတယ်။ argument ပေးစရာမလိုပါဘူး return type ကတော့ String ပါ

    ```py
    hello = driver.find_element_by_id("div-id")
    print(hello.getText()) *This will print Hello world.
    ```

4. sleep()

Web page loading လုပ်နေတဲ့ အချိန် လုပ်မဲ့ အလုပ်ကို ခနရပ်ထားဖို့အတွက်သုံးပါတယ်။ အကယ်လို့ loading လုပ်တဲ့အချိန်ကိုမစောင့်ဘူးဆိုရင် element တွေ ရှာလို့မတွေ့တာမျိုးတွေဖြစ်နိုင်ပါတယ်။ အဲ့ဒါမျိုးဆိုရင်တော့ NoSuchElementException တက်နိုင်ပါတယ် argument ကတော့ အချိန် ပါ တန်ဖိုးကို second နဲ့တွက်ပါတယ်။

ဒါကတော့ Selenium ရဲ့အသုံးများတဲ့ function အချို့ပဲဖြစ်ပါတယ်။ တစ်ခြား အသုံးဝင်တဲ့ function တွေလည်း ရှိပါသေးတယ်။ ကျွန်တော်က တော့ ရေးရမှာ ပျင်းလို့ ဒီလောက်နဲ့ပဲ ရပ်ပါတော့မယ်။ ဆက်လက်လေ့လာချင်တယ် ဆိုရင်တော့ medium က article တစ်ခု မှာ ဆက်ဖတ်ကြည့်လို့ရပါတယ်။ နောက်ပြီး တော့ selenium ရဲ့ website မှာ လည်း သွားရောက်လေ့လာလို့ ရပါတယ်။ အောက်မှာ link ပေးထားပါတယ်။

[Selenium Docs](https://selenium-python.readthedocs.io/)

[Medium article](https://link.medium.com/XRgzsVd5z7)

![Selenium](/static//images/selenium.jpg)
