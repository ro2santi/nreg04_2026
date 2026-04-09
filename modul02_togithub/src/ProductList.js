import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const PRODUCT_DATA = [
  { id: '1', nama: 'Kopi Susu Gula Aren', harga: 'Rp 18.000', gambar: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=150' },
  { id: '2', nama: 'Indomie Goreng Jumbo', harga: 'Rp 12.000', gambar: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=150' },
  { id: '3', nama: 'Es Teh Manis Segar', harga: 'Rp 5.000', gambar: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=150' },
  { id: '4', nama: 'Nasi Goreng', harga: 'Rp 15.000', gambar: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', nama: 'Matcha Latte', harga: 'Rp 15.000', gambar: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.labelSection}>PRODUK UNGGULAN</Text>
      <FlatList
        data={PRODUCT_DATA}
        keyExtractor={item => item.id}
        scrollEnabled={false} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardProduk}>
            <Image source={{ uri: item.gambar }} style={styles.gambarProduk} />
            <View style={styles.infoProduk}>
              <Text style={styles.namaProduk}>{item.nama}</Text>
              <Text style={styles.hargaProduk}>{item.harga}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: 10 },
  labelSection: { fontSize: 12, fontWeight: 'bold', color: '#94A3B8', marginBottom: 15 },
  cardProduk: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  gambarProduk: { width: 60, height: 60, borderRadius: 12 },
  infoProduk: { marginLeft: 15 },
  namaProduk: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  hargaProduk: { fontSize: 14, color: '#0EA5E9', fontWeight: 'bold' },
});