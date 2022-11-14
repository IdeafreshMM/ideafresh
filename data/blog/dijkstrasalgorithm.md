---
slug: dijkstrasalgorithm
title: Dijkstra's algorithm
date: 11/13/2022
tags: ['algorithm', 'dijkstra', 'heap']
lastmod: 11/13/2022
draft: false
summary: Dijkstra's Algorithm Implementation
authors: ['jerry']
canonicalUrl: ideafresh.me/blog/dijkstrsalgorithm
---

`Dijkstra's algorithm` ကို 1959 မှာ dutch ကွန်ပြူတာပညာရှင် `Edsger Dijkstra` ကနေတီထွင်ခဲ့တာဖြစ်ပါတယ်
node တစ်ခုကနေ တစ်ခြား node တစ်ခုကို သွားနိုင်တဲ့ အတိုဆုံးလမ်းကြောင်းကို ရှာတဲ့ နေရာမှာ အသုံးပြုပါတယ်
algorithm ကို directed graph ဖြစ်ဖြစ် undirected graph ဖြစ်ဖြစ် အသုံးပြုလို့ရပြီး
အဲ့သည် graph တွေသည် negative weight မပါတဲ့ graph တွေ ဖြစ်ရပါမယ်

### Algorithm Summary

Alogorithm အတွက်ပထမဆုံး node တွေကိုထည့်ဖို့ priority queue,
visited nodeတွေကိုထည့်ဖို့ data structure တစ်ခု
လိုပါမယ်
အတိုဆုံး Distance ရှာချင်တဲ့ node ကနေစပြီး
သူ့ရဲ့ neighbor node တွေကို traverse လုပ်ပြီး value တွေကို update လုပ်ပါတယ်
ပြီးရင် priority queue ထဲက အတိုဆုံး node ကိုထုတ်ပြီး
သူ့ရဲ့ neighbor တွေကိုပြန်ပတ်ပါတယ်
အဲ့လိုမျိုး node တွေအကုန်လုပ်ပြီးတဲ့အချိန်မှာ လိုချင်တဲ့ node ကနေပြီးတော့ အခြား node တွေကိုသွားနိုင်တဲ့ အတိုဆုံး shortest distance တွေထွက်လာပါတယ်
ဒီလိုရေးထားတာ မျက်စိထဲမမြင်လွယ်လို့ အောက်မှာ ဥပမာတစ်ခုလုပ်ပေးထားပါတယ်

---

### Example Implementation

အောက်က undirected graph ကိုကြည့်ပါ

![First Stage](/static/images/dijkstras/dijkstra.jpg)

Node E ကနေပြီးတော့ ကျန်တဲ့ node တွေကိုသွားနိုင်တဲ့အတိုဆုံး distance ကို ရှာချင်တယ်ဆိုပါစို့
ပတမဦးဆုံး shortest distance from Node E ဆိုပြီး set တစ်ခုဆောက်မယ်
Node E ရဲ့ distance ကို 0 ထားပြီး ကျန်တဲ့ node တိုင်းရဲ့ distance ကို infinity လို့သတ်မှတ်

node e ကနေ node e ကိုသွားနိုင်တဲ့ distance က 0 မလို့ သူကို့ တစ်ခါတည်း တန်းထားလိုက်တာပါ
ကျန်တဲ့ဟာတွေက မသိသေးတော့ Infinity ထားလိုက်မယ်
ပြီးရင် node e ကို PQ ထဲ့ထည့်
အဲ့ဒါဆိုရင်

![First Stage](/static/images/dijkstras/first.png)

ဆိုပြီး ဖြစ်သွားပြီ  
PQ ထဲကနေ အငယ်ဆုံး distance ရှိတဲ့ node ကိုထုတ်မယ်.
ဆိုတော့ E<br/>
ထုတ်လာတဲ့ node ကို PQ ထဲကနေ remove လုပ်<br/>
E ရဲ့ neighbour တွေက D,B,C<br/>
D က visited ထဲမရှိတဲ့အတွက်ကြောင့် D အတွက် စ process လုပ်မယ်<br/>
E ရဲ့ Distance က 0, E ကနေ D ကိုသွားရင် weight က 2<br/>
ပေါင်းလိုက်ရင် 0+2=2<br/>
အရင်က D ကိုရောက်နိုင်တဲ့ shortest distance က infinity ဆိုတော့ အခု 2 က ပိုငယ်တော့ D ရဲ့ shortest distance ကို updateလုပ်မယ်
D ကို PQထဲ့ထည့်မယ်<br/>
နောက် unvisited neighbour ဖြစ်တဲ့ B ကိုသွားရင် 0+7=7 သည် infinity ထက်ငယ်တာဖြစ်လို့ B ကိုလည်း update လုပ်မယ်
B ကို PQထဲထည့်မယ်<br/>
အဲ့လိုပဲ နောက်ဆုံးneighbour အတွက်လည်း လုပ်မယ်ဆိုရင်
0+3 < infinity ဖြစ်တာမလို့ သူ့အတွက်လည်း Update လုပ်မယ်.
Node E ရဲ့ neighbour တွေအကုန်ပြီးတဲ့ အချိန်မှာ သူ့ကို visited ထဲထည့်လိုက်မယ်<br/>

