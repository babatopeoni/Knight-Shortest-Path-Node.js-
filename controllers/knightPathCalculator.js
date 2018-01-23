var KnightShortestPath = require('./KnightShortestPath').KnightShortestPath;






exports.getShortestPath = (req, res, next) => {
    const board = new KnightShortestPath(8);
    path =  req.body.path;
    
    board.getShortestPath(...path.map(Number));

    shortestPath = board.getMoveStack();
    console.log('why', req.body.path, shortestPath );
    res.json( shortestPath );
}