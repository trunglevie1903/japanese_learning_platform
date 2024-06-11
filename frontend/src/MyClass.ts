import React, { Component } from "react";

interface ComponentState_Dummy {
  message: string;
}

class ComponentDummy extends Component<{}, ComponentState_Dummy> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: ""
    };
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('/test');
      const result = await response.json();
      this.setState({
        message: result.message
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  render(): React.ReactNode {
    return this.state.message;
  }
};

export default ComponentDummy;