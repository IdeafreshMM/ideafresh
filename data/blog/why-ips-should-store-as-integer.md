---
slug: whyipshouldstoreasinteger
title: Why We Should Store IP Addresses As Integers
date: 10/2/2024
tags: ['data-structure', 'ip', 'bit']
lastmod: 10/2/2024
draft: false
summary: Let's take a look at why we should store ips as integers, like seriously, this isn't about your personal attachment to dotted decimals, it's about efficieny which grown-up really love
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/whyipshouldstoreasinteger
---

##### IP address တွေကို ဘာလို့ integer အနေနဲ့သိမ်းသင့်တာလဲ ?

ဥပမာ IP address `10.103.1.30` လို့ string အနေနဲ့သိမ်းမဲ့အစား integer value `175063040` လို့သိမ်းကြပါတယ်
IP address က bit အနေနဲ့ကြည့်ရင် 32 ရှိလို့ 32bit integer နဲ့သိမ်းလို့ရှိရင်ရပါပြီ,
Integer အနေနဲ့မသိမ်းပဲ string အနေနဲ့သိမ်းမယ်ဆိုရင်
`000.000.000.000` format အနေနဲ့သိမ်းရမှာမို့
Character အနေနဲ့ 15 လုံးအများဆုံးရှိပါမယ်  
Character တစ်လုံးကို 8 bit ယူတယ်ပဲထား  
15 လုံးဆိုရင် 120 bit ကုန်ပါမယ်  
IP တစ်ခုက Integer အနေနဲ့သိမ်းရင် 32 bit ပဲကုန်ပေမယ့် string အနေနဲ့ဆိုရင် 120 bit ကုန်မှာပါ<br/>
ဒါက integer အနေနဲ့သိမ်းသင့်တာတစ်ချက်ပါ<br/>
နောက် IP နဲ့ပတ်သတ်တဲ့ operation တွေ

```js:constant.js
const arr = ["10.111.64.0","10.103.1.2","10.103.1.3"]
const arr =[175063040,175063041,175063042]
```

arr ထဲကနေ ကိုယ်လိုချင်တဲ့ IP ရှိမရှိ ရှာချင်တယ်ဆို
string comparison လုပ်ရတာထက်
Integer comparison လုပ်တာက ပိုမြန်ပါတယ်
နောက်ပြီး string ရဲ့ classic problem တွေဖြစ်တဲ့ space အပိုကိစ္စ တွေ indexing လုပ်လို့မကောင်းတာတွေလည်း မကြုံရတော့ပါဘူး  
ဟုတ်ပြီ ဒါဆို IP ကို integer အနေနဲ့ဘယ်လိုပြောင်းမလဲ
User ဘက်ကနေပေးလိုက်တာက `10.111.64.0` ဆိုပါစို့
Js မှာဆိုရင် အောက်ကလို ရေးလို့ရတယ်

```js:ip2num.js
const ip2num=(ip)=> {
const res = ip
.split(".")
.reduce((sum, x, i) => sum + (x << (8 * (3 - i))), 0);
return res;
}
```

ဝင်လာတဲ့ string တစ်ခုချင်းစီကို . နဲ့ split လိုက်ပြီး
ပထမတစ်လုံးကို 24 bit left shift ရွှေ့
ဒုတိယတစ်လုံးကို 16 bit left shift
.
.
.
.
အဲ့လိုမျိုး တစ်လုံးချင်းစီ left shit ရွှေ့သွားရင် integer အဖြစ်ရသွားပါပြီ
output ကိုထုတ်ကြည့်လိုက်ရင် `10.111.64.0` ကနေ
`175063040` ဆိုပြီးပြောင်းသွားပါလိမ့်မယ်
Integer ကြီးကို user ကိုပြန်ပြလို့မရလို့ မူရင်း string ပြန်ပြောင်းမယ်ဆိုရင်

```js:num2ip.js
const num2ip=(ip)=> {
return [24, 16, 8, 0].map(ip => (ip >> n) & 0xff).join(".");
}
```

String to integer ပြောင်းသုံးက left shift ရွှေ့ထားတာမလို့ right shift ပြန်ရွေလိုက်ရင်ရပါပြီ  
ရွှေ့တိုင်း 8 bit ကိုပြန် ထုတ်ဖို့ 0xff နဲ့ and လိုက်ရင် တစ်ကန့်ချင်းစီပြန်ရမှာပဲဖြစ်ပါတယ်  
Integer အနေနဲ့သိမ်းထားတာဖြစ်လို့ bitwise operation လုပ်ရတာလွယ်ကူပါတယ်
ဥပမာ network address နဲ့ broadcast address ရှာတာမျိုး  
`10.111.74.56/25` ရဲ့ network address
`10.111.74.56` ကို integer ပြောင်းရင် `175065656` လို့ရပါမယ်
mask က 25
ပထမဆုံး cidr notation ဖြစ်နေတဲ့ mask ကို ip နဲ့ & and လို့ ရအောင်စပြောင်းရပါမယ်

```
const maskForNetwork = 0xffffffff << (0x20 - mask);
```

32 ထဲကနေ 25 ကို နုတ်, 0xffffffff (1 သုံးဆယ့်နှစ်လုံး)
နဲ့ & လိုက်ရင် network address ရပါပြီ

```
const netwrokAddress = ip & maskForNetwork;
```

နောက် broadcast address,

```
const maskForBroadcast = ~maskForNetwork;
```

Broadcast အတွက် mask ကို networkmask ရဲ့ invert ကိုယူပြီး IP နဲ့ | OR လိုက်ရုံပါပဲ

```
const broadcastInBinary = ip | maskForBroadcast;
```

IP ကို Integer အနေနဲ့ ပြောင်းထားတာမလို့ bitwise operation လုပ်ရင် အလိုအလျောက် binaryအနေနဲ့ အလုပ်လုပ်မှာပါ
Network နဲ့ broadcast ကိုရပြီးရင် ip က subnet range တွင်းရှိမရှိ တွေဘာတွေ အေးဆေးစစ်လို့ရပြီ  
Time complexity အနေနဲ့ကြည့်ရင်လည်း bitwise operation တွေက  
O(log(integer value)) or
O(length of integer in binary), which is 32, so we can assume it is constant time
