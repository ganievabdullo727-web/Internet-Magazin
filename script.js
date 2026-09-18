/* ==========================================================================
   LUMIÈRE LUXURY ECOSYSTEM - MAIN JAVASCRIPT LOGIC
   ========================================================================== */

// Инициализация корзины из локального хранилища
let cart = JSON.parse(localStorage.getItem('lumiere_cart')) || [];

// Состояние валюты и промокода
let currentCurrency = localStorage.getItem('lumiere_currency') || 'USD';
let currencyRates = {
  USD: 1,
  EUR: 0.92,
  RUB: 92.50
};
let currencySymbols = {
  USD: '$',
  EUR: '€',
  RUB: '₽'
};

let appliedDiscount = 0; // В процентах (например, 10 = 10%)

// 🔥 ПОЛНАЯ БАЗА ДАННЫХ ТОВАРОВ LUMIÈRE 🔥
const productsData = [
  // ⌚ ЧАСЫ (watches)
  { id: 1, name: "Lumière Monolith Steel", category: "watches", price: 420, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", desc: "Швейцарский механизм, сапфировое стекло, сталь 316L." },
  { id: 2, name: "Noir Chronograph Steel", category: "watches", price: 680, img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600", desc: "Черный хронограф премиум-класса с водозащитой 100m." },
  { id: 3, name: "Heritage Gold Automatic", category: "watches", price: 890, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600", desc: "Корпус с напылением 18-каратного золота и открытым балансом." },
  { id: 4, name: "Velvet Dial Minimal", category: "watches", price: 310, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600", desc: "Бархатистый циферблат с тончайшими стрелками." },
  { id: 5, name: "Aero Precision Black", category: "watches", price: 540, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600", desc: "Авиационный дизайн с высокоточным кварцевым калибром." },
  { id: 6, name: "Classic Roman Quartz", category: "watches", price: 390, img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600", desc: "Римские цифры и классический кожаный ремешок." },
  { id: 7, name: "Titanium Diver 300m", category: "watches", price: 750, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600", desc: "Титановый корпус для глубоководных погружений." },
  { id: 8, name: "Skeleton Mechanical Edition", category: "watches", price: 1200, img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600", desc: "Полностью прозрачный скелетон с автоподзаводом." },
  { id: 9, name: "Rose Gold Elegance", category: "watches", price: 620, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600", desc: "Розовое золото и безель с инкрустацией." },
  { id: 10, name: "Midnight Ceramic Chrono", category: "watches", price: 950, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600", desc: "Устойчивая к царапинам высокотехнологичная керамика." },
  { id: 11, name: "Silver Mesh Slim", category: "watches", price: 280, img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600", desc: "Ультратонкий корпус с плетеным миланским браслетом." },
  { id: 12, name: "Vintage Leather Field", category: "watches", price: 410, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600", desc: "Винтажный стиль с патинированной рельефной кожей." },
  { id: 13, name: "Aero Pilot Tachymeter", category: "watches", price: 830, img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600", desc: "Тахиметрическая шкала и пилотская разметка." },
  { id: 14, name: "Platinum Diamond Marker", category: "watches", price: 1450, img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600", desc: "Бриллиантовые метки часов и платиновое напыление." },
  { id: 15, name: "Urban Stealth Matte", category: "watches", price: 490, img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600", desc: "Матовый черный монохромный дизайн." },
  { id: 16, name: "Regatta Marine Master", category: "watches", price: 910, img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600", desc: "Яхтенный таймер и синий циферблат с эффектом солнечных лучей." },
  { id: 17, name: "Grand Tourer Racing", category: "watches", price: 730, img: "https://images.unsplash.com/photo-1547996160-012007887556?w=600", desc: "Гоночный дух и перфорированный ремешок из кожи ралли." },
  { id: 18, name: "Sapphire Crystal Moonphase", category: "watches", price: 1150, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", desc: "Усложнение индикатора фаз Луны." },
  { id: 19, name: "Nordic Minimalist White", category: "watches", price: 340, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600", desc: "Скандинавская эстетика чистого белого циферблата." },
  { id: 20, name: "Bronze Heritage Limited", category: "watches", price: 870, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600", desc: "Корпус из настоящей патинирующейся бронзы." },
  { id: 21, name: "Dual Time Worldtimer", category: "watches", price: 1050, img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600", desc: "Отображение времени в 24 часовых поясах мира." },
  { id: 22, name: "Carbon Fiber Sport", category: "watches", price: 640, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600", desc: "Прочный и легкий циферблат из карбонового волокна." },
  { id: 23, name: "Art Deco Rectangular", category: "watches", price: 580, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600", desc: "Прямоугольный корпус в геометрии Ар-деко." },
  { id: 24, name: "Deep Sea Ceramic Diver", category: "watches", price: 820, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600", desc: "Гелиевый клапан и керамический вращающийся безель." },
  { id: 25, name: "Royal Gold Executive", category: "watches", price: 1300, img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600", desc: "Премиальные часы для деловых встреч высшего уровня." },
  { id: 26, name: "Solar Powered Field", category: "watches", price: 370, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600", desc: "Зарядка от любого источника света." },
  { id: 27, name: "Ultra-Thin Dress Watch", category: "watches", price: 460, img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600", desc: "Толщина корпуса всего 5.2 мм." },
  { id: 28, name: "Chronometer Official Cert", category: "watches", price: 990, img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600", desc: "Сертифицированный хронометр COSC." },

  // 💎 ЮВЕЛИРНЫЕ ИЗДЕЛИЯ (jewelery)
  { id: 88, name: "Diamant Éternel Ring 18K", category: "jewelery", price: 1450, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600", desc: "Кольцо из белого золота 18K с бриллиантом огранки «принцесса»." },
  { id: 89, name: "Royal Sapphire Pendant", category: "jewelery", price: 1280, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600", desc: "Кулон с натуральным цейлонским сапфиром и россыпью бриллиантов." },
  { id: 90, name: "Elegance Pearl Bracelet", category: "jewelery", price: 850, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600", desc: "Браслет из морского жемчуга Акойя с золотым замком." },
  { id: 91, name: "Emerald Cut Gold Earrings", category: "jewelery", price: 1600, img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600", desc: "Серьги из желтого золота с гидротермальными изумрудами." },
  { id: 92, name: "Solitaire Diamond Necklace", category: "jewelery", price: 2100, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600", desc: "Колье с одиночным бриллиантом 1.0 карат чистейшей воды." },
  { id: 93, name: "Rose Gold Crown Ring", category: "jewelery", price: 790, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600", desc: "Изящное кольцо в форме короны из розового золота." },
  { id: 94, name: "Ruby Halo Drop Earrings", category: "jewelery", price: 1350, img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600", desc: "Серьги-капли с бирманскими рубинами и бриллиантовым ореолом." },
  { id: 95, name: "Platinum Tennis Bracelet", category: "jewelery", price: 2900, img: "https://images.unsplash.com/photo-1611591475140-168a2e1d7014?w=600", desc: "Классический теннисный браслет из платины с бриллиантовой дорожкой." },
  { id: 96, name: "Ocean Topaz Gold Brooch", category: "jewelery", price: 670, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600", desc: "Ювелирная брошь с голубым топазом в форме капли." },
  { id: 97, name: "Minimalist Gold Cuff", category: "jewelery", price: 540, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600", desc: "Жесткий лаконичный браслет-кафф из полированного золота." },
  { id: 98, name: "Black Diamond Signet Ring", category: "jewelery", price: 1100, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600", desc: "Мужская печатка из черненного золота с черным бриллиантом." },
  { id: 99, name: "Chandelier Diamond Earrings", category: "jewelery", price: 2400, img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600", desc: "Вечерние многоярусные серьги-люстры с бриллиантами." },

  // 🌸 ПАРФЮМЕРИЯ (perfume)
  { id: 29, name: "Amber & Cedar Wood", category: "perfume", price: 190, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Теплый древесно-амбровый шлейф с нотами кедра." },
  { id: 30, name: "Velvet Rose Extract", category: "perfume", price: 240, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600", desc: "Экстракт дамасской розы с аккордами пачули." },
  { id: 31, name: "Citrus & Ocean Mist", category: "perfume", price: 160, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600", desc: "Свежесть сицилийского лимона и морского бриза." },
  { id: 32, name: "Pure Vetiver Niche", category: "perfume", price: 280, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600", desc: "Нишевый гаитянский ветивер с терпким оттенком." },
  { id: 33, name: "Oud Supreme Elixir", category: "perfume", price: 350, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600", desc: "Драгоценный концентрированный эликсир удового дерева." },
  { id: 34, name: "Black Tobacco & Vanilla", category: "perfume", price: 260, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600", desc: "Пряный табачный лист и пряная мадагаскарская ваниль." },
  { id: 35, name: "White Bergamot Water", category: "perfume", price: 180, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600", desc: "Искрящийся калабрийский бергамот." },
  { id: 36, name: "Saffron Leather Intense", category: "perfume", price: 310, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600", desc: "Восточный шафран и розовая замша." },
  { id: 37, name: "Iris & White Musk", category: "perfume", price: 210, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600", desc: "Пудровый ирис и мягкий белый мускус." },
  { id: 38, name: "Midnight Patchouli", category: "perfume", price: 230, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Глубокие ночные пачули с дымным подтоном." },
  { id: 39, name: "Neroli Solar Blossom", category: "perfume", price: 200, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600", desc: "Солнечный цвет апельсинового дерева." },
  { id: 40, name: "Smoked Tonka Bean", category: "perfume", price: 290, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600", desc: "Дымные бобы тонка и обжаренный миндаль." },
  { id: 41, name: "Fig & Fig-Leaf Water", category: "perfume", price: 175, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600", desc: "Зеленый инжир и сочный сок инжирного листа." },
  { id: 42, name: "Sandalwood Sacred Oil", category: "perfume", price: 330, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Священное масло майсурского сандала." },
  { id: 43, name: "Cardamom Noir Spray", category: "perfume", price: 220, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600", desc: "Черный кардамон и ромовые оттенки." },
  { id: 44, name: "Bourbon Vanilla Gold", category: "perfume", price: 250, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600", desc: "Бурбонская ваниль выдержанного качества." },
  { id: 45, name: "Wild Lavender Mist", category: "perfume", price: 165, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600", desc: "Дикая прованская лаванда и горная свежесть." },
  { id: 46, name: "Incense & Myrrh Extract", category: "perfume", price: 340, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600", desc: "Ладан и мирра в традициях древних парфюмеров." },
  { id: 47, name: "Peony & Silk Nectar", category: "perfume", price: 215, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600", desc: "Нежный пион и шелковистые фруктовые ноты." },
  { id: 48, name: "Dark Plum & Rose", category: "perfume", price: 270, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Темная спелая слива и бархатная роза." },
  { id: 49, name: "Sea Salt & Driftwood", category: "perfume", price: 185, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600", desc: "Морская соль и выброшенная на берег древесина." },
  { id: 50, name: "Matcha Tea & Lime", category: "perfume", price: 195, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600", desc: "Японский чай матча и свежий лайм." },
  { id: 51, name: "Blackcurrant Elixir", category: "perfume", price: 235, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600", desc: "Густой эликсир черной смородины." },
  { id: 52, name: "Cypress & Juniper Mist", category: "perfume", price: 205, img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600", desc: "Кипарис и можжевеловые ягоды." },
  { id: 53, name: "Royal Jasmine Absolue", category: "perfume", price: 360, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600", desc: "Абсолю грасского королевского жасмина." },
  { id: 54, name: "Cashmere Wood Essence", category: "perfume", price: 295, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Кашемировое дерево и согревающий мускус." },
  { id: 55, name: "Golden Amber Accord", category: "perfume", price: 315, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600", desc: "Золотистая амбра с ванильным подтоном." },

  // 🕶️ ОПТИКА И ОЧКИ (eyewear)
  { id: 56, name: "Matte Black Sunglasses", category: "eyewear", price: 210, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600", desc: "Матовая оправа и 100% защита UV400." },
  { id: 57, name: "Titanium Lite Frames", category: "eyewear", price: 290, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600", desc: "Невесомая титановая оправа весом всего 12 грамм." },
  { id: 58, name: "Tortoise Shell Classic", category: "eyewear", price: 180, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600", desc: "Классический черепаховый ацетат высокого качества." },
  { id: 59, name: "Aviator Gold Gradient", category: "eyewear", price: 250, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600", desc: "Золотистые авиаторы с градиентными линзами." },
  { id: 60, name: "Square Acetate Oversized", category: "eyewear", price: 230, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600", desc: "Квадратная массивная оправа в итальянском стиле." },
  { id: 61, name: "Cat-Eye Crystal Clear", category: "eyewear", price: 200, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600", desc: "Прозрачный ацетат формы «кошачий глаз»." },
  { id: 62, name: "Round Retro Rimless", category: "eyewear", price: 270, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600", desc: "Круглые безободковые очки с позолоченными дужками." },
  { id: 63, name: "Polarized Shield Sport", category: "eyewear", price: 220, img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600", desc: "Поляризационная монолинза для спорта и вождения." },
  { id: 64, name: "Geometric Gold Wire", category: "eyewear", price: 260, img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600", desc: "Геометрическая тонкая проволочная оправа." },
  { id: 65, name: "Blue Light Optical Glasses", category: "eyewear", price: 170, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600", desc: "Линзы с фильтрацией синего спектра экранов." },

  // 🎧 АУДИО (audio)
  { id: 82, name: "Studio Sound Wireless", category: "audio", price: 340, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", desc: "Беспроводные полноразмерные наушники студийного класса." },
  { id: 83, name: "Nomad Crystal Speaker", category: "audio", price: 270, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600", desc: "Портативная акустика в прозрачном акриловом корпусе." },
  { id: 84, name: "Pro ANC Headphones Matte", category: "audio", price: 420, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600", desc: "Активное шумоподавление нового поколения." },
  { id: 85, name: "TWS Earbuds Aluminum", category: "audio", price: 190, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600", desc: "Компактные наушники в цельнометаллическом кейсе." },
  { id: 86, name: "Desktop Tube Amplifier", category: "audio", price: 650, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600", desc: "Ламповый усилитель для истинных ценителей звука." },
  { id: 87, name: "Vintage Vinyl Turntable", category: "audio", price: 580, img: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600", desc: "Виниловый проигрыватель с ременным приводом." }
];

/* ==========================================================================
   ИНИЦИАЛИЗАЦИЯ И ОБРАБОТЧИКИ СОБЫТИЙ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupCurrencySelector();

  // Страница каталога
  if (document.getElementById('catalog-products-grid')) {
    renderCatalog('all');
  }

  // Страница корзины
  if (document.getElementById('cart-items-container')) {
    renderCart();
  }

  initRevealAnimation();
});

// Настройка переключателя валют
function setupCurrencySelector() {
  const selector = document.getElementById('currency-selector');
  if (selector) {
    selector.value = currentCurrency;
    selector.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('lumiere_currency', currentCurrency);
      
      // Перерисовываем компоненты
      if (document.getElementById('catalog-products-grid')) renderCatalog();
      if (document.getElementById('cart-items-container')) renderCart();
    });
  }
}

// Форматирование цены с учетом валюты
function formatPrice(amountInUSD) {
  const rate = currencyRates[currentCurrency] || 1;
  const symbol = currencySymbols[currentCurrency] || '$';
  const converted = Math.round(amountInUSD * rate);
  return `${symbol} ${converted.toLocaleString()}`;
}

// Обновление счетчика товаров
function updateCartCount() {
  const countBadges = document.querySelectorAll('.cart-badge');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'inline-block';
    }
  });
}

/* ==========================================================================
   КАТАЛОГ И ФИЛЬТРАЦИЯ
   ========================================================================== */

function renderCatalog(category = 'all') {
  const grid = document.getElementById('catalog-products-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">Товары в данной категории временно отсутствуют.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="glass-card product-card reveal">
      <div>
        <div style="overflow: hidden; border-radius: 8px; margin-bottom: 12px;">
          <img src="${product.img}" class="product-img" alt="${product.name}" loading="lazy" style="width:100%; height: 220px; object-fit: cover; transition: transform 0.3s ease;">
        </div>
        <div class="product-category" style="font-size: 0.75rem; color: #38bdf8; letter-spacing: 1px; text-transform: uppercase;">${product.category}</div>
        <h3 class="product-title" style="font-size: 1.1rem; margin: 6px 0; font-weight: 400;">${product.name}</h3>
        <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.4;">${product.desc || ''}</p>
        <p class="product-price" style="font-size: 1.2rem; font-weight: 600; color: #fff; margin-bottom: 15px;">${formatPrice(product.price)}</p>
      </div>
      <button class="btn-glass" style="width: 100%; text-align: center;" onclick="addToCart(${product.id})">В корзину</button>
    </div>
  `).join('');

  initRevealAnimation();
}

function filterProducts(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  renderCatalog(category);
}

/* ==========================================================================
   УПРАВЛЕНИЕ КОРЗИНОЙ
   ========================================================================== */

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      category: product.category,
      quantity: 1
    });
  }

  saveCart();
  showToast(`"${product.name}" добавлен в корзину`, "🛍️");
}

function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    renderCart();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    renderCart();
    showToast(`"${name}" удален из корзины`, "🗑️");
  }
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Вы уверены, что хотите очистить всю корзину?")) {
    cart = [];
    saveCart();
    renderCart();
    showToast("Корзина очищена", "ℹ️");
  }
}

function saveCart() {
  localStorage.setItem('lumiere_cart', JSON.stringify(cart));
  updateCartCount();
}

/* ==========================================================================
   ОТРИСОВКА СТРАНИЦЫ КОРЗИНЫ (CART.HTML)
   ========================================================================== */

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const subtotalElem = document.getElementById('cart-subtotal');
  const discountElem = document.getElementById('cart-discount');
  const totalElem = document.getElementById('cart-total-price');
  const deliveryElem = document.getElementById('cart-delivery');
  
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart reveal" style="text-align: center; padding: 50px 20px;">
        <div style="font-size: 3rem; margin-bottom: 15px;">🛒</div>
        <p style="font-size: 1.2rem; color: #cbd5e1; margin-bottom: 20px;">Ваша корзина пока пуста</p>
        <a href="catalog.html" class="btn-glass" style="display: inline-block;">Перейти в каталог</a>
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = formatPrice(0);
    if (discountElem) discountElem.textContent = formatPrice(0);
    if (deliveryElem) deliveryElem.textContent = formatPrice(0);
    if (totalElem) totalElem.textContent = formatPrice(0);
    initRevealAnimation();
    return;
  }

  let subtotal = 0;
  
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
      <span style="color: #94a3b8;">Товары (${cart.length})</span>
      <button onclick="clearCart()" class="btn-glass" style="padding: 5px 12px; font-size: 0.8rem; background: rgba(239, 68, 68, 0.2);">Очистить все</button>
    </div>
  ` + cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-card reveal" style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
        <div class="cart-img-wrap" style="width: 90px; height: 90px; flex-shrink: 0;">
          <img src="${item.img}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        </div>
        
        <div class="cart-info" style="flex-grow: 1;">
          <div style="font-size: 0.75rem; color: #38bdf8; text-transform: uppercase;">${item.category || 'Аксессуар'}</div>
          <h3 class="cart-title" style="font-size: 1.1rem; margin: 4px 0; font-weight: 400; color: #fff;">${item.name}</h3>
          <div class="cart-price" style="color: #cbd5e1; font-size: 0.95rem;">${formatPrice(item.price)} за шт.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <button onclick="updateQuantity(${index}, -1)" class="btn-glass" style="padding: 4px 10px; font-size: 1rem;">-</button>
          <span style="font-weight: 600; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)" class="btn-glass" style="padding: 4px 10px; font-size: 1rem;">+</button>
        </div>

        <div style="text-align: right; min-width: 100px;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #fff;">${formatPrice(itemTotal)}</div>
          <button class="cart-remove-btn" onclick="removeFromCart(${index})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; margin-top: 5px;">Удалить</button>
        </div>
      </div>
    `;
  }).join('');

  // Расчет сумм
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const deliveryCost = subtotal > 500 ? 0 : 50; // Бесплатная доставка от $500
  const total = subtotal - discountAmount + (subtotal > 0 ? deliveryCost : 0);

  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (discountElem) discountElem.textContent = `- ${formatPrice(discountAmount)}`;
  if (deliveryElem) deliveryElem.textContent = deliveryCost === 0 ? "Бесплатно" : formatPrice(deliveryCost);
  if (totalElem) totalElem.textContent = formatPrice(total);

  initRevealAnimation();
}

/* ==========================================================================
   ПРОМОКОДЫ И ОФОРМЛЕНИЕ
   ========================================================================== */

function applyPromoCode(event) {
  event.preventDefault();
  const input = document.getElementById('promo-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'LUMIERE10') {
    appliedDiscount = 10;
    showToast("Промокод 10% применен!", "🎉");
  } else if (code === 'VIP20') {
    appliedDiscount = 20;
    showToast("VIP Скидка 20% активирована!", "👑");
  } else {
    showToast("Неверный промокод", "❌");
    return;
  }

  renderCart();
}

function submitOrder(event) {
  event.preventDefault();
  
  if (cart.length === 0) {
    showToast("Ваша корзина пуста!", "⚠️");
    return;
  }

  const name = document.getElementById('order-name')?.value;
  const email = document.getElementById('order-email')?.value;
  
  // Имитация отправки
  showToast("Заказ успешно оформлен!", "✨");

  setTimeout(() => {
    alert(`Спасибо за заказ, ${name}!\nПодтверждение отправлено на ${email}.\nНаш консьерж свяжется с вами.`);
    cart = [];
    appliedDiscount = 0;
    saveCart();
    renderCart();
  }, 500);
}

function bookService(serviceName) {
  showToast(`Заявка на "${serviceName}" отправлена`, "💎");
}

/* ==========================================================================
   УВЕДОМЛЕНИЯ (TOAST NOTIFICATIONS) И АНИМАЦИИ
   ========================================================================== */

function showToast(message, icon = "ℹ️") {
  let container = document.getElementById('toast-container');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    animation: fadeIn 0.3s ease forwards;
  `;

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Функция автоматической активации элементов при скролле
function initRevealAnimation() {
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15
    });

    reveals.forEach(element => {
      observer.observe(element);
    });
  } else {
    reveals.forEach(element => element.classList.add('active'));
  }
}