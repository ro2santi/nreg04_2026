import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { supabase } from './SupabaseConfig';

export default function ProductList({ onSelect, onBack }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('produk_umkm') // Pastikan sama dengan di SQL Editor
        .select('*');
      
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.log('Error fetch:', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0EA5E9" style={{flex: 1}} />;

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title}>Katalog Produk</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelect(item)}>
            <Image source={{ uri: item.gambar }} style={styles.img} />
            <View style={styles.cardBody}>
              <Text style={styles.prodName}>{item.nama}</Text>
              <Text style={styles.prodPrice}>{item.harga}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.btnBack} onPress={onBack}>
            <Text>Kembali ke Beranda</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#FFF', borderRadius: 15, marginBottom: 15, overflow: 'hidden', elevation: 2 },
  img: { width: '100%', height: 150 },
  cardBody: { padding: 15 },
  prodName: { fontSize: 18, fontWeight: 'bold' },
  prodPrice: { color: '#0EA5E9', fontWeight: 'bold', marginTop: 5 },
  btnBack: { padding: 15, alignItems: 'center', backgroundColor: '#F1F5F9', borderRadius: 10, marginVertical: 20 }
});