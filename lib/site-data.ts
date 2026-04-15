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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type TrustBadge = {
  title: string;
  text: string;
};

export type FabricGuide = {
  fabric: string;
  title: string;
  description: string;
  care: string[];
};

export type PolicyItem = {
  title: string;
  text: string;
};

export const brandStory = {
  eyebrow: "The House",
  title: "Drape is built around occasionwear that feels collectible, not disposable.",
  intro:
    "The house focuses on sarees, bridal silhouettes, and finishing pieces shaped by Indian textile traditions and a quieter, premium visual language.",
  pillars: [
    "Warm maroon, ivory, and muted gold create a recognizable Drape signature across every touchpoint.",
    "Each product story is written around fabric, occasion, and styling practicality so clients can shop with confidence.",
    "Support pages, concierge guidance, and transparent policies are treated as part of the luxury experience.",
  ],
};

export const trustBadges: TrustBadge[] = [
  {
    title: "Authentic Fabric Sourcing",
    text: "Silk, tissue, brocade, and occasion blends are selected for drape, tone, and ceremonial finish.",
  },
  {
    title: "Stylist-Led Guidance",
    text: "Blouse, jewelry, and event recommendations are available before purchase for bridal and occasion orders.",
  },
  {
    title: "Worldwide Delivery",
    text: "Tracked domestic and international dispatch support is available for time-sensitive celebrations.",
  },
  {
    title: "Trusted Order Care",
    text: "Returns, exchanges, and support queries follow a clear documented review process.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The saree arrived exactly as expected, with a richer finish in person. Drape felt like a boutique purchase from consultation to delivery.",
    name: "Rhea Menon",
    role: "Bride, Kochi",
  },
  {
    quote:
      "I reached out for blouse advice before ordering and got styling suggestions that made the entire look feel considered.",
    name: "Nikita Shah",
    role: "Reception Client, Mumbai",
  },
  {
    quote:
      "The visuals drew me in, but the care notes, policy clarity, and product detail page are what made me comfortable ordering online.",
    name: "Aarav Khanna",
    role: "Gift Buyer, Bengaluru",
  },
];

export const socialProof = [
  { value: "2,400+", label: "Private clients styled" },
  { value: "4.8/5", label: "Average verified rating" },
  { value: "48 hrs", label: "Concierge response window" },
  { value: "18", label: "Cities delivered this season" },
];

export const fabricGuides: FabricGuide[] = [
  {
    fabric: "silk",
    title: "Silk Occasion Drape",
    description:
      "Traditional silk with a fluid ceremonial fall, luminous body, and enough structure to hold pleats cleanly through long events.",
    care: [
      "Dry clean only after wear.",
      "Store folded in breathable muslin.",
      "Steam lightly from the reverse side.",
    ],
  },
  {
    fabric: "banarasi silk",
    title: "Banarasi Silk Brocade",
    description:
      "Heavier woven silk with zari-rich depth, ideal for weddings, receptions, and heirloom styling moments.",
    care: [
      "Avoid direct perfume on zari areas.",
      "Refold along different lines after each wear.",
      "Use padded storage for long-term preservation.",
    ],
  },
  {
    fabric: "soft silk",
    title: "Soft Silk Festive Weave",
    description:
      "A lighter silk finish for festive dressing, chosen for comfort, movement, and all-evening wearability.",
    care: [
      "Spot clean minor marks immediately.",
      "Hang briefly before folding after events.",
      "Keep away from rough jewelry edges.",
    ],
  },
  {
    fabric: "silk tissue",
    title: "Silk Tissue Glow",
    description:
      "A soft shimmer fabric with a delicate surface designed for receptions and jewelry-forward styling.",
    care: [
      "Handle with dry, clean hands.",
      "Avoid heavy pinning through the body.",
      "Store flat between soft layers.",
    ],
  },
  {
    fabric: "silk blend",
    title: "Ceremonial Silk Blend",
    description:
      "Balanced for comfort and finish, this blend offers a softer hand-feel while retaining occasionwear polish.",
    care: [
      "Professional dry clean recommended.",
      "Use low steam before draping.",
      "Do not store in plastic covers.",
    ],
  },
  {
    fabric: "brocade silk",
    title: "Brocade Silk Bridal Finish",
    description:
      "Dense ceremonial silk with a structured body, designed for bridal portraits, formal rituals, and collectible wardrobe pieces.",
    care: [
      "Fold with tissue along zari-heavy panels.",
      "Keep away from prolonged sunlight.",
      "Air the piece after each use before storing.",
    ],
  },
  {
    fabric: "raw silk",
    title: "Raw Silk Structure",
    description:
      "A firmer silk hand-feel that holds blouse shape beautifully and pairs well with statement jewelry.",
    care: [
      "Dry clean only.",
      "Use padded hangers for blouses.",
      "Protect the neckline from cosmetics and perfume.",
    ],
  },
  {
    fabric: "cotton silk",
    title: "Cotton Silk Ease",
    description:
      "Soft tailoring fabric with breathable comfort and a refined festive finish suited to long ceremonies.",
    care: [
      "Steam lightly before wear.",
      "Store in a breathable cover.",
      "Use gentle professional cleaning only.",
    ],
  },
  {
    fabric: "leather",
    title: "Polished Leather Finish",
    description:
      "Structured accessory leather with a smooth premium finish selected for event dressing and repeat wear.",
    care: [
      "Wipe with a soft dry cloth after use.",
      "Store stuffed to maintain shape.",
      "Avoid moisture and abrasive surfaces.",
    ],
  },
];

