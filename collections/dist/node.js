"use strict";
/**
 * @author{Xyzeebit}
 * Node
*/
class Node {
    constructor(data, next, prev) {
        this._data = null;
        this._next = null;
        this._prev = null;
        if (typeof data !== undefined) {
            this._data = data;
        }
        if (next instanceof Node) {
            this._next = next;
        }
        if (prev instanceof Node) {
            this._prev = prev;
        }
    }
    /**
     * gets the data value that is in the node object
     * @return{E} returns the element of type E
    */
    get data() {
        return this._data;
    }
    /**
     * gets the next element of this node object
     * @return{Node} returns the next Node or null
    */
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
    /**
     * gets the previous element of this Nide object
     * @return{Node} returns the previous Node or null
    */
    get prev() {
        return this._prev;
    }
    set prev(node) {
        this._prev = node;
    }
}
module.exports.Node = Node;
//export Node;
//# sourceMappingURL=node.js.map