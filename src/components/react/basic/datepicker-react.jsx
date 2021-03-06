import React from 'react';

'use strict';

export default class DatePickerReact extends React.Component {
    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    init(props) {
        var options = Object.assign({}, DatePickerReact.defaultProps.options, props.options);
        this.setState({ value: props.value || '', options: options });
    }

    handleValueChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        if (this.props.onChange)
            this.props.onChange(event.target.value);
    }

    componentWillMount() {
        this.init(this.props);
    }

    componentWillReceiveProps(props) {
        this.init(props);
    }

    render() {
        if (this.state.options.readOnly)
            return (
                <p className="form-control-static">{(this.state.value || '').toString() }</p>
            );
        else
            return (
                <input type="date" value={this.state.value} onChange={this.handleValueChange} className="form-control"></input>
            );
    }
}

DatePickerReact.propTypes = {
    options: React.PropTypes.shape({
        readOnly: React.PropTypes.bool
    })
};
DatePickerReact.defaultProps = {
    options: {
        readOnly: false
    }
};