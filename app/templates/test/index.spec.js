'use strict';
import chai from "chai";
import {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import myModule from '../src/';

chai.use(chaiAsPromised);

describe('My module', function(){
  it('Says hello world', () => {
    expect(myModule()).to.equal('Hello World!');
  });
});
