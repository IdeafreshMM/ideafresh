---
slug: sbbst
title: Self-balancing Binary Search Tree
date: 12/14/2022
tags: ['data structure', 'avl', 'binary tree']
lastmod: 12/15/2022
draft: false
summary: AVL Tree and it's worst case
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/sbbst
---

Binary Search Tree ဆိုတာ binary tree အမျိုးအစားတစ်ခုဖြစ်ပြီးတော့ node တိုင်းမှာ child က 2 ခု အများဆုံးပါတယ်<br/>
ရိုးရိုး binary tree နဲ့ မတူတာက သူက လိုက်နာရမဲ့ rule ရှိတယ်<br/>ဘယ်လို rule လဲဆို parent node က သူ့ရဲ့ left child ထက်ကြီးရမယ်<br/>သူ့ရဲ့ right child ထက်တော့ငယ်ရမယ်<br/>ဥပမာ အောက်ကပုံလိုမျိုး

![Complete Binary Tree](/static/images/sbbst/CompleteBinary.png)

node တိုင်းရဲ့ left တွေက parent ထက်ငယ်ပြီး right တွေက parent ထက်ကြီးတယ်ပေါ့

အပေါ်ကလို bst ကို complete bst လို့ခေါ်တယ်<br/>leave တွေအကုန်လုံးက level တစ်ခုထဲမှာပဲ ညီနေကြလို့ <br/>ဒီလို property ရှိတဲ့ BST ထဲမှာ node တစ်ခုခုကိုရှာချင်ရင် logn နဲ့ရှာလို့ရတယ်<br/>
ပထမဆုံး root node ကစ,
လိုချင်တာကကြီးရင် right ဘက်သွား
ငယ်ရင် left ဘက်သွား<br/>
ဒါပေမဲ့ အဲ့လို tree ထဲ နောက်ထပ် node အသစ်ဝင်လာရင် tree က balance ဖြစ်ချင်မှဖြစ်တော့မယ်<br/>
balance မဖြစ်တော့ဘူး ဆိုတာက leave တွေတစ်ခုခုကွာခြားချက်က တစ်အားကြီးပြီး တစ်ခုခူရှာချင်ရင် logn time နဲ့ရှာလို့မရတော့လို့ပါ<br/>bst ထဲထည့်မယ်ဆို root node ကစပြီး တန်ဖိုးချင်း compare လုပ်ပြီး insert လုပ်သွားရမယ်

node 1 ==> int(1)

node 2 ==> int(2)<br/>
:<br/>
:<br/>
:<br/>
node 7 ==> int(7)

![Worst Case BST](/static/images/sbbst/worstcase.png)

ascending order နဲ့ sorted ဖြစ်နေတဲ့ data တွေချည်း ဝင်လာရင် bst က right ဘက်တွေကြီးပဲ လှိမ့်ဝင်သွားတယ်<br/>
ဒီလိုမျိုးဖြစ်သွားရင် Insert လုပ်လုပ် search လုပ်လုပ် worst case မှာ O(n) ဖြစ်သွားတယ် linear search လိုမျိုးပေါ့<br/>bst မှာ worst case က tree ရဲ့ height နဲ့တူတူပဲ

bst မှာ အဲ့လို worst case တွေမဖြစ်အောင် tree ကို သူ့ကိုယ်သူ balance ဖြစ်အောင် ထိန်းဖို့ဆိုပြီး တီထွင်ထားတာတွေကို
Self balancing binary search tree တွေလို့ခေါ်တယ်

## AVL tree

BST ကို balance ဖြစ်အောင် node တွေကို rotate, လှည့်ပြီးတော့ ညီအောင်လုပ်ပေးတယ်

Node တွေကို tree ထဲ bst မှာ insert လုပ်သွားသလိုမျိုး လုပ်သွားမှာ
ဒါပေမဲ့ အဲ့လိုထည့်လိုက်လို့ balance factor က`{-1,0,1}` အတွင်းမရှိတော့ရင်သာ rotate လုပ်ပေးရတယ်

node တစ်ခုရဲ့ balance factor ကို left child ရဲ့ height ထဲက right child ရဲ့ height ကို နုတ်ပြီးတွက်လို့ရတယ်

