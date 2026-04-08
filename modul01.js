import React from 'react';
// 1. IMPORT: Memanggil komponen UI dasar dari pustaka react-native
import { 
  StyleSheet,      // Untuk membuat objek desain (seperti CSS)
  Text,            // Untuk menampilkan teks
  View,            // Sebagai kontainer/wadah (seperti <div>)
  Image,           // Untuk menampilkan gambar (lokal/URL)
  TouchableOpacity, // Tombol yang memiliki efek pudar saat diklik
  SafeAreaView,    // Menjaga konten agar tidak tertutup notch/kamera HP
  StatusBar,       // Mengatur tampilan bar jam & baterai di atas
  Alert            // Untuk memunculkan pop-up pesan
} from 'react-native';

export default function App() {
  
  // 2. LOGIKA: Fungsi yang dipanggil saat tombol ditekan
  const handleStart = () => {
    Alert.alert('Selamat Datang!', 'Mari kita mulai membangun aplikasi bisnis digital Anda.');
  };

  return (
    // 3. LAYOUT UTAMA: SafeAreaView memastikan konten aman di layar HP modern
    <SafeAreaView style={styles.container}>
      
      {/* StatusBar: 'dark-content' membuat ikon jam/baterai berwarna gelap */}
      <StatusBar barStyle="dark-content" />
      
      {/* 4. DEKORASI: Lingkaran pemanis menggunakan posisi 'absolute' agar melayang */}
      <View style={styles.circleDecorator} />

      <View style={styles.contentContainer}>
        
        {/* HEADER: Bagian Logo dan Judul Aplikasi */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png' }} 
            style={styles.mainImage} 
          />
          <Text style={styles.welcomeText}>
            SmartCatalog <Text style={styles.versionText}>v1.0</Text>
          </Text>
          <Text style={styles.description}>Platform Katalog Digital Masa Kini</Text>
        </View>

        {/* 5. CARD PROFIL: Area tugas untuk mahasiswa MI/BD */}
        <View style={styles.profileCard}>
          <Text style={styles.label}>DEVELOPER PROFILE</Text>
          
          {/* infoRow menggunakan 'flexDirection: row' agar foto & teks berjejer ke samping */}
          <View style={styles.infoRow}>
            {/* Lingkaran Inisial (Avatar) */}
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>My</Text> 
            </View>
            
            {/* Detail Identitas */}
            <View>
              <Text style={styles.studentName}>[NAMA MAHASISWA]</Text>
              <Text style={styles.studentId}>NIM: [NIM MAHASISWA]</Text>
              <Text style={styles.prodiTag}>Prodi: [MI / BD]</Text>
            </View>
          </View>
        </View>

        {/* 6. TOMBOL UTAMA: Menggunakan TouchableOpacity untuk interaksi */}
        <TouchableOpacity 
          activeOpacity={0.7} // Tingkat transparansi saat diklik (0.0 - 1.0)
          style={styles.buttonMain} 
          onPress={handleStart} // Memanggil fungsi handleStart
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER: Teks kecil di bagian paling bawah */}
      <Text style={styles.footerText}>Mobile Programming © 2026</Text>
    </SafeAreaView>
  );
}

// 7. STYLESHEET: Tempat mengatur estetika dan tata letak aplikasi
const styles = StyleSheet.create({
  container: {
    flex: 1,                // Mengambil seluruh ruang layar
    backgroundColor: '#F8FAFC', // Warna background Slate terang
    alignItems: 'center',   // Menyelaraskan konten ke tengah secara horizontal
  },
  circleDecorator: {
    position: 'absolute',   // Keluar dari alur layout normal (melayang)
    top: -50,               // Geser ke atas layar
    right: -50,             // Geser ke kanan layar
    width: 200,
    height: 200,
    borderRadius: 100,      // Membuat kotak menjadi lingkaran sempurna
    backgroundColor: '#E0F2FE', // Warna biru sangat muda
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Menaruh konten di tengah secara vertikal
    alignItems: 'center',
    width: '90%',             // Memberi jarak margin kiri-kanan sebesar 5%
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mainImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',       // Menebalkan teks (Ekstra Bold)
    color: '#0F172A',
  },
  versionText: {
    color: '#0EA5E9',        // Warna aksen biru Sky
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
    borderRadius: 24,        // Sudut membulat modern
    // Bayangan (Shadow) untuk efek kartu melayang
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,           // Shadow khusus untuk Android
    marginBottom: 30,
    borderWidth: 1,          // Garis tepi tipis
    borderColor: '#F1F5F9',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#94A3B8',
    letterSpacing: 1,        // Jarak antar huruf
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',    // Mengatur posisi anak elemen ke samping (Row)
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
  buttonMain: {
    backgroundColor: '#0EA5E9',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    // Shadow pada tombol agar terlihat 'clickable'
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginBottom: 20,
    color: '#CBD5E1',
    fontSize: 12,
  },
});