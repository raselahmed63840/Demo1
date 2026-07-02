export type Category = { id: number; name: string; slug: string; image: string; icon: string; description: string };
export type Product = {
  id: number; name: string; slug: string; category: string; categorySlug: string; price: number; oldPrice?: number;
  image: string; gallery?: string[]; rating: number; reviews: number; stock: number; badge?: string; description: string;
  colors?: string[]; sizes?: string[]; vendor?: string;
};
export type Blog = { id: number; title: string; slug: string; image: string; excerpt: string; date: string; category: string };

const asset = (path: string) => `/assets/uploads/${path}`;

export const store = {
  name: "Super Ecommerce",
  phone: "+880 1700-000000",
  email: "support@superecommerce.demo",
  address: "Dhaka, Bangladesh",
  logo: asset("settings/1759498350-logo.webp"),
  heroSlides: [
    { image: asset("banner/17647810521457239_Regal Topslider Web (3).webp"), eyebrow: "Smart home collection", title: "Technology for everyday living", text: "Explore premium electronics, appliances and lifestyle essentials.", cta: "Shop electronics", href: "/category/electronics" },
    { image: asset("banner/17647804324.webp"), eyebrow: "Limited time offer", title: "Save more on selected favourites", text: "Fresh deals across fashion, gadgets and home essentials.", cta: "View offers", href: "/offers" },
  ],
};

export const categories: Category[] = [
  { id: 19, name: "Electronics", slug: "electronics", image: asset("category/1764782095-software.webp"), icon: "⌁", description: "Phones, computers, accessories and smart gadgets." },
  { id: 20, name: "Fashion", slug: "fashion", image: asset("category/1764782518-trendy.webp"), icon: "✦", description: "Contemporary clothing, scarves and everyday style." },
  { id: 21, name: "Beauty & Health", slug: "beauty-health", image: asset("category/1764783394-health.webp"), icon: "♡", description: "Personal care, skincare and wellness picks." },
  { id: 23, name: "Grocery", slug: "grocery", image: asset("category/1764783064-gro.webp"), icon: "◌", description: "Kitchen staples and daily essentials." },
  { id: 26, name: "Home & Living", slug: "home-living", image: asset("category/1764783272-applince.webp"), icon: "⌂", description: "Home comfort, appliances and useful accessories." },
  { id: 36, name: "Digital Products", slug: "digital-products", image: asset("category/1764785710-icon-2502208.webp"), icon: "◫", description: "Memberships, software and instant access products." },
  { id: 31, name: "Books & Learning", slug: "books-learning", image: asset("category/1764782610-books.webp"), icon: "▤", description: "Books, resources and learning essentials." },
  { id: 29, name: "Kids & Baby", slug: "kids-baby", image: asset("category/1764782777-kids.webp"), icon: "☀", description: "Curated picks for little ones and families." },
];

