---
slug: what-is-dependency-injection
title: Dependency Injection ဆိုတာဘာလဲ
date: 05/2/2022
tags: ['article','dependency injection']
lastmod: 05/2/2022
draft: false
summary: Dependency Injection ဆိုတာဘာလဲ
authors: ['tt']
canonicalUrl: ideafresh.me/blog/what-is-dependency-injection
---

Dependency Injection ဆိုတာ အလွယ်ပြောရရင် Class A နဲ့ Class B ရှိတယ်ဆိုပါစို့။ Class A က Class B ရဲ့ method တစ်ခု ကို သုံးချင်ရင် အဲ့ Class ကို Object အရင်ဆောက်ရတယ်။ ပြီးမှ ခေါ်သုံးလို့ရတယ်။ အဲ့ဒီအခါမှာ Class A က Class B ပေါ် dependent ဖြစ်သွားတယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        A a = new A();
        a.sayAB();
    }
}

class B {
    void sayB() {
        System.out.println("B");
    }
}

class A {
    B b;
    A() {
        b = new B();
    }
    void sayAB() {
        System.out.print("A");
        b.sayB();
    }
}
```

ဒီမှာဆိုရင် class A ထဲမှာ Object b ဆောက်လိုက်တယ်။ ပြီးရင် b ရဲ့ method တစ်ခုကို ခေါ် သုံးလို့ရသွားတယ်။ ပြဿနာ ကို‌ဖြေရှင်းပြီးသား ဖြစ်သွားတယ်။ ဒါပေမဲ့ code ဟာ tightly coupling ဖြစ်သွားတယ်။ tight coupling ဆိုတာ class တစ်ခုနဲ့ တစ်ခု object တစ်ခုနဲ့ တစ်ခုဟာ အရမ်း dependent ဖြစ်နေတာကိုဆိုလိုတယ်။ ဒီ example မှာဆိုရင် class A ထဲမှာ object b ကို အသေ လာဆောက်တဲ့ အတွက် အခြား object အစားထိုးရခက်သွားတယ်။
object b အတွက်လိုအပ်တဲ့ parameter တွေလည်း class A က သိနေမှ ရတော့မယ်။ testing လုပ်ရင်လည်း class A ထဲမှာ object b ပါမှန်း မသိနိုင်တဲ့အတွက် dependent ဖြစ်နေမှန်း မသိနိုင်ဘူး။ အကယ်လို့ object b ထဲမှာလည်း နောက်ထပ် dependency တွေ ရှိနေမယ်ဆိုရင် dependency chain တွေကြောင့် maintain လုပ်ရတာ extend လုပ်ရတာ modify လုပ်ရတာ ခက်ခဲလာမယ်။ အဲ့ဒီတော့ dependency injection ကို သုံးပြီး ဒီလိုပြင်ရေးမယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        B b = new B();
        A a = new A(b);
        a.sayAB();
    }
}

class B {
    void sayB() {
        System.out.println("B");
    }
}

class A {
    B b;
    A(B b) {
        this.b = b;
    }
    void sayAB() {
        System.out.print("A");
        b.sayB();
    }
}
```

ဒီမှာဆိုရင် object b ကို object a မတိုင်ခင် create လုပ်ပြီး object a ရဲ့ constructor parameter အဖြစ်နဲ့ ပေးလိုက်တယ်။ object a နဲ့ object b ဟာ loose coupling ဖြစ်သွားတယ်။ class A ဟာ class B ကိုသိစရာ မလိုပဲ သူလိုတဲ့ method ကိုပဲ ခေါ်သုံးလို့ရသွားတယ်။ ဒါကို dependency injection လို့ခေါ်တယ်။

## coding to the interface

