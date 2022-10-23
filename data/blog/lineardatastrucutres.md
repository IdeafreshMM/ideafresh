---
slug: lineardatastructures
title: Linear Data Structures
date: 10/22/2022
tags: ['array', 'linkedlist', 'stack']
lastmod: 10/22/2022
draft: true
summary: Array and Linked List
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/lineardatastructurebyjerry
---

### Array

Array မှာ element တွေ အစဥ်လိုက် memory ပေါ်မှာနေရာယူတယ်
element 20 အတွက် array တစ်ခုလိုချင်ရင် 20လုံး ဆန့်မယ့် memory နေရာလွတ်ရှာပြီးမှ အဲ့ထဲထည့်တယ်
ဥပမာ Integer တွေပါတဲ့ အခန်း 20 အတွက် array ဆောက်မယ်ဆိုရင် integer တစ်ခုအတွက်ကုန်မယ့် byte size နဲ့အခန်းအရေအတွက်ကို မြောက်ပြီး Memory ပေါ်မှာနေရာယူတယ်ပေါ့

integer ဆိုတော့ 4 byte ကုန်မယ် အခန်း 20 အတွက်ဆိုရင်

memory မှာ 80 byte စာ နေရာလွတ်ရှာရမယ် အဲ့လိုပေါ့

memory ပေါ်မှာ same data type တွေ ဆက်တိုက်သိမ်းသွားတော့ array ထဲက တစ်ခုခုလိုချင်လာရင် address တွက်ပြီးသွားယူရုံပဲ

array 0 ခန်းရဲ့ memory address က 0 ဆိုပါစို့ array ထဲက 10 ခန်းမြောက်ရဲ့ value ကိုလိုချင်တယ်ဆိုရင်

0 + (10 \* size of data type) ကိုသွားယူရုံပဲ

integer ဆိုရင် 4 byte

O+10\*4 =40

memory address 40 ကိုသွား access လုပ်ရင် array ထဲက 10 မြောက်အခန်းကိုရတယ်

အဲ့လိုလိုချင်တဲ့အခန်းကို memory address တွက်ပြီး access လုပ်ရုံမလို့ constant time ရတယ်

![SinglyLinkedList](/static/images/lineards/array.png)

data structure တော်တော်များများ array ကိုအခြေခံပြီးဆောက်ကြတယ်

ဥပမာ hashtable, heap

Hashtable ဆိုလည်း constant time ရအောင် array ထဲမှာ value တွေထည့်တယ်

heap ကျတော့ child တွေ parent တွေကို အလွယ်တကူ access လုပ်လို့ရအောင် array ကိုအသုံးပြုတယ်

အခြေခံအကျဆုံး data structure လို့တောင်ပြောလို့ရတယ်
အားနည်းချက်က လိုချင်တဲ့ အခန်းကို memory ပေါ်မှာ အရင်ကြေငြာရတယ် dynamic မဖြစ်ဘူး

array ထဲနောက်ထပ် ပြန်ထည့်ချင်ရင် နောက်ထပ်ထည့်မဲ့ dataတွေအတွက် လိုတဲ့ memory အလွတ်ကိုရှာ array အဟောင်းကို copy ပြန်ကူး အဲ့လိုလုပ်ရတယ်
ဖျက်ချင်တာဆိုရင်လည်း ခုနလိုပဲ ကျန်တဲ့ element တွေ array အသစ်ထဲပြောင်းထည့်ရတယ်
အဲ့လိုမျိုးဖျက်လိုက်ရင် လုပ်ရတဲ့ operation များလို့ မဖျက်ပဲ
ဒီအခန်းကိုဖျက်လိုက်ပြီ လို့သဘောရတဲ့ Sign တစ်ခုခုနဲ့အစားထိုးလို့လည်းရတယ်
ဒါပေမဲ့ အဲ့လိုလုပ်တာက array size တစ်အားကြီးသွားနိုင်တယ်ပေါ့
python ရဲ့ list ဆိုလည်း နောက်ကွယ်မှာ array ကိုသုံးထားတာပဲ
သူတို့တွေ ဘယ်အချိန်မှာ array size ကိုထပ်တိုးမယ် လျှော့ချမယ်ဆိုတာကတော့ language အလိုက် ကွာသွားနိုင်တယ်ပေါ့

