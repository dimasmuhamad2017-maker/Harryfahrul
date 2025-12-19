'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image src="/logo.png" alt="HARRY FAHRUL ROZY Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    HARRY FAHRUL ROZY
                  </h1>
                  <p className="text-xs text-gray-600">Professional Accommodation Provider</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-blue-100">
            HARRY FAHRUL ROZY - Perlindungan Data Pribadi Anda
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Shield className="text-blue-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selamat datang di <strong>HARRY FAHRUL ROZY</strong>. Kami sangat memperhatikan privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
              ketika Anda menggunakan layanan akomodasi kami.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Database className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nama lengkap dan identitas diri (KTP/SIM/Paspor)</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat tempat tinggal</li>
                  <li>Informasi pembayaran (rekening, metode pembayaran)</li>
                  <li>Informasi kontak darurat</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Penggunaan Layanan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Data pemesanan akomodasi</li>
                  <li>Riwayat menginap dan preferensi</li>
                  <li>Informasi durasi sewa</li>
                  <li>Feedback dan ulasan layanan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Alamat IP dan jenis perangkat</li>
                  <li>Informasi browser dan sistem operasi</li>
                  <li>Data penggunaan website</li>
                  <li>Cookies dan data pelacakan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Usage of Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Eye className="text-purple-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Penggunaan Informasi</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memproses pemesanan dan reservasi akomodasi</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengelola pembayaran dan transaksi keuangan</li>
                <li>Mengirimkan konfirmasi dan notifikasi penting</li>
                <li>Memperbaiki dan mengembangkan layanan kami</li>
                <li>Memastikan keamanan dan kepatuhan hukum</li>
                <li>Analisis statistik dan penelitian pasar</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Lock className="text-red-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>HARRY FAHRUL ROZY</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data sensitif dengan standar industri</li>
                <li>Akses terbatas untuk informasi pribadi</li>
                <li>Server aman dengan firewall dan proteksi malware</li>
                <li>Backup data rutin dan recovery plan</li>
                <li>Training staf tentang keamanan data</li>
                <li>Audit keamanan berkala</li>
              </ul>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <UserCheck className="text-yellow-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Mengakses</strong> - Melihat data pribadi yang kami simpan</li>
                <li><strong>Mengoreksi</strong> - Memperbarui informasi yang tidak akurat</li>
                <li><strong>Menghapus</strong> - Meminta penghapusan data pribadi</li>
                <li><strong>Membatasi</strong> - Membatasi pemrosesan data tertentu</li>
                <li><strong>Menolak</strong> - Menolak pemrosesan data untuk tujuan tertentu</li>
                <li><strong>Portabilitas</strong> - Memindahkan data ke layanan lain</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-gray-700 mb-6">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, 
              silakan hubungi kami:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900">HARRY FAHRUL ROZY</p>
                <p className="text-gray-700">KP. BUARAN, Desa/Kelurahan Kelapa Indah</p>
                <p className="text-gray-700">Kec. Tangerang, Kota Tangerang, Provinsi Banten</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Kontak</p>
                <p className="text-gray-700">Telepon: 085285704297</p>
                <p className="text-gray-700">Email: privacy@harryfahrulrozy.com</p>
              </div>
            </div>
          </div>

          {/* Update Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Kebijakan Privasi ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}. Kami dapat memperbarui kebijakan ini dari waktu ke waktu untuk mencerminkan 
              perubahan dalam praktik kami atau persyaratan hukum.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="HARRY FAHRUL ROZY Logo" width={40} height={40} className="rounded-lg" />
                <h3 className="text-xl font-bold">HARRY FAHRUL ROZY</h3>
              </div>
              <p className="text-gray-400">
                Penyedia akomodasi profesional yang terpercaya untuk semua kebutuhan tempat tinggal Anda.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan Cepat</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telepon: 085285704297</p>
                <p>Email: info@harryfahrulrozy.com</p>
                <p>Tangerang, Banten</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HARRY FAHRUL ROZY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}