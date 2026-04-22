import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function AdminDashboard({ onLogout }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Panel Admin 🛡️</Text>
        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Status Keamanan</Text>
          <Text style={styles.statValue}>Terkoneksi Supabase</Text>
        </View>

        <Text style={styles.sectionTitle}>Ringkasan Data (Dummy)</Text>
        <View style={styles.card}>
          <Text>Total Produk: 5</Text>
        </View>
        <View style={styles.card}>
          <Text>Total User Terdaftar: 12</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9' },
  header: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    padding: 20, backgroundColor: '#FFFFFF', paddingTop: 50 
  },
  welcome: { fontSize: 20, fontWeight: 'bold', color: '#1E293B' },
  logoutBtn: { backgroundColor: '#FEE2E2', padding: 8, borderRadius: 8 },
  logoutText: { color: '#EF4444', fontWeight: 'bold' },
  content: { padding: 20 },
  statBox: { backgroundColor: '#0EA5E9', padding: 20, borderRadius: 15, marginBottom: 20 },
  statLabel: { color: '#E0F2FE', fontSize: 12 },
  statValue: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10 }
});