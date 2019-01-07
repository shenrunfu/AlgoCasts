// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next
        }

        return counter;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        const size = this.size();

        if (size === 1) {
            this.head = null;
            return;
        }

        const previous = this.getAt(size - 2);
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;

        while (node) {
            if (counter === index) {
                return node
            }

            counter++;
            node = node.next
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        if (index === 0) {
            return this.insertFirst(data);
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const current = this.getAt(index);

        previous.next = node;
        node.next = current
    }
}

module.exports = {Node, LinkedList};
