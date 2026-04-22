import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Text, StatusBar } from 'react-native';

import LandingPage from './src/LandingPage';
import ProductList from './src/ProductList';
import ProductDetail from './src/ProductDetail';
import LoginPage from './src/LoginPage';
import AdminDashboard from './src/AdminDashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing'); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Dekorasi Lingkaran Tetap Ada */}
      <View style={styles.circleDecorator} />

      <View style={styles.mainWrapper}>
        
        {/* --- HALAMAN 1: LANDING --- */}
        {currentScreen === 'landing' && (
          <View style={styles.centerContent}>
            <LandingPage />
            <TouchableOpacity style={styles.btnBlue} onPress={() => setCurrentScreen('catalog')}>
              <Text style={styles.btnText}>Lihat Katalog Produk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => setCurrentScreen('login')}>
              <Text style={styles.btnTextBlue}>Login Admin 🛡️</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* --- HALAMAN 2: LOGIN --- */}
        {currentScreen === 'login' && (
          <View style={{ flex: 1 }}>
            <LoginPage onLoginSuccess={() => setCurrentScreen('admin_dashboard')} />
            {/* TOMBOL KEMBALI AGAR TIDAK HILANG */}
            <TouchableOpacity style={styles.btnBack} onPress={() => setCurrentScreen('landing')}>
              <Text style={styles.btnBackText}>← Kembali ke Beranda</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* --- HALAMAN 3: ADMIN DASHBOARD --- */}
        {currentScreen === 'admin_dashboard' && (
          <View style={{ flex: 1 }}>
            <AdminDashboard onLogout={() => setCurrentScreen('landing')} />
          </View>
        )}

        {/* --- HALAMAN 4: KATALOG & DETAIL --- */}
        {currentScreen === 'catalog' && (
          <View style={{ flex: 1 }}>
            {selectedProduct ? (
              <ProductDetail item={selectedProduct} onBack={() => setSelectedProduct(null)} />
            ) : (
              <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>
                  <ProductList onSelect={(item) => setSelectedProduct(item)} />
                  <TouchableOpacity style={styles.btnBackCatalog} onPress={() => setCurrentScreen('landing')}>
                    <Text style={styles.btnBackText}>Kembali ke Beranda</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            )}
          </View>
        )}

      </View>
      <Text style={styles.footerText}>Mobile Programming © 2026</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  mainWrapper: { flex: 1, paddingHorizontal: '5%' },
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  circleDecorator: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: 100, backgroundColor: '#E0F2FE' },
  btnBlue: { backgroundColor: '#0EA5E9', width: '100%', padding: 18, borderRadius: 15, alignItems: 'center', marginTop: 20 },
  btnOutline: { borderWidth: 1, borderColor: '#0EA5E9', width: '100%', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 10 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  btnTextBlue: { color: '#0EA5E9', fontWeight: 'bold' },
  // Style tombol kembali di halaman login
  btnBack: { marginTop: 10, padding: 10, alignItems: 'center' },
  // Style tombol kembali di halaman katalog
  btnBackCatalog: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 10 },
  btnBackText: { color: '#64748B', fontWeight: '600' },
  footerText: { textAlign: 'center', marginBottom: 10, color: '#CBD5E1', fontSize: 12 },
});