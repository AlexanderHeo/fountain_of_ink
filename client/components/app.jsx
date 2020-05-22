import React from 'react';
import Header from './header';
import ViewAll from './view-all';
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="container">
        <Header />
        <ViewAll />
      </div>
    );

  }
}
