/**
* @author{Xyzeebit}
* List
*/
var List = /** @class */ (function () {
    function List(data) {
        this.data = data;
        this.count = 0;
    }
    /**
     * function to add element to the
     * list
     * @param{E}
     * @return{void}
    */
    List.prototype.add = function (element) {
        if (element) {
            this.data.push(element);
            this.count++;
        }
    };
    /**
     * function to get the list size
     * @return{number} the total elements
     * count in the list;
    */
    List.prototype.size = function () {
        return this.data.length;
    };
    /**
     * function checks if list contains a particular
     * element
     * @param{E} element - element to check against
     * @return{boolean} return true if element
     * is in the list otherwise return false
    */
    List.prototype.contains = function (element) {
        var found = this.data.indexOf(element);
        if (found) {
            return true;
        }
        return false;
    };
    /**
     * function gets the element in the List
     * identified by index
     * @param{number} index - index of the
     * element to get from the list
     * @return{E | undefined} returns element or undefined
     * when indexed element cannot be found
    */
    List.prototype.getElement = function (index) {
        if (index >= this.size() || index < 0) {
            return undefined;
        }
        else {
            return this.data[index];
        }
    };
    /**
     * This function removes an element from
     * the list that matches the index
     * @param{number} index - index of the element
     * to be removed
     * @return{E | undefined} returns the element
     * that is removed or undefined if not found
    */
    List.prototype.remove = function (index) {
        if (index >= this.size() || index < 0) {
            return undefined;
        }
        else {
            var element = this.data[index];
            this.data.splice(index, 1);
            return element;
        }
    };
    return List;
}());
module.exports.List = List;
//export default List;
