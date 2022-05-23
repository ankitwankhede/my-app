import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
const LifeCycleFunction = () => {


  useEffect(
    () => {
      console.log(`useEffect is like ComponenetDidMount`);

      // It will be called before unmounting.
      return () => {
        console.log('componentWillUnmount!');
      };
  
  
    },
    [], // Pass an empty array to run only callback on mount only

    // No second argument, so run after every render.

    // [stateVariable]    //it will be automatically triggered whenever that dependency is changed.
  );

// ------------------------------------------------------------------
  //shouldComponentUpdate( )
//   Hooks can be only used in functional component,
//   and functional component internally handles the
//   shouldComponentUpdate( ) method for use. You can
//   already achieve this on the component level using
//   React.PureComponent or React.memo. For preventing
//   rerendering of the child components.
  
// With Hooks:
// By default, it will only shallowly compare complex objects
// in the props object. If you want control over the comparison,
// you can also provide a custom comparison function
// as the second argument.


// function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
//   }

// export default React.memo(LifeCycleFunction,areEqual)


// ------------------------------------------------------------------


  return (
    <View>
      <Text>Lifecycle FUnciton</Text>
    </View>
  );
};

export default LifeCycleFunction;
