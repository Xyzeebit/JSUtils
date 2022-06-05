"use strict";
const Node = require('./node').Node;
/**
 * @author{Xyzeebit}
 * Doubly LinkedList
*/
class LinkedList {
    constructor(node) {
        this.head = null;
        if (node instanceof Node) {
            this.head = node;
        }
    }
    /**
     * function adds a new Node into the head node
     * @param{E} data - value to be added to head
    */
    add(data) {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            let p = this.head;
            while (p.next != null) {
                p = p.next;
            }
            //let t = new Node(null null, p.data);
            p.next = new Node(data, null, p);
        }
    }
    /**
     * function removes data from LinkedList
     * @param{E} data - data to be removed
     * @return{Node} returns the data removed;
    */
    remove(data) {
        if (this.contains(data)) {
            if (this.head != null) {
                if (this.head.data === data) {
                    let d = this.head.data;
                    if (this.head.next != null) {
                        let n = this.head.next;
                        this.head = n;
                    }
                    else {
                        this.head = null;
                    }
                    return d;
                }
                else {
                    if (this.head.next != null) {
                        let p = this.head;
                        while (p.data !== data) {
                            /*if(p.next.data === data) {
                                let d = p.data;
                                let t = p.next;
                                t.prev = p.prev;
                                p.next = t;
                                this.head = p;
                                return d;
                            }*/
                            p = p.next;
                        }
                        if (p.data === data) {
                            let d = p.data;
                            let t = p.next;
                            t.prev = p.prev;
                            p.next = t;
                            this.head = p;
                            return d;
                        }
                        return null;
                    }
                    else {
                        return null;
                    }
                    return null;
                }
            }
            return null;
        }
        return null;
    }
    /**
     * function checks if an element exist on the
     * LinkedList
     * @param{E} data - element to be checkef against
     * @return{boolean} return true or false
    */
    contains(data) {
        if (this.head == null) {
            return false;
        }
        else {
            if (this.head.next === null) {
                return this.head.data === data;
            }
            else {
                let p = this.head;
                while (p.next !== null) {
                    if (p.next.data === data) {
                        return true;
                    }
                    p = p.next;
                }
                return false;
            }
        }
    }
    /**
     * function gets the size of the LinkedList
     * @return{number}
    */
    size() {
        let sz = 0;
        if (this.head != null) {
            sz++;
        }
        else {
            return sz;
        }
        if (this.head.next != null) {
            let p = this.head;
            while (p.next != null) {
                p = p.next;
                sz++;
            }
        }
        return sz;
    }
}
module.exports.LinkedList = LinkedList;
//export LinkedList;
//# sourceMappingURL=linkedlist.js.map