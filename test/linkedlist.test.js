describe('LinkedList', function() {
    it('should initialise a LinkedList object', () => {
        const LinkedList = require('../collections/dist/linkedlist').LinkedList;
        const list = new LinkedList();
        expect(list).not.toBeNull();
        expect(list).not.toBeUndefined();
    });
    it('should initialise a LinkedList head object of type Node', () => {
        const LinkedList = require('../collections/dist/linkedlist').LinkedList;
        const Node = require('../collections/dist/node').Node;
        
        let head = new Node(1);
        const list = new LinkedList(head);
        expect(list.head).not.toBeNull();
        expect(list.head).not.toBeUndefined();
        expect(list.head.data).toBe(1);
    });
    
    describe('add', () => {
        it('should add new data to the head node', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            let node = new Node(1);
            const list = new LinkedList(node);
            list.add(5);
            const head = list.head;
        });
        
        it('should add new data to head and head should be null', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            //let node = new Node(1);
            const list = new LinkedList();
            list.add(5);
            const head = list.head;
            expect(head).not.toBeNull();
        });
        
        it('should add new data to head and data should be 5', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            const list = new LinkedList();
            list.add(5);
            const head = list.head;
            expect(head.data).toEqual(5);
        });
        it('should add more data to head', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            //let node = new Node(1);
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            const head = list.head;
            expect(head.next).not.toBeNull();
            expect(head.next.data).toBe(10);
        });
        it('should have previous pointing to last added data', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            //let node = new Node(1);
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            list.add(15);
            const head = list.head;
            
            expect(head.next.next).not.toBeNull();
            expect(head.next.prev.data).not.toBeNull();
            
            expect(head.next.prev.data).toBe(5);
            expect(head.next.next.prev.data).toBe(10);
            expect(head.next.next.prev.prev.data).toBe(5);
        });
        
    });
    
    describe('remove', () => {
        it('should remove data from list', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
                
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            list.add(15);
            let data = list.remove(10)
            const head = list.head;
            
            expect(data).toBe(10);
            expect(head.next.data).toBe(15);
            expect(head.next.prev.data).toBe(5);
            
        });
    });
    
    describe('size', () => {
        it('should return the total element count in the LinkedList', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
            
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            list.add(15);
            let size = list.size();
            //const head = list.head;
            
            expect(size).toBe(3);
            //expect(head.next.data).toBe(15);
            //expect(head.next.prev.data).toBe(5);
            
        });
        it('should return reduced size after removal of element in the LinkedList', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
            
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            list.add(15);
            list.remove(10)
            list.add(20);
            let size = list.size();
            //const head = list.head;
            
            expect(size).toBe(3);
            //expect(head.next.data).toBe(15);
            //expect(head.next.prev.data).toBe(5);
            
        });
    });
    describe('contains', () => {
        it('should return true if element  is in the LinkedList', () => {
            const LinkedList = require('../collections/dist/linkedlist').LinkedList;
            const Node = require('../collections/dist/node').Node;
            
            const list = new LinkedList();
            list.add(5);
            list.add(10);
            list.add(15);
            
            expect(list.contains(10)).toBe(true);
            
        })
    });
});