Dependency injection အကြောင်းပြောရင် interface ကိုသုံးပြီး ရေးတဲ့ ပုံစံပါ ပြောရမယ်။ dependency injection လုပ်တဲ့အခါ concrete class တွေကို သုံးတာထက် interface တွေကို သုံးရင်ပိုကောင်းတယ်။ ဥပမာ လူတစ်ယောက် မှာ pet တစ်ကောင်စီရှိတယ်ဆိုပါစို့။ အဲ့ဒီအခါ pet က ခွေးလည်းဖြစ်နိုင်သလို ကြောင်လည်း ဖြစ်နိုင်တယ်။ အဲ့ဒါကြောင့် constructor ရေးတဲ့အခါ Cat တို့ Dog တို့ကို accept လုပ်တာထက် Pet ဆိုတဲ့ interface ကို accept လုပ်တာက flexible ပိုဖြစ်တယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        Cat cat = new Cat();
        Person p1 = new Person(cat);
        p1.feed("fish");
        Dog dog = new Dog();
        Person p2 = new Person(dog);
        p2.feed("bone");
    }
}

interface Pet {
    void eat(String food);
}

class Dog implements Pet {
    public void eat (String food) {
        System.out.println("Dog eat " + food);
    }
}

class Cat implements Pet {
    public void eat (String food) {
        System.out.println("Cat eat " + food);
    }
}

class Person {
    Pet pet;

    Person(Pet pet) {
        this.pet = pet;
    }

    void feed(String food){
        pet.eat(food);
    }
}

```

## Not accept null object

object ကို class ရဲ့အပြင်က နေ inject လုပ်တဲ့ အတွက် object က null ဖြစ်နေရင် အဲ့ object ရဲ့method တွေကိုခေါ်သုံးတဲ့အခါ NullPointerException တက်နိုင်တဲ့အတွက် object ကို null မဖြစ်အောင် သေချာစစ်ဖို့လိုပါတယ်။

```java:Example.java
class Person {
    Pet pet;

    Person(Pet pet) {
        if(pet==null) throw new IllegalArgumentException("everyone should have a pet!");
        this.pet = pet;
    }

    void feed(String food){
        pet.eat(food);
    }
}
```

## Invertion of Control(IOC)

Invertion of Control ဆိုတာ အလွယ်ပြောရရင် normal flow ကို ပြောင်းပြန် ပြန်စဥ်းစားတာပါ။ Dependency Injection ဆိုတာလည်း IOC ကို implement လုပ်ထားတဲ့ design pattern တစ်ခုပါပဲ။ ပုံမှန် flow အတိုင်းဆိုရင် object တစ်ခုမှာ တစ်ခြား object ကို သုံးဖို့လိုလာရင် အဲ့ object ကို ဆောက်မယ် သုံးမယ်။ IOC အရဆိုရင် ဒီ object မှာ သူက အသုံးပြုမဲ့ တစ်ခြား object တွေ ဘာတွေရှိမလဲ၊ သူ့ရဲ့ dependencies က ဘာတွေလဲ၊ အဲ့ဒါတွေကို အရင်ဆောက် မယ် ပြီးတော့မှ ပြန်သုံးမယ်။ ဒီ သဘောကို ဆိုလိုတာဖြစ်တယ်။

## Three types of Dependency Injection

1. Constructor Injection
2. Method Injection
3. Parameter Injection

### Constructor Injection

Constructor Injection ဆိုတာကတော့ ပထမဆုံး ပြခဲ့တဲ့ ဥပမာလိုပဲ dependency object ကို constructor မှာ လက်ခံတာ။ ကိုယ်ဆောက်မဲ့ Class အတွက် dependency object မရှိမဖြစ် လိုအပ်တဲ့ အခြေအနေ မှာသုံးတယ်။ ဒီလိုအခြေအနေမှာဆိုရင် dependency object ကို null မဖြစ်အောင်စစ်ဖို့လိုအပ်တယ်။ ဥပမာ Car နဲ့ Engine လိုမျိုးပေါ့။ Car တစ်စီးမှာ Engine ဟာမရှိမဖြစ်လိုအပ်တဲ့အတွက် Car object ဆောက်တဲ့အခါ မှာ Engine object တစ်ခုတစ်ခါတည်း ထည့်ပေးရတယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        Engine engine = new Engine();
        Car car = new Car(engine);
        car.start();
    }
}

class Engine {
    void start(){
        System.out.print("Engine Start");
    }
}

class Car {
    Engine engine;
    Car(Engine engine) {
        if(engine == null) throw new IllegalArgumentException("car needs engine");
        this.engine = engine;
    }
    void start() {
        engine.start();
    }
}
```