`BF = h(l)- h(r)`

node တစ်ခုရဲ့ Height ကို လိုချင်ရင် left child height နဲ့ right child height ထဲက အကြီးဆုံးတစ်လုံးကိုယူပြီး 1 ပေါင်းရပါတယ်

`height of a node = max(h(l),h(r)) + 1`

node အသစ်တစ်ခုဝင်လာလို့ balance factor ပြောင်းသွားတိုင်း rotate လုပ်ရပါတယ်
rotate လုပ်ပုံလုပ်နည်း လေးမျိုးရှိပါတယ်

---

<h4>Left Left Case</h4>
<br/>

![left tree](/static/images/sbbst/leftree.png)

အပေါ်ပုံမှာ node 3 ရဲ့ balance factor က 2 ဖြစ်ပါတယ်
left child ရဲ့ left child ထဲဝင်လာတာမလို့ သူ့ကို right rotation လုပ်ပေးရပါတယ်

<br/>
<br/>

```java:rightRotate.java

private AVLNode<T> rightRotate(AVLNode<T> n) {
        AVLNode<T> r = n.left;
        n.left = r.right;
        r.right = n;
        n.height = Math.max(height(n.left), height(n.right)) + 1;
        r.height = Math.max(height(r.left), height(r.right)) + 1;
        return r;
    }

```

---

<h4>Right Right Case</h4>
<br/>

![right tree](/static/images/sbbst/righttree.png)

Right child ရဲ့ right child မှာဖြစ်တာမလို့ သူကို left rotate လုပ်ပးရပါတယ်
<br/>
<br/>

```java:leftRotate.java

 private AVLNode<T> leftRotate(AVLNode<T> n) {
        AVLNode<T> r = n.right;
        n.right = r.left;
        r.left = n;
        n.height = Math.max(height(n.left), height(n.right)) + 1;
        r.height = Math.max(height(r.left), height(r.right)) + 1;
        return r;
    }

```

---

<h4>Left Right Case</h4>
<br/>

![left right tree](/static/images/sbbst/leftright.png)

ဒီလိုမျိုး left child ရဲ့ right child အခြေအနေဆိုရင် နှစ်ဆင့် rotate လုပ်ပေးရပါတယ်
left rotate တစ်ခါ right rotate တစ်ခါ

---

<h4>Right Left Case</h4>
<br/>

![right left tree](/static/images/sbbst/rightleft.png)

အပေါ်ကလိုမျိုးပဲ left တစ်ခါ rotate right rotate လုပ်

---

### Implementing AVL tree in java

