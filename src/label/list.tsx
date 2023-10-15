import React, { Component } from "react";



export default class List extends React.Component<{ labels: string[] }, { labels: string[] }> {
    constructor(props: { labels: string[] }) {
        super(props);

        this.state = {
            labels: [],
        };
    }
    render() {
        return (<ul className="label-list-container">
            {(this.props.labels ?? []).map((entry: any, index: number) => <li key={index}>{entry}</li>)}
        </ul>);
    }
}
