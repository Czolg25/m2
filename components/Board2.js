import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

import "./Board.css";

class Board2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const items = [];
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                const item = this.props.items.find(([x, y]) => x === i && y === j);
                row.push(<Item key={`${i}${j}`} disable="true" active={item} position={[i, j]} color={item ? item[2] : null} />);
            }
            items.push(row);
        }

        return (
            <div onClick={this.props.delete} className="board2">
                <div className="items">
                    {items}
                </div>
            </div>
        );
    }
}

Board2.propTypes = {
    items: PropTypes.array
};

export default Board2;
