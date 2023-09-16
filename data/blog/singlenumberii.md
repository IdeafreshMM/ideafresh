---
slug: singlenumberii
title: Bit Mainpulation (Single Number II)
date: 2/19/2023
tags: ['bit mainpulation', 'binary', 'bit']
lastmod: 2/19/2023
draft: false
summary: Binary and Manipulating Bits
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/singlenumberii
---

စာမရေးတာလည်း ကြာသွားတယ် ပြန်ရေးမယ်လုပ်တော့လဲ algorithms နဲ့ data structure အကြောင်းလည်း မရေးချင်တာနဲ့ ဘယ် topic ရေးမလဲ စဥ်းစားနေတုန်း leetcode က မေးခွန်း တစ်ခုကိုသွားတွေ့တယ်
မေးခွန်း က ဒီတိုင်းကြည့်ရင် လွယ်သလိုလိုထင်ရပေမဲ့
မေးခွန်းမှာ သတ်မှတ်ထားတာက space ကို constant O(1) နဲ့ရအောင်လုပ်ရမယ်ဆိုတာပဲ

ကျွန်တော်ကတော့ အဲ့လိုမျိုးခေါင်းစားတဲ့မေးခွန်း တွေဆိုရင် စဥ်းစားမနေပဲ အဖြေတစ်ခါထဲဖွင့်ကြည့်တာ🤣
အဲ့မှာ အဖြေလည်းမြင်ရော တစ်လုံးမှနားမလည်ဘူး
တော်တော်လည်းစိတ်ဓါတ်ကျသွားတယ်
😫🥺
အဲ့ဒါနဲ့မဟုတ်သေးပါဘူး ဆိုပြီး စာတွေပြန်လိုက်ဖတ်တယ်ပေါ့
စာဖတ်လိုက် စမ်းကြည့်လိုက်နဲ့ နည်းနည်းကြာတော့ သဘောပေါက်သလိုရှိလာတယ်

မေးခွန်းက
array ထဲမှာပါတဲ့ element တိုင်းက 3 ကြိမ် ပါတယ်
ဒါပေမဲ့ 1 ကြိမ်ပဲပါတဲ့ element တစ်ခုရှိတယ်
အဲ့ element ကိုလိုချင်တယ်ပေါ့

ဥပမာ Array = `{5,6,2,6,5,5,6}` ဆိုတဲ့ array ကိုပေးထားရင်
2 ဆိုတဲ့ တစ်ကြိမ်ပဲပါတဲ့ element ကိုပြန်ပေးရမယ်

ဖြေရှင်းလို့ရတဲ့နည်းတွေအများကြီးရှိပါတယ် sorting လုပ်ပြီးရှာမလား mapping လုပ်ပြီး count တိုးသွားမလား

ဒါပေမဲ့ ဒီနည်းလမ်းတွေက constant space မဖြစ်ဘူး

သူခိုင်းထားတဲ့အတိုင်း constant space ရအောင် Bit manipulation လုပ်ရပါမယ်
ဒီလိုပါ

```java:singleNumber.java

 public int singleNumber(int[] nums) {
        int one=0,two=0;

        for(int i=0;i<nums.length;i++){
            one=(one^nums[i]) & ~two;
            two=(two^nums[i])& ~one;

        }
        return one;
    }

```

အဖြေကိုရုတ်တရက်ကြည့်ရင် မေးခွန်းနဲ့ဆိုင်လားလို့တောင်ထင်ရပါတယ်
ဒါကြောင့်မလို့ bit နဲ့ပတ်သတ်တဲ့အခြေခံတွေ သိသင့်တာတွေ လုပ်လို့ရတာတွေ ပြောပြပေးသွားပါမယ်
ဖြေကြည့်ချင်တယ်ဆိုရင် အောက်က link မှာဖြေလို့ရပါတယ်

