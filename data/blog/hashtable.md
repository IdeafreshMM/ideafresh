---
slug: hashtable
title: HashTable
date: 10/12/2022
tags: ['data structure', 'hashtable', 'probability']
lastmod: 10/13/2022
draft: false
summary: what is hashtable
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/hashtable
---

### The following factors will be discussed in the article

1. What is Hashtable?
2. Basic hashtable
3. Collision
4. Seperate Chaining
5. Linkedlist, BST
6. Table Doubling
7. Sequence Of Number
8. Java Hashmap
9. Poission Distribution
10. Birthday Paradox
11. Linear Probing
12. Quadratic Probing
13. Double Hashing
14. Hashing Technique

Integer value တွေပါတဲ့ array တစ်ခုကို လုံးဝ unique value တွေပဲပါလားလို့ စစ်ကြည့်ချင်တယ်လို့ ယူဆကြည့်ရအောင်။

ဥပမာ

![UniqueArray](/static/images/firstImage.png)

အပေါ်က Array ဆိုရင် ပါတဲ့ element တွေက လုံးဝ unique ဖြစ်တယ်ပေါ့။

![Non_Unique_Array](/static/images/secondImage.png)

ဒီတစ်ခုကြတော့ 3 က 2 ခုပါတဲ့အတွက်ကြောင့် ဒီ array က unique မဖြစ်ဘူး။ ဟုတ်ပြီ အဲ့ဒါဆို array က unique ဖြစ်လား မဖြစ်လား ဘယ်လိုစစ်မလဲ?

### First Approach

```java:checkUnique.java
public boolean checkUnique(int[] array) {

    for(int i=0;i<array.length;i++) {
        for(int j=0;j<array.length;j++) {
            if(i == j) continue;
            if(array[i]==array[j]) return false;
        }
    }
    return true;
}

```

array ထဲကအခန်းတိုင်းကို loop နဲ့ပတ်သွားမယ်။ ရောက်သွားတဲ့အခန်းတိုင်းမှာ လုံးဝ unique ဖြစ်လားဆိုတာ array တစ်ခုလုံးနဲ့တိုက်စစ်တယ်။ နောက်ဆုံးတစ်လုံးပြီးသွားတဲ့အထိ unique ဆို ဒီ Array က လိုချင်တဲ့ array ပေါ့။ ဒီ approach က လိုချင်တဲ့ result တော့ရတယ်။ ဒါပေမဲ့ Complexity ဘက်ကကြည့်ရင် n^2 ကြာတယ်။

#### Second approach

```java:checkUnique.java
public boolean checkUnique(int[] array) {

    Set<Integer> set = new HashSet();
        for (int i=0;i<array.length;i++) {
            if(set.contains(array[i])) {
                //look up costs O(1)
                return false;
            }
            set.add(array[i]);
        }
    return true;
}
```

ဒီ Approach မှာကြတော့ တစ်လုံးချင်းစီကို loop ပတ်ပြီး ပြန်မရှာပဲ hashset ထဲက အရင်ပါလား မပါလား ပြန်ကြည့်တယ်ပေါ့။ contains() ကနေ true ပြန်ရင် ဒီ array က လိုချင်တဲ့ array မဟုတ်ဘူး unique မဖြစ်ဘူးပေါ့။ သူ့အတွက် Time complexity တွက်ရင် O(n) ပဲကြာမယ်။ Why? hashset ကနေပြီးတော့ ပေးလိုက်တဲ့ value ပါမပါစစ်တဲ့နေရာမှာ constant time O(1) နဲ့စစ်ပေးနိုင်လို့ဖြစ်ပါတယ်။ သူကဘာကြောင့် O(1) နဲ့ လုပ်ပေးနိုင်တာလဲဆိုရင် Hashtable ကိုသုံးထားလို့ဖြစ်ပါတယ်။

++++++++++++++++++++++

    ### `Hashtable`

key နဲ့ value ကိုတွဲပြီးသိမ်းပေးတဲ့ data structure အမျိုးအစားတစ်ခုဖြစ်တယ်။ သိမ်းထားတဲ့ value ကို key နဲ့ constant time နဲ့ access လုပ်လို့ရတယ်။ constant time ရအောင် array ပေါ်မူတည်ပြီး hashtable တွေဆောက်ကြတယ်ပေါ့။ array မှာ index သိရင် အဲ့index အပေါ်မူတည်ပြီး memory address တွက်ပြီး သွား access လုပ်ရုံပဲ။ hashtable မှာလည်း value ကိုလိုချင်ရင် key အပေါ်မူတည်ပြီး value ကိုပြန်ယူလို့ရတယ်။ hashtable ဆောက်မယ်ဆို value တွေသိမ်းမဲ့ arrayရယ် key တွေကို index အဖြစ်ပြောင်းပေးမယ့် hash function ဆိုပြီး အဓိက နှစ်မျိုးလိုတယ်။ key နဲ့ value တွေကို ဘယ်လိုသိမ်းလည်းဆိုရင် key ကို index ပြောင်း ရလာတဲ့ index အတိုင်း array ထဲကို valueထည့်ပြီးသိမ်းပေးတာပေါ့။ အခုမျက်စိထဲမမြင်ရင် ခဏနေ code နည်းနည်းဖတ်ကြည့်ရင် မြင်သွားပါလိမ့်မယ်။ hash function ဆိုတာကျတော့ သိမ်းချင်တဲ့ keyကို index အဖြစ်ထုတ်ပေးတာ Array ရဲ့အခန်းနာပါတ်ဘယ်လောက်မှာ သိမ်းရမယ် ဆိုတာမျိုးကို hash function ကနေထုတ်ပေးတယ်ပေါ့။ ဘယ်လိုထုတ်ပေးမယ်ဆိုတာကတော့ သုံးမဲ့ hashing technique ပေါ်မူတည်တယ်။

ဟုတ်ပြီ hashtable တစ်ခုလုပ်ကြည့်ရအောင်။ keyကို လောလောဆယ် integer လို့ပဲထားလိုက်မယ်။ h(x)=x mod tableSize ဆိုတဲ့ hashing function တစ်ခုကိုသုံးမယ်။ tableSize ဆိုတာက အခြေခံသုံးမယ့် array ရဲ့ size ကိုဆိုလိုခြင်းဖြစ်ပါတယ်။ key 3 ဝင်လာတဲ့အချိန်ကျရင် ဒီHash function ကနေပြီးတော့ index 3 ကိုထုတ်ပေးတယ်။

h(3) = 3 mod 8 = 3

ရလာတဲ့array index 3 ထဲကို key နဲ့တွဲသိမ်းမဲ့ valueကိုသွားသိမ်းလိုက်မယ်။

အဲ့ဒီအတွက် code ရေးကြည့်မယ်ဆိုရင်