export const products: Product[] = [
  { id: 180, name: "Ugreen Bluetooth Car Charger with FM Modulator", slug: "ugreen-car-charger-with-fm-modulator", category: "Electronics", categorySlug: "electronics", price: 1300, oldPrice: 1500, image: asset("product/1759501857-1740310249-80910-ugreen-ge.webp"), rating: 4.8, reviews: 32, stock: 24, badge: "Hot deal", vendor: "Tech Galaxy", colors: ["Black"], description: "Charge multiple devices while enjoying stable Bluetooth audio and FM modulation on the road." },
  { id: 181, name: "JR-CL06 154W Multi-Port Car Charger", slug: "jr-cl06-154w-multi-port-car-charger", category: "Electronics", categorySlug: "electronics", price: 2600, oldPrice: 2900, image: asset("product/1762866514-JOYROOM-JR-CL06-154W-Multi-Port-Car-Cigarette-Lighter-Car-Charger.jpg"), rating: 4.7, reviews: 18, stock: 15, badge: "Top rated", vendor: "Tech Galaxy", colors: ["Black"], description: "High-output car charging adapter with three sockets and six practical USB charging ports." },
  { id: 183, name: "Premium Chiffon Hijab", slug: "premium-chiffon-hijab", category: "Fashion", categorySlug: "fashion", price: 1200, oldPrice: 1900, image: asset("product/1762866138-premium-chiffon-hijab-heather-960585.webp"), gallery: [asset("product/1762866138-premium-chiffon-hijab-heather-960585.webp"), asset("product/1762866138-premium-chiffon-hijab-taupe-841181.webp")], rating: 4.9, reviews: 67, stock: 54, badge: "-37%", vendor: "Style Story", colors: ["Heather", "Taupe"], description: "A lightweight premium chiffon hijab with an elegant fall, designed for comfortable all-day styling." },
  { id: 184, name: "Jersey Stretch Hijab", slug: "jersey-stretch-hijab", category: "Fashion", categorySlug: "fashion", price: 600, oldPrice: 1200, image: asset("product/1762865984-images.jfif"), rating: 4.6, reviews: 29, stock: 31, badge: "Sale", vendor: "Style Story", colors: ["Beige", "Black", "Rose"], description: "Soft jersey fabric with a flexible stretch finish for effortless daily wear." },
  { id: 185, name: "Fresh Green Vegetables Basket", slug: "fresh-green-vegetables-basket", category: "Grocery", categorySlug: "grocery", price: 800, oldPrice: 1200, image: asset("product/1759503396-1757779801-istockphoto-121111860-612x612.webp"), rating: 4.6, reviews: 12, stock: 40, badge: "Fresh", vendor: "Daily Mart", description: "A handpicked basket of fresh seasonal vegetables delivered for your everyday kitchen." },
  { id: 186, name: "Pure Mustard Oil (1L)", slug: "pure-mustard-oil-1l", category: "Grocery", categorySlug: "grocery", price: 1200, oldPrice: 1900, image: asset("product/1759503464-1757779231-mustard-oil-100percent-organic-wooden-cold-pressed-and-double-filtered-1000ml-oil-in-reusable-glass-bottle-kachi-ghani-satopradhan-1-32290742599906.webp"), rating: 4.7, reviews: 25, stock: 80, badge: "Organic", vendor: "Daily Mart", description: "Cold-pressed mustard oil in a convenient one litre bottle for rich everyday flavour." },
  { id: 196, name: "Radiance Glow Face Serum", slug: "radiance-glow-face-serum", category: "Beauty & Health", categorySlug: "beauty-health", price: 1300, oldPrice: 1600, image: asset("product/1759503555-1757778250-good_vibes_rosehip_radiant_glow_face_ser-good_vibes-0db57-405414.webp"), rating: 4.8, reviews: 43, stock: 34, badge: "Popular", vendor: "Glow Care", description: "A lightweight daily face serum formulated to give a healthy, radiant glow." },
  { id: 197, name: "Herbal Green Tea Face Wash", slug: "herbal-green-tea-face-wash", category: "Beauty & Health", categorySlug: "beauty-health", price: 1200, oldPrice: 2100, image: asset("product/1762867027-good_vibes_rosehip_radiant_glow_face_ser-good_vibes-41fba-405414.jpg"), rating: 4.5, reviews: 21, stock: 42, badge: "New", vendor: "Glow Care", description: "Refreshing herbal cleanser made for a clean, comfortable daily skincare routine." },
  { id: 198, name: "Premium Cotton Full Sleeve Casual Shirt", slug: "premium-cotton-full-sleeve-casual-shirt", category: "Fashion", categorySlug: "fashion", price: 1300, oldPrice: 1900, image: asset("product/1763569354-relax-tea-(linkedin-post).jpg"), rating: 4.6, reviews: 31, stock: 38, badge: "-32%", vendor: "Style Story", colors: ["Sky", "White"], sizes: ["M", "L", "XL"], description: "Comfortable cotton casual shirt with a smart silhouette for daily use and relaxed occasions." },
  { id: 201, name: "Cotton Narrow Fit Pajama", slug: "cotton-narrow-fit-pajama", category: "Fashion", categorySlug: "fashion", price: 1300, oldPrice: 1900, image: asset("product/1762866283-71e3c97a534922babe9192f4245deeb1.png_720x720q80.png"), rating: 4.4, reviews: 16, stock: 28, vendor: "Style Story", sizes: ["M", "L", "XL"], description: "Comfortable narrow fit cotton pajama in a clean white finish." },
  { id: 208, name: "CanvaProOwner — 500 Member Add", slug: "canvaproowner-500-member-add", category: "Digital Products", categorySlug: "digital-products", price: 1300, oldPrice: 1500, image: asset("product/1764788259-canva_31d.jpg2_.jpg"), rating: 4.9, reviews: 44, stock: 999, badge: "Digital", vendor: "Digital Studio", description: "Digital membership product. Fulfilment and access instructions are shared after a completed order." },
  { id: 209, name: "Premium Membership & Agency Business", slug: "premium-membership-agency-business", category: "Digital Products", categorySlug: "digital-products", price: 3, oldPrice: 1200, image: asset("product/1764788491-premium-mebership.jpg"), rating: 4.3, reviews: 9, stock: 999, badge: "Digital", vendor: "Digital Studio", description: "A digital package for membership and agency-business workflows." },
  { id: 217, name: "TX3 4K Android TV Box", slug: "tx3-4k-android-tv-box", category: "Electronics", categorySlug: "electronics", price: 2200, oldPrice: 2500, image: asset("product/1766668528-tvb.png"), rating: 4.5, reviews: 26, stock: 23, badge: "Save 12%", vendor: "Tech Galaxy", description: "Android TV box for 4K entertainment and your favourite streaming apps." },
  { id: 222, name: "3 in 1 Travel Pillow Set", slug: "3-in-1-travel-pillow-set", category: "Home & Living", categorySlug: "home-living", price: 900, oldPrice: 1200, image: asset("product/1769416997-0653647_3-in-1-travel-pillow-set_400.webp"), rating: 4.8, reviews: 38, stock: 19, badge: "Travel pick", vendor: "Comfort Corner", description: "Compact 3-in-1 travel pillow set for a more comfortable journey." },
  { id: 223, name: "HTC AT-538 Hair & Beard Trimmer", slug: "htc-at-538-hair-beard-trimmer", category: "Beauty & Health", categorySlug: "beauty-health", price: 600, oldPrice: 900, image: asset("product/1769437447-1797da4d9a7a36afc04ec60ec10f8d0d.jpg_960x960q80.jpg_.webp"), rating: 4.6, reviews: 51, stock: 36, badge: "Best seller", vendor: "Glow Care", description: "Practical grooming trimmer for hair and beard maintenance at home." },
  { id: 225, name: "Dual Core Desktop Computer Full Setup", slug: "dual-core-desktop-computer-full-setup", category: "Electronics", categorySlug: "electronics", price: 17000, oldPrice: 21000, image: asset("product/1769440037-63902183a6b2048cf1f67d74a46db75f.png"), rating: 4.7, reviews: 15, stock: 7, badge: "Bundle", vendor: "Tech Galaxy", description: "Customisable budget desktop setup for office tasks, study and entry-level work." },
  { id: 227, name: "Paragon Brown Egg — Bundle of 3", slug: "paragon-brown-egg-bundle", category: "Grocery", categorySlug: "grocery", price: 2200, oldPrice: 2500, image: asset("product/1770100975-screenshot_1.png"), rating: 4.5, reviews: 11, stock: 18, vendor: "Daily Mart", description: "Bundle of three dozen Paragon brown eggs for the family kitchen." },
];

