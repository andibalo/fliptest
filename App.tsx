import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from 'react-query';
import { ModalProvider } from './src/context';
import { TransactionDetailsScreen, TransactionScreen } from './src/screens';
import { queryClient } from './src/services/react-query/queryClient';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ModalProvider>
          <Stack.Navigator initialRouteName='Transaction'>
            <Stack.Screen name="Transaction" component={TransactionScreen} />
            <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
          </Stack.Navigator>
        </ModalProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
