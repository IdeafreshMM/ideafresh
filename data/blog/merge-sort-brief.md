---
slug: mergesort
title: Merge Sort Brief
date: 11/20/2022
tags: ['algorithm', 'mergesort', 'sorting']
lastmod: 11/20/2022
draft: false
summary: A short explanation of merge sort
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/mergesort
---

Merge sort သည် Divide and Conquer technique ကိုအခြေခံထားတဲ့ sorting တစ်ခုဖြစ်တယ်
Divide and Conquer ကိုDefinition အရပြောမယ်ဆို
Problem တစ်ခုကို sub-problem အသေးလေးတွေအဖြစ်ပြောင်း
အဲ့ sub-problem လေးတွေကိုဖြေရှင်း
ဖြေရှင်းလို့ရလာတဲ့ အဖြေတွေကို combine လုပ်ပြီး မူလ Problem ကိုဖြေရှင်းခြင်းလို့ဆိုပါတယ်
ပုံမှန်အားဖြင့် recursive နဲ့ပဲ implement လုပ်သွားတာဖြစ်တဲ့အတွက် sub-problem တွေကနေ ထွက်လာတဲ့ solution တွေကို မသိမ်းထားကြပါဘူး
အရင်က တွက်ဖူးတဲ့ sub-problem တွေကို ပြန်ပြန်တွက်ရပါတယ်
အာ့ကြောင့်မလို့ recursion နဲ့ Divide and Conquer လုပ်မယ်ဆို
sub-problem တွေ ခဏ ခဏ မတူတဲ့ case တွေမှာပဲ apply လုပ်သင့်ပါတယ်

#### Algorithm

sort ချင်တဲ့ list ကို တစ်ဝက်စီခွဲ ခွဲသွားပါမယ်
ဘယ်ချိန်ထိခွဲမလဲဆိုရင် list သည် itemတစ်ခုပဲကျန်တာ သို့မဟုတ်
တစ်ခုမှမကျန်တာ
အဲ့သည်လိုရောက်သည်အထိခွဲပါတယ်
item တစ်ခုပဲကျန်ရင် အဲ့ itemသည်က sorted ဖြစ်ပြီးသား
အဲ့နောက်ဆုံးတစ်ခုပဲကျန်တော့တဲ့ item တွေကို အရင်ကသူနဲ့ 2 ပိုင်းခွဲခံထားရတဲ့ item နဲ့ ပြန် merge
အဲ့လို့ပြန် ပြန် merge ရင်းနဲ့ နောက်ဆုံး လိုချင်တဲ့ sorted list ကြီးရလာပါလိမ့်မယ်

![merge sort](/static/images/mergesort/merge.jpg)

ပထမတစ်ဆင့်မှာ
5,2,4,7နဲ့
1,3,2,6ဆိုပြီး
ခွဲမယ်
တစ်ခုထက်မကကျန်သေးလို့ အဲ့ list တွေကိုပြန်ခွဲမယ်
5,2,4,7ကို
5,4နဲ့ 2,7ဆိုပြီးခွဲမယ်
1,3,2,6 ကိုလည်း
1,3, နဲ့ 2,6ဆိုပြီး ပြန်ခွဲလိုက်မယ်
အဲ့လိုမျိုးခွဲရင်း ခွဲရင်းနဲ့ နောက်ဆုံး
item တစ်ခုစီပဲကျန်တော့မယ်
item တစ်ခုစီပဲကျန်တော့တဲ့ list သည် auto sorted ဖြစ်ပြီးသား
sorted ဖြစ်ပြီးသား list တွေကို သူနဲ့ divide လုပ်ခံထားရတဲ့ listနဲ့ merge မယ်

#### ဒီ Merge လုက်တာက algorithm ရဲ့အသက်ပဲ

sorted list နှစ်ခုကို တစ်ခုထဲအဖြစ်ပြောင်းချင်တယ်ဆိုပါစို့ <br/>
left=[1,4,5] <br/>
right=[2,7] <br/>
လိုချင်တာကans=[1,2,4,5,7] <br/>
အာ့ဆိုရင် left အတွက် pointer တစ်ခု right အတွက်တစ်ခုထား
pointerတွေ ထောက်ထားတဲ့အခန်းထဲကတစ်လုံးချင်းစီ compare လုပ်ပြီး ans ထဲထည့်သွားရုံပဲ