<br/>
<br/>
```java:AVLTree.java
public class AVLTree<T> {

    private AVLNode<T> root;

    private static class AVLNode<T> {

        private T t;
        private int height;
        private AVLNode<T> left;
        private AVLNode<T> right;

        private AVLNode(T t) {
            this.t = t;
            height = 1;
        }
    }

    public void insert(T value) {
        root = insert(root, value);
    }

    private AVLNode<T> insert(AVLNode<T> n, T v) {
        if (n == null) {
            n = new AVLNode<T>(v);
            return n;
        } else {
            int k = ((Comparable) n.t).compareTo(v);
            if (k > 0) {
                n.left = insert(n.left, v);
            } else {
                n.right = insert(n.right, v);
            }
            n.height = Math.max(height(n.left), height(n.right)) + 1;
            int heightDiff = heightDiff(n);
            if (heightDiff < -1) {
                if (heightDiff(n.right) > 0) {
                    n.right = rightRotate(n.right);
                    return leftRotate(n);
                } else {
                    return leftRotate(n);
                }
            } else if (heightDiff > 1) {
                if (heightDiff(n.left) < 0) {
                    n.left = leftRotate(n.left);
                    return rightRotate(n);
                } else {
                    return rightRotate(n);
                }
            } else;

        }
        return n;
    }

    private AVLNode<T> leftRotate(AVLNode<T> n) {
        AVLNode<T> r = n.right;
        n.right = r.left;
        r.left = n;
        n.height = Math.max(height(n.left), height(n.right)) + 1;
        r.height = Math.max(height(r.left), height(r.right)) + 1;
        return r;
    }

    private AVLNode<T> rightRotate(AVLNode<T> n) {
        AVLNode<T> r = n.left;
        n.left = r.right;
        r.right = n;
        n.height = Math.max(height(n.left), height(n.right)) + 1;
        r.height = Math.max(height(r.left), height(r.right)) + 1;
        return r;
    }

    private int heightDiff(AVLNode<T> a) {
        if (a == null) {
            return 0;
        }
        return height(a.left) - height(a.right);
    }

    private int height(AVLNode<T> a) {
        if (a == null) {
            return 0;
        }
        return a.height;
    }

}

````

### Time Complexity

Worst case မှchild node တစ်ခုခုက တစ်ခြား node တစ်ခုထက် level 1 ခုပိုနေနိုင်တယ် ဘာဖြစ်လို့လဲဆို balance factor က 2 မှ rotate လုပ်လို့ပါ
ဥပမာ node တိုင်းမှာ left child က right child ထက် level တစ်ခုပိုနေတာမျိုးပေါ့

![avl tree worst case](/static/images/sbbst/avlworstcaselll.jpg)

အပေါ်က လိုမျိုးဆို Node တိုင်းရဲ့ left child က right child ထက် height မှာ 1 level ပိုနေတယ်

အဲ့အတွက် Time Complexity တွက်မယ်ဆို

`N(h) = N(h-1) + N(h-1) + 1` ဖြစ်မယ်

N(h) ဆိုတာက h height မှာ ရှိတဲ့ node အရေအတွက်

equation က ဘယ်လိုဖြစ်လာတာလဲဆိုရင်
ပထမဆုံး root node အတွက်ဆိုရင် left ဘက်မှာရှိတဲ့ node အရေအတွက် နဲ့ right ဘက်မှာရှိတဲ့ node အရေအတွက် နဲ့ သူကိုယ်တိုင်ပေါင်းထားတဲ့ အရေအတွက်ပေါ့
ပုံမှန်ဆို height h မှာ
Child တွေက root ထက် level တစ်ခုနိမ့်တယ်
အာ့ကြောင့်မလို့ h-1 ဆိုပြီးဖြစ်သွားတယ်

ဒါပေမဲ့ worst case မှာ
left ဘက်က rightထက် level တစ်ခု အမြဲပိုလို့တွက်မယ်ဆို

`N(h) = 1 + N(h-1) + N(h-2)`

ဆိုပြီးဖြစ်သွားမယ်

N(h) > 2N(h-2)

N(h-2) ကိုပြန်ရှင်းရင်

N(h-2) > 2N(h-4)<br/>
:<br/>
:<br/>
:<br/>
ဆိုတော့
N(h) > 2\*2\*2\* N(h-6)

2\*2\*2\* N(h-6) မှာ level 6 ခုစာတွက်ပြီးပါပြီ
အဲ့လိုမျိုး recurrence အစားထိုးသွားရင် N(h-i) က base case ရောက်သွားမှာ
အဲ့တော့ equation ထုတ်ရင်

N(h) > 2 ^ h/2 ဆိုပြီး ဖြစ်သွားတယ်

![Meme](/static/images/sbbst/mathmemecs.jpg)

N(h) = n , number of node in the tree

n > 2 ^ h/2
logn > h/2

h < 2logn

Binary search tree မှာ height က time complexity ပဲ
အဲ့တော့ AVL tree သုံးမယ်ဆို လုံးဝ worst case မှာ
2logn ထက်အမြဲငယ်တယ်ပေါ့

သူ့ကို fibonnaci ပြောင်းပြီး အတိအကျ golden ratio နဲ့တွက်လို့ရပါသေးတယ်
Worst case က 1.44logn ရတယ်ပေါ့

ကျွန်တော်တော့နားမလည်တာနဲ့ မရေးတော့ပါဘူး

[Download PDF](https://www.engr.mun.ca/~theo/Courses/dm/pub/dm-application5.pdf)

### BST in Array

BST နဲ့ ပတ်သတ်ပြီးနောက်တစ်ခုက sorted ဖြစ်ပြီးသား array ပေါ်မှာ search လုပ်တာပဲ

### How?

![sorted array](/static/images/sbbst/sortedarray.png)

sorted ဖြစ်ပြီးသား array ထဲမှာ လိုချင်တဲ့ integer ရှိလား ရှာမယ်ဆို အစအဆုံး linear search လုပ်တာထက် binary search လုပ်တာက ပိုမြန်တယ်<br/>
အပေါ်က array ထဲမှာ integer 3 ပါလားဆိုတာ သိဖို့ ပထမဆုံး linear search လုပ်ကြည့်ပါမယ်

```java:linearsearch.java
public boolean linearsearch(int[] array,int targetElement){
 for(int i=0;i<array.length;i++){
  if(array[i]==targetElement)return true;
 }
 return false;
}
````

