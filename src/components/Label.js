import React from 'react';

export default class Label extends React.Component {
    render() {
        return (
            <text
              fill="white"
              textAnchor="middle"
              x={this.props.x}
              y={this.props.y}
              dy=".33em"
              fontSize={9}
            >
              {this.props.children}
            </text>
        )
    }
}