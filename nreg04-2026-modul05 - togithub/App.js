import React, { useState } from 'react';
import { 
  StyleSheet, View, SafeAreaView, StatusBar, 
  TouchableOpacity, Text 
} from 'react-native';

// Import Semua Komponen
import LandingPage from './src/LandingPage';
import ProductList from './src/ProductList';
import ProductDetail from './src/ProductDetail';
import LoginPage from './src/LoginPage';
import AdminDashboard from './src/AdminDashboard';
import AdminProduct from './src/AdminProduct';

export default function App() {
  // State Navigasi Utama
  const [currentScreen, setCurrentScreen] = useState('landing'); 
  // State untuk menyimpan produk yang diklik di katalog
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fungsi Pembantu Navigasi
  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <View style={styles.centerContent}>
            <LandingPage />
            <TouchableOpacity style={styles.btnBlue} onPress={() => setCurrentScreen('catalog')}>
              <Text style={styles.btnText}>Lihat Katalog Produk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => setCurrentScreen('login')}>
              <Text style={styles.btnTextBlue}>Login Admin 🛡️</Text>
            </TouchableOpacity>
          </View>
        );

      case 'catalog':
        if (selectedProduct) {
          return (
            <ProductDetail 
              item={selectedProduct} 
              onBack={() => setSelectedProduct(null)} 
            />
          );
        }
        return (
          <ProductList 
            onSelect={(item) => setSelectedProduct(item)} 
            onBack={() => setCurrentScreen('landing')} 
          />
        );

      case 'login':
        return (
          <View style={{ flex: 1 }}>
            <LoginPage onLoginSuccess={() => setCurrentScreen('admin_dashboard')} />
            <TouchableOpacity style={styles.btnBackTextOnly} onPress={() => setCurrentScreen('landing')}>
              <Text style={{color: '#64748B'}}>← Kembali ke Beranda</Text>
            </TouchableOpacity>
          </View>
        );

      case 'admin_dashboard':
        return (
          <AdminDashboard 
            onLogout={() => setCurrentScreen('landing')} 
            onManageProducts={() => setCurrentScreen('admin_crud')} 
          />
        );

      case 'admin_crud':
        return (
          <AdminProduct 
            onBack={() => setCurrentScreen('admin_dashboard')} 
          />
        );

      default:
        return <LandingPage />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.circleDecorator} />
      <View style={styles.mainWrapper}>
        {renderScreen()}
      </View>
      {/* Footer tetap tampil di setiap layar kecuali detail produk agar rapi */}
      {!selectedProduct && <Text style={styles.footerText}>Mobile Programming © 2026</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  mainWrapper: { flex: 1, width: '100%', paddingHorizontal: '5%' },
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  circleDecorator: { 
    position: 'absolute', top: -50, right: -50, width: 200, height: 200, 
    borderRadius: 100, backgroundColor: '#E0F2FE', zIndex: -1 
  },
  btnBlue: { 
    backgroundColor: '#0EA5E9', width: '100%', paddingVertical: 18, 
    borderRadius: 20, alignItems: 'center', marginTop: 40, elevation: 5 
  },
  btnOutline: { 
    backgroundColor: 'transparent', width: '100%', paddingVertical: 15, 
    borderRadius: 20, alignItems: 'center', marginTop: 15, 
    borderWidth: 1, borderColor: '#0EA5E9' 
  },
  btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  btnTextBlue: { color: '#0EA5E9', fontSize: 15, fontWeight: '600' },
  btnBackTextOnly: { alignSelf: 'center', marginTop: 10, padding: 10 },
  footerText: { textAlign: 'center', marginBottom: 15, color: '#CBD5E1', fontSize: 12 },
});