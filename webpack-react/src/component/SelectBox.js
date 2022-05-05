import React from "react";
import Select from 'react-select'
import CoinDummy from "../dummy/CoinDummy";
import PastDummy from "../dummy/PastDummy"

export class PastPicker extends React.Component {
    state = {
        value: { label: this.props.val, value: this.props.val },
    }

    options = PastDummy

    handleChange(value) {
        // console.log(value.options[value.selectedIndex].text)
        this.setState({ value: value })
        console.log(this.state.value)
    }

    render() {
        return (
            <Select
                options={this.options}
                value={this.state.value}
                onChange={value => this.handleChange(value)}
                defaultValue={{ label: "1주 전", value: 0 }}
                isSearchable={false}
            />
        )
    }
}

export class CoinPicker extends React.Component {
    state = {
        value: { label: this.props.val, value: this.props.val },
    }

    options = CoinDummy

    handleChange(value) {
        this.setState({ value: value })
    }

    render() {
        return (
            <Select
                options={this.options}
                value={this.state.value}
                onChange={value => this.handleChange(value)}
                defaultValue={{ label: CoinDummy[0].label, value: CoinDummy[0].value }}
            />
        )
    }
}