"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/lib/menu-data";

export default function HomePage() {
  const featuredPizzas = menuItems.filter(item => item.popular).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b13112c5-d290-4a5b-b90b-187e933c084d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pizza MATTEO
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-green-300">
            Authentic Italian Pizza in Casa
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the true taste of Italy with our handcrafted pizzas, 
            made with the finest ingredients and traditional wood-fired techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
              <Link href="/contact">Make Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Signature Pizzas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular pizzas, crafted with passion and authentic Italian ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <Card key={pizza.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb500c93-6d01-4da3-b3b8-6ad7151c06c1.png '+')}`;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{pizza.price} MAD</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Welcome to Pizza MATTEO
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in the heart of Casa, Pizza MATTEO brings you the authentic taste of Italy. 
                Our passionate chef Matteo learned the art of pizza making in Naples, and now shares 
                these traditional techniques with Morocco.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every pizza is hand-stretched and cooked in our wood-fired oven, using only the finest 
                San Marzano tomatoes, fresh mozzarella, and ingredients imported directly from Italy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/about">Our Story</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  <Link href="/contact">Visit Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c18d00fd-1723-461f-9e05-21277e25adb6.png"
                alt="Chef Matteo making pizza"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab1f5712-e0de-49b2-aae4-065903e0d3ce.png';
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready for Authentic Italian Pizza?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Visit us today or make a reservation for the perfect Italian dining experience in Casa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Make Reservation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/menu">Order Takeaway</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}