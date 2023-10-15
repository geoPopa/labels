import React from "react";



export default class List extends React.Component<
    { setLabels: CallableFunction, labels: string[] }
> {
    removeLabel = (label: string) => this.props.setLabels(this.props.labels.filter(entry => entry !== label));
    render() {
        return (<ul className="label-list-container">
            {(this.props.labels ?? []).map((entry: any, index: number) =>
                <li key={index}>
                    {entry}
                    <span className="delete-handle" onClick={() => this.removeLabel(entry)}>x</span>
                </li>)}
        </ul>);
    }
}
