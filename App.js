import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/Card';

export default function App() {
  const [catsInfo, setCatsInfo] = useState([]);
  const apiKey = 'bda5378-d59e-46cd-9bc4-2936630fde39';
  const url = 'https://api.thecatapi.com/v1/breeds';

  let urlImages = [];

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCatsInfo(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.data}>
        {catsInfo.map((cat, index) => (
          <Card
            key={index}
            imageSource={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
            name={cat.name}
            country={cat.country_code}
            intelligence={cat.intelligence}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  data: {
    alignItems: 'center',
    padding: 40,
  },
});
