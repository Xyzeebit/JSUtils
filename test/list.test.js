describe('List', function() {
    var list, data;
    beforeEach(() => {
        var List = require('../collections/list').List;
        data = [1, 2, 5, 100];
        list = new List(data);
    });
    
    it('should initialise a new List object', () => {
        expect(list).not.toBeNull();
    });
    
    describe('add', () => {
        it('should add new element to the list', () => {
            list.add(10);
            list.add(25);
            list.add(-1);
            expect(data.length).toBe(7);
            expect(data[5]).toBe(25);
        });
        
        it('should not add new element to the list', () => {
            list.add();
            expect(data.length).toBe(4);
        });
    });
    
    describe('size', () => {
        it('should return the total element count in the list', () => {
            expect(list.size()).toBe(4);
        });
    });
    
    describe('contains',  () => {
        it('should contain the number 100 in the list', () => {
            expect(list.contains(100)).toBeTruthy;
        });
        
        it('should return false if list does not contain element', () => {
            expect(list.contains(1)).toBeFalsy;
        })
    });
    
    describe('getElement', () => {
        it('should return undefined if index to get exceeds list capacity', () => {
            expect(list.getElement(4)).toBeUndefined;
        });
        
        it('should return element at index', () => {
            let item = list.getElement(2);
            expect(item).toBe(5);
        });
    });
    
    describe('remove', () => {
        it('should return undefined if index of element to be removed exceeds list capacity', () => {
            expect(list.remove(4)).toBeUndefined;
        });
        
        it('should return element at index that is removed', () => {
            let item = list.remove(2);
            expect(item).toBe(5);
        });
        
        it('should reduce the list size after removing element', () => {
            list.remove(0);
            expect(data.length).toBe(3);
            expect(list.size()).toBe(3);
        });
        
    });
});