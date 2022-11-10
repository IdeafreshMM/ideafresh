---
slug: array-linkedlist
title: Array and LinkedList
date: 10/22/2022
tags: ['array', 'linkedlist']
lastmod: 11/10/2022
draft: false
summary: How Array and LinkedList Works?
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/arrayandlinkedlist
---

### Array

Array မှာ element တွေ အစဥ်လိုက် memory ပေါ်မှာနေရာယူတယ်
array တစ်ခုကိုသိမ်းချင်တယ်ဆိုရင် လိုတဲ့ memoryအလွတ်ကို ရှာပြီး အဲ့ထဲမှာ array သွားသိမ်းတယ်
ဥပမာ interger 5ခုအတွက် arrayတစ်ခု ဆောက်ချင်တယ်ဆိုရင်
memory အလွတ် 20 byte ရှိတဲ့နေရာကိုရှာပြီး array ကိုသိမ်းရတယ်
integer ဆိုတော့ 4 byte ကုန်မယ် 5လုံးစာ အတွက်ဆိုရင်
20byte
အဲ့တော့ memory မှာ 20 byte စာ နေရာလွတ်ရှာရမယ်
အဲ့မှာ array ကိုသိမ်းလိုက်တယ်ပါ့
ပြီးရင် arr[0] ရဲ့ memory address ကိုမှတ်ထားလိုက်တယ်

integer က 4byte ပဲယူတာရှိသလို 8byte ယူတာလဲရှိတယ်
အခုက 4byte နဲ့တွက်ထားတာ

memory ပေါ်မှာ same data type တွေ ဆက်တိုက်သိမ်းသွားတော့ array ထဲက တစ်ခုခုလိုချင်လာရင် address တွက်ပြီးသွားယူရုံပဲ

array 0 ခန်းရဲ့ memory address က 1024 ကစတယ်ဆိုပါစို့ array ထဲက arr[2] ရဲ့ value ကိုလိုချင်တယ်ဆိုရင်

1024 + (2 \* size of data type) ကိုသွားယူရုံပဲ

integer ဆိုရင် 4 byte

1024+(8)=1032

memory address 1032 ကိုသွား access လုပ်ရင် arrray[2] မြောက်အခန်းကိုရတယ်
1032ကနေ1036 ထိရှိသမျှ bit တွေအကုန်ယူလိုက်ရင်ရပြီ

အဲ့လိုလိုချင်တဲ့အခန်းကို memory address တွက်ပြီး access လုပ်ရုံမလို့ constant time ရတယ်

![Array Byte Addressing](/static/images/lineards/array.png)

အခြေခံအကျဆုံး data structure ဖြစ်တယ်
data structure တော်တော်များများ array ကိုအခြေခံပြီးဆောက်ကြတယ်.

ဥပမာ hashtable, heap

Hashtable ဆိုလည်း constant time ရအောင် array ထဲမှာ value တွေထည့်တယ်
heap ကျတော့ child တွေ parent တွေကို အလွယ်တကူ access လုပ်လို့ရအောင် array ကိုအသုံးပြုတယ်

အားနည်းချက်က လိုချင်တဲ့ အခန်းကို memory ပေါ်မှာ အရင်ကြေငြာရတယ် dynamic မဖြစ်ဘူး
array ထဲထပ်ထည့်ချင်တာဆိုရင်လည်း ဒီတိုင်းနောက်ဆုံးမှာထည့်လိုက်လို့မရဘူး
array ရဲ့နောက်က memory က လွတ်နေမယ်လို့ပြောလို့မရတာကိုး
အသစ်ပြန်ထည့်ချင်ရင် နောက်ထပ်ထည့်မဲ့ dataတွေအတွက် လိုတဲ့ memory အလွတ်ကိုရှာ array အဟောင်းကို copy ပြန်ကူး အဲ့လိုလုပ်ရတယ်
ဖျက်ချင်တာဆိုရင်လည်း ခုနလိုပဲ ကျန်တဲ့ element တွေ array အသစ်ထဲပြောင်းထည့်ရတယ်
အဲ့လိုမျိုးဖျက်လိုက်ရင် လုပ်ရတဲ့ operation များလို့ မဖျက်ပဲ
ဒီအခန်းကိုဖျက်လိုက်ပြီ လို့သဘောရတဲ့ Sign တစ်ခုခုနဲ့အစားထိုးလို့လည်းရတယ်
size တော့မလိုအပ်ဘဲတစ်အားကြီးသွားနိုင်တယ်ပေါ့

(memory addresss usually in hexa)

### Linked List