```java:SimplestHashTable.java
public class SimplestHashTable {

    String[] array;
    int arraySize;

    SimplestHashTable(int arraySize){
        this.arraySize=arraySize;
        array=new String[arraySize];
    }

    void put(int key,String values) {
        //putting into array
        int index=hash(key);
        array[index]=values;
    }

    int hash(int key) {
        //hash function
        return key % arraySize;
    }

    String get(int key) {
        //getting value by index
        int index=hash(key);
        return array[index];
    }
}
```

key 3 အတွက် value ပြန်လိုချင်ရင် key ကို hash function ထဲထည့်ပြီး ရလာတဲ့ index အတိုင်းပြန်သွားယူရုံပဲ။ ပြန်သွားယူတဲ့နေရာမှာ index ကိုတွက်လိုက်ရုံပဲဆိုတော့ သူက constant time နဲ့လုပ်ပေးနိုင်တာပေါ့။ ပြန်ယူတဲ့နေရာမှာ index တစ်လွဲတွေမထွက်ပေးအောင်လို့ hash function တွေက `deterministic` ဖြစ်ရမယ်။ ဆိုလိုတာက သုံးမဲ့ Hash function က ဝင်လာတဲ့Keyအတွက် အမြဲတမ်းတူညီတဲ့ index ကိုထုတ်ပေးရမယ်။ အဲ့ဒါဆိုရင်လောလောဆယ် hashtable ဆိုတာဘယ်လိုမျိုးလဲ သိလောက်ပြီပေါ့။ ရိုးရိုးလေးစဥ်းစားကြည့်ရင် hashtable ဆိုတာ key ကို index အဖြစ်ပြောင်းပြီး ရလာတဲ့ index ထဲ value ထဲထည့်လိုက်တာပေါ့။

#### Collision

key = 3, value = val3

key = 4, value = val4

key = 10, value = 10

key = 11, value = val11

အပေါ်က Dataset တွေကို ခုနက hash function သုံးပြီးပြန်ထည့်မယ်။ ပထမ pair 3 ခုကိုထည့်တဲ့အချိန်တုန်းကအဆင်ပြေသေးတယ်။ တတိယမြောက်တစ်ခုကိုထည့်တဲ့အချိန်ကြတော့ hash function ကနေပြီးတော့ index 3 ကိုပြန်ထုတ်ပေးတယ်။ index 3 ထဲကိုသွားထည့်လိုက်ရင် အရင်က val3 က override ခံရပြီး ပျက်သွားမယ်။ အဲ့လိုမျိုးဖြစ်တာကို collision လို့ခေါ်တယ်။

![UniqueArray](/static/images/thirdImage.png)

အရင်က data ပျက်လည်းမပျက်ချင်ဘူး။ အခုလည်းအသစ်ထည့်ချင်တယ်။ collision ကိုဖြေရှင်းဖို့ဆိုပြီး အဓိကအားဖြင့်

`Closed Addressing`

`Open Addressing` ဆိုပြီး technique နှစ်ခုရှိတယ်။

1. Closed Addressing
   1. Seperate Chaining

Collision တွေဖြစ်လာရင်သူက data structure တစ်ခုခုနဲ့ ချိတ်ပြီးသိမ်းသွားပေးတာပေါ့။ `Linked list` ကိုအဓိက ထားသုံးတယ်။ array ထဲကို linked list ထိပ်ရဲ့ reference ထည့်ထားပြီးတော့ collision ဖြစ်တဲ့ pair တွေကို linked list ရဲ့ သဘာဝအတိုင်း တစ်ခုနဲ့တစ်ခု next item ရဲ့ reference တွေနဲ့ချိတ်ပြီးသိမ်းသွားတာ။

key = 3, val = val3

key = 11, val = val11

key = 19, val = val19

> > Assume n is 8

အပေါ်က Data တွေကိုထည့်သွားရင်

array မှာ
![LinkedListHashTable](/static/images/fourthImage.png)

(array ထဲကိုထည့်တဲ့နေရာမှာ value ချည်းမဟုတ်ပဲ key ကောပါရောထည့်ပေးထားတာကိုသတိပြုမိမယ်ထင်တယ်။ collision ဖြစ်လာတဲ့ Linked list တစ်လျှောက် key ညီတာချင်း စစ်ဖို့လိုမှာမလို့ပါ) ဒီလိုဆို collision ကိုတော့ဖြေရှင်းပြီးတော့ဖြစ်သွားတယ်။ ဒါပေမဲ့ worst case မှာက Search အတွက်ဆိုရင်လည်း Linked list အဆုံးထိသွားနိုင်ချေရှိတာမလို့ O(n) Insert လုပ်မယ်ဆိုလည်း key တူတာကို override လုပ်ဖို့ ပြန်ရှာရမှာဆိုတော့ O(n) (delete operation ကို ဒီtopic တစ်ခုလုံးမရေးပြထားပါဘူး ကိုယ်ဟာကိုပဲ လုပ်ကြည့်ကြပါ) time complexity မကောင်းဘူးပေါ့။ အဲ့တော့ chaining အတွက် ပိုကောင်းမယ်ထင်တဲ့ `Binary Search Tree` ကိုပြောင်းသုံးမယ်ပေါ့။ bst သုံးမယ်ဆို လိုက်နာရမဲ့ property တွေရှိတယ်။ left child သည် parent node ထက်ငယ်ရမယ်။ right child သည် parent node နဲ့ ညီ(သို့)ကြီး ရမယ်။

key = 11, val = val11

key = 3, val = val3

key = 19, val = val19

အပေါ်က data တွေကို အစဥ်လိုက်ထည့်လိုက်မယ်ဆိုရင် array မှာ

![BSTHashTable](/static/images/fifthImage.png)

array ခန်းထဲကို root node ကိုထည့်မှာ root node ကနေပြီးတော့ left နဲ့ right သွားဖို့ reference သို့ pointer ရှိမယ်ပေါ့။ key19 ရဲ့ val ကိုလိုချင်လာရင် လိုမှာက log(n) operation ဒီလိုမျိုးဖြစ်သွားတာကလည်း ကံကောင်းလို့ပါ။ ဝင်လာတဲ့ data ကြောင့် bst က balance ဖြစ်ပြီး ဘာoperation လုပ်လုပ် log(n)။ ဒါပေမဲ့လည်း worst case မှာ bst ကလည်း O(n) ပြန်ဖြစ်ဦးမှာပဲ။

ဆိုပါစို့ ခုနက data ကိုပဲ အောက်ကအစဥ်နဲ့ ထည့်မယ်ဆိုရင်

key = 8, val = val8

key = 11, val = val11

key = 19, val = val19

![BSTHashTable](/static/images/sixthImage.png)

Bst က balance မဖြစ်တော့ဘူး။

key 19 နဲ့ val ကိုရှာချင်ရင် အောက်ဆုံးထိပြန်သွားရှာရမယ်ဆိုတော့ O(n)။ သူလည်း worst case မှာ time complexity မကောင်းသေးဘူး။ ဒါပေမဲ့ linked list ထက်စာရင် သူက တစ်ချို့ case မှာ ပိုမြန်နိုင်တယ်ပေါ့။ BST ရဲ့ property အတိုင်း အခု လက်ရှိ key နဲ့လိုချင်တဲ့ key နဲ့ ယှည်ပြီး left ဘက်မှာရှာရမလား right ဘက်ကိုရှာရမလား

