import React from 'react';
import PropTypes from 'prop-types';
import "./Item.css";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.disable) return;

        this.setState({
            active: !this.state.active
        });
        this.props.click();
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.active ? this.props.color : 'white'}} onClick={this.onClick} className="item"></div>
        );
    }
}

Item.propTypes = {
    position: PropTypes.array.isRequired,
    color: PropTypes.string
};

export default Item;
