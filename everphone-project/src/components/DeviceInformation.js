import React from 'react';

const DeviceInformation =(props) => {
  return (
      <div className="device-detail">
        <span>Device Id : {props.id} </span>
        <span>Device Information : {props.device.text}</span>
      </div>
  );
}

export default DeviceInformation;