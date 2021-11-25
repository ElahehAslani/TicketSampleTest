import React from 'react';
import logo from '../assets/logo.svg';

const DeviceDetail = (props) => {
  return (
      <div className="device-detail" role="button" tabIndex={0} onClick={() => props.onClick()}>
        <img className="cart-logo" src={logo} alt="logo" />
        <span>Device ID :{props.id} </span>
        <span>Device Name : {props.deviceName}</span>
        <span>Device Info : {props.deviceInfo}</span>
      </div>
  );
}

export default DeviceDetail;