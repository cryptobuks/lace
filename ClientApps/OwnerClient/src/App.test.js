/* Team B is comprised of the following individuals:
    - Roberto Avila
    - Andrew Burnett
    - Jeff De La Mare
    - Nick Nation
    - Phillip Nguyen
    - Anthony Tran
    - Joseph Venetucci

[This program is licensed under the "MIT License"]
Please see the file LICENSE.md in the 
source distribution of this software for license terms.

This software also makes use of Hyperledger Sawtooth which is
licensed under Apache 2.0. A copy of it's license and copyright
are contained in sawtooth-license.md and sawtooth-copyright.md */


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
