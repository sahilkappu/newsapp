import React, { Component } from 'react';
import spinner from './spinner.gif';
export default class Sppiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading" height={'70px'} />
      </div>
    );
  }
}
