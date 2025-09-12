import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Pizza MATTEO
                </span>
                <span className="text-sm text-green-400 -mt-1">Authentic Italian</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the authentic taste of Italy at Pizza MATTEO in Casa. 
              We serve traditional Italian pizzas made with the finest ingredients 
              and recipes passed down through generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-600 hover:bg-red-600 rounded transition-colors"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-600 hover:bg-red-600 rounded transition-colors"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-600 hover:bg-red-600 rounded transition-colors"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-red-400 transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-red-600 rounded mt-0.5"></div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">123 Pizza Street</p>
                  <p className="text-sm">Casa, Morocco</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-600 rounded"></div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">+212 5xx-xxx-xxx</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@pizzamatteo.ma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pizza MATTEO. All rights reserved. Made with ❤️ in Casa.
          </p>
        </div>
      </div>
    </footer>
  );
}