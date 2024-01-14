
// CustomRadioButton.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from '../styles/responsiveSize';

// How to Call
// const [selectedRadio, setSelectedRadio] = useState(null);

// const handleRadioPress = (value) => {
//   setSelectedRadio(value);
// };

{/* <CustomRadioButton
        label="Option 1"
        isSelected={selectedRadio === 'Option 1'}
        onPress={() => handleRadioPress('Option 1')}
      /> */}

const CustomRadioButton = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.radioButtonContainer}>
        <MaterialCommunityIcons
          name={isSelected ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          style={{ marginLeft: 10,}}
          color={isSelected ? '#0E2954' : 'black'}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: scale(40),
    alignItems: 'center',
    marginVertical: 5,
    
  },
  label: {
    marginLeft: 15,
    fontSize: 16,
    color:'#666'
  },
});

export default CustomRadioButton;