### Parameter Injection

Parameter Injection ဆိုတာက dependency object ကို ကိုယ်ဆောက်မဲ့ class ရဲ့ parameter အနေနဲ့ ထားလိုက်ပြီး အဲ့ဒီ parameter ကို setter method တစ်ခုနဲ့ expose လုပ်ပြီး dependency Object ကိုလက်ခံတယ်။ ကိုယ့်ရဲ့ dependency object ဟာ ကိုယ်ဆောက် မဲ့ object မှာ optional အဖြစ်နဲ့ပဲ လိုအပ်တဲ့အခါမျိုးမှာ သုံးတယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        Person p1 = new Person();
        Cat cat = new Cat();
        p1.setPet(cat);
        p1.feed("fish");
        Dog dog = new Dog();
        p1.setPet(dog);
        p1.feed("bone");
    }
}

interface Pet {
    void eat(String food);
}

class Dog implements Pet {
    public void eat (String food) {
        System.out.println("Dog eat " + food);
    }
}

class Cat implements Pet {
    public void eat (String food) {
        System.out.println("Cat eat " + food);
    }
}

class Person {
    private Pet pet;
    
    void setPet(Pet pet) {
        this.pet = pet;
    }

    void feed(String food){
        pet.eat(food);
    }
}
```

ဒီ example မှာဆိုရင် feed method ကို မခေါ်ခင် pet တစ်ကောင်ကို setter method နဲ့ အရင် set လုပ်မှရမယ်။ အဲ့လိုမလုပ်ရင် NullPointerException တက်နိုင်တယ်။ ဒီလိုဖြစ်တာကို temporal coupling လို့ခေါ်တယ်။ အဲ့ဒီလို မဖြစ်အောင် default object တစ်ခုကို constructor ထည့်ဆောက်လို့ရတယ်။ ဒါပေမဲ့ ပြဿနာ တပတ်ပြန်လည်သွား သလို ဖြစ်သွားတယ်။ အဲ့ဒါကြောင့် မလို့ အများစုက constructor injection ကိုပဲသုံးကြပြီး parameter injection ကို သိပ်မသုံးကြဘူး။

### Method Injection

Method Injection ဆိုတာက dependency object ဟာ ပြောင်းလဲနေတဲ့အခါ parameter injection လုပ်ဖို့ အဆင်မပြေတော့ဘူး။ ကိုယ် dependent ဖြစ်တဲ့ object ကိုလိုတိုင်း parameter အနေနဲ့ set လုပ်ရတဲ့အခါ temporal coupling ကိုပိုဖြစ်လာစေနိုင်တယ်။ အဲ့ဒါကြောင့် dependency ရှိတဲ့ method ကို သုံးတဲ့အခါမှာ တစ်ခါတည်း dependency object ကို ထည့်ပေးလိုက်တယ်။ အဲ့လိုလုပ်တာကို method injection လို့ခေါ်တယ်။ နမူနာကို အောက် မှာကြည့်နိုင်ပါတယ်။

```java:Example.java
class Example {
    public static void main(String[] args) {
        Person p1 = new Person();
        Cat cat = new Cat();
        p1.feed(cat, "fish");
        Dog dog = new Dog();
        p1.feed(dog, "bone");
    }
}

interface Pet {
    void eat(String food);
}

class Dog implements Pet {
    public void eat (String food) {
        System.out.println("Dog eat " + food);
    }
}

class Cat implements Pet {
    public void eat (String food) {
        System.out.println("Cat eat " + food);
    }
}

class Person {
    private Pet pet;

    void feed(Pet pet, String food){
        pet.eat(food);
    }
}
```
