---
slug: howtodividetwointegers
title: How To Divide Two Integers
date: 12/1/2024
tags: ['algorithm', 'tips-and-tricks', 'bit']
lastmod: 12/1/2024
draft: false
summary: There are are so many ways to divide integers, and here is one of them, and it is not production ready 💅 way of dividing integers  💀 because sometimes solving LeetCode problems is more about flexing creative logic than writing actual production code
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/whyipshouldstoreasinteger
---

###### Integer နှစ်လုံး ဘယ်လိုစားမလဲ ?

11 /3 = 3

integer နှစ်လုံးစားတဲ့အခါမှာ dividend ထဲနေ divisor ကို ဆက်တိုက်နူတ်သွားပြီး quotient ကို တစ်တိုးသွားမယ်

```
11 -3 =8, quotient =1
8-3 =5, quotient =2
5-3 =2 , quotient =3
```

ဒီနည်းလမ်းက practical မကျပါဘူး
divisor က 1 လိုမျိုး အတော်ငယ်ပြီး dividend က 2billion လို အကြီးမျိုးဆို 1ချည်း 2 billion အကြိမ်နုတ်ရမှာ
အဆင်မပြေဘူးပေါ့
ဘယ်လိုမြန်အောင်စားမလဲ ?

### Integer တစ်လုံးကို left shift တစ်နေရာ ရွှေ့တာသည်

### အဲ့ Integer ကို ၂ နဲ့မြောက်တာနဲ့ညီစေပါတယ်

(Let's ignore overflow case here) :3  
we can ignore if we are writing in js since it will be using 64 bit for default

ဥပမာ 3 ကို 1 နေရာ LEFT SHIFT ရွှေ့တာသည် 3 ကို 2 နဲ့မြောက်တာနဲ့တူတူပါပဲ

`3 << 1 = 6`

2 bit left shift သည် 4 နဲ့မြောက်တာနဲ့ညီပါတယ်

`3 << 2 = 12`

အဲ့လိုပဲ 3 bit left shift သည် 8 နဲ့မြောက်တာနဲ့ညီပါတယ်

`3 << 3 = 24`

အဲ့လိုပေါ့

ဒီ shift တာကို သုံးပြီးinteger တွေကိုပြန်စားပါ့မယ်  
`Dividend = 11. Divisor= 3. Quotient = 0  `  
ပထမဆုံး divisor ကို left shift တစ်နေရာရွှေ့ပါမယ်

`3 << 1 = 6`

ရလာတဲ့ 6 က 11 ထက်ငယ်သေးတာမလို့ နောက်တစ် bit ထပ်ရွှေ့ပါမယ်

`3 << 2= 12`

ဒီမှာ 12 က 11 ထက်ကြီးတာမလို့ မယူဘဲ အရင်က 1 bit left shift ကိုပဲယူပါမယ်  
ပြီးရင် အဲ့ result ကို dividend ထဲက ပြန်နုတ်ပါမယ်

`11 - 6 = 5`

1 bit left shift သည် 2 နဲ့မြောက်တာနဲ့ ညီလို့ quotient ထဲကို 2 ပေါင်းပေးပါမယ်

`Dividend = 5. Divisor = 3, Quotient =2 `

အရင်လိုပဲပုံမှန်လုပ်ပါမယ်  
3 ကို 1 bit ရွှေ့ပါမယ်

`3 <<1 = 6`

6 က 5 ထက်ကြီးလို့ ထပ်ရွှေ့လိုမရပါဘူး  
Quotient ကို 1 ပေါင်းရပါမယ်  
ဆိုလိုတာက 3က နောက်ထပ်တစ်ကြိမ်ပဲ ထပ်နုတ်နိုင်တော့တာမလို့ပါ  
Why?  
Dividend က divisor ထက်ကြီးတယ် ဒါပေမဲ့ 2 နဲ့မြောက်တာထက် ငယ်တယ်  
ဒါ့ကြောင့် 1 လီပဲ ရှိတယ်လို့ ပြောလို့ရလို့ပါ

```
Dividend = 5 -3 = 2
Divisor = 3
Quotient = 2+1 = 3
```

အဲ့ချိန်မှာ Dividend က 2 ဖြစ်သွားတာမလို့ divisor ထက်ငယ်သွားပါတယ်  
ဒါဆိုရင် ထက် စားစာရာမလိုတော့ပါဘူး  
ဘာဖြစ်လို့ ဒီလိုလုပ်လို့ရလဲဆို

```
11/ 3 = (6/3) + (5/3)
      = (3×2)/3 + (3×1)/3 + 2/3
```

ဖြစ်လို့ပါ
Java နဲ့ရေးမယ်ဆိုရင်

```java:divide.java
int ans = 0;
while (dividend >= divisor) {
// long must be used here to protect from overflowing
long td = divisor, multiple = 1;
while (dividend >= (td << 1)) {
td <<= 1;
multiple <<= 1;
}
ans += multiple;
dividend -= td;
}

```

ဒီအတွက် worst case ကိုတွက်ကြည့်ရအောင်  
Worst case က ဘယ်အချိန်ဖြစ်မလဲဆို divisor က 2^n -1 ဖြစ်တဲ့အချိန်တွေမှာ 1 နဲ့စားခံရတာ  
2^n -1 ကို binary representation ပြရင်
1 တွေချည်းရပါမယ်

ဥပမာ 31 (2^5 -1) = 11111  
63 (2^6 -1) = 111111

.  
.  
.

ဆိုပါတော့ 31 ကို 1 နဲ့စားမယ်ဆို  
နုတ်ရတဲ့ outer Loop က log(dividend) ကြိမ်ဖြစ်သွားပါမယ်  
(2^n)-1 - 2^(n-1) would still result in 2^(n-1) -1  
ဆိုတော့က နုတ်တဲ့ result ကလည်း 1 တွေချည်းပြန်ထွက်မှာ,
Msb တစ်လုံးလျော့သားတာကလွဲရင်  
အာ့ကြောင့် Inner loop ကတော့ 1 bit ချင်းနည်းနည်းသွားမှာဖြစ်ပေမဲ့ worst case တွက်ရင် log(dividend) ပါပဲ  
So, outer loop လည်း log(dividend) , inner loop လည်း log(dividend)  
Time complexity would be O(log(dividend)×log(dividend))  
ခု case က dividend >= divisor  
divisor != 0  
both dividend and divisor is postive လို့ယူဆပါတယ်
