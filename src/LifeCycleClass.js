
import React from 'react';
import {View, Text} from 'react-native';

class LifeCycleClass extends React.Component {
  // https://programmingwithmosh.com/javascript/react-lifecycle-methods/
  // https://www.c-sharpcorner.com/article/components-lifecycle-in-react/
  // https://www.devinline.com/2020/03/react-components-and-life-cycle.html
  // https://miro.medium.com/max/1400/1*bsk4y_rRxmX_Qtol3H3caw.png
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // This method is usually called when the component,
    // has finished rendering for the first time.
    // It is only called once throughout the lifecycle,
    // once after the component has finished mounting.

    console.log(`componentDidMount`);
  }
  componentWillUnmount() {
    // This method will be called when the component is unmounted
    // and it will be called only once in the component’s lifecycle.

    console.log(`componentWillUnmount`);
  }

  componentDidUpdate() {
    // This method is called multiple times which the app lifecycle.
    // It is invoked immediately after updating occurs.
    // This method is not called for the initial render.
    console.log(`componentDidUpdate`);
  }

  shouldComponentUpdate() {
    // This lifecycle method is called every time the component
    // is going to render where you can return true/false
    // whenever you have to render the component or avoid rendering.
    console.log(`shouldComponentUpdate`);
  }

  forceUpdate() {
    console.log(`forceUpdate`);
  }

  //   -----------------------------------------------------------------------

  //   No Lifecycle method replacement
  //   Below are some of the methods that do not have any
  //   lifecycle method replacement for hooks according to the
  //   react documentation:
  componentDidCatch() {
    console.log(`componentDidCatch`);
  }
  getSnapshotBeforeUpdate() {
    console.log(`getSnapshotBeforeUpdate`);
  }

  //   -----------------------------------------------------------------------
  render() {
    return (
      <View>
        <Text>Lifecycle CLASS</Text>
      </View>
    );
  }
}

export default LifeCycleClass;


