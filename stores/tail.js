class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next.value !== this.tail) {
        prev = prev.next;
      }
      this.tail = prev;
      prev.next = null;
    }
    this.size--;
    return value;
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

module.exports = LinkedList;
