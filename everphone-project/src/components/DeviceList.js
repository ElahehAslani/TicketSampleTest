import React, { useEffect } from 'react';
import Header from './Header';
import { StringParam, useQueryParam } from 'use-query-params';
import DeviceDetail from './DeviceDetail';

const DeviceLists = () => {
  const DeviceLists = JSON.parse(localStorage.getItem('List'));
  const [selectedDevice, setSelectedDevice] = useQueryParam('selectedDevice-f', StringParam);

  useEffect(() => {
    if(selectedDevice) {
      console.log("ticket:", selectedDevice)
    }
  }, [selectedDevice]);
  return (
    <div className="list-page container">
      <Header />
      <h3>You Can See Device Info Here!</h3>
      {DeviceLists !== null &&   <div  className="lists">
      {DeviceLists.map((device, index) => {
        return(
          <DeviceDetail 
            key={index}
            id={device.id} 
            deviceName={device.deviceName}
            deviceInfo={device.deviceInfo}
            onClick={() => setSelectedDevice(device.id)}
            />
        );
      })}
      </div>}
    </div>
  );
}

export default DeviceLists;