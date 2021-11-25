import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import DeviceInfo from '../components/DeviceInfo'; 
import DeviceList from '../components/DeviceList';


function AllDevicesPage() {
  const [selectedDevice] = useQueryParam('selectedDevice-f', StringParam);

  return (
    <div className="device-page container">
      {selectedDevice ? <DeviceInfo /> : <DeviceList />}
    </div>
  );
}

export default AllDevicesPage;
