type Data = any | null;

/**
 * @author{Xyzeebit}
 * Node
*/
class Node {
    private _data = null;
    private _next = null;
    private _prev = null;
    
    constructor(data: Data, next: Node | any, prev: Node | any) {
        if(typeof data !== undefined) {
            this._data = data;
        }
        if(next instanceof Node) {
            this._next = next;
        }
        if(prev instanceof Node) {
            this._prev = prev;
        }
    }
    
    /**
     * gets the data value that is in the node object
     * @return{E} returns the element of type E
    */
    get data(): Data {
        return this._data;
    }
    
    /**
     * gets the next element of this node object
     * @return{Node} returns the next Node or null
    */
    get next(): Node {
        return this._next;
    }
    set next(node: Node) {
        this._next = node
    }
    
    /**
     * gets the previous element of this Nide object
     * @return{Node} returns the previous Node or null
    */
    get prev(): Node {
        return this._prev;
    }
    set prev(node: Node) {
        this._prev = node;
    }
}

module.exports.Node = Node;
//export Node;