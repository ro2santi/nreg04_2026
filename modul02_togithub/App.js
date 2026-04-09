import React, { useState } from 'react';
import { 
  StyleSheet, View, SafeAreaView, StatusBar, 
  ScrollView, TouchableOpacity, Text 
} from 'react-native';

import LandingPage from './src/LandingPage';
import ProductList from './src/ProductList';

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.circleDecorator} />

      {/* Kontainer Utama yang fleksibel */}
      <View style={styles.mainWrapper}>
        {!showProducts ? (
          // --- HALAMAN LANDING (DI TENGAH) ---
          <View style={styles.centerContent}>
            <LandingPage />
            <TouchableOpacity 
              style={styles.buttonMain} 
              onPress={() => setShowProducts(true)}
            >
              <Text style={styles.buttonText}>Lihat Katalog Produk</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // --- HALAMAN LIST PRODUK (BISA DI-SCROLL) ---
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContent}
          >
            <ProductList />
            <TouchableOpacity 
              style={styles.buttonSecondary} 
              onPress={() => setShowProducts(false)}
            >
              <Text style={styles.buttonSecondaryText}>Kembali ke Beranda</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>

      <Text style={styles.footerText}>Mobile Programming © 2026</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8FAFC' 
  },
  mainWrapper: {
    flex: 1, // Mengambil seluruh sisa ruang layar
    width: '100%',
    paddingHorizontal: '5%',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center', // Membuat LandingPage tepat di tengah vertikal
    alignItems: 'center',
  },
  scrollContent: {
    paddingVertical: 30,
  },
  circleDecorator: {
    position: 'absolute', top: -50, right: -50, width: 200, height: 200,
    borderRadius: 100, backgroundColor: '#E0F2FE',
  },
  buttonMain: {
    backgroundColor: '#0EA5E9', width: '100%', paddingVertical: 18,
    borderRadius: 20, alignItems: 'center', marginTop: 40, elevation: 5,
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  buttonSecondary: {
    backgroundColor: '#FFFFFF', width: '100%', paddingVertical: 15,
    borderRadius: 20, alignItems: 'center', marginTop: 20,
    borderWidth: 1, borderColor: '#CBD5E1',
  },
  buttonSecondaryText: { color: '#64748B', fontSize: 16, fontWeight: '600' },
  footerText: { 
    textAlign: 'center',
    marginBottom: 15, 
    color: '#CBD5E1', 
    fontSize: 12 
  },
});