linked list မှာ node တွေကတစ်ခုနဲ့တစ်ခုချိတ်ပြီးmemory ပေါ်မှာနေရာနေရာယူတယ်
array လိုမျိုး memory address တွေက အစဥ်လိုက်လာစရာမလိုဘူး
linked list ထဲက node တွေမှာ သူ့ အရှေ့ node ရဲ့ reference သို့ အနောက် node ရဲ့ reference ရှိမယ်
node တစ်ခုကနေတစ်ခြားတစ်ခုကိုသွားမယ်ဆို သူသိမ်းထားတဲ့တစ်ခြားnode ရဲ့ referenceကိုသွားလိုက်ရင်ရပြီ
အဲ့လိုမျိုး reference သိမ်းထားပြီး node တွေအချင်းချင်းချိတ်ထားကြတယ်ပေါ့

Linked list ကို အမျိူးအစားခွဲရင် အဓိကအားဖြင့်

Singly Linked List နဲ့

Doubly Linked List ဆိုပြီးရှိတယ်

### Singly Linked List

Singly Linked List မှာကြတော့ node တိုင်းကနောက် node တစ်ခုရဲ့ reference ကိုပဲသိမ်းတယ်

![SinglyLinkedList](/static/images/lineards/l.PNG)

node တစ်ခုနောက်မှာ နောက်တစ်ခုရှိမယ်
node တစ်ခုနောက်မှာ နောက်တစ်ခုရှိမယ်

Java နဲ့ ရေးမယ်ဆို node တစ်ခုကို ကိုယ်စားပြုဖို့ class (template of object) တစ်ခုဆောက်ရမယ်

Java မှာ object တစ်ခုဆောက်မယ်ဆို `new` ဆိုတဲ့ keyword ကိုသုံးပေးရတယ် အဲ့ကြမှ runtime မှာ JVM ကheap ပေါ်မှာ object ဆောက်ပြီး reference ကို return ပြန်ပေးတယ်
reference ဆိုတာကြတော့ heap ရဲ့ဘယ်နေရာမှာ object ကိုသိမ်းထားလဲဆိုတဲ့ address pointer တစ်မျိုးပေါ့

```java:SinglyLinkedList.java

public class SinglyLinkedList {

    public Node head = null;

    class Node {

        int data;

        Node next;

     public Node(int data) {

            this.data = data;

            this.next = null;

        }
    }
}

```

အပေါ်က code ကိုကြည့်ရင် node တစ်ခုရှိမယ် အဲ့ node ထဲမှာ နောက် node တစ်ခုရဲ့ reference ရှိမယ်

SLL ကnext node ရဲ့ referece ကိုသိမ်းရတာမလို့ array ထက် memory ပိုကုန်တယ်

ဒါပေမဲ့ node အသစ်ထပ်ထည့်ချင်ရင် ပထမဆုံး node ရဲ့ reference ကိုသိရုံနဲ့ ထည့်လိုက်လို့ရတယ်

node တွေကျတာ့ array လိုမျိုး memory ပေါ်မှာအစဥ်လိုက်ဖြစ်စရာမလိုတော့ဘူး
next node က ဘယ်နေရာမှာပဲရှိရှိ သူရဲ့ reference ရှိတော့
အဲ့တိုင်းသွားaccessရုံပဲ

```java:addNodeAtTheBeginning.java

public void addNodeAtTheBeginning(int data) {

    Node newNode = new Node(data);

        if (this.head == null) {

            this.head = newNode;

        } else {

            newNode.next = this.head;
            this.head = newNode;

        }

}
```

ပထမနေရာကိုထည့်မယ်ဆိုရင် constant time O(1)
ဒါမှမဟုတ်နောက်ဆုံးမှာထည့်ချင်တာဆိုရင်တော့linked list တစ်လျှောက်နောက်ဆုံး node ကိုရှာရမှာမလို့ O(n)ပေါ့
ဖျက်မယ်ဆိုရင်တော့ နည်းနည်းစဥ်းစားရပြီ
ဖျက်ချင်တဲ့ node ရဲ့ reference ကိုသိပေမဲ့လည်း သူ့ကိုဒီတိုင်းဖျက်လိုက်လို့မရဘူး သူ့အရှေ့node ရဲ့ reference မသိတော့ ဒီတိုင်းဖျက်လိုက်ရင် သူ့အနောက် node တွေကို ဆုံးရူံးရနိုင်တယ်ပေါ့
အဲ့ကြတော့ node အစကနေပြီးတော့ ရှာပြီးဖျက်ပစ်ရတယ် ဆိုတော့ worst case မှာ O(n)