![Second Stage](/static/images/dijkstras/second.png)

ဆိုပြီးဖြစ်လာပြီ<br/>
Node E ကို process လုပ်ပြီးတဲ့အချိန်မှာ ဘယ် node ကိုဆက်ပြီး process မလဲဆိုရငိ PQ ထဲက shortest distance ရှိတဲ့ Node ကိုဆကိလုပ်ရမယ်
အခု PQ ထဲက အတိုဆုံးက Dဆိုတော့ သူ့ကိုဆကိလုပ်မယ်<br/>
D ကို PQ ထဲက ထုတ် <br/>
D ရဲ့ neighbourတွေက A,B,E<br/>
D ကနေ A ကိုသွားရင်<br/>
Dရဲ့ shortest distance က 2<br/>
D ကနေ A ကိုသွားရင် weight က 5<br/>
2+5=7<br/>
7သည် infinity ထက်ငယ်လို့ A ရဲ့ distance ကို update လုပ်မယ်<br/>
A ကို PQ ထဲထည့်<br/>
အဲ့လိုပဲနောက် B ကိုလုပ်မယ်ဆို 2+4=6<br/>
အရင်က B ကိုရောက်နိုင်တဲ့ distance သည် 7<br/>
အခုက 6ဆိုတော့ update ပြန်လုပ်မယ်<br/>
ပြီးရင် B ကိုလည်း PQထဲ ပြန်ထည့်<br/>
နောက် neighbourတစ်ခုဖြစ်တဲ့ e ဒါပေမဲ့ E က visited ဖြစ်ပြီးသားမလို့ ကျော်သွားပါမယ်<br/>
neighbour တွေအကုန်ပတ်ပြီးသွားတဲ့အချိန်မှာ<br/>

![Third Stage](/static/images/dijkstras/third.png)

D ကို process လုပ်ပြီးတဲ့အခါမှာ PQ ထဲက အတိုဆုံး node ဖြစ်တဲ့ C ကိုဆကိပြီးတော့ process လုပ်မယ်
C ကို PQထဲက ထုတ်<br/>
C ရဲ့ neighbour တွေကE နဲ့ B<br/>
E က visited မလို့ ကျော်မယ်<br/>
3+1=4<br/>
အရင်က shortest distance ကလည်း 6 ဆိုတော့ update လုပ်မယ်<br/>
ပြီးရင် B ကို PQ ထဲထည့်<br/>

![Fourth Stage](/static/images/dijkstras/fourth.png)

B ကိုဆက်လုပ်မယ်<br/>
B ကို PQ ထဲက ထုတ်<br/>
B ကနေ A ကိုသွားရင် 4+1=5<br/>
အရင်က 7<br/>
ငယ်တော့ Update လုပ်<br/>
ပြီးရငိ PQ ထဲထည့်<br/>
ကျန်တဲ့ neighbour တွေက visited ဖြစ်ပြီးသားမလို့ကျော်<br/>
ပြီးရင် Bကိုလည်း visited ထဲထည့်<br/>

![Fifth Stage](/static/images/dijkstras/fifth.png)

A ကိုလည်း အပေါ်ကအတိုင်းဆက်လုပ်<br/>
နောက်ဆုံ PQ ထဲ node တွေ ကုန်သွားတဲ့အချိန်ကျရင်လိုချင်တဲ့ အဖြေရလာပါပြီ<br/>
E ကနေ A ကိုသွားနိုင်တဲ့ shortest distance က 5<br/>
E က နေ B ကိုသွားရင် 4<br/>
E ကနေ C ကိုသွားရင် 3<br/>
E ကနေ D ကိုသွားရင် 2 ဆိုပြီးရလာပါပြီ<br/>

![Final Stage](/static/images/dijkstras/sixth.png)

shortest path တွေကို လိုချင်ရင် node တိုင်းအတွက် shortest path သိမ်းဖို့ map တစ်ခုခုဆောက်ပြီး
update လုပ်တိုင်း parent node ရဲ့ path နဲ့ အခု Node Name ပေါင်းပြီး သူ့အတွက်တစ်ခါထဲ Update လိုက်လုပ်လို့ရပါတယ်
<br/>
အောက်က code က Dijkstra's algorithm ကို java နဲ့ implement လုပ်ထားတာပါ<br/>

