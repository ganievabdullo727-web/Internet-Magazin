let cart = JSON.parse(localStorage.getItem('lumiere_cart')) || [];

// 🔥 БАЗА ДАННЫХ С ПРАВИЛЬНЫМИ КАРТИНКАМИ ПО КАТЕГОРИЯМ 🔥
const productsData = [
  // ⌚ ЧАСЫ (28 товаров)
  { id: 1, name: "Lumière Monolith Steel", category: "watches", price: 420, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { id: 2, name: "Noir Chronograph Steel", category: "watches", price: 680, img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600" },
  { id: 3, name: "Heritage Gold Automatic", category: "watches", price: 890, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600" },
  { id: 4, name: "Velvet Dial Minimal", category: "watches", price: 310, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600" },
  { id: 5, name: "Aero Precision Black", category: "watches", price: 540, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600" },
  { id: 6, name: "Classic Roman Quartz", category: "watches", price: 390, img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600" },
  { id: 7, name: "Titanium Diver 300m", category: "watches", price: 750, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600" },
  { id: 8, name: "Skeleton Mechanical Edition", category: "watches", price: 1200, img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600" },
  { id: 9, name: "Rose Gold Elegance", category: "watches", price: 620, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600" },
  { id: 10, name: "Midnight Ceramic Chrono", category: "watches", price: 950, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
  { id: 11, name: "Silver Mesh Slim", category: "watches", price: 280, img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600" },
  { id: 12, name: "Vintage Leather Field", category: "watches", price: 410, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600" },
  { id: 13, name: "Aero Pilot Tachymeter", category: "watches", price: 830, img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600" },
  { id: 14, name: "Platinum Diamond Marker", category: "watches", price: 1450, img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600" },
  { id: 15, name: "Urban Stealth Matte", category: "watches", price: 490, img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600" },
  { id: 16, name: "Regatta Marine Master", category: "watches", price: 910, img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600" },
  { id: 17, name: "Grand Tourer Racing", category: "watches", price: 730, img: "https://images.unsplash.com/photo-1547996160-012007887556?w=600" },
  { id: 18, name: "Sapphire Crystal Moonphase", category: "watches", price: 1150, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { id: 19, name: "Nordic Minimalist White", category: "watches", price: 340, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600" },
  { id: 20, name: "Bronze Heritage Limited", category: "watches", price: 870, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600" },
  { id: 21, name: "Dual Time Worldtimer", category: "watches", price: 1050, img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600" },
  { id: 22, name: "Carbon Fiber Sport", category: "watches", price: 640, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600" },
  { id: 23, name: "Art Deco Rectangular", category: "watches", price: 580, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600" },
  { id: 24, name: "Deep Sea Ceramic Diver", category: "watches", price: 820, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600" },
  { id: 25, name: "Royal Gold Executive", category: "watches", price: 1300, img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600" },
  { id: 26, name: "Solar Powered Field", category: "watches", price: 370, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
  { id: 27, name: "Ultra-Thin Dress Watch", category: "watches", price: 460, img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600" },
  { id: 28, name: "Chronometer Official Cert", category: "watches", price: 990, img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600" },

  // 🌸 ПАРФЮМЕРИЯ (27 товаров)
  { id: 29, name: "Amber & Cedar Wood", category: "perfume", price: 190, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 30, name: "Velvet Rose Extract", category: "perfume", price: 240, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600" },
  { id: 31, name: "Citrus & Ocean Mist", category: "perfume", price: 160, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600" },
  { id: 32, name: "Pure Vetiver Niche", category: "perfume", price: 280, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600" },
  { id: 33, name: "Oud Supreme Elixir", category: "perfume", price: 350, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600" },
  { id: 34, name: "Black Tobacco & Vanilla", category: "perfume", price: 260, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600" },
  { id: 35, name: "White Bergamot Water", category: "perfume", price: 180, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600" },
  { id: 36, name: "Saffron Leather Intense", category: "perfume", price: 310, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600" },
  { id: 37, name: "Iris & White Musk", category: "perfume", price: 210, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600" },
  { id: 38, name: "Midnight Patchouli", category: "perfume", price: 230, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 39, name: "Neroli Solar Blossom", category: "perfume", price: 200, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600" },
  { id: 40, name: "Smoked Tonka Bean", category: "perfume", price: 290, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600" },
  { id: 41, name: "Fig & Fig-Leaf Water", category: "perfume", price: 175, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600" },
  { id: 42, name: "Sandalwood Sacred Oil", category: "perfume", price: 330, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 43, name: "Cardamom Noir Spray", category: "perfume", price: 220, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600" },
  { id: 44, name: "Bourbon Vanilla Gold", category: "perfume", price: 250, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600" },
  { id: 45, name: "Wild Lavender Mist", category: "perfume", price: 165, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600" },
  { id: 46, name: "Incense & Myrrh Extract", category: "perfume", price: 340, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600" },
  { id: 47, name: "Peony & Silk Nectar", category: "perfume", price: 215, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600" },
  { id: 48, name: "Dark Plum & Rose", category: "perfume", price: 270, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 49, name: "Sea Salt & Driftwood", category: "perfume", price: 185, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600" },
  { id: 50, name: "Matcha Tea & Lime", category: "perfume", price: 195, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600" },
  { id: 51, name: "Blackcurrant Elixir", category: "perfume", price: 235, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600" },
  { id: 52, name: "Cypress & Juniper Mist", category: "perfume", price: 205, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600" },
  { id: 53, name: "Royal Jasmine Absolue", category: "perfume", price: 360, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600" },
  { id: 54, name: "Cashmere Wood Essence", category: "perfume", price: 295, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 55, name: "Golden Amber Accord", category: "perfume", price: 315, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600" },

  // 🕶️ ОПТИКА И ОЧКИ (26 товаров)
  { id: 56, name: "Matte Black Sunglasses", category: "eyewear", price: 210, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },
  { id: 57, name: "Titanium Lite Frames", category: "eyewear", price: 290, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 58, name: "Tortoise Shell Classic", category: "eyewear", price: 180, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600" },
  { id: 59, name: "Aviator Gold Gradient", category: "eyewear", price: 250, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600" },
  { id: 60, name: "Square Acetate Oversized", category: "eyewear", price: 230, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600" },
  { id: 61, name: "Cat-Eye Crystal Clear", category: "eyewear", price: 200, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 62, name: "Round Retro Rimless", category: "eyewear", price: 270, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },
  { id: 63, name: "Polarized Shield Sport", category: "eyewear", price: 220, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600" },
  { id: 64, name: "Geometric Gold Wire", category: "eyewear", price: 260, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600" },
  { id: 65, name: "Blue Light Optical Glasses", category: "eyewear", price: 170, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600" },
  { id: 66, name: "Wayfarer Onyx Edition", category: "eyewear", price: 240, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },
  { id: 67, name: "Futuristic Flat Top", category: "eyewear", price: 310, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 68, name: "Silver Metal Clubmaster", category: "eyewear", price: 225, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600" },
  { id: 69, name: "Emerald Tinted Lenses", category: "eyewear", price: 280, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600" },
  { id: 70, name: "Hexagon Titanium Bronze", category: "eyewear", price: 300, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600" },
  { id: 71, name: "Minimalist Octagon Wire", category: "eyewear", price: 215, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },
  { id: 72, name: "Dark Havana Horn Frames", category: "eyewear", price: 340, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 73, name: "Rose Gold Browline", category: "eyewear", price: 245, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600" },
  { id: 74, name: "Monochrome Smoke Shield", category: "eyewear", price: 265, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600" },
  { id: 75, name: "Amber Lens Pilot Glasses", category: "eyewear", price: 195, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600" },
  { id: 76, name: "Translucent Grey Square", category: "eyewear", price: 185, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },
  { id: 77, name: "Double Bridge Titanium", category: "eyewear", price: 320, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 78, name: "Champagne Acetate Frames", category: "eyewear", price: 235, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600" },
  { id: 79, name: "Midnight Gradient Cat-Eye", category: "eyewear", price: 255, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600" },
  { id: 80, name: "Ultra-Light Carbon Optic", category: "eyewear", price: 330, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600" },
  { id: 81, name: "Classic Tortoise Reader", category: "eyewear", price: 175, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" },

  // 🎧 АУДИО (28 товаров)
  { id: 82, name: "Studio Sound Wireless", category: "audio", price: 340, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 83, name: "Nomad Crystal Speaker", category: "audio", price: 270, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },
  { id: 84, name: "Pro ANC Headphones Matte", category: "audio", price: 420, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600" },
  { id: 85, name: "TWS Earbuds Aluminum", category: "audio", price: 190, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 86, name: "Desktop Tube Amplifier", category: "audio", price: 650, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600" },
  { id: 87, name: "Vintage Vinyl Turntable", category: "audio", price: 580, img: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600" },
  { id: 88, name: "Hi-Fi Open-Back Monitor", category: "audio", price: 490, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 89, name: "Glass Tube Speaker", category: "audio", price: 390, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },
  { id: 90, name: "Sport Earbuds Sweatproof", category: "audio", price: 150, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 91, name: "Acoustic Home Soundbar", category: "audio", price: 520, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600" },
  { id: 92, name: "Leather ANC Over-Ear", category: "audio", price: 380, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600" },
  { id: 93, name: "Mini Bluetooth Pod", category: "audio", price: 130, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },
  { id: 94, name: "In-Ear Reference Monitors", category: "audio", price: 290, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 95, name: "Bookshelf Wooden Speakers", category: "audio", price: 460, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600" },
  { id: 96, name: "Planar Magnetic Headphones", category: "audio", price: 780, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 97, name: "Smart Voice Assistant Hub", category: "audio", price: 210, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },
  { id: 98, name: "Noise Cancelling Earplugs", category: "audio", price: 95, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 99, name: "Studio Condenser Mic", category: "audio", price: 310, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 100, name: "Multi-Room Speaker Tower", category: "audio", price: 720, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600" },
  { id: 101, name: "Bone Conduction Headset", category: "audio", price: 180, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600" },
  { id: 102, name: "True Wireless Pro Case", category: "audio", price: 240, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 103, name: "High-Res DAC & Amp", category: "audio", price: 360, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600" },
  { id: 104, name: "Subwoofer Bass Engine", category: "audio", price: 480, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },
  { id: 105, name: "Brass Horn Gramophone", category: "audio", price: 890, img: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600" },
  { id: 106, name: "Titanium In-Ear Earbuds", category: "audio", price: 220, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
  { id: 107, name: "DJ Over-Ear Headphones", category: "audio", price: 320, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 108, name: "Waterproof Floating Speaker", category: "audio", price: 160, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600" },

  // 💎 ЮВЕЛИРНЫЕ ИЗДЕЛИЯ (30 товаров)
  { id: 109, name: "Silver Black Onyx Ring", category: "jewelry", price: 320, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { id: 110, name: "White Gold Cuff Bracelet", category: "jewelry", price: 540, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 111, name: "Mother of Pearl Pendant", category: "jewelry", price: 260, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 112, name: "Diamond Edge Solitaire", category: "jewelry", price: 890, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600" },
  { id: 113, name: "Minimal Platinum Band", category: "jewelry", price: 410, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { id: 114, name: "Gold Chain Link Necklace", category: "jewelry", price: 680, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 115, name: "Emerald Cut Ring", category: "jewelry", price: 950, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600" },
  { id: 116, name: "Pearl Drop Earrings", category: "jewelry", price: 310, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 117, name: "Sapphire Halo Pendant", category: "jewelry", price: 740, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 118, name: "Rose Gold Bangle", category: "jewelry", price: 480, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 119, name: "Black Diamond Signet Ring", category: "jewelry", price: 620, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { id: 120, name: "Tanzanite Crystal Choker", category: "jewelry", price: 1100, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 121, name: "Titanium Wire Bracelet", category: "jewelry", price: 290, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 122, name: "Ruby Teardrop Ring", category: "jewelry", price: 820, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600" },
  { id: 123, name: "Geometric Gold Earrings", category: "jewelry", price: 350, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 124, name: "Lapis Lazuli Pendant", category: "jewelry", price: 275, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 125, name: "Tennis Diamond Bracelet", category: "jewelry", price: 1400, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 126, name: "Hammered Gold Ring", category: "jewelry", price: 390, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { id: 127, name: "Tahitian Black Pearl Chain", category: "jewelry", price: 850, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 128, name: "Topaz Crystal Studs", category: "jewelry", price: 240, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 129, name: "Silver Curb Link Chain", category: "jewelry", price: 310, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 130, name: "Aquamarine Solitaire Ring", category: "jewelry", price: 670, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600" },
  { id: 131, name: "Yellow Gold Huggie Earrings", category: "jewelry", price: 280, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 132, name: "Malachite Pendant Gold", category: "jewelry", price: 340, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 133, name: "Double Band Diamond Ring", category: "jewelry", price: 1020, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { id: 134, name: "Braided Leather Gold Clasp", category: "jewelry", price: 210, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 135, name: "Amethyst Drop Necklace", category: "jewelry", price: 430, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { id: 136, name: "Cubic Zirconia Cuff", category: "jewelry", price: 195, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 137, name: "Bespoke Engraved Medallion", category: "jewelry", price: 510, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },

  // 👛 АКСЕССУАРЫ / LIFESTYLE (33 товара)
  { id: 138, name: "Slim Leather Cardholder", category: "lifestyle", price: 110, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 139, name: "Matte Leather Travel Case", category: "lifestyle", price: 230, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 140, name: "Brass Buckle Belt", category: "lifestyle", price: 165, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 141, name: "Onyx Leather Bifold Wallet", category: "lifestyle", price: 190, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 142, name: "Italian Leather Briefcase", category: "lifestyle", price: 620, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 143, name: "Silver Metal Money Clip", category: "lifestyle", price: 75, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 144, name: "Suede Travel Watch Roll", category: "lifestyle", price: 140, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 145, name: "Cashmere Scarf Charcoal", category: "lifestyle", price: 210, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 146, name: "Titanium Fountain Pen", category: "lifestyle", price: 180, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600" },
  { id: 147, name: "Leather Passport Cover", category: "lifestyle", price: 95, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 148, name: "Canvas & Leather Weekender", category: "lifestyle", price: 450, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 149, name: "Black Cufflinks Pair", category: "lifestyle", price: 120, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 150, name: "Minimalist Leather Backpack", category: "lifestyle", price: 380, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 151, name: "Brass Key Ring Carabiner", category: "lifestyle", price: 55, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 152, name: "Merino Wool Beanie", category: "lifestyle", price: 80, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 153, name: "Grained Leather Folio", category: "lifestyle", price: 260, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 154, name: "Leather Desk Mat Black", category: "lifestyle", price: 115, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 155, name: "Alcantara Glasses Case", category: "lifestyle", price: 70, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 156, name: "Silver Tie Bar Clip", category: "lifestyle", price: 60, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 157, name: "Handcrafted Cigar Case", category: "lifestyle", price: 175, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 158, name: "Cashmere Driving Gloves", category: "lifestyle", price: 150, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 159, name: "Travel Shoe Care Kit", category: "lifestyle", price: 105, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 160, name: "Leather Laptop Sleeve 15\"", category: "lifestyle", price: 160, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 161, name: "Gold Plated Bookmark", category: "lifestyle", price: 45, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600" },
  { id: 162, name: "Compact Shoe Horn Steel", category: "lifestyle", price: 50, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 163, name: "Suede Dopp Kit Navy", category: "lifestyle", price: 135, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 164, name: "Cashmere Blanket Throw", category: "lifestyle", price: 320, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 165, name: "Monogrammed Luggage Tag", category: "lifestyle", price: 55, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 166, name: "Executive Leather Notepad", category: "lifestyle", price: 125, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600" },
  { id: 167, name: "Minimalist Leather Card Case", category: "lifestyle", price: 90, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600" },
  { id: 168, name: "Travel Duffle Bag", category: "lifestyle", price: 410, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 169, name: "Classic Wool Scarf", category: "lifestyle", price: 175, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600" },
  { id: 170, name: "Luxury Pen Box", category: "lifestyle", price: 140, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600" }
];

const placeholderImg = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600";

// Уведомления Toast
function showToast(message, icon = '✨') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.innerText = cart.length;
  }
}

// 🔥 ДОБАВЛЕНИЕ В КОРЗИНУ С КАРТИНКОЙ 🔥
function addToCart(name, price, img) {
  cart.push({ name, price, img });
  localStorage.setItem('lumiere_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`"${name}" добавлен в корзину`, '🛒');
}

function removeFromCart(index) {
  const name = cart[index].name;
  cart.splice(index, 1);
  localStorage.setItem('lumiere_cart', JSON.stringify(cart));
  renderCart();
  updateCartBadge();
  showToast(`"${name}" удален из корзины`, '🗑️');
}

// 🔥 ОТОБРАЖЕНИЕ КОРЗИНЫ (ИСПРАВЛЕНО ДЛЯ ОТОБРАЖЕНИЯ КАРТИНОК) 🔥
function renderCart() {
  const tbody = document.getElementById('cart-items-body');
  const totalPriceEl = document.getElementById('cart-total-price');

  if (!tbody) return;

  tbody.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color: #64748b; padding: 40px 0;">Ваша корзина пока пуста</td></tr>';
  } else {
    cart.forEach((item, index) => {
      total += item.price;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="display: flex; align-items: center; gap: 15px; font-weight: 500;">
          <img src="${item.img || item.image || placeholderImg}" onerror="this.src='${placeholderImg}'" alt="${item.name}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px;">
          <span>${item.name}</span>
        </td>
        <td style="color: #38bdf8;">$ ${item.price}</td>
        <td>
          <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#f87171; cursor:pointer; font-size:0.85rem;">
            Удалить
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  if (totalPriceEl) {
    totalPriceEl.innerText = `$ ${total}`;
  }
}

function submitOrder(e) {
  if (cart.length === 0) {
    showToast('Ваша корзина пуста!', '⚠️');
    return;
  }
  cart = [];
  localStorage.removeItem('lumiere_cart');
  renderCart();
  updateCartBadge();
  showToast('Заказ успешно оформлен! Консьерж свяжется с вами.', '🎉');
}

function bookService(serviceName) {
  showToast(`Заявка на "${serviceName}" принята! Консьерж свяжется с вами.`, '👑');
}

const categoryMap = {
  watches: 'Часы',
  perfume: 'Парфюмерия',
  eyewear: 'Оптика',
  audio: 'Аудио',
  jewelry: 'Ювелирные изделия',
  lifestyle: 'Аксессуары'
};

// 🔥 ИСПРАВЛЕННЫЙ РЕНДЕР КОРЗИНЫ (АККУРАТНЫЙ СТОЛБИК / СТРОЧКА) 🔥
function renderCart() {
  const tbody = document.getElementById('cart-items-body');
  const totalPriceEl = document.getElementById('cart-total-price');

  if (!tbody) return;

  tbody.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color: #64748b; padding: 40px 0;">Ваша корзина пока пуста</td></tr>';
  } else {
    cart.forEach((item, index) => {
      total += item.price;
      const tr = document.createElement('tr');
      
      // Делаем красивую строку таблицы: картинка и название слева, цена в центре, удаление справа
      tr.innerHTML = `
        <td style="padding: 12px 8px; vertical-align: middle;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${item.img || item.image || placeholderImg}" onerror="this.src='${placeholderImg}'" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">
            <span style="font-weight: 500; color: #f8fafc; font-size: 0.95rem; line-height: 1.3;">${item.name}</span>
          </div>
        </td>
        <td style="padding: 12px 8px; vertical-align: middle; color: #38bdf8; font-weight: 600; white-space: nowrap;">
          $ ${item.price}
        </td>
        <td style="padding: 12px 8px; vertical-align: middle; text-align: right;">
          <button onclick="removeFromCart(${index})" style="background: rgba(248, 113, 113, 0.1); border: 1px solid rgba(248, 113, 113, 0.2); color: #f87171; cursor: pointer; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; transition: all 0.2s;">
            Удалить
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  if (totalPriceEl) {
    totalPriceEl.innerText = `$ ${total}`;
  }
}

function filterProducts(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
  renderCatalog(category);
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const elementVisible = 50;

      if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCart();
  renderCatalog();
  initScrollReveal();
});