[Single Number II](https://leetcode.com/problems/single-number-ii/)

### Bit

ကျွန်တော်တို့ သုံးနေတဲ့Computer တွေမှာ data တွေကို 0 နဲ့ 1အဖြစ်ပြောင်းပြီးသိမ်းပါတယ်
0 နဲ့ 1 တွေဆိုတာကchipထဲက capacitor သို့မဟုတ် transistor တွေထဲမှာရှိတဲ့ electric charge တွေပဲဖြစ်ပါတယ်
electric charge ရှိရင် 1
မရှိရင် 0 ဆိုပြီးယူဆထားတာပဲဖြစ်ပါတယ်
အဲ့လိုမျိုး zero သို့မဟုတ် one ပဲသိမ်းနိုင်တဲ့ အသေးဆုံး unit ကို bit လိုခေါ်ပါတယ်

JAVA မှာ primitive data type အမျိုးမျိုးရှိတယ်<br/>
ယူတဲ့ bit အရေအတွက်ပေါ်မူတည်ပြီး data type တွေကွဲသွားတယ်
ဥပမာ integer အတွက် 32 bit ယူပြီး double အတွက်64 bitယူတယ်

ဒါကြောင့်မလို့ integer 10 ကို binary မှာဆိုအောက်ကလိုမျိုး represent လုပ်တယ်

```:10
00000000 00000000 00000000 00001010
```

JAVA ရဲ့ integer က အနုတ် number တွေလည်း represent နိုင်အောင် ပထဆုံး Bit (LMB) ကို signed bit အဖြစ်သတ်မှတ်တယ်
Signed bit ဆိုတာက 1 ဆိုရင် - အနုတ်ကို ကိုယ်စားပြုပြီး 0 ဆိုရင် + အပေါင်းကို ကိုယ်စားပြုပါတယ်
အနုတ်ဆိုရင် 2s complement လုပ်ပြီးမှ Binary မှာသိမ်းမှာပါ
ဒါကြောင့်မလို့ ( -5 )ကို သိမ်းမယ်ဆိုရင် အောက်ကလိုဖြစ်မှာပါ

```:-5
11111111 11111111 11111111 11111011
```

ပထမတစ်လုံး က `signed bit` ဖြစ်လို့ integer အတွက် (2^31-1) to - (2^31) အထိပဲဆန့်ပါတယ်

Character 'A' အတွက်ဆိုရင် သူ့ရဲ့ encode လုပ်ထားတဲ့ ASCII value ကို binary ပြောင်းပြီးပြပါတယ်
'A' ရဲ့ ASCII value က 65 ဖြစ်ပါတယ်

```:A
01000001
```

JAVA မှာ string ကို array of character အနေနဲ့ သိမ်းပါတယ်
"Hello World" ဆိုတဲ့ string ကို သိမ်းမယ်ဆိုရင် 22 byte ကုန်ပါတယ်
unicode က english ကာရိုက်တာတွေအတွက် 2byte ယူပြီး represent လုပ်မှာဖြစ်ပါတယ်

ဒီလောက်ဆို data တွေ binary အနေနဲ့ဘယ်လိုတွေ သိမ်းလဲသိလောက်ပါပြီ

ကိုစိုင်းဟွမ်ခန်းရေးထားတဲ့ article မှာလည်း ဖတ်နိုင်ပါတယ်

[How Computer Store Your Files](https://ideafresh.me/blog/how-computer-stores-your-files)

Bit တွေပေါ် operation လုပ်နိုင်ဖို့
`| , & , ^ , ~` နဲ့ shift ဖို့`<< , >> , >>>`ဆိုပြီး bitwise operatorတွေရှိတယိ
Programming Language တွေမှာ default အနေနဲ့ bitwise operator တွေကို support လုပ်ပေးပါတယ်

### Bitwise OR ( | )

oprand တစ်ခုက 1 ဆိုရင် 1 ပြန်ပေးမှာဖြစ်ပါတယ်

![Bitwise OR](/static/images/bsinglenumberii/bitwiseor.png)

### Bitwise AND ( & )

ဒီ operator က နှစ်ခုလုံး 1 မှပဲ 1 ပေးပြီးတော့ ကျန်တာဆို 0 ပေးမှာပါ

![Bitwise AND](/static/images/bsinglenumberii/bitwiseand.png)

### Bitwise XOR ( ^ )

ဝင်လာတဲ့ input ချင်းတူနေရင် zero ရပြီး မတူရင် one ရပါတယ်<br/>
တူရင် zero
မတူရင် one လို့မှတ်ထားနိုင်ပါတယ်

![Bitwise XOR](/static/images/bsinglenumberii/bitwisexor.png)

အောက်မှာbitiwse operator တွေသုံးပြီး problemတွေကိုဖြေရှင်းသွားမှာပါ

နောက်ဆုံး တစ်ခု ~ ကတော့ input တစ်ခုပဲလက်ခံပြီး ဝင်လာတဲ့ Bit တွေကို ​ဆန့်ကျင်ဘက်ပြောင်းမှာပဲဖြစ်ပါတယ်

![Bitwise NOT](/static/images/bsinglenumberii/bitwisenot.png)

နောက်ထပ်သိဖို့လိုတာက shift operatorတွေ

### Bit Shifting

Left shift `<<` operator ကbit တွေကို ဘယ်ဘက်ကိုရွှေ့သွားပြီးလွတ်သွားတဲ့ နေရာတွေကို 0 တွေ အစားထိုးသွားတယ်

ဥပမာ 5 ကို one bit ဘယ်ဘက်ရွှေ့ရင် 10 ရမှာဖြစ်ပါတယ်

![Bitwise Left Shift](/static/images/bsinglenumberii/leftwise.png)

left shift operator ကိုသုံးပြီး 2 power တစ်ခုခုဖြစ်တဲ့ number အစားထိုးမြောက်လို့ရပါတယ်
ဥပမာ 5×4 လို့မလုပ်ဘဲ 5 ကို 2bitရွှေ့လိုက်တာကလည်း တူညီတဲ့ ရလဒ်ရမှာပဲ

8 နဲ့မြောက်မယ်ဆို 3 bit<br/>
16 နဲ့မြောက်မယ်ဆို 4 bit ပေါ့<br/>

```java:multiplyBy4.java
int multiplyBy4(int n){
    return n<<2;
}
```

ရိုးရိုးအမြောက် operator သုံးတာထက်ပိုမြန်ပါတယ်
ဒါပေမဲ့ အမြဲတမ်းကော မှန်ရဲ့လား?
ရလဒ်က integer range 32 bit ထက်ကျော်သွားရင်တော့ မမှန်တဲ့ တန်ဖိုးဘဲထုတ်ပေးမှာဖြစ်ပါတယ်
Signed bit က 0 တွေ 1 ဖြစ်သွားရင် အပေါင်းဆို အနုတ်, အနုတ်ဆိုအပေါင်းတွေထွက်လာမှာဖြစ်ပါတယ်
one bit ဘဲရွေ့မယ်ဆို( 2^30 -1) ကနေ -(2^30)ထိပဲမှန်ပါတယ်
two bit ဆို 29 ထိပေါ့
အဲ့ကြတော့ risk များတယ် recommend မပေးကြဘူး
အဲ့လိုပြသာနာတွေမဖြစ်နိုင်ဘူးဆိုတာ သေချာသိမှသုံးသင့်ပါတယ်

(but if you multiple big interger on int, you will get overflow anyway so)

Right shift ကျတော့ ညာဘက်ကိုရွှေ့သွားပြီး Signed bit တွေနဲ့အစားထိုးတယ်ပေါ့

Signed bit အစားမထိုးဘဲ 0 ပဲဝင်စေချင်ရင် `>>>` Operator ကိုသုံးလို့ရပါတယ်
သူ့ကို logical right shift လို့ခေါ်ပါတယ်

![Bitwise Logical Right Shift](/static/images/bsinglenumberii/logicalrightshfit.png)

left shift က 2နဲ့မြောက်တာဆို right shift က 2 နဲ့စားတာလား?
ဟုတ်ပါတယ် ဒါပေမဲ့ ခုနလိုပဲ - အနုတ်integer တွေမှာ signed bitကြောင့် မထင်ထားတဲ့ result တွေရနိုင်တယ်ပေါ့

left shift တွေ right shift တွေကို အဓိကအားဖြင့် bit masking လုပ်တဲ့နေရာတွေမှာသုံးလေ့ရှိတယ်

bitwise operator တွေကိုသုံးပြီး bit manipulation လုပ်လို့ရပါတယ်

---

# Manipulating Bits

### Set Bit

ပထမဆုံးအနေနဲ့ index တစ်နေရာရာမှာ ရှိတဲ့ bit ကို 1 လို့ပြောင်းမှာပါ
အဲ့လိုမျိုးလုပ်တာကို set bit လို့ခေါ်တယ်

Binary 0101 ရဲ့ 1 နေရာကို 1 လို့ပြောင်းခိုင်းရင် 0111 ကိုလိုချင်တာပါ
(assume right most bit is 0 position)
လိုချင်တဲ့နေရာမှာရှိတဲ့ bit ကို set bit ပြောင်းချင်ရင် အောက်ကလိုမျိုးလုပ်လို့ရပါတယ်

```java:setBit.java

int setBit ( int n, int i){
    int mask = 1<<i;
    return mask|n;
}
```

ပထမဆုံး mask ထဲကို 1 ကို i အကြိမ်ရွေ့ထားတဲ့တန်ဖိုးကိုထည့်ထားတယ်

i က 1 ဆို

00000000000000000000000000000010
လို့ရမှာဖြစ်ပါတယ်

i နေရာမှာရှိတဲ့ bit ကလွဲပြီးကျန်တာက 0 ပါ<br/>
ရလာတဲ့ mask တန်ဖိုးကို number နဲ့ပြန် OR ပါတယ်<br/>
0 နဲ့ OR တိုင်းအရင်တန်ဖိုးပဲပြန်ရပြီး 1 နဲ့ OR တဲ့အခါမှာ 1 ရမှာဖစ်လို့ လိုချင်တဲ့ result ကိုရမှာပဲဖြစ်ပါတယ်

### Is Set Bit?

ဒီတစ်ခါတော့ ပေးထားတဲ့ position မှာရှိတဲ့ bit က set bit ဖြစ်မဖြစ်သိချင်တာပါ

အောက်လိုမျိုးရေးပြီး စစ်လို့ရပါတယ်

```java:isSetBit.java

boolean isSetBit(int n,int position){

    int mask= n>>position;

    return 1&mask==1;

}

```

လိုချင်တဲ့ bit ကိုနောက်ဆုံး right ဆုံးကိုပို့လိုက်ပြီး 1နဲ့ & လိုက်တာပါ
binary မှာဆို 1 ရဲ့ရှေ့မှာ 0 တွေရှိပါတယ် အဲ့ဒီ zero တွေနဲ့ n ထဲက bit တွေနဲ့ & လိုက်ရင် zero တွေဖြစ်ကုန်ပြီး နောက်ဆုံး bit ကတော့ 1 နဲ့ & and ထားတဲ့ Result ကိုထုတ်ပေးမှာပါ
ဒါကြောင့်မလို့ 1 ထွက်လာရင် set bit ဖြစ်ပြီး 0 ဆိုရင် set bit မဖြစ်ပါဘူး

### Clear Bit

Position မှာရှိတဲ့ bit ကို zero အဖြစ်ပြောင်းချင်တာပါ
ဒီလိုမျိုးလုပ်လို့ရပါတယ်

```java:clearBit.java
int clearBit(int n,int position){

    int mask = 1<< position;
    mask =~mask;
    return mask&n;
}
```

ပထမဆုံး position မှာရှိတဲ့ bit ကို 1 လို့ပြောင်းပါတယ်
ပြောင်းပြီးမှ Bitwise NOT လုပ်လိုက်ရင် position မှာရှိတဲ့ bit ကလွဲရင် ကျန်တာအကုန် 1 ဖြစ်ကုန်မှာပါ

1 နဲ့ ဘယ်bit မဆို & တိုင်း အဲ့bit ပဲပြန်ရမှာပါ<br/>
1 & 0 = 0<br/>
1 & 1 = 1<br/>

ဒါပေမဲ့ zero နဲ့ bitwise and ရင်တော့ zero ပဲပြန်ရမှာပါ
ဒါကြောင့်မလို့ position မှာရှိတဲ့ bit က zero ပြောင်းသွားပြီး ကျန်တာက ဒီတိုင်းကျန်ခဲ့မှာပါ

ဒီလိုမျိုး bit တွေကိုပြောင်းလိုက်လို့ကော ဘာထူးသွားလဲ ဘယ်နေရာတွေမှာ သုံးမှာလဲလို့ မေးစရာရှိလာနိုင်ပါတယ်

ဥပမာတစ်ခုပြပါမယ်

ကျွန်တော်တို့ String တွေကို upper case ကနေ lower case ပြောင်းတဲ့အခါမှာ built-in function တွေ သုံးရင်သုံး,
မသုံးရင် ascii value တွေ ပေါင်းပြီး ပြောင်းကျတယ်

![Character in Binary](/static/images/bsinglenumberii/tolowercase.png)

Binary တန်ဖိုးတွေကိုကြည့်ရင် 5 ခုမြောက် bit ပဲကွာတာကိုသတိထားမိမှာပါ  
အဲ့bit ကို 1 ပြောင်းနိုင်ရင် lower case ကိုတစ်ခါထဲရမှာပါ
1ပြောင်းဖို့အတွက် အပေါ်က setBit function ကိုသုံးပြီးပြောင်းလို့ရပါတယ်
အောက်ကလိုဖြစ်မှာပါ

```java:toLowerCase.java
String toLowerCase(String string){
    int mask=1<<5;
    String ans="";
    for(int i=0;i<string.length();i++){
    ans+=(char)(string.charAt(i) | mask);
}
return ans;
}
```

---

### Unique Integer

^ Bitwise XOR က တူရင် zero ထုတ်ပေးပြီး မတူရင် 1 ထုတ်ပေးတယ်<br/>
array ထဲမှာ element တိုင်းက 2 ကြိမ်ပါတယ် ဒါပေမဲ့ element တစ်လုံးက 1 ကြိမ်ပဲပါတယ် အဲ့ element ကိုလိုချင်တယ် ဆိုပါစို့

Array = `{5,6,7,6,5,7,8,9,9}`

Array ထဲမှာ တစ်ကြိမ်ထဲပါတာက 8 ဆိုတဲ့ integer
ကျန်တာက 2 ကြိမ်စီပါတယ်
8 ကိုဘယ်လိုရှာမလဲပေါ့?
sorting စီပြီးသွားမလား mapping လုပ်ပြီး count တိုးသွားမလား
ဖြေရှင်းလို့ရတဲ့နည်းအမျိုးမျိုးရှိတယ်,
sorting စီမယ်ဆိုရင်တောင် time မှာ nlogn ကြာပြီး space က n ကုန်နေပြီ<br/>
ဒါပေမဲ့ ^ operator ကိုသုံးပြီး ဖြေရှင်းလို့ရတယ်
Time ဘက်ကကြည့်ရင် O(n)
Space ဘက်ကကြညိ့ရင် O(1)ပဲကုန်မယ်
အောက်ကလိုမျိုးလုပ်မှာပါ

```java:uniqueInteger.java
int uniqueInteger(int[] array){

    int x=0;
    for(int i=0;i<array.length;i++){
    x^=array[i];
    }
    return x;
}
```

xor လုပ်လိုက်ရင် တူတဲ့ integer တွေက zero တွေဖြစ်ကုန်ပြီး တစ်လုံးထဲပါတဲ့ကောင်က 0 နဲ့ xor လုပ်တော့ သူ့တန်ဖိုးပဲကျန်ခဲ့လို့ဖြစ်ပါတယ်
space မှာလဲ x တစ်လုံးထဲမှာပဲ နေရာယူပြီးလုပ်သွားလို့ constant space ရပါတယ်
time မှာလဲ array ကိုတစ်ကြိမ်ပဲ iterate လုပ်သွားလို့ O(n)
ဖြစ်မှာပါ<br/>
နားမလည်ဘူး မရှင်းဘူးဆိုရင် အပေါ်ကစာတွေပြန်ဖတ်ကြည့်ပါ

---

### Check power of 2

4 ဆိုရင် 2^ power ဖြစ်တယ်
8 ဆိုရင်လည်း 2^ power ဖြစ်တယ်
16, 32, 64 တို့လဲ 2^ power ဖြစ်တယ်
3,5,6,7,9,10,11,12,13 စတာတွေကျတော့မဟုတ်ဘူး

ဒါဆိုinteger တစ်လုံးက 2 power တစ်ခုခုနဲ့ညီလား ဘယ်လိုစစ်မလဲ?

2တွေမြောက်သွားပြီး တန်ဖိုးကျော်သွားရင် မဟုတ်ဘူး
တန်ဖိုးချင်းညီရင်တော့ဖြစ်တယ်
ဒီလိုမျိုးဖြေရှင်းလို့လဲရတယ်
ဒါပေမဲ့ integer က ကြီးတဲ့အချိန်မှာ 2 တွေအကြိမ်ရေများစွာမြောက်ရမယ်
32bit integer အတွက်ဆို 32 ကြိမ်ထိမြောက်ရနိုင်ချေရှိမယ်
32 ကြိမ်လောက်က computer အတွက်ဆို ဘာမှ မကြာဘူးပေါ့
ဒါပေမဲ့ code ရေးကြည့်ရင် ရုပ်ဆိုးတယ် မမိုက်ဘူးပေါ့<br/>
မိုက်အောင် အောက်ကလိုရေးလို့ရတယ်

2 power တစ်ခုခုနဲ့ညီတဲ့တန်ဖိုးတွေကို ရဲ့ binary တွေကို ပထဆုံးချရေးကြည့်ပါ

2 ==> 10

4 ==> 100

8 ==> 1000

16 ==> 10000

set bit တစ်လုံးပဲ အမြဲတမ်းပါတယ် ကျန်တာတွေက zero ဖြစ်နေတာကို သတိထားမိမှာပါ
အဲ့ဒီအခြေအနေကိုအသုံးပြုပြီး အောက်ကလိုမျိုးစစ်လို့ရပါတယ်

```java:checkPowerOfTwo.java
boolean checkPowerOf2(int n){

    return  n&n-1 ==0;

}
```

n က သာ power of 2 တစ်ခုခုရဲ့ value တာဖြစ်မယ်ဆိုရင် n-1 က set bit ရဲ့နောက် bit တွေကို 1 အဖြစ်ထုတ်ပေးမှာပါ
ဥပမာ

7 ==> 111<br/>
15 ==> 1111

ဒါကြောင့်မလို့ n နဲ့ n-1 ကို and တာက 0 ဆိုရင် power of 2 ဖြစ်လို့ true ပြန်ပေးပြီး တစ်ခြား integer ဆို false ပြန်ပေးမှာပါ

အဲ့ဒါက power of 2 စစ်တာပေါ့

---

### Quickest way to swap to number

programming language တွေသင်တဲ့အခါ integer နှစ်လုံးကို swap ခိုင်းတဲ့ program လေးတွေလည်း လုပ်ရလေ့ရှိပါတယ်

ပုံမှန်ဆို ဒီလိုရေးပါတယ်

```java:swap.java

void swap(int a,int b){
  int temp=b;
  b=a;
  a=temp;
}

```

temp ဆိုတဲ့ variable တစ်လုံးကိုသုံးပြီး swap သွားတာပေါ့

အဲ့အပေါ်ကိုအခြေခံပြီး bit manipulate လုပ်ပြီးလည်း swap လို့ရပါတယ်
အောက်ကလိုပါ

```java:swap.java

void swap(int a,int b){
  int temp=a^b;
  a=temp^a;
  b=temp^b;

}

```

အဲ့program ကိုနောက်ထပ်မြင့်လို့ရပါသေးတယ်
variable တစ်လုံးယူမယ့်အစား a ထဲကိုပဲထည့်လိုက်မှာပါ

```java:swap.java

void swap(int a,int b){

    a ^= b;
    b ^= a;
    a ^= b;
}
```

ပထမဆုံး a ထဲကို a^b ကိုထညိ့လိုက်တယ် x ကိုမသုံးတော့ဘဲ

b ကိုလိုချင်ရင် a နဲ့ b နဲ့ xor လုပ်

ဒါပေမဲ့ a ကိုလိူချင်ရင် a^a လုပ်လို့မရပါဘူး 0 ဖြစ်သွားလိမ့်မယ်

ဒါပေမဲ့အရင် a က b ထဲကိုရောက်နေပါပြီ ဒါကြောင့်မလို့ a=a^b ကိုထည့်လိုက်ရင် a ပြန်ရမှာပါ

အပို variable ကြေညာစရာမလိုတော့ဘူး
နှစ်ခုလုံး swap သွားပြီဖြစ်ပါတယ်

---

### XOR from 1 to n

ဒီ problem က 1 ကနေ n ထိ xor လုပ်ခိုင်းတာပါ

ဆိုလိုတာက n က 5 ဆိုရင်
( 1 xor 2 xor 3 xor 4 xor 5 )ရဲ့ result ကိုလိုချင်တယ်လို့ပြောတာပါ

brute force နဲ့ 1 ကနေ စပြီး xor လုပ်သွားလို့ရတယ်

တစ်ကယ်လို့ n က ကြီးရင်ကြီးသလို time မှာ အချိန်ကြာသွားမယ်

သူ့ကို constant time နဲ့ဖြေရှင်းဖို့ ပထမဆုံး binary တွေချရေးကြည့်ပါ

![Number in Binary](/static/images/bsinglenumberii/xorton.png)

သတိထားမိမှာပါ အစဥ်လိုက်ဖြစ်နေတဲ့ integer နှစ်လုံးကို xor တိုင်း 1 ပဲရတယ်ဆိုတာ
(have to start with even)

Even ဖြစ်တဲ့ number တွေကိုကြည့်ပါ
စုံဖြစ်တဲ့number အထိxor လိုက်ရင်
n သို့မဟုတ် n+1 ပဲရနိုင်တယ် ဘယ်စုံကိုကြည့်ကြည့်ပေါ့
အဲ့လိုပဲ odd မ ဘက်ကြည့်ရင်လည်း 0 သို့မဟုတ် 1 ပဲရတယ်

ဒါကြောင့်မလို့ သူ့ကိုအောက်ကလိုရေးပြီး constant time နဲ့တွက်လို့ရပါတယ်
ဒီလောက်ဆို Bit manipulation အကြောင်းသိသင့်တာသိသွားပြီပေါ့

```java:computeXOR.java
  int computeXOR(int n)
  {
    if (n % 4 == 0)
      return n;
    if (n % 4 == 1)
      return 1;
    if (n % 4 == 2)
      return n + 1;
    else
      return 0;
  }
```

<p>Last Edited : Sep/16/23</p>
