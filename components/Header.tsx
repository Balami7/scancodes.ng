'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown, FiLogOut, FiUser, FiLayoutDashboard } from 'react-icons/fi';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMyQROpen, setIsMyQROpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);

  // Simulated login status // Change to false to test logged-out state
  const isLoggedIn = false; 
  const username = "Dahiru Usman";
  const userAvatar = "/group1.png";

  return (
    <header className="bg-white border-b border-green-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          
          
          <Link href=" " className="flex items-center">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/image4.png"
                alt="ScanCodes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href=" " className="hover:text-green-600 transition-colors duration-200">
              Dashboard
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200 focus:outline-none">
                My QR Codes
                <FiChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 hidden group-hover:block pt-3 w-56 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-1 text-sm">
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    All QR Codes
                  </Link>
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    Active QR Codes
                  </Link>
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    Archived
                  </Link>
                  <div className="border-t border-gray-100 my-2 mx-2"></div>
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 font-medium text-green-600 transition-colors">
                    Create New QR Code →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200 focus:outline-none">
                Templates
                <FiChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 hidden group-hover:block pt-3 w-56 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-1 text-sm">
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    QR Code Templates
                  </Link>
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    Barcode Templates
                  </Link>
                  <Link href=" " className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 transition-colors">
                    Custom Designs
                  </Link>
                  <div className="border-t border-gray-100 my-2 mx-2"></div>
                  <Link href="/templates/all" className="block px-5 py-3 hover:bg-gray-50 rounded-xl hover:text-green-600 font-medium text-green-600 transition-colors">
                    Browse All Templates →
                  </Link>
                </div>
              </div>
            </div>

            <Link href=" " className="hover:text-green-600 transition-colors duration-200">Wallet</Link>
            <Link href=" " className="hover:text-green-600 transition-colors duration-200">Analytics</Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link 
                  href=" "
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 border-2 rounded-2xl border-gray-300"
                >
                  Login
                </Link>
                
                <Link 
                  href=" "
                  className="px-7 py-2.5 text-sm font-semibold bg-green-600 hover:bg-green-700 text-white rounded-2xl transition-all active:scale-95 shadow-sm"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-2xl transition-colors"
                >
                  <div className="relative w-9 h-9 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={userAvatar}
                      alt="User Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-black">
                    {username}
                    <FiChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                    <Link 
                      href=" " 
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FiUser size={18} />
                      Profile
                    </Link>
                    <Link 
                      href=" " 
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FiLayoutDashboard size={18} />
                      Dashboard
                    </Link>
                    <div className="border-t border-gray-100 my-2 mx-2"></div>
                    <button 
                      onClick={() => {
                        alert("Logged out successfully");
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-red-600 w-full text-left"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 overflow-y-auto">
          <div className="px-6 flex flex-col h-full">
            <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <Link href=" " className="py-3 hover:text-green-600" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>

              {/* My QR Codes Mobile */}
              <div>
                <button 
                  onClick={() => setIsMyQROpen(!isMyQROpen)}
                  className="flex items-center justify-between w-full py-3 hover:text-green-600"
                >
                  My QR Codes
                  <FiChevronDown className={`transition-transform duration-200 ${isMyQROpen ? 'rotate-180' : ''}`} />
                </button>
                {isMyQROpen && (
                  <div className="pl-6 flex flex-col gap-4 text-base text-gray-600 mt-2">
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">All QR Codes</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">Active QR Codes</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">Archived</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600 font-medium">Create New QR Code</Link>
                  </div>
                )}
              </div>

              {/* Templates Mobile */}
              <div>
                <button 
                  onClick={() => setIsTemplatesOpen(!isTemplatesOpen)}
                  className="flex items-center justify-between w-full py-3 hover:text-green-600"
                >
                  Templates
                  <FiChevronDown className={`transition-transform duration-200 ${isTemplatesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTemplatesOpen && (
                  <div className="pl-6 flex flex-col gap-4 text-base text-gray-600 mt-2">
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">QR Code Templates</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">Barcode Templates</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600">Custom Designs</Link>
                    <Link href=" " onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-600 font-medium">Browse All Templates</Link>
                  </div>
                )}
              </div>

              <Link href=" " className="py-3 hover:text-green-600" onClick={() => setIsMobileMenuOpen(false)}>
                Wallet
              </Link>
              <Link href=" " className="py-3 hover:text-green-600" onClick={() => setIsMobileMenuOpen(false)}>
                Analytics
              </Link>
            </nav>

            {/* Mobile Auth Section */}
            <div className="mt-auto pb-12 pt-10 border-t border-gray-200">
              {!isLoggedIn ? (
                <div className="flex flex-col gap-4">
                  <Link 
                    href=" "
                    className="w-full py-4 text-center text-lg font-semibold text-gray-800 border-2 border-gray-300 rounded-2xl hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href=" "
                    className="w-full py-4 text-center text-lg font-semibold bg-green-600 text-white rounded-2xl hover:bg-green-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-3xl overflow-hidden">
                      <Image src={userAvatar} alt="User" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-black">{username}</p>
                      <p className="text-sm text-gray-500">Free Plan</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-lg">
                    <Link href=" " className="py-3 hover:text-green-600" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
                    <Link href=" " className="py-3 hover:text-green-600" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                    <button 
                      onClick={() => {
                        alert("Logged out");
                        setIsMobileMenuOpen(false);
                      }}
                      className="py-3 text-red-600 hover:text-red-700 text-left"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
