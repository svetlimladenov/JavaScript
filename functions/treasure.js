let findTreasure = function findTreasure() {
    let createMap = function createMap(size) {
        let map = [];
        for (let i = 0; i < size; i++) {
            map[i] = []    
        }
        return map;
    };

    const isInIsland = (point, island) => {
        return point.X >= island.minX && point.X <= island.maxX && point.Y >= island.minY && point.Y <= island.maxY;
    } 

    let result = isInIsland({
        X : 4,
        Y : 6.5
    }, {
        minX : 0,
        maxX : 2,
        minY : 6,
        maxY : 8
    });
    console.log(result);
}

findTreasure();