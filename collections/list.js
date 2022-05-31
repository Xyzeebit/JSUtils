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
    return List;
}());
module.exports.List = List;
//export default List;
