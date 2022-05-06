import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import { styles } from './styles';

import successImg from '../../assets/success.png'
import { CopyRight } from '../CopyRight';

export function Success() {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text
          style={styles.buttonTitle}
        >Quero enviar outro</Text>
      </TouchableOpacity>

      <CopyRight />
    </View>
  );
}