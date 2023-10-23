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

    addLabel = (label: string) => {
        console.log(`ading new label` + label);
        this.props.setLabels(this.props.labels.concat(label));
    }

    onNewLabelSubmit = () => {
        const newLabelEl = document.getElementById('new-label') as HTMLInputElement;

        if (newLabelEl?.validity.valid) {
            this.addLabel(this.state.newLabel);
            this.setState({ newLabel: '' })
        }
    }

    render() {
        return (<div className="label-add-container">
            <label htmlFor="new-label">label</label>
            <input
                id="new-label"
                type="text"
                name="entry-input"
                value={this.state.newLabel}
                placeholder="type new label"
                required
                pattern="^[a-zA-Z]+$"
                onChange={
                    (event) => {
                        console.log(`state new label` + event.target.value)
                        this.setState({ newLabel: event.target.value })
                    }
                }
                onKeyUp={(event) => event.key === 'Enter' && this.onNewLabelSubmit()}
            />
            <button
                name="submit"
                onClick={this.onNewLabelSubmit}
            >add</button>
        </div>);
    }
}