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
    size() {
        return this.data.length;
    }
}

module.exports.List = List;
//export default List;