export const shippingPolicy: PolicyItem[] = [
  {
    title: "Ready-to-Ship Pieces",
    text: "Most in-stock sarees, blouses, and accessories dispatch within 3 to 5 business days after order confirmation.",
  },
  {
    title: "Custom Finishing",
    text: "Blouse tailoring, fall edging, pico finishing, and bridal adjustments add 4 to 7 business days depending on complexity.",
  },
  {
    title: "Priority Event Support",
    text: "If your order is for a wedding or date-specific event, our team can advise on the fastest serviceable dispatch option before purchase.",
  },
  {
    title: "International Delivery",
    text: "International orders receive timeline estimates at confirmation, with duties or import fees remaining the responsibility of the recipient unless stated otherwise.",
  },
];

export const returnsPolicy: PolicyItem[] = [
  {
    title: "Return Window",
    text: "Eligible ready-to-ship items may be requested for return within 48 hours of delivery and must be shipped back promptly after approval.",
  },
  {
    title: "Condition Review",
    text: "Items must be unworn, unaltered, and returned with original tags, packaging, and no fragrance, makeup, or pin marks.",
  },
  {
    title: "Non-Returnable Orders",
    text: "Custom blouse tailoring, bridal customization, altered sarees, intimate accessories, and final-sale items are not eligible for return.",
  },
  {
    title: "Exchange Support",
    text: "Where stock allows, approved returns can be converted into an exchange or store credit after quality review.",
  },
];

export const faqHighlights = [
  {
    question: "Do you offer custom blouse and bridal styling guidance?",
    answer:
      "Yes. Drape offers pre-purchase support for blouse pairings, jewelry balance, event appropriateness, and bridal wardrobe planning through private consultations.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Most ready-to-ship orders dispatch within 3 to 5 business days. Custom blouse work, fall finishing, or bridal preparation may extend the timeline.",
  },
  {
    question: "Can I request fabric and color advice before ordering?",
    answer:
      "Absolutely. Clients often reach out for skin-tone guidance, event-specific recommendations, and help choosing between silk, tissue, and brocade finishes.",
  },
  {
    question: "Do you accept returns on occasionwear?",
    answer:
      "Eligible ready-to-ship pieces may be reviewed for return when they are unworn and reported within the stated return window. Custom and altered items are excluded.",
  },
  {
    question: "Will the blouse shown in the image be included?",
    answer:
      "Product pages clearly indicate whether a blouse piece, styled blouse suggestion, or saree-only option applies, and our team can confirm before checkout.",
  },
];

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

export const faqs = faqHighlights;

export function getFabricGuide(fabric: string) {
  return fabricGuides.find((guide) => guide.fabric === fabric.toLowerCase());
}

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
