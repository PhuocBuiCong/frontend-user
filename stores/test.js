class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(e) {
    this.items[this.rear] = e;
    this.rear++;
    // console.log('i', this.items)
    // console.log('rear', this.rear)
  }
  dequeue() {
    const item = this.items[this.front];
    console.log("trc delete", item);
    delete this.items[this.front];
    this.front++;
    console.log("front", this.front);
    console.log("sau delete", item);
    return item;
  }
  isEmpty() {
    this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// queue.print()
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.print()