လိုချင်တဲ့ key ဆီ average case မှာ ပိုပြီးမြန်နိုင်တာပေါ့။

အောက်က link မှာ hashtable linked list သုံးတာရယ် normal bst သုံးတာရယ်ကိုရေးပေးထားတယ်။

+++++++++++

Using Singly Linked List

```java:HashTableLinkedList.java

public class HashTableLinkedList {

    int arraySize;
    Node[] array;
    HashTableLinkedList(int arraySize){
        this.arraySize = arraySize;
        array = new Node[arraySize];
    }
    int hash(int key) {
        return key%arraySize;
    }
    void put(Node newNode) {
        Node nodeAlready = get(newNode.key);
        int index = hash(newNode.key);
        if (nodeAlready == null) {
            Node previousNode = array[index];
            newNode.next = previousNode;
            array[index] = newNode;
        } else {
            nodeAlready.values=newNode.values;
        }
        Node node = array[index];
        System.out.println(node.key+" will start");
        while (node != null) {
            System.out.println(node.key+" "+node.values);
            node=node.next;
        }

    }

    Node get(int key) {
        int index = hash(key);
        Node currentNode = array[index];
        while (currentNode != null) {
            if ( key == currentNode.key) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

class Node {
    Node next;
    int key;
    String values;
    public Node(int key, String values) {
            this.key = key;
            this.values = values;
            next = null;
    }
}
```

+++++++++++

Using Normal BST

> > the following code is not mine. credit to the right owner.

```java:MyHashSet.java
class MyHashSet {

    //my elements are stored in binary trees!
    BSTNode [] elements;
    int size;
    final static double LOAD_FACTOR = 0.7;

    // 100 was picked totally random! No thoughts behind it.
    final static int INITIAL_SIZE = 1;

    public MyHashSet() {
        elements = (BSTNode[]) new BSTNode[INITIAL_SIZE];
        size = 0;
    }

    public void add(int key) {
        int h = hash(key);
        BSTNode newNode = new BSTNode(key);
        if (elements[h] == null){
            elements[h] = newNode;
        }
        else {
            elements[h].add(newNode);
        }
        size++;
        if( size > (int)(LOAD_FACTOR*elements.length)){
            rehash();
        }
    }

    public void remove(int key) {
        /* for more efficiency it does not
        call contains() before removing an item */
        // it rather checks if it exists while removing
        int h=hash(key);
        if(elements[h]!=null) {
            elements[h] = elements[h].remove(key);
        }
        size--;
    }

    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
        int h = hash(key);
        if(elements[h] != null){
            return elements[h].contains(key);
        }
        return false;
    }

    private int hash(int key){
        return key % elements.length;
    }

    private void rehash(){
        BSTNode [] newElements = new BSTNode[elements.length*2];
        BSTNode [] old = elements;
        elements = newElements;
        for(BSTNode n:old){
            if(n != null){
                LinkedList <BSTNode> list = n.allTreeNodes();
                ListIterator it = list.listIterator();
                while(it.hasNext()){
                    BSTNode node = (BSTNode)it.next();
                    add(node.data);
                }
            }
        }
    }

    /* Build in binary search tree node
     to take care of collisions, even long ones with ologn() */
    private class BSTNode {
        public int data;
        private BSTNode right;
        private BSTNode left;

        protected BSTNode(int data) {
            this.data = data;
        }

        protected void add(BSTNode node) {
            /* The add function is recursive,
            since there are as many as log(n) function calls*/
            if(node.data > this.data){
                if(this.right == null) {
                    this.right = node;
                } else {
                    this.right.add(node);
                }
            }
            else if (node.data < this.data) {
                if (this.left == null) {
                    this.left = node;
                }else {
                    this.left.add(node);
                }
            }
        }

        protected LinkedList<BSTNode> allTreeNodes(){
            /* This function is iterative since there is n function calls,
            although the size of the stack can get as big as h~log(n)
            The reason linkedList is used here is that we just
            need to iterate over it once for rehashing! */
            Queue<BSTNode> q = new LinkedList<>();
            q.add(this);
            LinkedList <BSTNode> list = new LinkedList<>();
            while (!q.isEmpty()) {
                BSTNode node = q.poll();
                list.add(node);
                if (node.right != null) q.add(node.right);
                if (node.left != null) q.add(node.left);
            }
            return list;
        }

        protected boolean contains(int data) {
            if (this.data == data) {
                return true;
            }
            if (this.data > data && this.left != null) {
                return this.left.contains(data);
            }
            if(this.data < data && this.right != null) {
                return this.right.contains(data);
            }
            return false;
        }

        protected BSTNode remove(int d){
            if(this.data == d){
                //what we wanna remove is found
                if(this.right == null && this.left == null){
                    //if leaf remove
                    return null;
                }
                if(this.right == null || this.left == null) {
                    //if one child return that one child!
                    return (this.left!=null)?this.left:this.right;
                }
                //substitude with the rightmost left successor
                this.data = this.left.findMax().data;
                this.left.remove(this.data);
            }
            if(this.data > d && this.left != null) {
                this.left=this.left.remove(d);
            }

            if(this.data < d && this.right != null) {
                this.right=this.right.remove(d);
            }
            return this;
        }

        private BSTNode findMax() {
            BSTNode node = this;
            while (node.right != null){
                node = node.right;
            }
            return node;
        }
    }
}

```

bst မှာ worst case မဖြစ်အောင်ဆိုပြီး bst ကိုအဆင့်မြင့်ထားတဲ့ self balancing bst တွေနဲ့ပြောင်းသုံးမယ်။ self balancing bst ဆိုတာက worst case မှာ search, insert ဘာ operations လုပ်လုပ် O(logn) ပဲကြာတယ်။ `AVL tree`, `Red black tree` သုံးမလား တစ်ခြား self balancing tree တွေသုံးမလား ကြိုက်တာသုံးလို့ရတယ်။ Worst case မှာ O(logn) ပဲကြာမယ်။

sbbst တွေက implementation ကတော်တော်ရူပ်တယ်။ (နောက်post တွေမှာ sbbst တစ်ခုဖြစ်တဲ့ AVL tree အကြောင်းရေးပေးပါ့မယ်) sbbst တွေပါသုံးရဦးမယ်ဆိုရင် hashtableအစကတည်းမဆောက်ပဲ။ sbbst တစ်ခုဆောက်လိုက်မှာပေါ့။ O(logn) ဆိုတာတော်တော်ကိုမြန်နေပြီ မြင်အောင်ပြောရရင်

### 2^31=2147483648 items ရှိတဲ့ sbbst တစ်ခုမှာတောင် search အတွက်ဆိုရင်တောင်worst case မှာ operation ပေါင်း 31 ကြိမ်ပဲလုပ်စရာလိုတယ်

