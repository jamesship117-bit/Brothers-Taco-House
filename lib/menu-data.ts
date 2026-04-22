export type MenuItem = {
  name: string;
  price: string;
  description: string;
  tags?: ("spicy" | "vegetarian" | "popular")[];
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const restaurantInfo = {
  name: "Brothers Taco House",
  scriptTagline: "Homegrown Flavor, Neighborhood Heart",
  tagline:
    "A family-run taqueria rooted in tradition, serving soulful Mexican dishes, warm hospitality, and everyday celebration.",
  address: "1604 Emancipation, Houston, Texas 77003",
  hours: "Monday - Sunday, 7:00 AM - 10:00 PM",
  phone: "(713) 555-0144",
  cuisine: "Traditional Mexican",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com"
};

export const menuSections: MenuSection[] = [
  {
    title: "Antojitos",
    subtitle: "Street favorites and small plates made for sharing",
    items: [
      {
        name: "Esquites de la Casa",
        price: "$9",
        description: "Roasted corn, crema fresca, cotija, chile piquin, and lime.",
        tags: ["vegetarian", "popular"]
      },
      {
        name: "Queso Fundido con Chorizo",
        price: "$12",
        description: "Melted Oaxaca cheese with house chorizo and warm tortillas.",
        tags: ["popular"]
      },
      {
        name: "Tostadas de Tinga",
        price: "$11",
        description: "Crisp tostadas topped with smoky chipotle chicken and pickled onion.",
        tags: ["spicy"]
      }
    ]
  },
  {
    title: "Tacos",
    subtitle: "Pressed tortillas, bold fillings, and salsa made daily",
    items: [
      {
        name: "Al Pastor",
        price: "$4",
        description: "Achiote-marinated pork, pineapple, onion, and cilantro.",
        tags: ["popular"]
      },
      {
        name: "Carne Asada",
        price: "$5",
        description: "Char-grilled skirt steak with avocado salsa and roasted onions."
      },
      {
        name: "Nopales y Queso",
        price: "$4",
        description: "Grilled cactus, panela cheese, and salsa verde.",
        tags: ["vegetarian"]
      },
      {
        name: "Cochinita Pibil",
        price: "$5",
        description: "Slow-roasted pork with citrus and habanero pickled onion.",
        tags: ["spicy"]
      }
    ]
  },
  {
    title: "Platos Fuertes",
    subtitle: "Hearty house specialties served with rice and beans",
    items: [
      {
        name: "Mole Poblano",
        price: "$22",
        description: "Braised chicken in rich mole poblano, sesame, and warm tortillas.",
        tags: ["popular"]
      },
      {
        name: "Chile Relleno de Queso",
        price: "$19",
        description: "Poblano pepper stuffed with cheese and guajillo tomato sauce.",
        tags: ["vegetarian"]
      },
      {
        name: "Birria de Res",
        price: "$24",
        description: "Slow-cooked beef stew with chile broth, onion, cilantro, and lime.",
        tags: ["spicy"]
      }
    ]
  },
  {
    title: "Bebidas",
    subtitle: "Refreshing house drinks and traditional pours",
    items: [
      {
        name: "Horchata de Vainilla",
        price: "$6",
        description: "Creamy rice drink with cinnamon and Mexican vanilla.",
        tags: ["popular"]
      },
      {
        name: "Agua de Jamaica",
        price: "$5",
        description: "Hibiscus infusion with citrus and cane sugar."
      },
      {
        name: "Margarita de la Casa",
        price: "$13",
        description: "Tequila, fresh lime, agave, and orange liqueur.",
        tags: ["spicy"]
      }
    ]
  },
  {
    title: "Postres",
    subtitle: "Traditional sweets and celebratory finishes",
    items: [
      {
        name: "Flan de Cajeta",
        price: "$8",
        description: "Silky caramel custard with goat-milk dulce de leche.",
        tags: ["popular"]
      },
      {
        name: "Churros con Chocolate",
        price: "$9",
        description: "Warm cinnamon churros with dark chocolate dip."
      },
      {
        name: "Pastel de Tres Leches",
        price: "$9",
        description: "Classic sponge cake soaked in three milks and cinnamon cream."
      }
    ]
  }
];
