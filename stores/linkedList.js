class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // O(1)
  prepend(value) {
    // them vao dau
    const node = new Node(value);
    if (this.isEmpty()) {
      // neu trong linked list chua co ptu nafo thi gan head bang node moi
      this.head = node;
    } else {
      node.next = this.head; // gan next cua node dc them vao dau bang head
      this.head = node; // gan head cua linked bang node moi them vao
    }
    this.size++;
  }

  // 0(n)
  append(value) {
    //them vao cuoi
    const node = new Node(value);
    if (this.isEmpty()) {
      // neu trong linked list chua co ptu nafo thi gan head bang node moi
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        // trong khi prev.next khac null thi dich prev leen 1 node
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head; //gan bien chay bang head
      for (let i = 0; i < index - 1; i++) {
        // for den trc vi tri thi dung
        prev = prev.next;
      }
      node.next = prev.next; // tro node next den ptu tiep theo
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) prev = prev.next;
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) return -1;
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

// list.append(10);
// list.print(); //log 10

// list.append(20);
// list.append(30);

// list.print();

list.insert(10, 0);
list.insert(20, 0);
list.insert(30, 1);
list.insert(40, 2);
list.print(); //20 30 40 10

// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// list.print()
// console.log(list.removeFrom(1))
// list.print()

// console.log(list.removeValue(20));
// list.print();

// console.log(list.search(30));
// console.log(list.search(60));

list.reverse();
list.print();
