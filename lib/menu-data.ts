export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const restaurantInfo = {
  name: "Brothers Taco House",
  tagline: "Bold Mexican and Latin American flavors, served fast and fresh.",
  address: "1604 Emancipation, Houston, Texas 77003",
  hours: "5:00 AM - 3:00 PM",
  cuisine: "Mexican and Latin American"
};

export const menuSections: MenuSection[] = [
  {
    title: "Breakfast Tacos",
    items: [
      { name: "Potato and Egg", price: "$1.90" },
      { name: "Bacon and Egg", price: "$2.25" },
      { name: "Chorizo and Egg", price: "$2.25" }
    ]
  },
  {
    title: "Lunch Tacos",
    items: [
      { name: "Ground Beef", price: "$2.75" },
      { name: "Chicharron", price: "$3.00" },
      { name: "Chipotle Chicken", price: "$2.75" },
      { name: "Carne Guisada", price: "$2.75" },
      { name: "Fajita", price: "$2.25" },
      { name: "Spicy Fajita", price: "$2.25" },
      { name: "Chicken Fajita", price: "$2.25" },
      { name: "Mix Fajitas", price: "$2.75" },
      { name: "Rajas con Queso", price: "$2.25" },
      { name: "Chicken Mole", price: "$2.25" },
      { name: "Asado", price: "$2.25" },
      { name: "Habanero Pork", price: "$2.25" }
    ]
  },
  {
    title: "Weekend Only",
    items: [
      { name: "Barbacoa Taco", price: "$2.75" },
      { name: "Pork Tamales", note: "Ask in-store for daily price" },
      { name: "Menudo", note: "Ask in-store for daily price" }
    ]
  },
  {
    title: "Daily Lunch Special",
    subtitle: "11:00 AM - 2:30 PM",
    items: [
      { name: "Monday - Chile Relleno", price: "$6.50" },
      { name: "Tuesday - Beef Flautas", price: "$6.50" },
      { name: "Wednesday - Ground Beef Enchiladas", price: "$6.50" },
      { name: "Thursday - Green Chicken Enchiladas", price: "$6.50" },
      { name: "Friday - Crispy Groundbeef Tacos", price: "$6.50" }
    ]
  }
];
