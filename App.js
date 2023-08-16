import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './components/Card';
import { fetchData } from './services/Requests';

export default function App() {
  const [catsInfo, setCatsInfo] = useState([]);

  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey = 'bda5378-d59e-46cd-9bc4-2936630fde39';
  const options = { method: 'GET', headers: { 'x-api-key': apiKey } };

  useEffect(() => {
    const getCatsInfo = async () => {
      const data = await fetchData(url, options);
      setCatsInfo(data);
    };
    getCatsInfo();
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
