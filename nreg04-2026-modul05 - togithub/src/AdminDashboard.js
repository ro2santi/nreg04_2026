import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';

export default function AdminDashboard({ onLogout, onManageProducts }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerLabel}>Selamat Datang,</Text>
          <Text style={styles.welcome}>Panel Admin 🛡️</Text>
        </View>
        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Status Box - Visual Perbaikan Modul 05 Security */}
        <View style={styles.statBox}>
          <View>
            <Text style={styles.statLabel}>Status Keamanan</Text>
            <Text style={styles.statValue}>Terkoneksi Supabase</Text>
          </View>
          <View style={styles.securityBadge}>
            <Text style={styles.securityBadgeText}>Encrypted</Text>
          </View>
        </View>

        {/* Menu Utama - FITUR BARU */}
        <Text style={styles.sectionTitle}>Manajemen Inventori</Text>
        <TouchableOpacity 
          style={styles.menuCard} 
          onPress={onManageProducts} // Fungsi untuk pindah ke AdminProduct.js
        >
          <View style={styles.menuIconContainer}>
            <Text style={{fontSize: 24}}>📦</Text>
          </View>
          <View style={styles.menuTextContent}>
            <Text style={styles.menuTitle}>Kelola Produk UMKM</Text>
            <Text style={styles.menuSubtitle}>Tambah, Edit, & Hapus Katalog</Text>
          </View>
          <Text style={styles.arrow}>❯</Text>
        </TouchableOpacity>

        {/* Ringkasan Data (Stats Cards) */}
        <Text style={[styles.sectionTitle, {marginTop: 20}]}>Ringkasan Data (Dummy)</Text>
        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardLabel}>Total Produk</Text>
            <Text style={styles.smallCardValue}>5</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardLabel}>Total User</Text>
            <Text style={styles.smallCardValue}>12</Text>
          </View>
        </View>

        {/* Info Tambahan */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Gunakan menu "Kelola Produk" untuk memperbarui harga atau stok secara real-time ke database.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 24, 
    backgroundColor: '#FFFFFF', 
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerLabel: { fontSize: 12, color: '#64748B', fontWeight: '600' },
  welcome: { fontSize: 22, fontWeight: '800', color: '#0F172A' },
  logoutBtn: { backgroundColor: '#FEE2E2', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12 },
  logoutText: { color: '#EF4444', fontWeight: 'bold', fontSize: 13 },
  
  content: { padding: 20 },
  
  statBox: { 
    backgroundColor: '#0EA5E9', 
    padding: 24, 
    borderRadius: 24, 
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statLabel: { color: '#E0F2FE', fontSize: 12, fontWeight: '600' },
  statValue: { color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  securityBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  securityBadgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },

  sectionTitle: { fontSize: 14, fontWeight: '800', color: '#94A3B8', marginBottom: 15, letterSpacing: 1 },
  
  // Gaya Baru Menu Card
  menuCard: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 20, 
    flexDirection: 'row', 
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  menuIconContainer: { width: 50, height: 50, backgroundColor: '#F0F9FF', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  menuTextContent: { flex: 1, marginLeft: 15 },
  menuTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  menuSubtitle: { fontSize: 12, color: '#64748B', marginTop: 2 },
  arrow: { color: '#CBD5E1', fontSize: 18, fontWeight: 'bold' },

  row: { flexDirection: 'row', justifyContent: 'space-between' },
  smallCard: { 
    backgroundColor: 'white', 
    width: '48%', 
    padding: 20, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: '#F1F5F9' 
  },
  smallCardLabel: { fontSize: 12, color: '#64748B', fontWeight: '600' },
  smallCardValue: { fontSize: 24, fontWeight: '800', color: '#0F172A', marginTop: 5 },

  infoBox: { marginTop: 30, padding: 15, backgroundColor: '#F1F5F9', borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#0EA5E9' },
  infoText: { fontSize: 12, color: '#64748B', lineHeight: 18 }
});