[Code Reference](https://baeldung.com)

သူက node with shortest distance ကိုရှာတဲ့နေရာမှာ priority queue မသုံးပဲ ရိုးရိုးlinear search သုံးထားတာမလို့ time complexity မကောင်းပါဘူး
ဒီနေရာမှာ another datastructure သုံးပြီး complexity လျော့ချလို့ရပါတယ်

```java:DijkstraAlgorithm.java
public class DijkstraAlgorithm {
    public static class Node {
        private String name;
        private LinkedList < Node > shortestPath = new LinkedList();
        private Integer distance = Integer.MAX_VALUE;
        Map < Node, Integer > adjacent = new HashMap();
        public void addDestination(Node node, Integer destination) {
            adjacent.put(node, destination);
        }
        public Node(String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public LinkedList < Node > getShortestPath() {
            return shortestPath;
        }
        public void setShortestPath(LinkedList < Node > shortestPath) {
            this.shortestPath = shortestPath;
        }
        public Integer getDistance() {
            return distance;
        }
        public void setDistance(Integer distance) {
            this.distance = distance;
        }
        public Map < Node, Integer > getAdjacent() {
            return adjacent;
        }
        public void setAdjacent(Map < Node, Integer > adjacent) {
            this.adjacent = adjacent;
        }
    }
    public static class Graph {
        private Set < Node > nodes = new HashSet();
        public void addNode(Node node) {
            nodes.add(node);
        }
        public Set < Node > getNodes() {
            return nodes;
        }
        public void setNodes(Set < Node > nodes) {
            this.nodes = nodes;
        }
    }
    public static Graph calculateShortestPathFromSource(Graph graph, Node source) {
        source.setDistance(0);
        Set < Node > settledNode = new HashSet();
        Set < Node > unsettledNode = new HashSet();
        unsettledNode.add(source);
        while (unsettledNode.size() != 0) {
            Node currentNode = getLowestDistanceNode(unsettledNode); //log
            unsettledNode.remove(currentNode);
            for (Entry < Node, Integer > adjacentPair: currentNode.getAdjacent().entrySet()) {
                Node adjacentNode = adjacentPair.getKey();
                Integer adjacentDistance = adjacentPair.getValue();
                if (!settledNode.contains(adjacentNode)) {
                    calculateMinimumDistance(adjacentNode, adjacentDistance, currentNode);
                    unsettledNode.add(adjacentNode);
                }
            }
            settledNode.add(currentNode);
        }
        return graph;
    }
    private static void calculateMinimumDistance(Node adjacentNode, Integer adjacentDistance, Node currentNode) {
        Integer sourceDistance = currentNode.getDistance();
        if (sourceDistance + adjacentDistance < adjacentNode.getDistance()) {
            adjacentNode.setDistance(sourceDistance + adjacentDistance);
            LinkedList < Node > shortestPath = new LinkedList < > (currentNode.getShortestPath());
            shortestPath.add(currentNode);
            adjacentNode.setShortestPath(shortestPath);
        }
    }
    private static Node getLowestDistanceNode(Set < Node > unsettledNode) {
        // TODO Auto-generated method stub
        Node lowestNode = null;
        int lowestDistance = Integer.MAX_VALUE;
        for (Node node: unsettledNode) {
            if (node.distance < lowestDistance) {
                lowestNode = node;
                lowestDistance = node.distance;
            }
        }
        return lowestNode;
    }
}

```

Let's Test it.

```java:testDijkstra.java

public class testDijkstra {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Node nodeA = new Node("A");
        Node nodeB = new Node("B");
        Node nodeC = new Node("C");
        Node nodeD = new Node("D");
        Node nodeE = new Node("E");
        nodeE.addDestination(nodeD, 2);
        nodeE.addDestination(nodeC, 4);
        nodeE.addDestination(nodeB, 7);
        nodeD.addDestination(nodeE, 2);
        nodeD.addDestination(nodeB, 4);
        nodeD.addDestination(nodeA, 5);
        nodeA.addDestination(nodeB, 1);
        nodeA.addDestination(nodeD, 5);
        nodeB.addDestination(nodeA, 1);
        nodeB.addDestination(nodeD, 4);
        nodeB.addDestination(nodeE, 7);
        nodeB.addDestination(nodeC, 1);
        nodeC.addDestination(nodeB, 1);
        nodeC.addDestination(nodeE, 3);
        Graph graph = new Graph();
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph = DijkstraAlgorithm.calculateShortestPathFromSource(graph, nodeE);
        Iterator iterator = graph.getNodes().iterator();
        while (iterator.hasNext()) {
            Node node = (Node) iterator.next();
            System.out.println("Node is " + node.getName() + " distance is " + node.getDistance());
        }
    }
    //code tested and proved
}

```

### Time Complexity

Dijkstra ရဲ့ time complexity က PQ ရဲ့ data structure ပေါ်လုံးဝမူတည်နေတယ် တော်တော်လည်းရူပ်တယ်

(Not basic)

### Case - 1

ပထမဆုံး queue ထဲက အငယ်ဆုံး node ကိုရချင်တဲ့အခါမှာ ရိုးရိုး linear search နဲ့ ရှာတာကို စဥ်းစားရအောင်<br/>
linear search ဆိုတော့ worst case မှာ O(n) ကုန်တယ်<br/>
vertex တစ်ခုသွားတိုင်း သူ့နဲ့သက်ဆိုင်တဲ့ Edge တွေကို calculate တစ်ခါလုပ်တယ်<br/>
Queue ထဲကနေရှာတိုင်းလည်း O(V) ကုန်တယ်<br/>
node တစ်ခုတိုင်းအတွက် နောက် successor ရှာတဲ့နေရာမှာ O(V) ကုန်တယ်<br/>
Edgeတွေကိုသွားပြီးတိုင်း PQ ကို update ဖို့ O(V) ကုန်တယ်<br/>
ဆိုတော့ Time Complexity က

= O( V + E )\* V

ဒါက PQ ကို ရိုးရိုး linear search လုပ်တာ

### Case - 2

ဒီ case မှာကျတော့ ရိုးရိုး min heap သုံးကြည့်ပါမယ်<br/>
heap sort အတွက် insert က logn<br/>
extract min က logn လို့မှတ်ထားပေးပါ<br/>
Node တိုင်းက သူ့ရဲ့ successor ကိုရှာတာက ပထမဆုံးတစ်လုံးကို pop ရုံပဲဆိုတော့ O(1)
PQ ထဲထည့်ရင် logn<br/>
ဒါပေမဲ့ PQ ကို update လုပ်ဖို့ဆို node ကိုပြန်ရှာရပါတယ်
min heap မှာလိုချင်တာရှာဖို့ O(V) ကြာပါတယ်<br/>
ဆိုတော့ သူကမခြားနားပဲ case-1 နဲ့ time complexity က
ဒါပေမဲ့ average case မှာ linear search ထက်ပိုမြန်တာပေါ့

### Case - 3

case 2 မှာအဓိကပြသာနာက update လုပ်ဖို့ node ကိုပြန်ရှာရတာပဲ<br/>
ရှာရလွယ်အောင် Self balancing binary search treeပြောင်းသုံးမယ်
But here the tricky part.
SBBST တွေက value တွေနဲ့ balance ဖြစ်အောင်ထားတာ
အဲ့တော့ Node A ကို update လုပ်ချင်တယ်ဆို ဘယ်လိုပြန်ရှာမလဲပေါ့
အဲ့တော့ SBBST ရဲ့ဘယ်နေရာမှာ ဘယ် node ကိုသိမ်းပါဆိုတဲ့ နောက် data structure တစ်ခုပြန်လိုတယ်
Mapping လုပ်ဖို့ပေါ့<br/>
ပုံမှန်အားဖြင်တော့ mapping လုပ်တာက constant time ရတယ်<br/>
ဘယ်လိုရတာလဲဆိုအရင်ကရေးထားတဲ့
[Hashtable](https://ideafresh.me/blog/hashtable/) ကိုဖတ်ကြည့်ပါ <br/>
mapping အတွက်ရရင် update လုပ်တာ logn နဲ့ရပြီ<br/>
ဒီလိုမျိုး ငယ်တဲ့ node update လုပ်တာကို decrease key opeartion လုပ်တာလို့ခေါ်တယ်<br/>
SBBST မသုံးပဲ binary heap နဲ့ဆို array ပေါ်မှာဆောက်ထားတာမလို့ index ကို mapping လုပ်တယ်ပေါ့<br/>
ပြီးရင်သူက parent, children တွေ ကို access လုပ်တာဆိုလည်း formula သုံးလို့ရတယ်<br/>
parent node ကိုလိုချင်ရင် i/2 သုံးလိုက်ရင်ရတယ်<br/>
update လုပ်ပြီဆိုကတည်းက တန်ဖိုးကငယ်သွားတော့ parent ပေါ်ပဲတက်သွားမှာမလို့ပါ swap လုပ်ရင်<br/>
(Honestly, I can't image how to make mapping for sbbst, heap one is kinda easy to see tho)

`Voila` <br/>

Time Complexity = O (V+E)\*logn

Time Complexity တွက်တာကအခုနားမလည်လဲအရေးမကြီးပါဘူး
တစ်ခါထဲ heap,sbbstတွေအကြောင်းထိုင်ရေးလိုက်ရင် စာလည်းရှည်သွားပြီးဖတ်ချင်စိတ်လည်းမရှိတော့မှာစိုးတာရယ်
နောက်မှ ဒီထဲက data structure တွေကို တစ်ခုချင်းစီရေးပေးပါမယ်
