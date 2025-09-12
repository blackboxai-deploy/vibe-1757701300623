"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Pizza MATTEO
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Bringing authentic Italian flavors to the heart of Casa
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pizza MATTEO was born from a simple dream: to bring the authentic taste of Italy to Casa, Morocco. 
              Our founder, Chef Matteo, spent years perfecting his craft in the traditional pizzerias of Naples, 
              learning from master pizzaiolos who passed down generations of knowledge.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In 2018, Matteo brought his passion and expertise to Casa, opening our doors with a wood-fired oven 
              imported directly from Italy. Every pizza we serve is a testament to authentic Italian traditions, 
              made with imported San Marzano tomatoes, fresh mozzarella, and the finest ingredients.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Today, Pizza MATTEO stands as Casa's premier destination for authentic Italian pizza, 
              where every meal is prepared with amore and served with genuine Italian hospitality.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/menu">Taste Our Authentic Pizzas</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ed19759-a3f0-4909-8357-f2998112310c.png"
              alt="Chef Matteo in the kitchen"
              className="w-full h-auto rounded-lg shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa311cfa-6ea1-4156-9148-abebf17267d9.png';
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">2018</p>
                <p className="text-sm text-gray-600">Established in Casa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  Every recipe follows traditional Italian methods, ensuring authentic flavors in every bite.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">Q</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We source the finest ingredients, from Italian flour to premium mozzarella, ensuring excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our team shares a deep love for Italian cuisine, bringing enthusiasm to every dish we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f165000-da43-4c35-8e7d-1c5a078f730a.png+Professional+Portrait"
                  alt="Chef Matteo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/300x300?text=Chef+Matteo';
                  }}
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chef Matteo</h3>
                <p className="text-red-600 font-medium mb-3">Founder & Head Chef</p>
                <p className="text-gray-600 text-sm">
                  Trained in Naples, Matteo brings 15+ years of authentic Italian pizza-making expertise to Casa.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0dcb6ce8-9652-42d5-9fc0-e9f2b8dbd0d0.png"
                  alt="Maria Rossi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/baf098b6-ac00-4359-88ff-d8e306e1d1f6.png';
                  }}
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Rossi</h3>
                <p className="text-red-600 font-medium mb-3">Kitchen Manager</p>
                <p className="text-gray-600 text-sm">
                  From Sicily, Maria ensures every ingredient meets our high standards of quality and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a61f44a4-ea8c-49ff-a427-afa3a68d3db4.png"
                  alt="Ahmed Benali"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96ce95ca-8f48-4409-b8d9-269d263cf218.png';
                  }}
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmed Benali</h3>
                <p className="text-red-600 font-medium mb-3">Restaurant Manager</p>
                <p className="text-gray-600 text-sm">
                  Local Casa native Ahmed ensures warm hospitality and exceptional service for all our guests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Us in Casa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-lg opacity-90 mb-2">123 Pizza Street</p>
              <p className="text-lg opacity-90 mb-2">Casa, Morocco</p>
              <p className="text-lg opacity-90">+212 5xx-xxx-xxx</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <p className="text-lg opacity-90 mb-2">Monday - Thursday: 12:00 - 23:00</p>
              <p className="text-lg opacity-90 mb-2">Friday - Saturday: 12:00 - 24:00</p>
              <p className="text-lg opacity-90">Sunday: 12:00 - 22:00</p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 mr-4">
              <Link href="/contact">Make Reservation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}