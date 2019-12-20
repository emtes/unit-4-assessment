# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**

`this` is a keyword that we use to refer to a function's execution context. `this` is evaluated when a function is invoked and its behavior is affected by how it is invoked as well. Functions can be invoked as a function, method, constructor, or indirectly.

**2. What will the following code produce? Why?**

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
- This snippet will log `NaN` and `0` to the console. `NaN` is logged because `add` is first invoked as a function, meaning the `this` keyword in its body evaluates to the `window` or `global` object. The function adds `this.a`, a property that does not exist in the global object because it was initialized with the `let` keyword, to `b`, a variable in the function's accessible scope that evaluates to `10`. As we know, `undefined` plus a number returns `NaN`. `0` is logged next because when we invoked `add` as a method of our `c` object, `this` will evaluate to that object, allowing the function body to access a property called `a` that is equals to `-10` and a variable `b` that equals to `10`.

**3. What is a closure? How does it allow us to create private data?**

- Closure occurs when we leverage JavaScript's feature of functions as first-class citizens to return a function from an enclosing function. Closures allows us to create private data because any instance of the returned inner function can access the locally-scoped variables of the enclosing function.

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
- This snippet logs the inner anonymous function and `Buona sera, Reuben` to the console. The function is logged because `createGreeting` returns a function in the first line of its body and we invoked it only once. `Buona sera, Reuben` is logged because in the second time we invoke the function that `createGreeting` returns by using the syntax we're familiar with and passing `Reuben` as an argument for the second function. `Bueno sera` is able to be accessed because parameters become locally scoped variables and our inner function closes over it.

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
- *Encapsulation* is the practice of designing programs that are composed of smaller pieces that interact with each other through interfaces of our own design as opposed to relying on any built-in methods or simply abstracting those.

**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
- The prototype property of a function has the value of an object with a `constructor` property that points to the function itself. An object's prototype is a pointer to the object that is the value of the prototype property of the constructor that was used to create it. Because these are pointers the relationship between the two is one of inheritance and values passed by reference.

**7. What is polymorphism? Illustrate using code.**
- Polymorphism is the pattern of designing methods that are shared by different objects and overwriting them when they need to be more specific than the inherited one.
```javascript
class Fellow {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  yellIntro() {
    return `${this.name}!! I'm ${this.age}!!`
  }
}

class Enmanuel extends Fellow {
  constructor(name) {
    super(name);
  }

  yellIntro() { // Even though this method is inherited from our Fellow class, we can overwrite it to work better with this type of object that has no age property.
    return `${this.name}!!`
  }
}
```