SLL နဲ့ပတ်သတ်ပြီး နာမည်ကြီးတာက သူ့ကို reverse လုပ်ခိုင်းတာပဲ

ဆိုလိုတာက

1 ---> 6 ---> 5 --> 4 --->2

အဲ့လိုရှိတဲ့ SLL ကို

2 ---> 4 ---> 5 ---> 6 ---> 1

ဖြေကြည့်ချင်ရင်

[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

အဲ့လိုမျိုး leetcode မှာ SLL data structure ပေးပြီး problem တော်တော်များများဖြေရှင်းခိုင်းလေ့ရှိတယ် အဲ့တော့သူ့ကိုသိကိုသိထားတာကောင်းတယ်ပေါ့

---

### Doubly Linked List

သူကျတော့ Singly Linked List လိုပဲ ဒါပေမဲ့ သူ့အရှေ့ node ရဲ့ reference ကိုလည်း node မှာသိမ်းတယ်

![DoublyLinkedList](/static/images/lineards/doubly-linked-list.png)

node တိုင်းက prev node နဲ့ next node ရဲ့ reference ကိုသိမ်းပြီးချိတ်ထားကြတယ်

```java:DoublyLinkedList.java

class DoublyLinkedList {

      class Node{

        int item;

        Node previous;

        Node next;

      public Node(int item) {

            this.item = item;

        }

    }

Node head, tail = null;

    }

```

reference နှစ်ခုလုံးထည့်ရတော့ SLLတို့ array ထက်စာရင် memory ပိုကုန်တယ်
သူ့ ထဲ node အသစ်ထည့်ချင်တာဆိုရင် SLL လိုပဲ ပထမဆုံး node နေရာထည့်လိုက်လို့ရတယ် constant time ရတယ်ပေါ့

```java:addNode.java

public void addNode(int item) {

        Node newNode = new Node(item);

        if(head == null) {

            head = tail = newNode;

            head.previous = null;

            tail.next = null;

        }

        else {

             tail.next = newNode;

             newNode.previous = tail;

                    tail = newNode;

                     tail.next = null;

        }

    }
```

အရှေ့ node အတွက်ကော အနောက် node အတွက်ကော reference ပါတာမလို့ node တစ်ခုခုကို ဖျက်ပစ်ချင်ရင် O(1) နဲ့ဖျက်လိုက်လို့ရတယ် ပြီးရင် node တစ်ခုရှိရုံနဲ့ အရှေ့ အနောက် သွားလို့ရတယ် Singly ဆိုရင် next node ပဲပါတော့ အရှေ့ပြန်သွားလို့မရဘူး

SLL ကော DLL ကော search မှာ
node အစက နေ အဆုံးထိ တစ်ခုချင်းစီ လိုက်စစ်ရလို့ O(n) ကုန်တယ်
node တွေထဲက data တွေက စီပြီးသား sorted ဖြစ်တောင် array လိုမျိုး binary search သုံးလို့မရဘူး random access မရလို့
array က sorted ဆို binary search သုံးလို့ရတာကိုး O(logn) ပဲကြာတယ်

Linked List ထဲမှာနောက်ထပ် circular singly linked ,
Circular doubly linked list တို့ဆိုပြီးရှိသေးတယ်
နောက်ဆုံး node တွေက null ကိုမညွှန်းပဲနဲ့ head node တွေကိုပြန်ညွှန်းတာမျိုးပေါ့
ဒါပေမဲ့ singly နဲ့ doubly လောက်ကိုပဲ အဓိကထားသုံးလေ့ရှိကြတယ်
array နဲ့ linked list ကိုဘယ်အချိန်မှာ သုံးသင့်တယ်ဆိုတာကတော့ ကိုယ့်ဟာကိုပဲဆုံးဖြတ်ရမှာဖြစ်ပါတယ်
array ဆို access time မြန်တယ် sorted ဖြစ်ပြီးသားဆို search တာလည်းမြန်တယ်
ဒါပေမဲ့အသစ်ထည့်ချင် ဖျက်ချင်ရင် အလုပ်ရူပ်တယ် array size ကို table doubling လုပ်သွားလို့ရပေမဲ့ မလိုအပ်ပဲ space ကြီး သွားနိုင်တယ်
linked list ဆိုရင် အသစ်ထပ်ထည့်ချင်ရင်မြန်တယ်
SLL က ဖျက်ဖို့ဆို previous node ရဲ့ reference သိရင်ရတယ်
DLL ဆိုရင် previous က ပါပြီးသားမလို့ အလုပ်မရူပ်တော့ဘူး
ဒါပေမဲ့ space မှာကျတော့ array ထက်ပိုကုန်တယ်
