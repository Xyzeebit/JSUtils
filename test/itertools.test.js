/******************************************************************************************************************************************************/
describe('itertools', () => {
    it('should not be undefined', () => {
        const itertools = require('../itertools/itertools').itertools;
        expect(itertools).not.toBeUndefined();
    });
    
    it('should not return undefined', () => {
        const itertools = require('../itertools/itertools').itertools;
        expect(itertools()).not.toBeUndefined();
    });
    it('should chain the shapes and colors into one array object', () => {
        const itertools = require('../itertools/itertools').itertools;
        const shapes = ['square', 'circle', 'triangle', 'rectangle', 'cone'];
        const colors= ['red', 'yellow', 'orange', 'green', 'indigo', 'violet'];
        const data = ['red', 'yellow', 'orange', 'green', 'indigo', 'violet', 'square', 'circle', 'triangle', 'rectangle', 'cone'];
        const result = itertools().chain(shapes, colors);
        expect(result.length).toBe(shapes.length + colors.length);
    })
})