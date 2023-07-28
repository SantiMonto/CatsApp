import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ imageSource, name, country, intelligence }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{`Nombre: ${name}`}</Text>
      <Image source={{ uri: imageSource }} style={styles.cardImage} />
      <View style={styles.cardFooter}>
        <Text style={styles.cardText}>{`Pais: ${country}`}</Text>
        <Text style={styles.cardText}>{`Inteligencia: ${intelligence}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    padding: 16,
    margin: 8,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    marginTop: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Card;
