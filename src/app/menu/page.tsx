"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { menuItems, menuCategories } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Menu
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Authentic Italian flavors crafted with passion and the finest ingredients
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveCategory("all")}
            variant={activeCategory === "all" ? "default" : "outline"}
            className={`px-6 py-2 ${
              activeCategory === "all"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            }`}
          >
            All Items
          </Button>
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 ${
                activeCategory === category.id
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/103f3ac2-79a8-4fee-b85a-ad7b907c0c59.png '+')}`;
                  }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Vegetarian
                    </span>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
                  <span className="text-xl font-bold text-red-600 whitespace-nowrap ml-2">
                    {item.price} MAD
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                    {menuCategories.find(cat => cat.id === item.category)?.name || item.category}
                  </span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Order?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Visit us or call to place your order for pickup or delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Call +212 5xx-xxx-xxx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Visit Restaurant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}