### Linked List

linked list ထဲက node တွေမှာ သူ့ အရှေ့ node ရဲ့ reference သို့ အနောက် node ရဲ့ reference ရှိမယ်

အဲ့လို reference သိမ်းထားပြီး node တွေအချင်းချင်းချိတ်ထားကြတယ်ပေါ့

Linked list ကို အမျိူးအစားခွဲရင် အဓိကအားဖြင့်

Singly Linked List နဲ့

Doubly Linked List ဆိုပြီးရှိတယ်

### Singly Linked List

Singly Linked List မှာကြတော့ node တိုင်းကနောက် node တစ်ခုရဲ့ reference ကိုပဲသိမ်းတယ်

![SinglyLinkedList](/static/images/lineards/l.PNG)

node တစ်ခုနောက်မှာ နောက်တစ်ခုရှိမယ်

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

next node ရဲ့ referemce ကောသိမ်းရတာမလို့ array ထက် memory ပိုကုန်တယ်

ဒါပေမဲ့ node အသစ်ထပ်ထည့်ချင်ရင် ပထမဆုံး node ရဲ့ reference ကိုသိရုံနဲ့ ထည့်လိုက်လို့ရတယ် constant timeနဲ့

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

ဖျက်မယ်ဆိုရင်တော့ နည်းနည်းစဥ်းစားရပြီ
ဖျက်ချင်တဲ့ node ရဲ့ reference ကိုသိပေမဲ့လည်း သူ့ကိုဒီတိုင်းဖျက်လိုက်လို့မရဘူး သူ့အရှေ့node ရဲ့ reference မသိတော့ ဒီတိုင်းဖျက်လိုက်ရင် သူ့အနောက် node တွေကို ဆုံးရူံးရနိုင်တယ်ပေါ့
အဲ့ကြတော့ node အစကနေပြီးတော့ ရှာပြီးဖျက်ပစ်ရတယ် ဆိုတော့ worst case မှာ O(n)
SLL နဲ့ပတ်သတ်ပြီး နာမည်ကြီးတာက သူ့ကို reverse လုပ်ခိုင်းတာပဲ

ဆိုလိုတာက

1 ---> 6 ---> 5 --> 4 --->2

အဲ့လိုရှိတဲ့ SLL ကို

2 ---> 4 ---> 5 ---> 6 ---> 1

pass by value နဲ့ pass by reference သေချာသိရင်​ဖြေရှင်းလို့လွယ်တယ်
ဖြေကြည့်ချင်ရင်

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

reference နှစ်ခုလုံးထည့်ရတော့ SLL ထက်စာရင် memory ပိုကုန်တယ်
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

အရှေ့ node အတွက်ကော အနောက် node အတွက်ကော reference ပါတာမလို့ node တစ်ခုခုကို ဖျက်ပစ်ချင်ရင် O(1) နဲ့ဖြတ်လိုက်လို့ရတယ် ပြီးရင် node တစ်ခုရှိရုံနဲ့ အရှေ့ အနောက် သွားလို့ရတယ် Singly ဆိုရင် next node ပဲပါတော့ အရှေ့ပြန်သွားလို့မရဘူး

SLL ကော DLL ကော search မှာ
node အစက နေ အဆုံးထိ တစ်ခုချင်းစီ လိုက်စစ်ရလို့ O(n) ကုန်တယ်
node တွေထဲက data တွေက စီပြီးသား sorted ဖြစ်တောင် array လိုမျိုး binary search သုံးလို့မရဘူး random access မရလို့
array က sorted ဆို binary search သုံးလို့ရတာကိုး O(logn) ပဲကြာတယိ

Linked List ထဲမှာနောက်ထပ် circular singly linked ,
Circular doubly linked list တို့ဆိုပြီးရှိသေးတယ်
နောက်ဆုံး node တွေက null ကိုမညွှန်းပဲနဲ့ head node တွေကိုပြန်ညွှန်းတာမျိုးပေါ့
ဒါပေမဲ့ singly နဲ့ doubly လောက်ကိုပဲ အဓိကထားသုံးလေ့ရှိကြတယ်

