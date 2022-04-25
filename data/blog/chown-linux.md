---
slug: chown-linux
title: chown - change owner and group of a file
date: 04/24/2022
tags: ['linux', 'chown']
lastmod: 04/25/2022
draft: false
summary: chown - change owner and group of a file
authors: ['default']
canonicalUrl: ideafresh.me/blog/chown-linux
---

File တစ်ခုရဲ့ owner ရဲ့ group ကိုပြောင်းချင်ရင် chown ကိုသုံးပါတယ်။ ဖိုင်တစ်ခုရဲ့ owner နဲ့ group ကိုသိချင်ရင် `ls -l command` သုံးပီးကြည့်လို့ရပါတယ်။ ဒီပုံမှာဆိုရင် `testOwner.txt` ရဲ့ owner က select လုပ်ထားတဲ့ ပထမ root ဖြစ်ပြီး ဒုတိယတစ်ခုက group ဖြစ်တယ်။
![chown-1](/static/images/chown-1.png)
file တစ်ခုရဲ့ owner ပြောင်းချင်ရင်

```shell
$chown [owner name]
```

ဒီလိုရေးပေးရပါမယ်။ `testOwner.txt` ရဲ့ owner ကို florject ပြောင်းချင်တဲ့အတွက်ကြောင့်

```shell
$chown florject testOwner.txt
```

လို့ရိုက်ပေမယ့် errorတက်ပါတယ်။ ဒီ operation ကိုခွင့်မပြုနိုင်ဘူးလို့ပြောပါတယ်။ ခွင့်ပြုဖို့အတွက်အခု command ရိုက်နေသူက super user ဖြစ်‌နေဖို့လိုပါတယ်။ sudo ကိုသုံးရပါတယ်။ Super user အနေနဲ့ ပြောင်းပီးတဲ့အခါမှာတော့ owner က florject အဖြစ်သို့ ပြောင်းသွားပါပီ ပုံမှာတွေ့နိုင်ပါတယ်။
![chown-2](/static/images/chown-2.png)
Owner ရော group ရော ပြောင်းချင်တဲ့အခါမှာ

```shell
$chown [owner name]:[group name]
```

ဒီပုံမှာဆိုရင် owner florject ,group florject ကနေ owner root, group root ကိုပြောင်းထားပါတယ်။
![chown-3](/static/images/chown-3.png)
chmod-change mode
သူကတော့ files တစ်ခုရဲ့ permissions တွေကို ပြောင်းတာလို့ အလွယ်ပြောလို့ရပါတယ်။

files တွေရဲ့ permissions ကိုသိနိုင်ဖို့ `ls -l command` ကိုသုံးပီးကြည့်ပါမယ်။ အခုပုံမှာ select လုပ်ထားတဲ့စကားလုံး 9 လုံးက file တစ်ခုစီရဲ့ permissions တွေပါ။ သုံးလုံးတစ်ဖြတ် ယူရပါ့မယ်။ ပထမတစ်ဖြတ်က User အတွက် permission တွေပါ။ ဒုတိယတစ်ဖြတ်က Group အတွက် permission တွေပါ နောက်ဆုံး အဖြတ်က Other အတွက် permission တွေပါ။

- “r” က read
- “w” က write
- “x: က execute ကိုဆိုလိုတာပါ။
- “-” ကpermissionမရှိတာကိုဆိုလိုတာပါ။
ပုံမှာ `test1.txt` ကိုကြည့်ပါ။ user အတွက် read နဲ့ write permission ဘဲရှိပီး execute လုပ်ခွင့်မရှိပါဘူး။ group အတွက်လည်း တူတူပါဘဲ။ နောက်ဆုံး other အတွက်ဆို read permission ဘဲရှိပါတယ်။
![chown-4](/static/images/chown-4.png)
chown သုံးမယ်ဆိုရင်
- userကို u
- groupကို g
- othersကို o
- all ကို a လို့အတိုကောက်သုံးသွားပါမယ်။
Permission အသစ်တစ်ခုထပ်ထည့်ချင်ရင် "+" sign ကိုသုံးပါတယ်။
Permission တစ်ခု‌ဖြုတ်ချင်ရင် "-" sign ကိုသုံးပါတယ်။
Permission တစ်ခုထဲဘဲ အတိအကျတည့်ချင်ရင် "=" sign ကိုသုံးပါတယ်။
အရင်ဆုံး `test1.txt` file ရဲ့ permission တွေကိုကလိကြမယ်။ `test1.txt` ရဲ့ user permission မှာ read နဲ့ write ဘဲရှိတာကို ကျွန်တော်တို့ execute permission ထပ်ထည့်ကြည့်ရအောင်။

