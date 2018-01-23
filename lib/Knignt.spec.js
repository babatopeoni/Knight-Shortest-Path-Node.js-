'use strict'

const knightPathCalculator = require('../controllers/knightPathCalculator');
const KnightShortestPath = require('../controllers/KnightShortestPath').KnightShortestPath;

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')



chai.use(chaiAsPromised)
const expect = chai.expect

describe('Knight Path Calculator', () => {
    describe('"Controller"', () => {
       

        it('should export a function', () => {
            expect(knightPathCalculator.getShortestPath).to.be.a('Function')
        })

    })
})


describe('Knight Shortest Path', () => {
    describe('"Path process"', () => {


        it('should return array', () => {
            const board = new KnightShortestPath(8);
            const path = [1,10];

            board.getShortestPath(...path.map(Number));

            var shortestPath = board.getMoveStack();

            expect(shortestPath).to.be.a('Array')
        })

        it('should return correct path - Test 1', () => {
            const board = new KnightShortestPath(8);
            const path = [1, 10];

            board.getShortestPath(...path.map(Number));

            var shortestPath = board.getMoveStack();

            expect(JSON.stringify(shortestPath)).to.equal(JSON.stringify( [16,10]))
        })

        it('should return correct path - Test 2', () => {
            const board = new KnightShortestPath(8);
            const path = [26, 22];

            board.getShortestPath(...path.map(Number));

            var shortestPath = board.getMoveStack();

            expect(JSON.stringify(shortestPath)).to.equal(JSON.stringify([43, 37, 22]))
        })


        it('should return correct path - Test 3', () => {
            const board = new KnightShortestPath(8);
            const path = [9, 59];

            board.getShortestPath(...path.map(Number));

            var shortestPath = board.getMoveStack();

            expect(JSON.stringify(shortestPath)).to.equal(JSON.stringify([26, 43, 53, 59]))
        })

    })
})