export const brands = [
  { name: "RFL", image: asset("brand/1763623615-rfl-logo-png_seeklogo-250040.webp") },
  { name: "LG", image: asset("brand/1765817784-lg_symbol.svg.webp") },
  { name: "Apple", image: asset("brand/1765817842-apple_logo_grey.svg.webp") },
  { name: "Symphony", image: asset("brand/1765817905-symphony_logo.webp") },
  { name: "Gigabyte", image: asset("brand/1765818173-gigabyte-logo.webp") },
  { name: "Walton", image: asset("brand/1765818240-walton_group_logo.webp") },
];

export const blogs: Blog[] = [
  { id: 1, title: "How to choose a practical gadget for everyday life", slug: "choose-practical-gadget", image: asset("blogs/1765860174.webp"), excerpt: "Simple criteria that make shopping for useful electronics easier.", date: "March 18, 2026", category: "Buying guide" },
  { id: 2, title: "A smarter way to build your everyday wardrobe", slug: "build-everyday-wardrobe", image: asset("blogs/1765860339.jpg"), excerpt: "Small choices that bring versatility and comfort to your closet.", date: "March 11, 2026", category: "Style" },
  { id: 3, title: "Fresh pantry habits for a simpler week", slug: "fresh-pantry-habits", image: asset("blogs/1770882457.jpg"), excerpt: "Plan the grocery basics your household uses most often.", date: "February 27, 2026", category: "Lifestyle" },
];

export function getProduct(slug: string) { return products.find((item) => item.slug === slug); }
export function getCategory(slug: string) { return categories.find((item) => item.slug === slug); }
export function money(value: number) { return new Intl.NumberFormat("en-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(value); }
