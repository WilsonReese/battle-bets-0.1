import { Text, View } from 'react-native';
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View>
            <Text>
              Battle Bets
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}