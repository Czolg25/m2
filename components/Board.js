import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import "./Board.css";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cords: []
        };

        this.itemsRef = React.createRef();

        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        this.props.save(this.state.cords);
    }

    componentDidUpdate() {
        console.log(this.state.cords);
    }

    render() {
        const items = []
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(<Item key={`${i}${j}`} position={[i, j]} color={this.props.itemColor} click={() => this.setState({ cords: [...this.state.cords, [i, j, this.props.itemColor]] })} />);
            }
            items.push(row);
        }

        return (
            <div className="board">
                <p className="title">{this.props.board.title}</p>
                <p className="id">{this.props.board.id}</p>
                <p className="color">{this.props.board.id}</p>

                <div ref={this.itemsRef} className="items">
                    {items}
                </div>

                <button onClick={this.onSave} className="btn">Zapisz</button>
            </div>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object.isRequired,
    itemColor: PropTypes.string
};

export default Board;
