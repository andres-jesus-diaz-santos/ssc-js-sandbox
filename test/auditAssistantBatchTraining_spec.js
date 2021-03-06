/**
 * (c) Copyright [2017] Micro Focus or one of its affiliates
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*  http://www.apache.org/licenses/LICENSE-2.0
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
const assert = require('assert');
const expect = require('chai').expect;
const CommonTestUtils =  require('../src/commonTestsUtils');

const commonTestsUtils = new CommonTestUtils();

describe('batch predicts audit assistant', function () {

  before(function () {
    //override NodeJS security for SSC (unprotected)
    if (process.env.DisableSSLSecurity) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
  });

  after(function (done) {
     /* Perform any cleanups. currently clears all tokens of test user.
     * Do not call this method below if you plan on re-using a long-lived token for your authentication.
     */
    commonTestsUtils.doCleanup(done);
  });

  it('validates all properties exist', function (done) {
    commonTestsUtils.validateConfigurationAndAuth(done);
  });

  it('batch trains on given list of versions ', function (done) {
    commonTestsUtils.batchAPIActions(done, "sendForTraining");

  });
});