linear search က အစကနေအဆုံးထိ ရှာရနိုင်တာမို့ worst case မှာ O(n) ကြာပါတယ်<br/>ဒါပေမဲ့ အခုက sorted ဖြစ်ပြီးသား array<br/>
Array က ramdom access ရတယ်<br/>
သွားချင်တဲ့အခန်းကို index ထောက်ပြီးသွားလို့ရတယ်
အဲ့တော့ binary search ကိုသုံးလို့ရတယ်ပေါ့
binary search က ဘယ်လိုလဲဆို
array ရဲ့ တစ်ဝက်ကို index ထောက်ပြီး ရှာမဲ့ int တန်ဖိုးချင်း နိူင်းယှည်ပါတယ်
target integer က အခု middle ထက်ငယ်ရင် middle ကို
right လို့သတ်မှတ်ပြီး နောက်ထက် တစ်ဝက်ပြန်ပိုင်းပါတယ်
အပေါ်က array မှာ လိုချင်တာက 3
middle အခန်းထဲကကောင်က 5<br />
5 က 3 ထက်ကြီးတော့ 5 ရဲ့နောက်ကကောင်တွေအကုန်လုံးက 3 ထက် ကြီးမှာပဲ
sorted ဖြစ်ပြီးသားဆိုတော့လေ
ဆိုတော့ သူ့နောက်က ကောင်တွေကို သွားပြီး ကြည့်စရာမလိုတော့ဘူး
5 ရဲ့ အခန်းကို right လို့သတ်မှတ်ပြီး left နဲ့ right ကြားထဲကနောက်ထပ် middle ကိုပြန်ရှာ
အဲ့လိုလုပ်တာပေါ့

```java:search.java
public boolean containsOrNot(
  int[] array, int targetElement, int left, int right) {

    while (left <= right) {
        int mid = left  + ((right - left) / 2);
          //(left+right)/2 နဲ့ middle ရှာရင် index အကြီးတွေမှာ overflow ဖြစ်သွားနိုင်ပါတယ်
        if (array[mid] < targetElement) {
            left = mid + 1;
        } else if (array[mid] > targetElement) {
            right = mid - 1;
        } else if (array[mid] == targetElement) {
            return true;
        }
    }
    return false;
}
```

သူက အဆင့်တိုင်းမှာ တစ်ဝက်စီ ဖျက်ချသွားတာမလို့ log(n)ဖြစ်သွားတယ်
linear search လုပ်တာထက် ပိုမြန်တယ်
ဒါပေမဲ့ sorted ဖြစ်တဲ့ array မှာပဲလုပ်လို့ရတယ်
နောက်ပြီး array လိုကောင်မျိုးက data တွေကြိုသိထားဖို့လိုတယ်
data အသစ်တွေထပ်ထည့်ချင်တာ ဖျက်ချင်တာဆိုရင် array သစ်တွေပြန်ဆောက်ရတယ်
data တွေ dynamic အဝင်အထွက်များရင် array နဲ့သိပ်အဆင်မပြေတော့ဘူး

<h3>References</h3>

[AVL Tree btechsmartclass.com](http://www.btechsmartclass.com/data_structures/avl-trees.html#:~:text=The%20balance%20factor%20of%20a,subtree%20%2D%20height%20of%20left%20subtree)

[AVL Implementaton](https://stackoverflow.com/a/19885286/12390549)

[AVL Tree baeldung.com](https://www.baeldung.com/java-binary-search)
