'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Star, Shield, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="HARRY FAHRUL ROZY Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    HARRY FAHRUL ROZY
                  </h1>
                  <p className="text-xs text-gray-600">Professional Accommodation Provider</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
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
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  Selamat Datang di
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6">
                  HARRY FAHRUL ROZY
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Penyedia akomodasi profesional yang terpercaya untuk semua kebutuhan menginap Anda. 
                Kami menyediakan berbagai pilihan tempat tinggal yang nyaman, aman, dan terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                  Hubungi Kami
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                  Lihat Layanan
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-500 fill-current" size={24} />
                    <Star className="text-yellow-500 fill-current" size={24} />
                    <Star className="text-yellow-500 fill-current" size={24} />
                    <Star className="text-yellow-500 fill-current" size={24} />
                    <Star className="text-yellow-500 fill-current" size={24} />
                  </div>
                  <p className="text-gray-700 italic">
                    "Layanan akomodasi terbaik dengan pelayanan yang sangat memuaskan. 
                    Sangat direkomendasikan untuk siapa saja yang mencari tempat tinggal yang nyaman."
                  </p>
                  <p className="mt-4 font-semibold text-blue-600">- Pelanggan Setia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">HARRY FAHRUL ROZY</span>?
            </h2>
            <p className="text-xl text-gray-600">Kami berkomitmen memberikan layanan terbaik untuk Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Terpercaya</h3>
              <p className="text-gray-600">Reputasi terbaik dalam penyediaan akomodasi dengan keamanan dan kenyamanan terjamin</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fleksibel</h3>
              <p className="text-gray-600">Berbagai pilihan durasi menginap yang dapat disesuaikan dengan kebutuhan Anda</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesional</h3>
              <p className="text-gray-600">Tim berpengalaman yang siap membantu dan melayani semua kebutuhan akomodasi Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">HARRY FAHRUL ROZY</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>HARRY FAHRUL ROZY</strong> adalah penyedia layanan akomodasi profesional yang 
                berdedikasi untuk memberikan pengalaman menginap terbaik bagi setiap klien. 
                Dengan lokasi strategis di Tangerang, kami melayani berbagai kebutuhan tempat tinggal 
                untuk jangka pendek maupun panjang.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kami memahami bahwa setiap orang memiliki kebutuhan akomodasi yang berbeda. 
                Oleh karena itu, kami menawarkan berbagai pilihan tempat tinggal yang dapat disesuaikan 
                dengan preferensi dan anggaran Anda.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visi & Misi</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-600">Visi</h4>
                    <p className="text-gray-700">Menjadi penyedia akomodasi terpercaya dan pilihan utama di Indonesia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Misi</h4>
                    <p className="text-gray-700">Memberikan layanan akomodasi berkualitas dengan harga terjangkau dan pelayanan prima</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-700">KP. BUARAN, Desa/Kelurahan Kelapa Indah<br />Kec. Tangerang, Kota Tangerang, Provinsi Banten</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-700">085285704297</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@harryfahrulrozy.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan Kami</span>
            </h2>
            <p className="text-xl text-gray-600">Berbagai pilihan akomodasi untuk memenuhi kebutuhan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kost Harian</h3>
              <p className="text-gray-700 mb-4">Akomodasi jangka pendek dengan fasilitas lengkap dan harga terjangkau</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Kamar mandi dalam</li>
                <li>• AC dan WiFi</li>
                <li>• Dapur bersama</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kost Bulanan</h3>
              <p className="text-gray-700 mb-4">Hemat dengan paket bulanan untuk tinggal jangka panjang</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Harga spesial bulanan</li>
                <li>• Fasilitas premium</li>
                <li>• Bebas biaya admin</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontrakan Rumah</h3>
              <p className="text-gray-700 mb-4">Untuk keluarga yang membutuhkan ruang lebih luas dan privasi</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 2-3 kamar tidur</li>
                <li>• Garasi motor</li>
                <li>• Lokasi strategis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menemukan Akomodasi Ideal Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi <strong>HARRY FAHRUL ROZY</strong> sekarang juga untuk konsultasi gratis dan temukan 
            tempat tinggal yang sesuai dengan kebutuhan dan anggaran Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              <Phone size={20} className="inline mr-2" />
              Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              <Mail size={20} className="inline mr-2" />
              Kirim Email
            </button>
          </div>
        </div>
      </section>

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
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  085285704297
                </p>
                <p className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@harryfahrulrozy.com
                </p>
                <p className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Tangerang, Banten
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HARRY FAHRUL ROZY. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}