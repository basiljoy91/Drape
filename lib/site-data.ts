export type NavItem = {
  label: string;
  href: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  hero: string;
};

export type Product = {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  priceValue: number;
  image: string;
  gallery?: string[];
  category: string;
  description: string;
  details: string[];
  colors: string[];
  fabric: string;
  occasion: string;
  popularity: number;
  newestRank: number;
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

export const utilityLinks: NavItem[] = [
  { label: "Orders", href: "/contact" },
  { label: "Appointments", href: "/contact" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Sarees", href: "/categories/sarees" },
  { label: "Bridal", href: "/categories/bridal" },
  { label: "Blouses", href: "/categories/blouses" },
  { label: "Men", href: "/categories/men" },
  { label: "Accessories", href: "/categories/accessories" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categories: Category[] = [
  {
    slug: "sarees",
    name: "Sarees",
    description: "Ceremonial drapes in heirloom silk, luminous weaves, and soft festive palettes.",
    hero: "https://images.unsplash.com/photo-1610189020382-6688c0f708c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "blouses",
    name: "Blouses",
    description: "Structured and statement blouses designed to pair with bridal and occasion edits.",
    hero: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "bridal",
    name: "Bridal",
    description: "Warm luxury silhouettes and collectible ensembles shaped for wedding wardrobes.",
    hero: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "men",
    name: "Men",
    description: "Refined occasion tailoring, kurta sets, and soft celebratory separates.",
    hero: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Sculptural bags, jewelry, and finishing layers for premium occasion styling.",
    hero: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=80",
  },
];

export const products: Product[] = [
  {
    slug: "gulnaar-zari-veil",
    title: "Gulnaar Zari Veil",
    subtitle: "Heirloom Saree",
    price: "INR 18,900",
    priceValue: 18900,
    image: "/catalog/1.jpg",
    gallery: ["/catalog/1.jpg", "/catalog/6.jpg", "/catalog/8.jpg", "/catalog/9.jpg"],
    category: "sarees",
    description: "A bright festive saree with zari-rich detailing, warm gold borders, and a celebratory drape.",
    details: ["Hand-finished zari border", "Traditional bridal styling", "Statement festive blouse pairing"],
    colors: ["pink", "gold", "orange"],
    fabric: "silk",
    occasion: "wedding",
    popularity: 98,
    newestRank: 12,
  },
  {
    slug: "amber-temple-drape",
    title: "Amber Temple Drape",
    subtitle: "Occasion Saree",
    price: "INR 16,400",
    priceValue: 16400,
    image: "/catalog/2.jpg",
    gallery: ["/catalog/2.jpg", "/catalog/3.jpg", "/catalog/5.jpg", "/catalog/6.jpg"],
    category: "sarees",
    description: "A richer ceremonial saree designed for temple weddings, festive evenings, and family celebrations.",
    details: ["Lustrous silk body", "Traditional border language", "Ideal for wedding ceremonies"],
    colors: ["orange", "gold", "red"],
    fabric: "banarasi silk",
    occasion: "wedding",
    popularity: 95,
    newestRank: 11,
  },
  {
    slug: "ruby-kashi-brocade",
    title: "Ruby Kashi Brocade",
    subtitle: "Bridal Saree",
    price: "INR 24,500",
    priceValue: 24500,
    image: "/catalog/10.jpg",
    gallery: ["/catalog/10.jpg", "/catalog/11.jpg", "/catalog/14.jpg", "/catalog/17.jpg"],
    category: "bridal",
    description: "A classic bridal brocade in ruby and gold, built for ceremonies, portraits, and heirloom dressing.",
    details: ["Heavy zari pallu", "Bridal styling ready", "Rich brocade craftsmanship"],
    colors: ["red", "gold"],
    fabric: "banarasi silk",
    occasion: "bridal",
    popularity: 100,
    newestRank: 10,
  },
  {
    slug: "rose-mandir-shine",
    title: "Rose Mandir Shine",
    subtitle: "Reception Saree",
    price: "INR 15,200",
    priceValue: 15200,
    image: "/catalog/20.jpg",
    gallery: ["/catalog/20.jpg", "/catalog/13.jpg", "/catalog/17.jpg", "/catalog/11.jpg"],
    category: "sarees",
    description: "A lustrous rose saree that sits beautifully for receptions, engagement evenings, and festive portraits.",
    details: ["Soft shimmer finish", "Jewelry-forward styling", "Elegant reception tone"],
    colors: ["pink", "rose"],
    fabric: "silk tissue",
    occasion: "reception",
    popularity: 92,
    newestRank: 9,
  },
  {
    slug: "ivory-court-zari",
    title: "Ivory Court Zari",
    subtitle: "Ceremony Saree",
    price: "INR 17,800",
    priceValue: 17800,
    image: "/catalog/11.jpg",
    gallery: ["/catalog/11.jpg", "/catalog/17.jpg", "/catalog/20.jpg", "/catalog/13.jpg"],
    category: "sarees",
    description: "A cream-and-gold saree for quieter ceremonies and elegant daytime celebration dressing.",
    details: ["Refined ivory palette", "Classic zari border", "Ideal for day ceremonies"],
    colors: ["ivory", "gold"],
    fabric: "silk",
    occasion: "ceremony",
    popularity: 89,
    newestRank: 8,
  },
  {
    slug: "lotus-rani-weave",
    title: "Lotus Rani Weave",
    subtitle: "Festive Saree",
    price: "INR 13,900",
    priceValue: 13900,
    image: "/catalog/13.jpg",
    gallery: ["/catalog/13.jpg", "/catalog/20.jpg", "/catalog/7.jpg", "/catalog/8.jpg"],
    category: "sarees",
    description: "A bright rani pink weave that brings youthful energy to festive wardrobes.",
    details: ["Light festive drape", "Rani pink body", "Easy styling for events"],
    colors: ["pink", "magenta"],
    fabric: "soft silk",
    occasion: "festive",
    popularity: 86,
    newestRank: 7,
  },
  {
    slug: "golden-vermilion-heritage",
    title: "Golden Vermilion Heritage",
    subtitle: "Wedding Saree",
    price: "INR 21,300",
    priceValue: 21300,
    image: "/catalog/14.jpg",
    gallery: ["/catalog/14.jpg", "/catalog/10.jpg", "/catalog/4.jpg", "/catalog/19.jpg"],
    category: "bridal",
    description: "A traditional wedding saree with intense vermilion depth and woven gold motifs.",
    details: ["Rich wedding palette", "Heavy festive finish", "Heritage visual appeal"],
    colors: ["red", "gold"],
    fabric: "banarasi silk",
    occasion: "wedding",
    popularity: 97,
    newestRank: 6,
  },
  {
    slug: "peach-temple-mist",
    title: "Peach Temple Mist",
    subtitle: "Occasion Saree",
    price: "INR 12,800",
    priceValue: 12800,
    image: "/catalog/17.jpg",
    gallery: ["/catalog/17.jpg", "/catalog/11.jpg", "/catalog/20.jpg", "/catalog/13.jpg"],
    category: "sarees",
    description: "A softer peach saree designed for intimate ceremonies, pujas, and family celebrations.",
    details: ["Subtle festive warmth", "Soft body texture", "Comfortable long-wear drape"],
    colors: ["peach", "gold"],
    fabric: "silk blend",
    occasion: "ceremony",
    popularity: 83,
    newestRank: 5,
  },
  {
    slug: "emerald-kundan-statement",
    title: "Emerald Kundan Statement",
    subtitle: "Festive Saree",
    price: "INR 19,500",
    priceValue: 19500,
    image: "/catalog/19.jpg",
    gallery: ["/catalog/19.jpg", "/catalog/14.jpg", "/catalog/10.jpg", "/catalog/4.jpg"],
    category: "sarees",
    description: "A jewel-toned saree curated for festive nights, receptions, and jewelry-led styling.",
    details: ["High-contrast styling", "Rich evening tone", "Statement festive finish"],
    colors: ["green", "gold"],
    fabric: "banarasi silk",
    occasion: "reception",
    popularity: 90,
    newestRank: 4,
  },
  {
    slug: "sunset-zari-raga",
    title: "Sunset Zari Raga",
    subtitle: "Wedding Saree",
    price: "INR 17,200",
    priceValue: 17200,
    image: "/catalog/3.jpg",
    gallery: ["/catalog/3.jpg", "/catalog/2.jpg", "/catalog/5.jpg", "/catalog/1.jpg"],
    category: "sarees",
    description: "A warm-toned wedding saree balancing sunset orange with traditional gold detailing.",
    details: ["Warm ceremonial palette", "Bold border treatment", "Wedding-ready finish"],
    colors: ["orange", "gold"],
    fabric: "silk",
    occasion: "wedding",
    popularity: 88,
    newestRank: 3,
  },
  {
    slug: "royal-maroon-brocade",
    title: "Royal Maroon Brocade",
    subtitle: "Bridal Saree",
    price: "INR 26,900",
    priceValue: 26900,
    image: "/catalog/4.jpg",
    gallery: ["/catalog/4.jpg", "/catalog/10.jpg", "/catalog/14.jpg", "/catalog/19.jpg"],
    category: "bridal",
    description: "A deep maroon bridal saree with rich brocade structure and collectible ceremonial weight.",
    details: ["Heavy bridal drape", "Traditional brocade richness", "High ceremonial impact"],
    colors: ["maroon", "gold"],
    fabric: "brocade silk",
    occasion: "bridal",
    popularity: 99,
    newestRank: 2,
  },
  {
    slug: "coral-rasa-edit",
    title: "Coral Rasa Edit",
    subtitle: "Festive Saree",
    price: "INR 11,900",
    priceValue: 11900,
    image: "/catalog/5.jpg",
    gallery: ["/catalog/5.jpg", "/catalog/3.jpg", "/catalog/2.jpg", "/catalog/1.jpg"],
    category: "sarees",
    description: "A coral festive saree for family functions, haldi events, and warm celebratory styling.",
    details: ["Easy festive silhouette", "Lighter weight", "Bright celebratory color story"],
    colors: ["coral", "gold"],
    fabric: "soft silk",
    occasion: "festive",
    popularity: 80,
    newestRank: 1,
  },
  {
    slug: "rose-court-blouse",
    title: "Rose Court Blouse",
    subtitle: "Statement Blouse",
    price: "INR 7,400",
    priceValue: 7400,
    image: "/catalog/7.jpg",
    gallery: ["/catalog/7.jpg", "/catalog/8.jpg", "/catalog/9.jpg", "/catalog/13.jpg"],
    category: "blouses",
    description: "A statement blouse with bridal-adjacent richness designed to elevate festive and ceremonial sarees.",
    details: ["Structured fit", "Jewelry-friendly neckline", "Pairs with pink and gold sarees"],
    colors: ["pink", "gold"],
    fabric: "raw silk",
    occasion: "festive",
    popularity: 82,
    newestRank: 13,
  },
  {
    slug: "midnight-ceremony-kurta",
    title: "Midnight Ceremony Kurta",
    subtitle: "Menswear",
    price: "INR 8,900",
    priceValue: 8900,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80",
    ],
    category: "men",
    description: "A modern kurta set balancing soft tailoring and understated occasion detailing.",
    details: ["Relaxed premium fit", "Natural fabric blend", "Easy festive styling"],
    colors: ["ivory"],
    fabric: "cotton silk",
    occasion: "ceremony",
    popularity: 77,
    newestRank: 14,
  },
  {
    slug: "crescent-arc-bag",
    title: "Crescent Arc Bag",
    subtitle: "Accessory",
    price: "INR 7,400",
    priceValue: 7400,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    ],
    category: "accessories",
    description: "A sculpted accessory silhouette with polished hardware and boutique occasion appeal.",
    details: ["Structured curve profile", "Premium leather finish", "Day-to-evening carry"],
    colors: ["black", "gold"],
    fabric: "leather",
    occasion: "evening",
    popularity: 79,
    newestRank: 15,
  },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "the-return-of-warm-luxury",
    title: "The Return of Warm Luxury in Occasionwear",
    excerpt: "Why maroon, ivory, gold, and textural craftsmanship are shaping premium fashion storefronts again.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    date: "April 15, 2026",
  },
  {
    slug: "how-to-build-a-bridal-trousseau",
    title: "How to Build a Bridal Trousseau with Layers",
    excerpt: "A grounded wardrobe plan for ceremonies, receptions, and intimate family occasions.",
    image: "https://images.unsplash.com/photo-1610030597448-30c39ff566ea?auto=format&fit=crop&w=1200&q=80",
    date: "April 10, 2026",
  },
  {
    slug: "blouse-shapes-that-change-the-drape",
    title: "Blouse Shapes That Change the Entire Drape",
    excerpt: "The fastest way to make one saree feel modern, celebratory, or quietly formal.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    date: "April 3, 2026",
  },
];

export const faqs = [
  {
    question: "Do you offer custom blouse and bridal styling guidance?",
    answer: "Yes. Drape offers styling assistance for bridal, festive, and occasion dressing through scheduled consultations.",
  },
  {
    question: "How long does shipping usually take?",
    answer: "Standard shipping timelines vary by region, but most ready-to-ship orders dispatch within 3 to 5 business days.",
  },
  {
    question: "Can I request fabric and color advice before ordering?",
    answer: "Absolutely. We encourage clients to reach out for drape, tone, and event-specific recommendations before purchase.",
  },
  {
    question: "Do you accept returns on occasionwear?",
    answer: "Eligible returns are accepted within the stated return window for unworn items in original condition, subject to policy terms.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRecentlyViewedProducts(slugs: string[]) {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is Product => Boolean(product));
}