```java:merge.java
public static void merge(
  int[] a, int[] l, int[] r, int left, int right) {
    int i = 0, j = 0, k = 0;
    while (i < left && j < right) {
        if (l[i] <= r[j]) {
            a[k++] = l[i++];
        }
        else {
            a[k++] = r[j++];
        }
    }
    while (i < left) {
        a[k++] = l[i++];
    }
    while (j < right) {
        a[k++] = r[j++];
    }
}
```

time complexity - O(m+n)<br/>
space complexity - O(m+n) <br/>
m= size of left arr <br/>
n= size of right arr <br/>
m+n ကဘာလဲဆို final မှာဖြစ်သွားမဲ့ array ရဲ့ length ပဲဆိုတော့ <br/>
list တွေ ဘယ်လောက်ခွဲခွဲ သူတို့တွေအကုန်ကို merge လိုက်ရင် step တိုင်းမှာအမြဲတမ်း O(n) ကြာမယ်

![logn](/static/images/mergesort/logn.png)

#### Time complexity

list ကို base case ကနေ လိုချင်တဲ့အဖြေအထိ ပြန် mergeရမဲ့ level ပေါင်းက logn <br/>
ဘာလို့ log(n) လဲဆိုတော့ step တိုင်းမှာ တစ်ဝက်ဆီခွဲသွားလို့ :3 <br/>
8 ခုရှိတဲ့ list ကို တစ်ပိုင်းခြင်းခွဲသွားရင်
နောက်ဆုံး base case ရောက်သည်အထိ 3 level
16 ခုရှိတာဆိုရင် level 4 <br/>
32 ဆိုရင် level 5 <br/>
ချရေးရင် 2^h=n <br/>
h=log(n) base 2 <br/>
အရင် sorted မဖြစ်သေးတဲ့ list ကနေ အောက်ဆုံး base case ရောက်သည်အထိ level ပေါင်းက log(n) <br/>
level တိုင်းမှာ n item တွေကို ပြန်merge ရမှာမလို့
အကြမ်းတွက်ရင် time complexity သည် T(n)=O(nlogn) ဆိုပြီး ရမှာဖြစ်ပါတယ်
merge sort က ဘယ်လိုအခြေအနေမှာဖြစ်ဖြစ် ဒီပုံစံတိုင်းပဲ sort သွားတာမလို့ worst case ဖြစ်ဖြစ် avg case ဖြစ်ဖြစ်
O(nlogn) ပဲကြာမှာဖြစ်ပါတယ် <br/>
Recurison အသုံးပြုတာဖြစ်တဲ့အတွက် time complexity ကို master theorm ကိုသုံးပြီး တွက်လို့ရတယ်
T(n)=aT(n/b)+f(n)ဆိုတော့
အဆင့်တစ်ခုတိုင်းမှာ Merge က O(n) <br/>
T(n)=2T(n/2)+O(n) <br/>
T(n)=O(nlogn)ဆိုပြီးရလာမယ် <br/>
f(n) နဲ့ sub problems တွေက တူလို့ case 2 ထဲရောက်ပြီး O(nlogn)ရလာတာ

#### Space complexity

merge တာကို array အသစ်ထဲထည့်သွားရင် O(nlgn) လို့ထင်ရပေမဲ့ merge တာက တစ်ခုပြီးမှတစ်ခု လုပ်တာမလို့ garbage collect ရင် O(n) ပဲကုန်တယ်
array အသစ်မလုပ်ပဲ မူရင်းarray ပေါ်မှာပဲ ပြန်merge ထည့်တာကလဲ အသုံးများတယ်

```java:mergeSort.java

public static void mergeSort(int[] a, int n) {
    if (n < 2) {
        return;
    }
    int mid = n / 2;
    int[] l = new int[mid];
    int[] r = new int[n - mid];

    for (int i = 0; i < mid; i++) {
        l[i] = a[i];
    }
    for (int i = mid; i < n; i++) {
        r[i - mid] = a[i];
    }
    mergeSort(l, mid);
    mergeSort(r, n - mid);

    merge(a, l, r, mid, n - mid);
}

```
