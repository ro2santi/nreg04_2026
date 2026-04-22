import { createClient } from '@supabase/supabase-js';

// Konfigurasi ini menghubungkan aplikasi ke server Supabase
export const SUPABASE_URL = 'masukkan_url_masing-masing';
export const SUPABASE_ANON_KEY = 'masukkan_key_masing-masing';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);