---
slug: shebang
title: Shebangဘာလဲ
date: 04/24/2022
tags: ['linux', 'shebang']
lastmod: 04/24/2022
draft: false
summary: What is Shebang?
authors: ['nyi']
canonicalUrl: ideafresh.me/blog/shebang
---

ကျွန်တော်တို့bash scriptရေးတဲ့အခါဖြစ်ဖြစ်သူများ‌ ရေးထားတဲ့python fileတွေရှာစမ်းတဲ့အခါမှာဖြစ်ဖြစ် fileရဲ့ပထမဆုံးကြောင်းမှာ

```shell
#! /bin/bash
#! /usr/bin/python3
```

ဒီလိုမြင်ရတတ်ပါတယ်။ ဒါ‌တွေကဘာတွေလဲ။ ဘာလို့ထည့်ထားရတာလဲ။ ဘယ်လိုလုပ်ဆောင်တာလဲ။ အရှေ့ဆုံးက number sign(**#**) နဲ့ exclamation mark(**!**) တို့နှစ်ခုကို `shebang` လို့ခေါ်တာဖြစ်ပါတယ်။ `Sha-bang`, `hashbang`, `pound-bang` နဲ့ `hash-pling` လို့လည်းခေါ်ကြပါတယ်။ သူ့နောက်မှာကပ်ပါလာတာက `interpreter` ဖြစ်ပါတယ်။ ဒီဥပမာနှစ်ခုမှာဆို `bash` နဲ့ `python3` ဖြစ်ပါတယ်။ `shebang` နောက်မှာ ကိုယ်ခေါ်သုံးချင်တဲ့ executable file ရဲ့ absolute path ကိုထည့်ပေးရတာဖြစ်ပါတယ်။ `shebang` နဲ့ `interpreter` ကြားမှာ whitespace ကထည့်လည်းရပါတယ်။ မထည့်လည်းရ ပါတယ်။

ဘယ်လိုလုပ်ဆောင်လည်းဆိုတော့ ပထမဆုံး OS ကို ကျွန်တော်ဒီ Interpreter သုံးမယ် လို့ပြောလိုက်တယ်။ အဲ့အချိန်မှာ OS ရဲ့ Program Loader ဆိုတာက အဲ့ဒီ specified interpreter ကို runလိုက်တယ်။ ပီးတော့ အခု `shebang‌` ခေါ်သုံးထားတဲ့ file ရဲ့ absolute path ကိုargument အနေနဲ့ပေးလိုက်တယ်။ ကဲဒီဟာလေးကိုလက်တွေ့စမ်းကြည့်လိုက်ရအောင်။ python file တစ်ခုကို `shebang` နဲ့ run ကြည့်ကြရအောင်။

![shebang-2](/static/images/shebang-2.png)

testShebang ဆိုတဲ့ python file လေးတစ်ခုဆောက်လိုက်တယ်။ File ထဲမှာ `shebang` က python interpreter ကိုခေါ်သုံးထားတယ်။ Hello World ဆိုပီး print တစ်ကြောင်း ထုတ်ထားတယ်။

![shebang-3](/static/images/shebang-3.png)

ပုံမှန်runမယ်ဆို ဒီလိုဆိုပီးပါပီ။

![shebang-4](/static/images/shebang-4.png)

ဒါပေမယ့်ကျွန်တော်တို့က `shebang` သုံးပီး run ချင်တာဖြစ်တယ်။

`Shebang` သုံးပီးfileတစ်ခုကိုrunချင်တယ်ဆိုရင်

- `shebang` ခေါ်သုံးထားလား
- exe abs path မှန်ရဲ့လား
- file က execute permission ရှိပီလား
ဒါတွေစစ်ရပါမယ်။

အပေါ်ကနှစ်ချက် ပီးပီဖြစ်တဲ့အတွက် execute permission ပေးပီး run ပါမယ်။ ./testShebang.py ဆိုပီး run ရတာက လက်ရှိ directory ထဲမှာရှိတဲ့ file ကို run လို့ပါ။ တကယ်အလုပ်လုပ်သွားတဲ့ပုံကို တစ်ချက်ပြပါမယ်။

python3 exe file ရဲ့ absolute path ကို‌ run တယ်။ လက်ရှိ `shebang` ခေါ်သုံးထားတဲ့ file ရဲ့ abs path ကို argument အနေနဲ့ ထည့်ပေးလိုက်တယ်။

ဒီလောက်ဆို `shebang` ဘာလဲ။ ဘာလို့သုံးလဲ။ သိလောက်ကြမယ်ထင်ပါတယ်။ ဖတ်ပေးတဲ့သူအားလုံးကို ကျေးဇူးတင်ပါတယ်။

![shebang](/static/images/shebang-1.jpg)
