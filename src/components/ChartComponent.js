import React from 'react';
import { Pie } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientPinkBlue } from '@vx/gradient';
import { letterFrequency, browserUsage } from '@vx/mock-data';
import  Label  from './Label';

export default class ChartComponent extends React.Component {

    constructor(props){
        super(props);
        const browsers = Object.keys(browserUsage[0])
            .filter(k => k !== "date")
            .map((k,index) => ({ label: k, usage: browserUsage[0][k], id: index }));
        this.state = {
            browsers : browsers
        };
    }

    componentDidMount(){
        const newList = this.state.browsers.splice(2);
        
        setTimeout(() => {
            this.setState({browsers: newList});
            console.log(this.state.browsers)
        }, 3000);
    }

    render() {
        const letters = letterFrequency.slice(0, 4);
        const width = 500;
        const height = 500;
        const margin  = {
            top: 30,
            left: 20,
            right: 20,
            bottom: 110,
        }

        

        const radius = Math.min(width, height) / 2;
        return (
            <svg width={width} height={height}>
            <GradientPinkBlue id="gradients" />
            <rect
                x={0}
                y={0}
                rx={14}
                width={width}
                height={height}
                fill="url('#gradients')"
            />
            <Group top={height / 2 - margin.top} left={width / 2}>
                <Pie
                data={this.state.browsers}
                pieValue={d => d.usage}
                outerRadius={radius - 80}
                innerRadius={radius - 120}
                fill="white"
                fillOpacity={d => 1 / (d.index + 2) }
                cornerRadius={3}
                padAngle={0}
                centroid={(centroid, arc) => {
                const [x, y] = centroid;
                const { startAngle, endAngle } = arc;
                if (endAngle - startAngle < .1) return null;
                return <Label x={x} y={y}>{arc.data.label}</Label>;
            }}
                />
            </Group>
            </svg>
        );
    }
}