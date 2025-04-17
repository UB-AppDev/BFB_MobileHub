// App.tsx or HomeScreen.tsx
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { BeginButton } from '../../components/BeginButton'; // ✅ Confirm path
const images = require('@/assets/images/image1.png')

const App: React.FC = () => {
  const handleBeginPress = (): void => {
    console.log('Begin button pressed');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images} resizeMode="cover" style={styles.images}>
        <Text style={styles.text}>Bridges</Text>
        <Text style={styles.text}>From</Text>
        <Text style={styles.text}>Borders</Text>
        <View style={styles.buttonContainer}>
          <BeginButton onPress={handleBeginPress} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
  },
  images: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
