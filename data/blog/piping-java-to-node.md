---
slug: pipingjavatonode
title: Writing Core Backend With Java
date: 1/14/2024
tags: ['tictoctoe', 'algorithm', 'game']
lastmod: 11/14/2024
draft: false
summary: There are so many ways to flex your program even tho the programs do not work correctly and has tons of bugs !🧠
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/pipingjavatonode
---

### Plain Java နဲ့ backend ရေးသားခြင်း

Third year တုန်းက TicTocToe ဆိုတဲ့ game ကိုရှယ်ရေးတာ  
unity, unreal တို့နဲ့မဟုတ်ဘူး ရိုးရိုး java code လေးနဲ့  
ဘယ်လိုအလုပ်လုပ်လဲဆိုရင် input ကို Scanner class နဲ့ လက်ခံပြီး output ကို System.out နဲ့ပြန်ထုတ်ပေးတာ  
game အလုပ်လုပ်ပုံက user ဘက်ကနေ ကိုယ်အသုံးပြုမဲ့ character တစ်ခုကိုရွေးပြီး ဘယ်အကွက်ထဲထည့်မယ်ဆိုတဲ့ input ကိုထည့်ပေးရမှာ  
ဥပမာ 1 အကွက်ကိုသွားချင်ရင် 1 ဆိုပြီးတော့ပေါ့  
computer အတွက် logic က မီရေးထားတာဆိုတော့ တော်တော်ပျော့ပါတယ် :3

အဲ့တုန်းကထင်ခဲ့တာ 5 အကွက်ကိုအရင်ဆုံးယူနိုင်ရင် နိုင်ဖို့ percent များတယ်ဆိုပြီး  
အဲ့ကြတော့ user ဘက်ကနေ 5 မသွားရသေးရင် 5 ကိုအရင်ပြေးယူတာပဲ ပြီးမှ ထောင့်အကွက်တွေပြန်ယူတာ  
တစ်ကယ်တမ်းက ဘယ်သူကအရင်စမယ်ဆိုတာနဲ့ပဲ ပိုဆိုင်တာ အဲ့တုန်းကမသိခဲ့ဘူး  
ထားပါတော့  
ဟိုတစ်လောက ပျင်းပျင်းနဲ့ ကိုယ့်github ထဲဝင်မွေတုန်း အဲ့ program လေးပြန်တွေ့တာနဲ့ browser ကနေဆော့လို့ရအောင် javascript နဲ့ပြန်ရေးမယ်လို့
လုပ်သေးတယ်  
ကိုယ့် code ကိုယ်ပြန်ဖတ်ပြီး ခေါင်းအတော်ကိုက်သွားတာနဲ့
javascript မပြောင်းရဲတော့ဘူး 🤣  
အဲ့တာနဲ့ nodejs ကနေ java ကိုဘယ်လို communicate လုပ်မလဲစဥ်းစားတော့တာ  
ပုံမှန်ဆိုမတူတဲ့ language တွေအချင်းချင်းစကားပြောဖို့ database တွေသုံးတာ ဒါမှမဟုတ် netwokတွေကနေ စကားပြောတာ မျိုးနဲ့လုပ်လေ့ရှိတယ်  
ကျွန်တော်ကတော့ pipe ကနေပဲ စကားပြောဖို့လုပ်လိုက်တယ် အခုjava program ကလည်း piped output ပဲပြန်ထုတ်ပေးတာဆိုတော့  
nodejs မှာ `spawn` ဆိုတဲ့ကောင်နဲ့ process create ပြီး ခုနက TicTacToe program လေးကိုrun လိုရတယ်  
javac နဲ့ကြိုပြီးတော့ compiled တော့လုပ်ထားရမှာပေါလေ  
process create ပြီးတာနဲ့ stdin,stdoutရယ် သုံးလို့ရပြီ  
stdin က javaကို pipe ကနေတဆင့် input ပေးဖို့ သုံးလို့ရပြီး stdout ကို pipe output steam တွေကိုဖတ်ဖို့သုံးလို့ရတယ်  
stdin ကိုသုံးပြီး ခုန java program ထဲကို input ရိုက်ထည့်မှာ  
ဝင်လာတဲ့ input ကို java က logic handle လုပ်  
ပြီးရင် System.out နဲ့ output ထုတ်  
ထွက်လာတဲ့ output ကို stdout နဲ့ပြန်ဖတ်ပေါ့  
ဒါပေမဲ့ stdout ကိုသုံးပြီးဖတ်တာ ထွက်လာတဲ့formatကအဆင်မပြေဘူး  
asyn ကြောင့်ဖြစ်တာလား buffer read တဲ့ encoding ကြောင့်လားမသိဘူး white space တွေပြောက်နေတာတို့ next line မဆင်းတာတို့ဖြစ်နေရော  
readline ဆိုတဲ့ lib ကိုသုံးမှပဲ java ကထွက်ပေးသလိုမျိူးလေးထွက်လာတော့တယ်  
readline က line by line ထုတ်ပေးတော့ဘယ်အချိန်မှ response ပြန်ရမှန်းမသိတာနဲ့ http ရဲ့ `request/response cycle` နဲ့မရတော့ဘူး
အဲ့တော့ websocket နဲ့ပဲချလိုက်တယ်  
အကျဥ်းချုပ်ဆိုရင်  
user က နေဝင်လာတဲ့ input ကို frontend ကနေ websocket နဲ့ပို့  
Node က ပြန်ပြီး java ကို pipe ကနေတဆင့် input ပြန်ပေး  
ဝင်လာတဲ့ input ကိုJava ကနေ logic တွက်ပြီးတော့ output ပြန်ထုတ်  
ထွက်လာတဲ့ output ကို node ကပြန်ဖမ်းပြီး frontend ကိုပြန်ပို့  
အဲ့လိုနဲ့ interactive TicTacToe game လေးကို browser ကနေဆော့လို့ရလာတာပေါ့

[Click Here To View Souce Code](https://github.com/ninjaboss69/JavaNode)

installation အတွက် readme လည်းရေးထားပေးပါတယ်  
မီ့ရဲ့ html/css skill ကတော့မြင်တဲ့အတိုင်းပဲ😝

![PictureOfTicTocToeWebsite](/static/images/pipe/t.jpg)
