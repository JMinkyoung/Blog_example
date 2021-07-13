import React from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import { connect } from 'react-redux';
import { actionincrement, actiondecrement} from './actions';

// const App = (props) => {
//   return (
//     <div style={{textAlign: 'center'}}>
//       <Counter value={props.value}/>
//       <Button onClickIncrease={props.onClickIncrease}
//               onClickDecrease={props.onClickDecrease}/>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   onClickIncrease: () => { dispatch(actionincrement())},
//   onClickDecrease: () => { dispatch(actiondecrement())}
// });


// const mapStateToProps = (state) => {
//   return {
//     value: state.reducerCount.value
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const App = () => {
  return (
    <div style={{textAlign: 'center'}}>
       <Counter />
       <Button />
     </div>
  );
};

export default App;