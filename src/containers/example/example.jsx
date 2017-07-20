import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ExampleComponent from '../../components/exampleComponent/exampleComponent'

import { setMessage } from './actions';
import { makeSelectHelloMessage } from './selectors';
import cls from './example.css';

const Example = ({helloMessage, setMessage}) => (
  <div className={cls.test}>
    <button onClick={()=>setMessage("Hello")}>load message</button>
    <ExampleComponent message={helloMessage} />
  </div>
);

Example.propTypes = {
  setMessage: PropTypes.func.isRequired,
  helloMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  helloMessage: makeSelectHelloMessage(),
});

const mapDispatchToProps = {
  setMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
