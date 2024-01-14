
// import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, } from 'react-native'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import { persistor} from './src/ReduxToolkit/store'
import store from './src/redux'
import FlashMessage from 'react-native-flash-message'
import { moderateScale, textScale } from './src/styles/responsiveSize'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
          <FlashMessage
            titleStyle={{
              marginRight: moderateScale(5),
              fontSize: textScale(16)
            }}
            position='top'
          />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})