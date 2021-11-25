/* eslint-disable array-callback-return */
import React  from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { StringParam,  useQueryParam } from 'use-query-params';
import Header from './Header';
import DeviceInformation from './DeviceInformation';
import close from '../assets/close.svg';

const DeviceInfo = (props) => {
  const [selectedDevice] = useQueryParam('selectedDevice-f', StringParam);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="device-page container">
      <Header />
      <h3>Device Details : {selectedDevice}</h3>
      <div className="device">
        <button className="close-button" onClick={() => (history.push(`${match.path}`))}>
          <img className="close-icon" src={close} alt="close" />
        </button>
        <div className="device-part">
          {selectedDevice && 
            <DeviceInformation 
              id={props.id} 
              deviceText={props.deviceText}
            />
          } 
        </div>
      </div>
    </div>
  );
}

export default DeviceInfo;