(worst case depends on the tree, from 1.44log(n) to 2log(n))

sbbst ဆိုတာ insert လုပ်ကတည်းကသေသေချာချာလေးဖြစ်အောင်ထည့်ရတာ right နဲ့ left ရဲ့ difference ကလည်း 1 နဲ့အောက်မှာရှိရမယ်။ အဲ့တော့ chaining အတွက် ကြိုက်တဲ့ data structure ကိုအဆင်ပြေသလို့သုံးပေါ့။ admin အထင် red black tree ကပိုခက်တယ်။ node အများကြီးကိုင်ပြီးလုပ်ရတာ ဒါပေမဲ့လည်း bucket တစ်ခုထဲကို worst case ဝင်, ဝင်လာတဲ့ worst case ကလည်း bst မှာပါလာပြီး worst case ဖြစ်မယ်ဆိုတာကတော့ သိပ်တော့ဖြစ်နိုင်ချေမရှိပါဘူး။ အဲ့လောက်ဆို average case လောက်မှာ O(logn) လောက်နဲ့လုပ်ပေးနိုင်တယ်ပေါ့။

---

### Table Doubling

ခုနက code တွေ ဝင်ကြည့်ဖြစ်ရင် array size ကို parameter အနေနဲ့ ကြိုပြီးကြေညာထားတာသိမယ်ထင်တယ်။ array ရဲ့ ဖွဲ့စည်းပုံကိုက Memory ပေါ်မှာ အရင် allocate လုပ်ရတာဆိုတော့လေ။ dynamic မဖြစ်ဖူးပေါ့ dynamic ဖြစ်အောင် ကြေညာထားတဲ့ array size ရဲ့ 3/4 ရောက်ရင် အခု array ရဲ့ length 2ဆ ကိုယူပြီးဆောက်ထားတဲ့ array ထဲကိုပြောင်းထည့်လိုက်မယ်။ Table doubling လုပ်တာပေါ့။ python ရဲ့ list ကလည်းအဲ့တိုင်းပဲ implement လုပ်ပုံချင်းတော့ ကွဲနိုင်တယ် သဘောတရားကတော့ အဲ့တိုင်းပဲ။ 3/4 = (0.75) ကို load factor လို့ခေါ်တယ်။ အဲ့လိုမျိုး array အသစ်ထဲထည့်သွားတိုင်း array အဟောင်းထဲမှာရှိတဲ့key တွေကို အကုန် rehash ပြန်လုပ်ပြီး အသစ်ထဲထည့်ရမယ်။ rehash မလုပ်ပဲ ဒီတိုင်းထည့်သွားရင် ပြန်ထုတ်တဲ့အချိန်ကြရင် hash function မှာ mod arraySize ထားတော့ တစ်လွဲ index တွေထွက်ပေးရင် မှားကုန်မယ်။ လောက်ကတော့နားလည်မယ်ထင်ပါတယ်။ Rehash လုပ်တိုင်းထည့်ထားတဲ့ key အကုန်ပြန်တွက်ရမှာဆိုတော့ O(n) n = number of keys already added

> > Why doubling?

2 ဆ မလုပ်ပဲတစ်ခြား case နဲ့စဥ်းစားကြည့်ရအောင်။ ဟုတ်ပြီ အဲ့ဒါဆို array ကိုဘယ်လောက်တိုးရမလဲပေါ့။ ပထမဆုံး array ကို တစ်ခုပဲတိုးကြည့်မယ်။ တိုးလိုက်တိုင်းတစ်ခါ Rehash ဆိုပါစို့ array ကိုအစကဘာမှမရှိဘူးပဲယူဆကြည့်ရအောင်။ ပထမဆုံးတစ်လုံးဝင်လာတဲ့အချိန်မှာ array ကို တစ်တိုး rehash၊ နောက်တစ်လုံးဝင်လာတစ်ခါပြန်လုပ် တစ်တိုး pair 2 ခုလုံးကို rehash၊ နောက်တစ်လုံးဝင်လာ တစ်တိုး pair 3 ခုလုံးကို rehash၊ အာ့ဆို Insert မှာတင် Total Time Complexity က O(1+2+3....n) ဆိုပြီးဖြစ်သွားမယ်။ အဲ့ Series က Arithmetic Progression (AP)

![APSUM](/static/images/apsum.jpg)

AP ပုံသေနည်းထဲထည့်တွက်ရင် total time complexity = (n^2+n)/2 ဆိုပြီးရမယ်။ upper bound ယူရင် O(n^2) quadratic time ပေါ့။ total က O(n^2) ဆိုတော့ average each insertion အတွက်ဆိုရင် O(n)လို့ယူဆလိုက်လို့ရတယ် time complexity မကောင်းဘူးပေါ့။ ဆိုတော့ array ကို size တစ်ခုစီတိုးသွားတာက အဆင်မပြေဘူး ဒါဆို array ကို 2 ဆတိုးကြည့်မယ်။ ခုနတိုင်းလိုပဲ insert တွေလုပ်သွားရင်သူက O(1+2+4+8+16...n) 2 power တစ်ခုခု keyအရေအတွက်ရောက်မှ rehash ပြန်လုပ်ရတာမလို့ n အရေအတွက် key  logn ကြိမ်ပဲ reharsh လုပ်ရမယ်။ သူ့ကျ geometric series ထဲဝင်သွားပြီ။

![GPSUM](/static/images/gpsum.jpg)

