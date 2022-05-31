describe('List', function() {
    it('should initialise a new List object', () => {
        const List = require('../collections/list').List;
        //const List = require('../collections/List')
        let data = [];
        let list = new List(data);
        expect(list).not.toBeNull();
    });
    describe('add', () => {
        it('should add new element to the list', () => {
            const List = require('../collections/list').List;
            let data = [];
            let list = new List(data);
            list.add(10);
            list.add(25);
            list.add(-1);
            expect(data.length).toBe(3);
        });
        it('should not add new element to the list', () => {
            const List = require('../collections/list').List;
            let data = [];
            let list = new List(data);
            list.add();
            expect(data.length).toBe(0);
        });
    });
    describe('size', () => {
        it('should return the total element count in the list', () => {
            const List = require('../collections/list').List;
            let data = [2, 4, 5];
            let list = new List(data);
            expect(list.size()).toBe(3);
        })
    });
});