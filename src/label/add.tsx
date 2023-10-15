import { Component } from "react";

export default class Add extends Component<
    { setLabels: CallableFunction, labels: string[] },
    { newLabel: string }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            newLabel: ''
        };
    }
    render() {
        return (<div className="label-add-container">
            <input
                type="text"
                name="entry-input"
                value={this.state.newLabel}
                onChange={
                    (event) => {
                        console.log(`state new label` + event.target.value)
                        this.setState({ newLabel: event.target.value })
                    }
                }
            />
            <button
                name="submit"
                onClick={() => {
                    console.log(`ading new label` + this.state.newLabel)
                    this.props.setLabels(this.props.labels.concat(this.state.newLabel))
                    this.setState({ newLabel: '' })
                }}
            >add</button>
        </div>);
    }
}