Geometric series ရဲ့ Sn ထဲထည့်သွားရင်total time complexity က 2^log(n) -1 ဆိုပြီးထွက်လာမယ်။ အဲ့ဒါကိုရှင်းရင် n-1ရလိမ့်မယ်။ ဆိုတော့ O(n) (AP,GP ကို ၁၀တန်းတုန်းကရှယ်သင်ရဆိုတော့ မှတ်မိဦးမယ်ထင်တယ်။ ကိုယ်ဟာကို တွက်ကြည့်လိုက်ပါ။ log ဘယ်လိုရလဲဆို 2>4>8>16 အဲ့လိုသွားတာမလို့ nရာက်သည်အထိ logn base 2 အကြိမ်ပဲ rehash လုပ်စရာလိုတယ်။ total က O(n) ဆိုတော့average each insertion အတွက်ဆိုရင် constant time လို့ယူလိုက်လို့ရပြီ။ ပြောစရာရှိလာပြီ Array 2 ဆလုပ်ကြည့်ထက်ထက် 3 ဆ 4 ဆ လုပ်ကြည့်တာကပိုမကောင်းဘူးလား။ ကောင်းပါတယ် Array size များလေလေ collision နည်းလေလေ reharsh လုပ်ရတာနည်းလေလေ။ ဒါပေမဲ့ ဝင်လာတဲ့ key က နည်းနေပြီး array ကိုတစ်အား ကြီးပြစ်ရင်လည်း space မှာ မလိုအပ်ဘဲcomplexity တစ်အားများသွားမယ် နေရာလွတ်တွေအများကြီးကျန်ကုန်မယ်။ ဆိုတော့ Table Doubling လောက်လုပ်တာကပိုအဆင်ပြေတယ်ပေါ့။ ခုက arrayပြည့်သွားမှ doubling လုပ်လိုက်တာ။ အဲ့တော့ load factorက 1 ဖြစ်သွားမယ်။

### Java HasMmap

java မှာကျတော့ load factor ကို 0.75 ဆိုပြီးထားတယ်။ ဝင်လာတဲ့ pair တွေ array size ရဲ့ 3/4 ရောက်လာရင် doubling လုပ်လိုက်တာပေါ့။ initial capacity(aka initial array size) ကို 8 လို့ထားထားတယ်။ bucket(aka each array room) အတွက် item ဝင်နိုင်ခြေရှိတဲ့ probaility ကဘယ်လောက်လဲ။ array ကို 0.75 load factor ရောက်တိုင်း 2ဆလုပ်လိုက်တယ်
Java မှာ bucket ထဲ ဝင်နိုင်ခြေရှိတဲ့ probability load ကို 0.5 လို့ထားတယ်။ ဘယ်လိုရလာတာလဲ

ဥပမာ size 16 ရှိတဲ့ array ကို 13 ခုမြောက် pair ဝင်လာတာနဲ့ size ကို 32 ထားလိုက်တယ်။ အဲ့မှာကျန်တဲ့ bucket ပေါင်းက 20/32=0.625၊ ယူပြီးသားက 12/32=0.375၊ အဲ့ကျတော့ table doubling လုပ်တိုင်း 0.375 load ကနေရာယူပြီးသား ၊အဲ့တော့ average load ကို 0.365 နဲ့ 0.75 ကြားကယူလိုက်ရင် 0.5625 ရမယ်။ ဒီaverage load ယူဆတာက တစ်ခြားနည်းဟန်နဲ့ယူဆတာတွေလဲဖြစ်နိုင်တယ်။ ကျွန်တော်လည်းသိပ်မကွဲဘူး။ stackflow မှာသွားမေးတော့လည်း ဒီတိုင်းပဲဖြေပြထားတယ်။

[Check Here](https://stackoverflow.com/questions/72526389/how-do-we-get-the-probability-of-bucket-being-empty-or-not-is-0-5-in-hash-map/72553238#72553238)

အဲ့တာက လွတ်နေတဲ့ bucket ထဲဝင်လာနိုင်ချေရှိတဲ့ probability.
java document အရ user ဘက်ကနေ worst case လိုက်မထည့်ဘူး။ hash function ကနေပြီးတော့လည်း ဝင်လာတဲ့ key ကို random ဖြစ်အောင်ပြောင်းနိုင်မယ်ဆိုရင် `Poisson Distribution` ကို လိုက်နာတယ်ပေါ့။ key တွေကတစ်ခုနဲ့တစ်ခု independent တော့ဖြစ်ရမယ်။ poisson distrubution ဆိုရင် mean သိဖို့လိုလာပြီ။ mean က ခုနကတိုင်းဆိုရင် 0.5 formula ထဲထညိ့တွက်ရင်

![poissiondistribution](/static/images/pd.png)

Pr(X=k)=( λ^k)(e^- λ)/ k!

bucket အလွတ်ထဲကိုထဲကိုပထမဆုံးတစ်လုံးဝင်လာနိုင်ချေက

Pr(x=1)=0.5^1e^-0.5/1!=0.30326532985=30%

အဲ့ bucket ထဲကိုပဲနောက်တစ်လုံးပြန်ဝင်ဖို့ဆိုရင်

Pr(x=2)=0.5^2e^-0.5/2!=0.07581633=7%

အဲ့တိုင်းတွက်သွားမယ်ဆိုရင် bucket ထဲကို key တွေ5 ခုလောက် ဝင်လာနိုင်ချေက 0.00015795=0.015795 %ပဲရှိတယ်။ နောက်ထက် key တွေဆက်ဝင်လာနိုင်ချေက နည်းနည်းသွားတယ်။ key 9 ခုလောက်same bucket ထဲဝင်နိုင်ချေက ten million ပုံ တစ်ပုံပဲရှိတယ်။ အဲ့ကျတော့ Randomized ဖြစ်မယ်ဆိုရင် key တွေက bucket တွေအကုန်လုံးဆီကို nicely distributed ဖြစ်ပြီး expected average case မှာ O(1) ရမယ်။ ဆိုတော့ theory အရ hashmap က constant timeရတယ်။ ဒါပေမဲ့လည်းworst case မှာ O(n) ပဲ။ key တွေအကုန်လုံး bucket တစ်ခုထဲအကုန်ဝင်သွားနိုင်တာကိုး။ probability ဆိုတဲ့သဘောက real world မှာဖြစ်ချင်မှဖြစ်တာ။ ဥပမာ ခေါင်းပန်း နှစ်ကြိမ်လှည့်ရင် probability အရ ခေါင်းတစ်ခါ ပန်းတစ်ခါ ကျတယ်ဆိုပေမဲ့ အပြင်မှာ အဲ့လိုပုံသေဖြစ်လေ့မရှိပါဘူး။  probability က dataset ကြီးလာမှပဲ မှန်လေ့ရှိပါတယ်။ (ကျွန်တော်လည်း math major မဟုတ်တော့ probability တစ်အားကြီးမသိဘူး)။ java ကတော့ Bucket size (bucket တစ်ခုထဲဝင်လာတဲ့ key အရေအတွက်) 64 ခုရောက်တာနဲ့ self balancing tree အဖြစ်ပြောင်းလိုက်တယ်။ အာ့ကြတော့ worst case O(logn) ပဲကြာမယ်။ ခုနကပြောသလိုပဲ sbbstက implement ရတာရူပ်တယ် java ကတော့ treemap သုံးတယ်။ treemap က red black tree နဲ့ဆောက်ထားတယ်ပေါ့။ ဆိုတော့ java hashmap အတွက် Time Complexity တွက်မယ်ဆိုရင် Search အတွက် average case-O(1) worst case ဆို O(logn)။ treeifyပြန်ပြောင်းတာကနောက်ပိုင်းမှ jdk တွေမှ။ အရင်ကကဆို treeify မလုပ်တော့ worst case မှာ O(n)။ ဟုတ်ပြီ poission distribution မသုံးကြည့်ပဲ တစ်ခြား approach နဲ့randomized ဖြစ်နေတဲ့ key ချည်းအတွက်ပဲ collision ဖြစ်နိင်ချေရှိတဲ့ case ကိုသပ်သပ်တွက်ကြည့်မယ်။

Birthday paradox

ရက်ပေါင်း 365 ရှိတဲ့ထဲမှာ လူပေါင်း 23 ယောက်ရှိရင်same birthdayရှိနိုင်ချေ 50% ရှိတယ်။ ဘယ်လိုတွက်သွားတာလဲဆိုရင် မတူနိုင်ချေရှိတာကိုအရင်ရှာ ပြီးရင် 1 ထဲကနုတ် အာ့ဆိုကျန်တာက တူနိုင်ချေရှိတာပေါ့။ အခုလည်းအာ့လိုပဲ collision ဖြစ်နိုင်တာကိုအရင်ရှာမယ်ပေါ့။

m = size of array(table size)

k အရေအတွက် key collision မဖြစ်နိုင်တဲ့ probability = (m/m)x(m-1/m)x(m-2/m).......x(m-(k-1)/m)

ပထမတစ်လုံးက လုံးဝ unique၊ ဒုတိယတစ်လုံးကျရင် အရင်ကတစ်လုံးနဲ့မတူတဲ့ pr ဆို 1နုတ်၊ ဒီSeries ဘယ်လိုရလာလဲတော့သိမယ်ထင်တယ်။ အဲ့ series အရှည်ကြီးကို k အစားထိုးတွက်နေရင် အဆင်မပြေဘူး။ ဒါပေမဲ့ သူ့ကို taylor expansion of e ပြောင်းလိုက်လို့ရတယ်။ ဘယ်လိုဖြစ်သွားတာလဲတော့ ကျွန်တော်လည်း math ဆိုတာ အပေါင်းအနုတ်လောက်ဘဲ သိတာမလို့ မပြောပြတတ်ဘူး😁😁 (skillတွေ🤣)

`p'(k)≈ e^-k(k-1)/2m`

ဆိုပြီးရမယ် ဘယ်လိုပြောင်းသွားတာသိချင်ရင် ဒီLink မှာဝင်ကြည့်ကြည့်လိုက်ပါ။

[https://en.wikipedia.org/wiki/Birthday_problem](https://en.wikipedia.org/wiki/Birthday_problem)

အခုတွက်လိုက်တာက collision မဖြစ်နိုင်တာ ဖြစ်နိုင်ချေလိုချင်ရင် 1 ထဲကပြန်နူတ်

p(k,m)=1-p'(k)=1-e^-k(k-1)/2m

ရလာတဲ့ eq ထဲ table size 16 နဲ့ key 10 ခုမှာ collision ဖြစ်နိုင်ချေ ကိုတွက်ရင် 93%တောင်ရှိတယ်။

m=64, k=10

မှာဆိုရင် 51% ပဲရှိတော့မယ်။

table size များလာလေလေ collision ဖြစ်နိုင်ချေနည်းနည်းလာလေပေါ့။ 32 bit မှာ key ပေါင်း 7 သောင်းကျော်ရှိရင် collision ဖြစ်နိင်ချေ 50% ရှိတယ်။ တွက်ကြည့်ချင်ရင် m=2^32, k=77163 လို့ထားပြီးတွက်ကြည့်လိုက်။ 64bit ဆိုရင်တော့collision ဖြစ်နိုင်ချေပိုနည်းသွားမယ်ပေါ့။ (Maximun array size က language တစ်ခုနဲ့တစ်ခု မတူဘူးထင်တယ်။ java မှာတော့ (Integer.MAX_VALUE-8), 2.1 billion ကျော်ပေါ့။ JVM ကအဲ့size ထက်ပိုပြီး array အတွက် memory allocate မလုပ်ပေးနိုင်ဘူး)။ Size ကြီးလာလေ key တွေ တစ်ခုနဲ့တစ်ခု collision ဖြစ်တာနည်းလာလေလေ လက်တွေ့မှာတော့ ဟုတ်ချင်မှဟုတ်လိမ့်မယ်။ ဒါပေမဲ့ အပေါ်ကတွက်ခဲ့သလိုမျိုးဆို collision rate ကနည်းပြီး constant time နဲ့ hashtable တွေက လုပ်ပေးနိုင်တယ်။ table doubling လည်းလုပ်တော့ 0.75 အတွက်ဆိုရင်အမြဲတန်း ဒသမဟုတ်တဲ့ ဂဏန်းလဲထုတ်ပေးတယ်။ ဥပမာ

2^2 မှာ 0.75= 3
2^3 မှာ 0.75=6

load factor ကို တစ်အားငယ်ငယ်ယူလိုက်ရင် array size ကြီးပြီး collision နည်းလာနိုင်တယ် ဒါပေမဲ့ space ကျတော့ တစ်အားကြီးသွားနိုင်တယ်။ load factor ကိုအများကြီးယူလိုက်ရင်လည်း collision တွေများလာမယ်ပေါ့။ Trade off ရှိတယ်။ အာ့ကြောင့်မလို့ hashtable တွေကို load factor 0.75 လောက်ကို အနေတော်လောက်ပဲ ဆိုပြီးယူကြတယ်။

[0.75 ကို ln2 ကနေလာတယ်လို့ဆိုတယ်](https://stackoverflow.com/a/31401836/12390549)

`ပထမဆုံးproblem မှာသုံးတာက hashset ပေါ့ သူက value တစ်ခုပဲ parameter နဲ့လက်ခံတယ်ပေါ့ ဒါဆို key မပါပဲနဲ့ဘယ်လိုသိမ်းသွားလဲဆိုတာ ကိုယ့်ဟာကိုစဥ်းစားလို့ရလောက်ပါပြီ`

### Open Addressing

Open Addressing က collision ဖြစ်လာရင် အရင်က value တွေလည်းမပျောက်ချင်ဘူး။ chaining လိုမျိုးလည်း နောက်ထပ်အပို datastructure တွေထပ်မထည့်ချင်ဘူး။ ဒီ array ထဲပဲထည့်သိမ်းသွားတာချင်တာ။hash function ကနေပြီးတော့ ရှိပြီးသားအခန်းကိုပဲ ပြန်ညွှန်နေရင် နောက် hash function တစ်ခုပြန်သုံးပြီး အခန်းလွတ်ပြန်ရှာတယ် မတွေ့မချင်း အဲ့တော့ စဥ်းစားကြည့်ရင် လက်ခံမဲ့ Array size က အမြဲတမ်း ထည့်မဲ့ key အရေအတွက်ထက် ပိုများဖို့(သို့)ညီ ဖို့လိုကိုလိုတယ်။ မဟုတ်ရင် အခန်းလွတ်မတွေ့တော့ဘဲ infinite loop ဖြစ်ပြီး ပျက်သွားမယ်။

### Linear Probing

နာမည်အတိုင်းပဲ linear function ကိုသုံးပြီးတော့ index ကိုရှာတယ်ပေါ့။ collision ဖြစ်ရင် index ကိုပြန်တွက်တယ် နေရာလွတ်မတွေ့မချင်း

Example of Linear Function
y=4x+b, y=3, y=2x, y=mx+b ဆိုတဲ့ eq ကနေလာတယ်။

linear လို့ဘာလို့ခေါ်လဲဆိုတော့ graph ဆွဲကြည့်ရင် မျည်းဖြောင့်ကြီးထွက်လာမှာမလို့ပါ။ y=mx+b ကမြင်ဖူးတယ်မလား၊ Slope intercet formula လို့ခေါ်တယ်။ မျည်းဖြောင့်ပေါ့။ m က slope၊ b က intercept၊ x က independent variable အခု x နေရာမှာ အစားထိုးထိုးပြီး နေရာလွတ်တွေရှာသွားမယ်။ ဆိုတော့ hash function ကနေပြီးတော့ trial count ရယ် key ရယ်ကို parameter အနေနဲ့လက်ခံပြီး index တွက်မယ်။ ပထမတစ်ကြိမ်မတွေ့သေးရင် trial count တစ်တိုးပြီး နောက်တစ်ခါပြန်တွက်၊ trial count ပေါ်မူတည်ပြီး index ပြောင်းပြောင်းသွားတယ်ပေါ့။ x နေရာမှာ 1, 2, 3, 4, ... တွေအစားထိုးသွားမယ်။ ဘာဖြစ်လို့ Linear function သုံးလဲဆိုရင် သူ့ရဲ့ objective အတိုင်း minimize cost, maximize profit လုပ်ရမဲ့ operation ကိုလျှော့ပြီး လိုချင်တဲ့ goal မြန်မြန်ရောက်အောင်ပေါ့။ ဟုတ်ပြီ အာ့လောက်ဆို linear probing ကိုလုပ်ကြည့်ရအောင်။

index = f(key, trialcount)
h(key) = key mod arraySize
f(key, trialcount)= [c * trialCount + h(key)]mod arraysize

m နေရာကို c နဲ့အသားထိုးထားပါတယ်။ m က ပုံမှန်ဆို tableSize ကို ညွှနိးနေကြမလို့ပါ။ h(key) က ရိုရိုး hash function ပဲ။ f(key,trialcount) ကနေပြီးတော့ အခန်းလွတ်ရှာဖို့ sequence ထုတ်ပေးမယ်။

let's assume arraysize = 10 and c=1

key = 3, val = val3

key = 1, val = val1

key = 2, val = val2

ထည့်သွားရင် collision မရှိဘူးပေါ့။ array မှာ နောက်ထက် key = 13, val = val13 ထည့်ရင် collision ဖြစ်တယ်။

![CollisionInOpenAddressing](/static/images/seventhImage.png)

အဲ့တော့ trial count 1 တိုး

f(13, 1) = 3+1 = 4 mod 10 = 4
index 4 ကလွတ်တယ် အဲ့ထဲထည့်လိုက်မယ်ပေါ့။ ဒါပေမဲ့ sequence ရှာတဲ့နေရာမှာ infinite loop နိုင်တယ်ပေါ့။ ဘယ်လိုမျိုးလဲဆို trial count ဘယ်လောက်တိုးတိုးသွားသူက အခန်းလွတ်ထဲမရောက်ဘဲ ရှိပြီးသားအခန်းတွေထဲပဲပြန်ရောက်တာ။ အဲ့တော့ loop က infinite ဖြစ်ပြီး error တက်တယ်။ အဲ့လိုမဖြစ်ဖို့ဆိုရင် trial count နဲ့မြောက်မဲ့ c နဲ့ array size က relatively prime (c and array size must not share the same factor) မှရမယ်ပေါ့။ (m က လည်း even ,c ကလည်း even ဆို odd index တွေ ကျန်ကုန်မယ်)။ အဲ့တော့ c သို့ array size ရဲ့အနီးဆုံး prime ဘယ်လိုရှာမလဲ။ တစ်တိုးတိုးသွားပြီး prime ရှာလို့လဲရတယ်။ သူက time complexity မကောင်းဘူးပေါ့။ prime ရှာတဲ့ [Sieve of eratosthnees](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) ကိုသုံးပြီးရှာမယ်ဆို ပိုကောင်းတယ်ပေါ့။ ဟုတ်ပြီ အခန်းလွတ်တွေ့မယ်။ ဘယ်နှစ်ကြိမ်လောက်ကြိုးစားရမလဲ?

m=size of array
n=number of keys

လို့ထားပြီးProbability တွက်ရင် အခန်းလွတ်တွေက m-n။ အံ့ထဲကို hit နိုင်ချေရှိတာက (m-n)/m ပေါ့။ ပထမတစ်ခေါက်ကြိုးစားလို့ အခန်းလွတ်တွေ့နိုင်ချေက m-n/m မတွေ့လို့ဆိုရင်နောက်တစ်ခေါက်ပြန်လုပ် (m-n)/m-1 (m-1 ဖြစ်သွားတာက trial count တိုးသွားတာနဲ့ ခုနက unsucessful ဖြစ်သွားတဲ့အခန်းတွေကို ပြန်သွားစရာမလိုတော့လို့ပါ) အကြိမ်ရေများများလာတာနဲ့အမျှ အခန်းလွတ်တွေနိုင်ချေပိုများလာတယ်။ success ဖြစ်ဖို့ဆိုရင် expect number of trial က `1/p` p ကို m-n/m လို့ယူဆလိုက်ရင် (worst case)

(m-n)/m =1-n/m ၊ n/m က load factor

ဆိုတော့ insert လုပ်မယ်ဆို expected average case က O(1/1-load factor)ပေါ့။ (load factor ကို ပုံမှန်တော့ alpha နဲ့ပြလေ့ရှိတယ်)။

### Clustering

same index တွေနဲ့ collision ဖြစ်လာရင် ပြန်ရှာရတယ်။ မတွေ့မချင်း အဲ့လိုcollision ဖြစ်တာတွေများလာရင် အဲ့ sequence ကရှည်လာတယ်ပေါ့။ အဲ့လိုအစုကြီးဖြစ်လာတာကို cluster ဖြစ်လာတယ်လို့ခေါ်တယ်။ clusterကြီးလာလေလေ performance က ကျလာလေလေ။ နောက်ပြီး same index မဟုတ်လဲ sequence တူတာနဲ့ cluster က ပိုrange ကျယ်သွားတယ်။ c ပေါ်မူတည်ပြီး sequence ကဖြစ်လာတာဆိုတော့လေ။ ဥပမာ c = 2 , h(key1) = 3 ဆိုရင် သူသွားမဲ့ sequence က 3, 5, 7, 9 နောက် key 2 အတွက် hash function ကနေပြီးတော့ h(key2 )= 5 လို့ထုတ်ပေးရင် သူသွားမှာက 5, 7, 9။ 5 ကစပြီး cluster range ကိုပဲကျယ်ပေးလိုက်တယ်ပေါ့။ မူရင်း hash index တွေမတူတာတောင်

[Logramathic grow](https://www.sciencedirect.com/science/article/abs/pii/019667748790040X?via%3Dihub&fbclid=IwAR2vOIr6_htxh3gpdQq7Odq8BV4MBEQ_PbmwUq7Lvdv9ciKnEHhCU5RtZ1c)

ဖြစ်သွားတယ်လို့ဆိုတယ်။

### Quadratic Probing

Quadratic function တွေက

y = x^2 + 2x + 1

y = 2x^2 + 3x + 2

y = ax^2 + bx + c ကလာတယ်။

linear မှာတုန်းက non-empty ဖြစ်တဲ့ index ကို သွားပြီး hit မိရင် sequence ကတူတူဖြစ်တော့ cluster က ကြီးကြီးသွားတယ်။ အဲ့တော့ sequence မတူအောင်ဆိုပြီး x^2 တင်လိုက်တယ်။ f(key, trialcount) = trialcount^2 + h(key)

h(key1) = 30
h(key2) = 29 လို့ယူဆကြည့်မယ်။ သွားမဲ့ sequence က key1 အတွက် 30,31,34,39 အဲ့လိုသွားရင်key2 က 29 ,30 ,33 , 38

> > +(1,4,9,...)

linear probing မှာဆို 31 ကနေပြီးတော့ sequence တူသွားမှာပေမဲ့ quadratic ကျတော့ sequence မတူတော့ cluster မကြီးတော့ဘူး။ အဲ့လို quadratic က ကြီးကြီးပြီးသွားတော့ array မှာတစ်ချို့အခန်းတွေက လွတ်ပြီးကျန်ခဲ့တယ်။ ဥပမာ arraySize = 3 မှာ hash လိုက်တာက 0 ဆိုရင် 0 နဲ့ 1 ကိုပဲသွားတယ်။ 2 အခန်းကိုဘယ်တော့မှမသွားဘူး။ သွားမဲ့ အခန်းတွေကလည်းယူပြီးသားဆိုရင် infinite loop တယ်။ အဲ့တော့ quadratic ကနေပြီးတော့ အခန်းတွေများများသွားအောင်ဆိုပြီးလုပ်ကြမယ်ပေါ့။

1. array size က prime ဖြစ်မယ်။ function က trial^2 သူ့ကိုသုံးရင် အနည်းဆုံး အခန်းတစ်ဝက်ကို sequence ကပတ် ပေးတယ်။ အဲ့တော့ load factor တစ်ဝက်(0.5)လောက်ဆိုတစ်ခါ resize လုပ်ပေးသင့်တယ်။
2. array size ကိုchaining လိုပဲ double resizingသွားရင် သုံးပေးရမဲ့ function က (trial^2+trial)/2 သူကိုသုံးမယ်ဆို အခန်းတွေအကုန်လုံး sequence ကရောက်မယ်။ ပိုမိုက်တယ်ပေါ့။

### Double Hashing

quadratic မှာက cluster က range ကျည်းသွားတယ်။ ဒါပေမဲ့ function ကနေပြီးတော့ same index ထုတ်ပေးရင် cluster က ကြီးလာမယ်။ (linear မှာကျတော့ same index မထုတ်ပေးလဲ သူရဲ့ sequence ထဲ ဝင်သွားတာနဲ့ range ကကြီးသွားတာ သူ့ကို primary clustering လို့ခေါ်တယ်။ quadratic မှာဖြစ်တာကြတော့ secondary clusteringပေါ့)။ အဲ့လို cluster တွေဖြစ်တာကို double hashing မှာ constant sequence မလုပ်ပဲ နောက် hash function တစ်ခုကိုခေါပြီး ဘယ်လို follow လုပ်ရမလဲဆိုပြီး ဆုံးဖြတ်ခိုင်းတာပေါ့။ ဒုတိယ hash function ကနေထွက်လာတဲ့ index ကို linear probing ထဲက c အဖြစ်သတ်မှတ်ပြီး sequence ထုတ်တယ်။

f(key, trialcount) = trialcount x h2(key)

သူ့မှာလည်း infinite loop ရှိမှာပဲ ရိုးရိုးလေးစဥ်းစားကြည့် cluster မရှိအောင် key အပေါ်မူတည်ပြီး sequence ပြောင်းသွားပေမဲ့ linear probing ကိုခေါ်လုပ်ထားတာ။ same index တွေချည်းပဲ ဆက်တိုက်ပတ်မိနိင်တယ်။ အဲ့တာကိုဖြေရှင်းဖို့ဆိုရင် အစောကလိုမျိုးပဲ array size ကို prime ထားရမယ်ပေါ့။ မထားချင်ဘူးဆိုရင် array size ကို 2 power something ပဲထားမယ်ဆိုရင် ဒုတိယ hash function ကနေပြီးတော့ odd တွေချည်းထုတ်ပေးဖို့တော့လိုတယ်။ Open Addressing ကို ဒီလောက်ပဲရေးပေးလိုက်ပါတယ်။ code ကတော့ တစ်နေရာရာကပဲ ရှာဖတ်ကြည့်လိုက်ပါ။

++++++++++++++

# Hashing Technique

### 1. Division Hashing

h(k)=k mod m
ဥပမာပေးရလွယ်တဲ့ hash function ပါ။ သူကအားနည်းချက်ရှိပါတယ်။။ key အတော်မဝင်ရင် even ဖြစ်ဖြစ် odd ဖြစ်ဖြစ်တွေချည်းပဲဝင်ပြီး အခန်းတွေလွတ်ကုန်မယ်။ (key က even , m ကလည်း even ဆို mod ရင် အမြဲ even တွေပဲထုတ်ပြီး odd index တွေကျန်မှာ)။ အဲ့တော့ m ကို 2^something လုပ်ထားရင် သူ့ရဲ့ nearest prime ကိုရှာပေးရမယ်။

### 2. Universal Hashing`

h(k)=((ak+b) mod p)mod m

p is prime number greater than m

a is random integer(between 1 and p-1)

b is random integer(between 0 and p-1)

random ဖြစ်ရင် probability theory တွေအရ collision နည်းမယ် bucket တွေအကုန်လုံးဆီ evenly distributed ဖြစ် သွားမယ်။ collision ဖြစ်နိုင်ချေ 1/arraySize ပဲရှိမယ်။

### 3. Multiplicative Hashing

h(k)=[ak mod 2^w] >> (w-r)
a =random integer
k has w bits
m=2^r
k ရဲ့ copy တွေcollide အဖြစ်ဆုံး နေရာက bit တွေကိုယူပြီး hash လုပ်ထားတာ

`သူတို့ကိုအရှည်ရှင်းထားတာကို အောက်က Youtube video တွေမှာ ကြည့်လို့ရပါတယ်`

[https://youtu.be/0M_kIqhwbFo](https://youtu.be/0M_kIqhwbFo)

[https://youtu.be/BmKMzAt2Gjc](https://youtu.be/BmKMzAt2Gjc)

That's it. အစအဆုံးဖတ်ပြီးသွားရင် နားမလည်တောင် ခေါင်းကိုက်သွားလောက်မှာပါ

### Thank you for reading

စာကတစ်အားရှည်သွားပြီး တစ်ယောက်ထဲ fact checkထားရတော့ ကျော်သွားတာတွေ မှားနေတာတွေရှိနိုင်ပါတယ်။ အဲ့လိုမျိုးဆို page cb မှာ လာပြောလို့ရပါတယ်။
