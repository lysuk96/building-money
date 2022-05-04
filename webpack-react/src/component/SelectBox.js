import React from "react";
import Select from 'react-select'

export class PastPicker extends React.Component {
    state = {
        value: { label: this.props.val, value: this.props.val },
    }

    options = [
        { label: "1주 전", value: 2021 },
        { label: "1달 전", value: 2020 },
        { label: "6개월 전", value: 2019 },
        { label: "1년 전", value: 2018 },
    ]

    handleChange(value) {
        this.setState({ value: value })
    }

    render() {
        return (
            <Select
                options={this.options}
                value={this.state.value}
                onChange={value => this.handleChange(value)}
                defaultValue={{ label: 2002, value: 2002 }}
            />
        )
    }
}

export class CoinPicker extends React.Component {
    state = {
        value: { label: this.props.val, value: this.props.val },
    }

    options = [
        { label: "BTC", value: 2021 },
        { label: "ETH", value: 2020 },
        { label: "DOGE", value: 2019 },
        { label: "KLAY", value: 2018 },
    ]

    handleChange(value) {
        this.setState({ value: value })
    }

    render() {
        return (
            <Select
                options={this.options}
                value={this.state.value}
                onChange={value => this.handleChange(value)}
                defaultValue={{ label: 2002, value: 2002 }}
            />
        )
    }
}