chown cmd သုံးမယ်ဆို ကိုယ့်ဘက်က စဉ်းစားရမှာသုံးမျိုးရှိတယ်။

1. ဘယ့်သူ့ကို permission ပေးမှာလဲ။ (u,g,o,a)
2. ဘယ်လိုပေးမှာလဲ။ (+,-,=)
3. ဘာpermissionပေးမှာလဲ။ (r,w,x)

အခုtest1.txtကို

1. permission ပေးမှာက user ဒီတော့ u
2. ထပ်ထည့်ပေးမှာဖြစ်တဲ့အတွက် +
3. ပေးမယ့် permission က execute ဒီတော့ x

ဒီတော့ command က 

```shell
$chmod u+x test1.txt
```

ဒီပုံစံအတိုင်းဘဲ အစားထိုးသုံးသွားရပါမယ်။ ပုံမှာပြထားပါတယ်။
![chown-5](/static/images/chown-5.png)
![chown-6](/static/images/chown-6.png)
တကယ်လို့သုံးခုစလုံးကိုပြောင်းချင်တယ်ဆိုရင်တော့ a ကိုသုံးလည်းရတယ် a မထည့်ဘဲ (+,-,=) ရယ် permission type(r,w,x) ရယ်ဘဲလည်းရပါတယ်။
![chown-7](/static/images/chown-7.png)
user နဲ့ group အတွက်ဘဲ ပြောင်းချင်တယ်ဆိုရင် Comma ခြားပီးရေးလို့ရပါတယ်။
![chown-8](/static/images/chown-8.png)
အဲ့လိုပုံမှန်ရေးရင် ရှည်တယ်လို့ထင်ရင် octal permission ကိုသုံးနိုင်ပါတယ်။

ပုံပါအတိုင်း permission တစ်ခုစီကို octal number **(#အကွက်မှာ)** တစ်ခုစီနဲ့ ကိုယ်စားပြုတာဖြစ်ပါတယ်။ ဒီ octal နဲ့‌ ပေးတဲ့အခါမှာ ပုံမှန်ပေးတာနဲ့ မတူတာက ထပ်ထည့်တာတွေ ဖြုတ်တာတွေ တစ်ခုတည်းထည့်တာတွေ မရှိတော့ပါဘူး။ အတိအကျ ထည့်ရပါတယ်။
ဥပမာလေးစမ်းကြည့်လိုက်ရအောင်။
![chown-9](/static/images/chown-9.png)
ပုံမှာဆို octal နဲ့စမ်းချင်တဲ့အတွက် ကျွန်တော် octalTest ဆိုပီး text file တစ်ခုဆောက်လိုက်ပါတယ်။ သူ့မှာ user အတွက် r, w ၊ group အတွက် r, w ၊ others အတွက် r permission ရှိပါတယ်။ ဒါကို ကျွန်တော်က user အတွက် permission အကုန်ပေးပီး group ကိုကျ read ဘဲပေးပါမယ်။ others အတွက် ဘာ permission မှမပေးပါဘူး။ ဒီတော့ $chmod 740 octalTest.txt ဆိုပီးရိုက်လိုက်တယ်။ ဒီနေရာမှာ 740 ကိုရှင်းပြဖို့ လိုလာပါပီ အပေါ်က octal table လေးနဲ့ တွဲကြည့်ရင် ပိုအဆင်ပြေမယ်ဗျ။ 740 မှာ ဂဏန်းသုံးလုံး ပါတယ်။ 7 ရယ် 4 ရယ် 0 ရယ် ဆိုပီးတော့ ပထမဆုံး တစ်လုံးက user အတွက် permission ကိုကိုယ်စားပြုတယ်၊ ဒီလိုဘဲ ဒုတိယက group နောက်ဆုံးစာလုံးက others အတွက်ပေါ့။ User အတွက် အကုန်ပေးချင်တဲ့အတွက်ကြောင့် 7 ဘာလို့လဲဆို Read = 100 = 4၊ Write = 010 = 2၊ Execute = 001 = 1၊ Read+write+execute= 111 = 7။ Group အတွက် ဆို Read ဘဲ ပေးချင်တဲ့အတွက်ကြောင့် 4။ Others အတွက်ဆိုဘာမှမပေးချင်လို့ 0။
![chown-10](/static/images/chown-10.png)