---

### Stack

stack ရဲ့ rule က `First In First Out`
ပထမဆုံးဝင်လာတဲ့ Node က နောက်ဆုံးမှ operation လုပ်ရမယ်ပေါ့
နောက်ဆုံးဝင်လာတဲ့ node က ထိပ်ဆုံးကနေအလုပ်လုပ်ရမယ်

```java:NodeBasedStack.java


public class NodeBasedStack<T> implements StackInterface<T> {
        // a private Node class
        private class Node {
            T data;
        Node next;
            public Node (T val, Node n) {
                data = val;
        next = n; }
            public void setData (T val) {
        data = val; }
            public T getData () {
                return data;
            }
            public Node getNext () {
                return next;
            }
            public void setNext (Node n) {
        next = n; }
        }
        Node top;
        int size;
        // constructor of the NodeBasedStack class
        public NodeBasedStack () {
            top = null;
        size = 0; }
        // check if the stack is empty
        public boolean isEmpty () {
            return top == null;
        }
        // get the number of elements in the stack
        public int size () {
            return size;
        }

        public void push (T val) {
            Node node = new Node(val, top);
            top = node;
            size++;
        }
        // return the top element and remove it from the stack
        public T pop () {
            T data = null;
            if (isEmpty()) throw new EmptyStackException();
            else {
                                                                    element for GC
        data = top.getData(); // get the data stored in the top element
        Node tmp = top; // set a tmp pointer points to the top element
        top = top.getNext(); // update the top pointer
        tmp.setNext(null); // update the next pointer of the original top

        size--;
        }
        return data;
    }

    public T peek () {
    T data = null;
    if (isEmpty()) throw new EmptyStackException();
    else data = top.getData(); // get the data stored in the top element
    return data;
    }

}
```

သူ့မှာ `peek()` နဲ့ `pop() `ဆိုတဲ့ method နှစ်ခုပါတယ်

peek() က ပထမဆုံး node ကို return ပြန်ပေးတယ်
Stack ထဲက ပထမဆုံး node ဆိုတာ နောက်ဆုံး ဝင်လာတဲ့ node ကို ဆိုလိုခြင်းဖြစ်ပါတယ်
pop() ကျတော့ ပထမဆုံးတစ်လုံးကို return ပြန်ပေးရုံတင်မကပဲ
stack ထဲကနေပါ ထုတ်ပလိုက်တယ်
method 2 ခုလုံးက သူ့နေရာနဲ့သူအသုံးဝင်တယ်ပေါ့

Stack ကိုသုံးပြီးအောက်က problem ကိုဖြေရှင်းကြည့်ရအောင်

![StackQuestion](/static/images/lineards/stackquestion.png)

ဒီ problem ကို stack ကို သုံးပြီးဖြေရှင်းကြည့်ရင်

```java:backspaceCompare.java

public String makeAString(String s){
        Stack<Character>stack=new Stack<>();
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='#'){
                if(!stack.isEmpty()) stack.pop();
            }
            else stack.push(s.charAt(i));
        }

        String res="";
        while(!stack.isEmpty()){
            res=stack.pop()+res;
        }
        return res;
    }
public boolean backspaceCompare(String s, String t) {

        return makeAString(s).equals(makeAString(t));

    }

```

stack မသုံးဘဲဖြေရှင်းလို့လဲရတယ် ဒါပေမယ့် stack ကိုသုံးလိုက်တာက space ရယ် time complexity မှာ ပိုကောင်းတယ် နားလည်ရလည်း ပိုလွယ်တယ်

### Linear data structure တွေက ရိုးရိုးရှင်းရှင်း datastructure တွေမလို့ နားလည်ရလွယ်လို့ အရှည်ကြီးရေးမထားတော့ဘူး တိုတိုနဲ့လိုရင်းကိုပဲရေးလိုက်ပါတယ်

ရိုးရိုးရှင်းရှင်းတွေပေမဲ့ CS မှာ powerful အဖြစ်ဆုံး data structure တွေလည်းဖြစ်တယ်
