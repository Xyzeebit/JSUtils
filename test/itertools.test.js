/******************************************************************************************************************************************************/
describe('itertools', () => {
    var itertools, shapes, colors;
    beforeAll(() => {
        itertools = require('../itertools/itertools').itertools;
        shapes = ['square', 'circle', 'triangle', 'rectangle', 'cone'];
        colors= ['red', 'yellow', 'orange', 'green', 'indigo', 'violet'];
    });
    
    it('should not be undefined', () => {
        expect(itertools).not.toBeUndefined();
    });
    
    describe('chain', () => {
        it('should chain the shapes and colors into one array object', () => {
            const data = ['red', 'yellow', 'orange', 'green', 'indigo', 'violet', 'square', 'circle', 'triangle', 'rectangle', 'cone'];
            const result = itertools.chain(shapes, colors);
            expect(result.length).toBe(shapes.length + colors.length);
        });
    
        it('should chain two objects into one', () => {
            const obj1 = { one: 1 }
            const obj2 = { two: 2 }
            const result = itertools.chain(obj1, obj2);
            expect(result).toEqual({ one: 1, two: 2 });
        });
    });
    
    describe('combinations', () => {
        it('should combine the shapes n times', () => {
            const data = [
                ['circle', 'triangle'],
                ['circle', 'square'],
                ['triangle', 'square']
            ];
            const result = itertools.combinations(['circle', 'triangle', 'square'], 2);
            expect(result).toEqual(data);
        });
    
    });
    
    describe('compress', () => {
        it('should filter one array with the other', () => {
            const filter = [true, false, false, true, true, false];
            const data = ['red', 'green', 'indigo']
            const result = itertools.compress(colors, filter);
            expect(result).toEqual(data);
        });
        
        it('should filter one array with the other when array length a different', () => {
            const filter = [true, false];
            const data = ['red']
            const result = itertools.compress(colors, filter);
            expect(result).toEqual(data);
        });
    });
    
    describe('count', () => {
        it('should return an iterable object', () => {
            let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect(itertools.count()).toEqual(data);
            
            data = [10, 13, 16, 19, 22];
            expect(itertools.count(10, 3, 5)).toEqual(data);
        })
    });
    
    describe('cycle', () => {
        it('should cycles through an array object', () => {
            let data = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
            
            expect(itertools.cycle([0, 1, 2, 3], 4)).toEqual(data);
        });
    });
    
    describe('product', () => {
        it('should create a cartesian product', () => {
            let data = [
                [1, 'a'],
                [1, 'b'],
                [2, 'a'],
                [2, 'b']
            ];
            
            expect(itertools.product([1, 2, ], ['a', 'b'])).toEqual(data);
        });
    });
    
    describe('repeat', () => {
        it('should repeat a value the total times provided', () => {
            let data = ['spam', 'spam', 'spam', 'spam'];
            
            expect(itertools.repeat('spam', 4)).toEqual(data);
        });
    });
    
    describe('starmap', () => {
        it('should return an array of the result of the operator function', () => {
            let data = [12, 32, 21];
            let test = [
                [3, 4],
                [8, 4],
                [3, 7]
            ];
            const mul = jest.fn((a, b) => a * b);
            
            expect(itertools.starmap(test, mul)).toEqual(data);
        });
    });
    
    
})