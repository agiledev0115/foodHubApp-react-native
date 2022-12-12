import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import inAppMessaging from '@react-native-firebase/in-app-messaging';

const App = () => {
  const perStore = persistStore(store);

  async function bootstrap() {
    await inAppMessaging()
      .setMessagesDisplaySuppressed(true)
      .then(response => {
        console.log(response);
      });
  }

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={perStore}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
