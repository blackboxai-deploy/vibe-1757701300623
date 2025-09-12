export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
}

export const menuCategories = [
  { id: 'classic', name: 'Classic Pizzas', description: 'Traditional Italian favorites' },
  { id: 'specialty', name: 'Specialty Pizzas', description: 'Our signature creations' },
  { id: 'vegetarian', name: 'Vegetarian', description: 'Fresh and delicious veggie options' },
  { id: 'appetizers', name: 'Appetizers', description: 'Perfect starters for your meal' },
  { id: 'beverages', name: 'Beverages', description: 'Refreshing drinks and Italian sodas' },
];

export const menuItems: MenuItem[] = [
  // Classic Pizzas
  {
    id: 'margherita',
    name: 'Pizza Margherita',
    description: 'Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil',
    price: 120,
    category: 'classic',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba0e69d2-0cf2-4c4b-9f0a-49c1a0f0b866.png',
    popular: true,
    vegetarian: true,
  },
  {
    id: 'marinara',
    name: 'Pizza Marinara',
    description: 'Traditional tomato sauce, garlic, oregano, and extra virgin olive oil',
    price: 100,
    category: 'classic',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6efc128a-7fe5-4315-a11b-7f40107227fa.png',
    vegetarian: true,
  },
  {
    id: 'quattro-stagioni',
    name: 'Quattro Stagioni',
    description: 'Mozzarella, ham, mushrooms, artichokes, and olives',
    price: 180,
    category: 'classic',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4d9649a-52a5-491f-b7cd-d878b0255c12.png',
  },
  {
    id: 'napoletana',
    name: 'Pizza Napoletana',
    description: 'Mozzarella, anchovies, tomatoes, oregano, and olive oil',
    price: 150,
    category: 'classic',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a2d6fbd-fcd2-4d6f-b49c-51c5493a0220.png',
  },

  // Specialty Pizzas
  {
    id: 'matteo-special',
    name: 'MATTEO Special',
    description: 'Our signature pizza with prosciutto, arugula, mozzarella, and truffle oil',
    price: 220,
    category: 'specialty',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65710973-fa0c-4b95-b08a-386500fd1c6f.png',
    popular: true,
  },
  {
    id: 'casa-deluxe',
    name: 'Casa Deluxe',
    description: 'Premium blend of Italian cheeses, sun-dried tomatoes, and Mediterranean herbs',
    price: 200,
    category: 'specialty',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/107d9580-fd21-449c-bf55-11a8b82a7351.png',
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Bliss',
    description: 'Feta cheese, olives, cherry tomatoes, red onions, and herbs',
    price: 190,
    category: 'specialty',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7aaee440-1002-44b0-bb8a-f2ad0f9840aa.png',
    vegetarian: true,
  },
  {
    id: 'meat-lovers',
    name: 'Meat Lovers',
    description: 'Pepperoni, Italian sausage, ham, and ground beef',
    price: 210,
    category: 'specialty',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9fd569e8-a9af-4740-9bcc-6ad0393108be.png',
  },

  // Vegetarian Pizzas
  {
    id: 'veggie-supreme',
    name: 'Veggie Supreme',
    description: 'Bell peppers, mushrooms, onions, olives, and fresh tomatoes',
    price: 170,
    category: 'vegetarian',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0196a55-5e4f-4538-ae81-6a69ed1dcff9.png',
    vegetarian: true,
  },
  {
    id: 'capricciosa',
    name: 'Capricciosa Veggie',
    description: 'Artichokes, mushrooms, bell peppers, and fresh mozzarella',
    price: 160,
    category: 'vegetarian',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1721e78-70da-4901-835d-8f54cc361131.png',
    vegetarian: true,
  },
  {
    id: 'spinach-ricotta',
    name: 'Spinach & Ricotta',
    description: 'Fresh spinach, ricotta cheese, garlic, and pine nuts',
    price: 165,
    category: 'vegetarian',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/753a76da-5b54-499f-bccf-089ff1e2cc75.png',
    vegetarian: true,
  },

  // Appetizers
  {
    id: 'bruschetta',
    name: 'Bruschetta Italiana',
    description: 'Grilled bread topped with fresh tomatoes, basil, and garlic',
    price: 60,
    category: 'appetizers',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f1a0254-a343-43f6-94bf-408afb976a5a.png',
    vegetarian: true,
  },
  {
    id: 'antipasto',
    name: 'Antipasto Misto',
    description: 'Selection of Italian cured meats, cheeses, and marinated vegetables',
    price: 90,
    category: 'appetizers',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/820da520-7c96-4b37-84f4-ca03533d3cca.png',
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Crispy breaded mozzarella served with marinara sauce',
    price: 70,
    category: 'appetizers',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9af6feca-7979-407b-9a43-4f69e031d3ed.png',
    vegetarian: true,
  },

  // Beverages
  {
    id: 'italian-soda',
    name: 'Italian Soda',
    description: 'Refreshing Italian sodas in various flavors',
    price: 25,
    category: 'beverages',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8639f92-878e-4b39-878c-a81e8df85b30.png',
    vegetarian: true,
  },
  {
    id: 'espresso',
    name: 'Espresso Italiano',
    description: 'Authentic Italian espresso coffee',
    price: 20,
    category: 'beverages',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e51f9b95-d352-42e1-940a-263d7b40f2df.png',
    vegetarian: true,
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Juices',
    description: 'Freshly squeezed orange, apple, or mixed fruit juices',
    price: 30,
    category: 'beverages',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0201131f-f464-457a-9819-6ae950132aba.png',
    vegetarian: true,
  },
];