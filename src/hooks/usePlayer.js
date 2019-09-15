import { useState } from 'react' // only need the useState as it's not a react component
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromino: randomTetromino().shape,
        collided: false
    });

    return [player];
}