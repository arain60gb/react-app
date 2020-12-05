import React from 'react';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
class Best extends React.Component {
  state = {
    percent: 0,
  };
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };
  render() {
    return (
      <div className="container main">
      <div className="row grid-circle text-center px-4">
  <div className="col"><p className="fb-name">Facebook</p><Progress type="circle" width={90} format={percent => `${percent}/250`}  percent={this.state.percent} /></div>
  <div className="col"><p className="twi-name">Twitter</p><Progress type="circle" width={90} format={percent => `${percent}/300`} percent={this.state.percent} /></div>
  <div className="col"><p className="san-name">Sanapchat</p><Progress type="circle" width={90} format={percent => `${percent}/350`} percent={this.state.percent} /></div>
  <div className="col"><p className="ins-name">Instagram</p><Progress type="circle" width={90} format={percent => `${percent}/450`} percent={this.state.percent} /></div>
        </div>
      </div>
    );
  }
}
export default Best;
