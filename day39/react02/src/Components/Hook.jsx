import  { Component } from 'react'

export default class Hook extends Component {
  constructor(props) {
    super(props);
    this.state = { debounceValue: this.props.value };
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.debounceValue !== this.state.debounceValue) {
        console.log(`ok`);
        const updateValue = setTimeout(() => {
        
          console.log(`Log: ${this.state.debounceValue}`);
        this.setState({ debounceValue: this.props.value });
      }, this.props.time);
      clearTimeout(updateValue);
    }
  }
  render() {
    return this.state.debounceValue;
  }
}
