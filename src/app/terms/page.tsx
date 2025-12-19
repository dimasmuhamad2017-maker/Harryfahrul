'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-blue-600 font-semibold">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-blue-600 font-semibold">Terms</Link>
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
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-blue-100">
            HARRY FAHRUL ROZY - Perjanjian Layanan Akomodasi
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
                <FileText className="text-blue-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selamat datang di layanan akomodasi <strong>HARRY FAHRUL ROZY</strong>. 
              Syarat dan Ketentuan ini mengatur penggunaan layanan akomodasi yang kami sediakan. 
              Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Harap baca dengan seksama sebelum menggunakan layanan kami. Jika Anda tidak setuju dengan 
              bagian mana pun dari syarat dan ketentuan ini, jangan gunakan layanan kami.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <CheckCircle className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Layanan yang Tersedia</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Jenis Akomodasi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Kost Harian</strong> - Akomodasi jangka pendek dengan fasilitas lengkap</li>
                  <li><strong>Kost Bulanan</strong> - Paket hemat untuk tinggal jangka panjang</li>
                  <li><strong>Kontrakan Rumah</strong> - Rumah kontrakan untuk keluarga</li>
                  <li><strong>Layanan Tambahan</strong> - Laundry, makanan, dan kebutuhan lainnya</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fasilitas Standar</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Kamar tidur dengan furniture lengkap</li>
                  <li>Kamar mandi dalam (untuk tipe tertentu)</li>
                  <li>AC atau kipas angin</li>
                  <li>WiFi internet</li>
                  <li>Area dapur bersama (untuk tipe tertentu)</li>
                  <li>Area parkir kendaraan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Booking and Payment */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Gavel className="text-purple-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proses Pemesanan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kontak kami via telepon atau WhatsApp</li>
                  <li>Pilih jenis akomodasi dan periode sewa</li>
                  <li>Lengkapi data diri dan identitas</li>
                  <li>Lakukan pembayaran uang muka (DP)</li>
                  <li>Terima konfirmasi dan detail check-in</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kebijakan Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>DP minimal 30% dari total biaya sewa</li>
                  <li>Pelunasan sebelum tanggal check-in</li>
                  <li>Pembayaran dapat dilakukan via transfer bank</li>
                  <li>Bukti pembayaran wajib disertakan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guest Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <AlertCircle className="text-yellow-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Tamu</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai tamu, Anda wajib:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Menjaga kebersihan dan ketertiban akomodasi</li>
                <li>Tidak merusak fasilitas yang disediakan</li>
                <li>Mematuhi jam malam dan peraturan setempat</li>
                <li>Tidak membawa barang haram atau ilegal</li>
                <li> Bertanggung jawab atas kerusakan yang terjadi</li>
                <li>Memberitahukan jika ada tamu tambahan</li>
                <li>Mematuhi peraturan parkir dan keamanan</li>
              </ul>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertCircle className="text-red-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kebijakan Pembatalan</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pembatalan oleh Tamu</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>&gt;7 hari sebelum check-in:</strong> Pengembalian 100% DP</li>
                  <li><strong>3-7 hari sebelum check-in:</strong> Pengembalian 50% DP</li>
                  <li><strong>&lt;3 hari sebelum check-in:</strong> DP hangus</li>
                  <li><strong>Pada hari check-in:</strong> Tidak ada pengembalian</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pembatalan oleh Penyedia</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Jika pembatalan dilakukan oleh kami, 100% uang dikembalikan</li>
                  <li>Kami akan berusaha menyediakan alternatif akomodasi</li>
                  <li>Biaya tambahan akan ditanggung oleh kami</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prohibitions */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertCircle className="text-red-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Larangan</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 font-semibold">DILARANG KERAS untuk:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Membawa atau menggunakan narkoba dan zat terlarang</li>
                <li>Melakukan aktivitas kriminal atau ilegal</li>
                <li>Mengadakan pesta atau keramaian yang mengganggu</li>
                <li>Membawa hewan peliharaan (kecuali ada izin khusus)</li>
                <li>Merokok di dalam kamar (kecuali area yang ditentukan)</li>
                <li>Membuat keributan setelah jam 22:00</li>
                <li>Menyewakan kembali akomodasi tanpa izin</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pelanggaran terhadap larangan ini dapat menyebabkan pengusiran tanpa pengembalian biaya.
              </p>
            </div>
          </div>

          {/* Liability */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Gavel className="text-gray-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>HARRY FAHRUL ROZY</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Kehilangan barang pribadi tamu</li>
                <li>Kerusakan akibat bencana alam atau force majeure</li>
                <li>Gangguan layanan (listrik, internet) dari provider</li>
                <li>Kecelakaan pribadi di luar area akomodasi</li>
                <li>Kerugian akibat kelalaian tamu itu sendiri</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-gray-700 mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
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
                <p className="text-gray-700">Email: info@harryfahrulrozy.com</p>
              </div>
            </div>
          </div>

          {/* Update Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Syarat & Ketentuan ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}. Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. 
              Penggunaan layanan yang berkelanjutan constitutes acceptance dari syarat dan ketentuan yang diperbarui.
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