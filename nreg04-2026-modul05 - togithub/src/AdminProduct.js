import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  FlatList, Alert, Image, ActivityIndicator 
} from 'react-native';
import { supabase } from './SupabaseConfig';

export default function AdminProduct({ onBack }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({ id: null, nama: '', harga: '', deskripsi: '', gambar: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('produk_umkm').select('*').order('id', { ascending: false });
    if (!error) setProducts(data);
  };

  // FUNGSI TAMBAH & EDIT DATA
  const handleSave = async () => {
    if (!form.nama || !form.harga || !form.gambar) {
      Alert.alert('Error', 'Semua kolom (Nama, Harga, Gambar) wajib diisi!');
      return;
    }

    setLoading(true);
    try {
      if (isEdit) {
        // Logika UPDATE
        const { error } = await supabase
          .from('produk_umkm')
          .update({ 
            nama: form.nama, 
            harga: form.harga, 
            deskripsi: form.deskripsi, 
            gambar: form.gambar 
          })
          .eq('id', form.id);
        
        if (error) throw error;
        Alert.alert('Berhasil', 'Produk diperbarui!');
      } else {
        // Logika INSERT
        const { error } = await supabase
          .from('produk_umkm')
          .insert([{ 
            nama: form.nama, 
            harga: form.harga, 
            deskripsi: form.deskripsi, 
            gambar: form.gambar 
          }]);
        
        if (error) throw error;
        Alert.alert('Berhasil', 'Produk baru ditambahkan!');
      }

      // Reset form setelah sukses
      setForm({ id: null, nama: '', harga: '', deskripsi: '', gambar: '' });
      setIsEdit(false);
      fetchProducts();
    } catch (error) {
      Alert.alert('Gagal Simpan', error.message);
    } finally {
      setLoading(false);
    }
  };

  // FUNGSI HAPUS DENGAN KONFIRMASI
  const confirmDelete = (id) => {
    Alert.alert(
      'Konfirmasi Hapus',
      'Data ini akan dihapus permanen dari database. Lanjutkan?',
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Hapus', 
          style: 'destructive', 
          onPress: async () => {
            try {
              const { error } = await supabase.from('produk_umkm').delete().eq('id', id);
              if (error) throw error;
              fetchProducts(); // Refresh list setelah hapus
              Alert.alert('Sukses', 'Data berhasil dihapus');
            } catch (error) {
              Alert.alert('Gagal Hapus', error.message);
            }
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.backBtn}>← Kembali</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Manajemen Produk</Text>
      </View>

      <View style={styles.formCard}>
        <TextInput 
          style={styles.input} 
          placeholder="Nama Produk" 
          value={form.nama} 
          onChangeText={(t) => setForm({...form, nama: t})} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Harga (Rp)" 
          value={form.harga} 
          onChangeText={(t) => setForm({...form, harga: t})} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Link Gambar (URL)" 
          value={form.gambar} 
          onChangeText={(t) => setForm({...form, gambar: t})} 
        />
        
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={loading}>
          {loading ? <ActivityIndicator color="white" /> : <Text style={styles.saveBtnText}>{isEdit ? 'Update Data' : 'Tambah Data'}</Text>}
        </TouchableOpacity>
        {isEdit && <TouchableOpacity onPress={() => {setIsEdit(false); setForm({id:null, nama:'', harga:'', gambar:''})}}><Text style={{textAlign:'center', marginTop:10, color:'gray'}}>Batal Edit</Text></TouchableOpacity>}
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={{ uri: item.gambar }} style={styles.imgThumb} />
            <View style={{flex:1, marginLeft: 10}}>
              <Text style={{fontWeight:'bold'}}>{item.nama}</Text>
              <Text style={{color:'#0EA5E9'}}>{item.harga}</Text>
            </View>
            <TouchableOpacity onPress={() => {setForm(item); setIsEdit(true);}} style={styles.editBtn}><Text style={{color:'white'}}>Edit</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.delBtn}><Text style={{color:'white'}}>Hapus</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 50 },
  header: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  backBtn: { color: '#64748B', marginRight: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  formCard: { backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 15, elevation: 3 },
  input: { borderBottomWidth: 1, borderColor: '#E2E8F0', marginBottom: 15, padding: 5 },
  saveBtn: { backgroundColor: '#0EA5E9', padding: 15, borderRadius: 10, alignItems: 'center' },
  saveBtnText: { color: 'white', fontWeight: 'bold' },
  itemRow: { flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 20, marginBottom: 10, padding: 10, borderRadius: 10, alignItems: 'center' },
  imgThumb: { width: 40, height: 40, borderRadius: 5 },
  editBtn: { backgroundColor: '#F59E0B', padding: 8, borderRadius: 5, marginRight: 5 },
  delBtn: { backgroundColor: '#EF4444', padding: 8, borderRadius: 5 }
});