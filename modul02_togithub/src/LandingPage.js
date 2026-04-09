import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LandingPage() {
  return (
    // Container ini menggunakan flex: 1 agar konten bisa diposisikan ke tengah layar
    <View style={styles.centerContainer}>
      <View style={styles.header}>
        <Image 
          //source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png' }}
          source={require('../assets/brand.png')} 
          style={styles.mainImage} 
        />
        <Text style={styles.welcomeText}>
          SmartCatalog <Text style={styles.versionText}>v1.0</Text>
        </Text>
        <Text style={styles.description}>Platform Katalog Digital Masa Kini</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.label}>DEVELOPER PROFILE</Text>
        <View style={styles.infoRow}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>My</Text> 
          </View>
          <View>
            <Text style={styles.studentName}>[NAMA MAHASISWA]</Text>
            <Text style={styles.studentId}>NIM: [NIM MAHASISWA]</Text>
            <Text style={styles.prodiTag}>Prodi: [MI / BD]</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    width: '100%',
    justifyContent: 'center', // Vertikal ke tengah
    alignItems: 'center',     // Horizontal ke tengah
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mainImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
  },
  versionText: {
    color: '#0EA5E9',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 5,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 20,
    borderRadius: 24,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#94A3B8',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0EA5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  studentId: {
    fontSize: 14,
    color: '#64748B',
  },
  prodiTag: {
    fontSize: 12,
    color: '#0EA5E9',
    fontWeight: '600',
    marginTop: 4,
  },
});