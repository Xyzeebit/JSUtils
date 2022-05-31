/**
* @author{Xyzeebit}
* List
*/

class List<E> {
    private data: E[];
    private count;
    
    constructor(data: E[]) {
        this.data = data;
        this.count = 0;
    }
    
    /**
     * function to add element to the
     * list 
     * @param{E}
     * @return{void}
    */
    add(element: E) {
        if(element) {
            this.data.push(element);
            this.count++;
        }
    }
    
    /**
     * function to get the list size
     * @return{number} the total elements
     * count in the list;
    */
    size(): number {
        return this.data.length;
    }
    
    /**
     * function checks if list contains a particular 
     * element
     * @param{E} element - element to check against
     * @return{boolean} return true if element
     * is in the list otherwise return false
    */
    contains(element: E): boolean {
        let found = this.data.indexOf(element);
        if(found) {
            return true;
        }
        return false;
    }
    /**
     * function gets the element in the List
     * identified by index
     * @param{number} index - index of the 
     * element to get from the list
     * @return{E | undefined} returns element or undefined
     * when indexed element cannot be found
    */
    getElement(index: number): E | undefined {
        if(index >= this.size() || index < 0) {
            return undefined;
        } else {
            return this.data[index];
        }
    }
    /**
     * This function removes an element from
     * the list that matches the index
     * @param{number} index - index of the element
     * to be removed
     * @return{E | undefined} returns the element
     * that is removed or undefined if not found
    */
    remove(index: number): E | undefined {
        if(index >= this.size() || index < 0) {
            return undefined;
        } else {
            let element = this.data[index];
            this.data.splice(index, 1);
            return element;
        }
    }
}

module.exports.List = List;
//export default List;