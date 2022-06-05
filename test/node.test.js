describe('Node', function() {
    var node, data, next, prev;
    const Node = require('../collections/dist/node').Node;
    
    beforeAll(() => {
        data = 1;
        next = new Node(2);
        prev = new Node(data);
    });
    
    it('should initialise a Node object', () => {
        node = new Node(data, null, null);
        expect(node).not.toBeNull();
    });
    
    it('should not have an undefined data', () => {
        node = new Node(data, null, null);
        expect(node.data).not.toBeUndefined();
    });
    
    it('should have data() equals to 1', () => {
        node = new Node(data, null, null);
        expect(node.data).toBe(1);
    });
    
    it('should fail when next is not of type Node', () => {
        node = new Node(data, next, null);
        expect(node.next).toMatchObject({ _data: 2, _next: null, _prev: null });
    })
    
    it('should not have null as next', () => {
        node = new Node(data, next, null);
        expect(node.next).not.toBeNull();
    });
    
    it('should have next equals to 2', () => {
        node = new Node(data, next, null);
        expect(node.next.data).toBe(2);
    });
    
    it('should not have null as prev', () => {
        let node = new Node(data, next, prev);
        expect(node.prev).not.toBeNull();
    })
});