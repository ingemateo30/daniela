import React, { useState, useEffect } from 'react';
import { ShoppingCart, Phone, Star, Clock, MapPin, Gift, Copy, Check, MessageCircle, Plus, Minus, Calendar, Users, GraduationCap, X, Menu, ChevronRight } from 'lucide-react';

const StreetFood911App = () => {
  const [cart, setCart] = useState([]);
  const [activePromo, setActivePromo] = useState(null);
  const [copiedCode, setCopiedCode] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' });
  const [currentCategory, setCurrentCategory] = useState('PARA DISFRUTAR');
  const [showBanners, setShowBanners] = useState(true);
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const restaurantInfo = {
    name: "911 Street Food",
    phone: "+57 300 911 0911",
    address: "Socorro, Santander",
    hours: "Todos los días"
  };

  // Imágenes de alta calidad para los productos
  const productImages = {
    'aros-cebolla': 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400',
    'crujientes-pollo': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    'nachos-maiz': 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400',
    'palomitas-pollo': 'https://images.unsplash.com/photo-1562967916-ca8281ea29e6?w=400',
    'hotdog-123': 'https://images.unsplash.com/photo-1612392061787-2c3f462cfebc?w=400',
    'hotdog-112': 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400',
    'hotdog-127': 'https://images.unsplash.com/photo-1612392062422-ef9b32dcc9b4?w=400',
    'hotdog-911': 'https://images.unsplash.com/photo-1612392061900-b2c7726db0a6?w=400',
    'callme-123': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    'callme-119': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
    'callme-127': 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400',
    'callme-125': 'https://images.unsplash.com/photo-1626074353765-518674ed4eb9?w=400',
    'callme-112': 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400',
    'callme-911': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    'perra-116': 'https://images.unsplash.com/photo-1612392061900-b2c7726db0a6?w=400',
    'perra-169': 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400',
    'crazycorn-127': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400',
    'crazycorn-911': 'https://images.unsplash.com/photo-1574439384815-b855997f3f8e?w=400',
    'burger-123': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
    'burger-125': 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400',
    'burger-127': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    'burger-911': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
    'burger-fullpork': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
    'balvin-123': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    'fexxo-127': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400',
    'bento-112': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400'
  };

  // Menú completo
  const menuItems = [
    // PARA DISFRUTAR
    {
      id: 'aros-cebolla',
      name: "Aros de Cebolla",
      description: "7 aros de cebolla acompañados de salsa de queso cheddar",
      price: 16000,
      category: "PARA DISFRUTAR",
      image: productImages['aros-cebolla'],
      popular: false
    },
    {
      id: 'crujientes-pollo',
      name: "Crujientes de Pollo",
      description: "Alitas de pollo apanado, acompañadas de salsas BBQ o Buffalo Hot x 4 piezas",
      price: 16000,
      category: "PARA DISFRUTAR",
      image: productImages['crujientes-pollo'],
      popular: true
    },
    {
      id: 'nachos-maiz',
      name: "Nachos de Maíz",
      description: "Tostados, acompañados con guacamole, pico de gallo y salsa cheddar",
      price: 16000,
      category: "PARA DISFRUTAR",
      image: productImages['nachos-maiz'],
      popular: false
    },
    {
      id: 'palomitas-pollo',
      name: "Palomitas de Pollo",
      description: "Pollo apanado, acompañadas de salsas BBQ o Buffalo Hot",
      price: 16000,
      category: "PARA DISFRUTAR",
      image: productImages['palomitas-pollo'],
      popular: false
    },

    // HOT DOGS
    {
      id: 'hotdog-123',
      name: "Hot Dog 123",
      description: "Salchicha americana, papita molida, queso fundido y tocineta ahumada. Salsas de la casa en delicioso pan tipo brioche",
      price: 15000,
      priceWithFries: 17000,
      category: "HOT DOGS",
      image: productImages['hotdog-123'],
      popular: false
    },
    {
      id: 'hotdog-112',
      name: "Hot Dog 112",
      description: "Salchicha americana, papita molida, tocineta ahumada, mezcla de maíz tierno con pollo desmechado en salsa blanca, queso fundido y salsas de la casa",
      price: 21000,
      priceWithFries: 23000,
      category: "HOT DOGS",
      image: productImages['hotdog-112'],
      popular: false
    },
    {
      id: 'hotdog-127',
      name: "Hot Dog 127",
      description: "Salchicha americana, papita molida, queso fundido, res desmechada en hogo, guacamole, pico de gallo, doritos y salsas de la casa",
      price: 22000,
      priceWithFries: 24000,
      category: "HOT DOGS",
      image: productImages['hotdog-127'],
      popular: false
    },
    {
      id: 'hotdog-911',
      name: "Hot Dog 911",
      description: "Salchicha americana, papita molida, queso fundido, chorizo integrado con cerdo desmechado en BBQ, guacamole, doritos, salsa cheddar y salsas de la casa",
      price: 25000,
      priceWithFries: 27000,
      category: "HOT DOGS",
      image: productImages['hotdog-911'],
      popular: true
    },

    // SALCHIPAPAS
    {
      id: 'callme-123',
      name: "Call Me 123 - Personal",
      description: "Papa francesa, salchicha americana, salsas de la casa, papita molida y queso fundido",
      price: 17000,
      category: "SALCHIPAPAS",
      image: productImages['callme-123'],
      popular: false
    },
    {
      id: 'callme-119',
      name: "Call Me 119 - Personal",
      description: "Papa francesa, salchicha americana, salsas de la casa, queso fundido, pollo desmechado en salsa blanca, res desmechada en hogo, guacamole, pico de gallo y doritos",
      price: 22000,
      category: "SALCHIPAPAS",
      image: productImages['callme-119'],
      popular: false
    },
    {
      id: 'callme-127',
      name: "Call Me 127",
      description: "Papa francesa, salchicha americana, salsas de la casa, papita molida, queso fundido, cerdo desmechado en BBQ, maduritos, chorizo caramelizado",
      price: 35000,
      familySize: 39000,
      category: "SALCHIPAPAS",
      image: productImages['callme-127'],
      popular: true
    },
    {
      id: 'callme-125',
      name: "Call Me 125 - Para Dos",
      description: "Papa francesa, salchicha americana, salsas de la casa, queso fundido, pollo desmechado en salsa blanca, chicharrón carnudo, guacamole, pico de gallo y doritos",
      price: 48000,
      category: "SALCHIPAPAS",
      image: productImages['callme-125'],
      popular: false
    },
    {
      id: 'callme-112',
      name: "Call Me 112 - Para Dos",
      description: "Papa francesa, salchicha americana, salsas de la casa, queso fundido, alitas de pollo apanadas, pollo desmechado en salsa blanca, costillas de res en BBQ, guacamole, pico de gallo, doritos y aros de cebolla",
      price: 48000,
      category: "SALCHIPAPAS",
      image: productImages['callme-112'],
      popular: false
    },
    {
      id: 'callme-911',
      name: "Call Me 911 - Para Tres",
      description: "Papa francesa, salchicha americana, salsas de la casa, queso fundido, pollo desmechado en salsa blanca, costillas de cerdo BBQ, res desmechada en hogo, maduritos, guacamole, pico de gallo y doritos",
      price: 58000,
      category: "SALCHIPAPAS",
      image: productImages['callme-911'],
      popular: true
    },

    // PERRAS
    {
      id: 'perra-116',
      name: "Perra 116",
      description: "Tocineta ahumada x 4, papita molida, queso fundido, guacamole y salsas de la casa en pan brioche",
      price: 19000,
      priceWithFries: 22000,
      category: "PERRAS",
      image: productImages['perra-116'],
      popular: false
    },
    {
      id: 'perra-169',
      name: "Perra 169",
      description: "Tocineta ahumada mezclada con trozos de chorizo, guacamole, mezcla de maíz tierno con pollo desmechado en salsa blanca y queso fundido. Salsas de la casa en pan brioche",
      price: 24000,
      priceWithFries: 26000,
      category: "PERRAS",
      image: productImages['perra-169'],
      popular: false
    },

    // CRAZY CORN
    {
      id: 'crazycorn-127',
      name: "Crazy Corn 127",
      description: "Maíz tierno integrado con pollo desmechado en salsa blanca y queso fundido, coronado con tocineta ahumada en trocitos",
      price: 21000,
      category: "CRAZY CORN",
      image: productImages['crazycorn-127'],
      popular: false
    },
    {
      id: 'crazycorn-911',
      name: "Crazy Corn 911",
      description: "Maíz tierno integrado con queso fundido y salsa blanca, con cerdo desmechado en BBQ, guacamole, doritos, pico de gallo, tocineta ahumada en trocitos",
      price: 25000,
      category: "CRAZY CORN",
      image: productImages['crazycorn-911'],
      popular: true
    },

    // BURGERS
    {
      id: 'burger-123',
      name: "Burger 123",
      description: "Carne de la casa, tocineta, mix de quesos, lechuga crespa, tomate y salsas de la casa en pan brioche",
      price: 18000,
      priceWithFries: 20000,
      category: "BURGERS",
      image: productImages['burger-123'],
      popular: false
    },
    {
      id: 'burger-125',
      name: "Burger 125",
      description: "Carne de la casa, trozos de cerdo BBQ, pico de gallo, doritos triturados, aros de cebolla, cebollín, mix de quesos, lechuga crespa, tomate y salsas de la casa",
      price: 25000,
      priceWithFries: 27000,
      category: "BURGERS",
      image: productImages['burger-125'],
      popular: false
    },
    {
      id: 'burger-127',
      name: "Burger 127",
      description: "Carne de la casa, pollo desmechado en salsa blanca, tocineta, mix de quesos, lechuga crespa, tomate y salsas de la casa",
      price: 22000,
      priceWithFries: 24000,
      category: "BURGERS",
      image: productImages['burger-127'],
      popular: false
    },
    {
      id: 'burger-911',
      name: "Burger 911",
      description: "Carne de la casa, chorizo caramelizado derretido, con cerdo desmechado en BBQ, guacamole, aros de cebolla, pollo desmechado en salsa blanca, papita molida, queso con trocitos de tocineta",
      price: 31000,
      priceWithFries: 33000,
      category: "BURGERS",
      image: productImages['burger-911'],
      popular: true
    },
    {
      id: 'burger-fullpork',
      name: "Burger Full Pork",
      description: "Carne de la casa, cerdo desmechado BBQ, guacamole, tocineta doble, mix de quesos, lechuga crespa, tomate y salsas de la casa",
      price: 25000,
      priceWithFries: 27000,
      category: "BURGERS",
      image: productImages['burger-fullpork'],
      popular: false
    },

    // TORTILLA 4 HACKS
    {
      id: 'balvin-123',
      name: "Balvin 123",
      description: "Chorizo caramelizado, mix de quesos, salsas de la casa y papita molida en tortilla de harina",
      price: 16000,
      category: "TORTILLA 4 HACKS",
      image: productImages['balvin-123'],
      popular: false
    },
    {
      id: 'fexxo-127',
      name: "Fexxo 127",
      description: "Mezcla de maíz tierno, champiñones y pollo desmechado en salsa blanca, mix de quesos, salsas y papita molida en tortilla de harina",
      price: 20000,
      category: "TORTILLA 4 HACKS",
      image: productImages['fexxo-127'],
      popular: false
    },
    {
      id: 'bento-112',
      name: "Bento 112",
      description: "Res burger, pico de gallo, guacamole, maíz tierno champiñones, mix de quesos, salsas y papita molida en tortilla de harina",
      price: 22000,
      category: "TORTILLA 4 HACKS",
      image: productImages['bento-112'],
      popular: false
    },

    // BEBIDAS
    {
      id: 'sodas-911',
      name: "Sodas 911",
      description: "2 litros entre Ginger, Frutas rojas, amarillos o verdes",
      price: 9000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'jugos-naturales',
      name: "Jugos Naturales",
      description: "Frutas rojas o verdes, o Maracumaingo",
      price: 7000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'limonada-natural',
      name: "Limonada Natural",
      price: 7000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'limonada-coco',
      name: "Limonada de Coco",
      price: 10000,
      category: "BEBIDAS",
      popular: true
    },
    {
      id: 'limonada-cerezada',
      name: "Limonada Cerezada",
      price: 9000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'mandarina-natural',
      name: "Mandarina Natural",
      price: 7000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'mandarina-cerezada',
      name: "Mandarina Cerezada",
      price: 9000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'gaseosas',
      name: "Gaseosas",
      description: "400 ml: $4,500 • 1.5L: $9,000",
      price: 4500,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'agua-pet',
      name: "Agua PET",
      description: "600 ml",
      price: 3000,
      category: "BEBIDAS",
      popular: false
    },
    {
      id: 'cervezas',
      name: "Cervezas",
      description: "Coronita, Heineken o Budweiser",
      price: 5000,
      category: "BEBIDAS",
      popular: false
    },

    // ADICIONES
    {
      id: 'pollo-cerdo',
      name: "Pollo, Res o Cerdo Desmechado",
      price: 5000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'chorizo-caramelizado',
      name: "Chorizo Caramelizado o Salchicha",
      price: 4000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'maduritos',
      name: "Maduritos con Queso Rallado",
      price: 4000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'papas-francesa',
      name: "Porción de Papas a la Francesa",
      price: 4000,
      category: "ADICIONES",
      popular: true
    },
    {
      id: 'guacamole',
      name: "Guacamole, Pico de Gallo",
      price: 2000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'queso-tajado',
      name: "Queso Tajado x2",
      price: 3000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'queso-maiz',
      name: "Queso Fundido con Maíz Tierno",
      price: 5000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'aros-cebolla-ad',
      name: "Aros de Cebolla x 3 Unidades",
      price: 4000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'costillas',
      name: "Costillas BBQ x500",
      price: 6000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'carne-burger',
      name: "Carne Burger",
      price: 8000,
      category: "ADICIONES",
      popular: false
    },
    {
      id: 'chicharron',
      name: "Chicharrón",
      price: 10000,
      category: "ADICIONES",
      popular: false
    }
  ];

  const categories = [
    "PARA DISFRUTAR",
    "HOT DOGS", 
    "SALCHIPAPAS",
    "PERRAS",
    "CRAZY CORN",
    "BURGERS",
    "TORTILLA 4 HACKS",
    "BEBIDAS",
    "ADICIONES"
  ];

  // Promociones por días
  const dailyPromotions = {
    1: { // Lunes
      title: "Recarga de Energía",
      description: "20% de descuento en total del pedido",
      discount: 20,
      minOrder: 0,
      code: "LUNES20",
      color: "from-blue-600 to-blue-800"
    },
    2: { // Martes
      title: "Doble Smash",
      description: "2da hamburguesa al 50%",
      discount: 25,
      minOrder: 20000,
      code: "MARTES50",
      color: "from-green-600 to-green-800"
    },
    3: { // Miércoles
      title: "Salsa 911",
      description: "Bebidas gratis con tu pedido",
      discount: 15,
      minOrder: 25000,
      code: "MIERCOLBEBIDA",
      color: "from-purple-600 to-purple-800"
    },
    4: { // Jueves
      title: "After Office",
      description: "Combo 3 + bebida especial",
      discount: 18,
      minOrder: 30000,
      code: "JUEVESOFFICE",
      color: "from-orange-600 to-orange-800"
    },
    5: { // Viernes
      title: "Street Party",
      description: "Domicilio gratis en toda la ciudad",
      discount: 10,
      minOrder: 20000,
      code: "VIERNESPARTY",
      color: "from-red-600 to-red-800"
    },
    6: { // Sábado
      title: "Street Party",
      description: "Domicilio gratis en toda la ciudad",
      discount: 10,
      minOrder: 20000,
      code: "SABADOPARTY",
      color: "from-red-600 to-red-800"
    },
    0: { // Domingo
      title: "Street Party",
      description: "Domicilio gratis en toda la ciudad",
      discount: 10,
      minOrder: 20000,
      code: "DOMINGOPARTY",
      color: "from-red-600 to-red-800"
    }
  };

  const specialPromotions = [
    {
      id: 'UNIVERSITARIO',
      title: 'Descuento Universitario',
      description: '20% descuento presentando carnet estudiantil',
      discount: 20,
      minOrder: 15000,
      code: 'UNIVERSITARIO20'
    }
  ];

  // Banners estilo McDonald's
  const heroBanners = [
    {
      id: 1,
      title: "NUEVA BURGER 911",
      subtitle: "La hamburguesa más completa de Socorro",
      description: "Con chorizo caramelizado, cerdo BBQ y todos los ingredientes premium",
      cta: "Ordénala ahora",
      background: "bg-gradient-to-r from-red-600 via-red-700 to-black",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "DOMICILIO GRATIS",
      subtitle: "Fines de semana sin costo de envío",
      description: "Viernes, sábado y domingo disfruta sin costo adicional",
      cta: "Pedir ahora",
      background: "bg-gradient-to-r from-green-600 to-green-800",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "ESTUDIANTES 20% OFF",
      subtitle: "Descuento especial para universitarios",
      description: "Presenta tu carnet estudiantil y obtén descuento inmediato",
      cta: "Aplicar descuento",
      background: "bg-gradient-to-r from-blue-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop"
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const addToCart = (item, withFries = false) => {
    const price = withFries && item.priceWithFries ? item.priceWithFries : item.price;
    const name = withFries ? `${item.name} + Papas` : item.name;
    
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id && p.withFries === withFries);
      if (existing) {
        return prev.map(p => 
          p.id === item.id && p.withFries === withFries 
            ? {...p, quantity: p.quantity + 1} 
            : p
        );
      }
      return [...prev, {
        ...item, 
        name,
        price,
        quantity: 1,
        withFries,
        cartId: `${item.id}-${withFries ? 'fries' : 'normal'}`
      }];
    });
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.cartId !== cartId));
      return;
    }
    setCart(prev => prev.map(item => 
      item.cartId === cartId ? {...item, quantity} : item
    ));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (activePromo && subtotal >= activePromo.minOrder) {
      return subtotal * (1 - activePromo.discount / 100);
    }
    return subtotal;
  };

  const generateWhatsAppMessage = () => {
    const orderDetails = cart.map(item => 
      `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const total = calculateTotal();
    const discount = activePromo ? `\n\n🎉 PROMOCION APLICADA: ${activePromo.code} (-${activePromo.discount}%)` : '';
    
    return `🚨 PEDIDO 911 STREET FOOD 🚨\n\nCliente: ${customerInfo.name}\nTelefono: ${customerInfo.phone}\nDireccion: ${customerInfo.address}\n\nPEDIDO:\n${orderDetails}\n\nTOTAL: $${total.toLocaleString()}${discount}\n\n¡Gracias por elegirnos!`;
  };

  const sendWhatsAppOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Por favor completa todos tus datos');
      return;
    }
    if (cart.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/573009110911?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const applyPromotion = (promo) => {
    setActivePromo(promo);
    alert(`Promoción ${promo.code} aplicada! ${promo.discount}% de descuento`);
  };

  const getDayName = (dayNumber) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[dayNumber];
  };

  const todaysPromo = dailyPromotions[currentDay];

  const getPopularItems = () => {
    return menuItems.filter(item => item.popular).slice(0, 8);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header estilo McDonald's */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center">
                911
              </div>
              <div>
                <h1 className="text-xl font-black text-black">911 STREET FOOD</h1>
                <p className="text-xs text-gray-500">Socorro, Santander</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.slice(0, 6).map(category => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`text-sm font-semibold transition-colors hover:text-red-600 ${
                    currentCategory === category ? 'text-red-600 border-b-2 border-red-600 pb-2' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 font-semibold transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setCurrentCategory(category);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm font-semibold p-2 rounded transition-colors ${
                      currentCategory === category ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner Carousel estilo McDonald's */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <div className={`w-full h-full ${heroBanners[currentBanner].background} flex items-center`}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h2 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
                    {heroBanners[currentBanner].title}
                  </h2>
                  <p className="text-xl lg:text-2xl font-bold mb-3">
                    {heroBanners[currentBanner].subtitle}
                  </p>
                  <p className="text-lg mb-6 opacity-90">
                    {heroBanners[currentBanner].description}
                  </p>
                  <button 
                    onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <span>{heroBanners[currentBanner].cta}</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src={heroBanners[currentBanner].image}
                    alt={heroBanners[currentBanner].title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBanner === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Promoción del día */}
      {todaysPromo && (
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className={`bg-gradient-to-r ${todaysPromo.color} text-white p-6 rounded-2xl`}>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-6 h-6" />
                    <h3 className="text-2xl font-black">{getDayName(currentDay).toUpperCase()} - {todaysPromo.title}</h3>
                  </div>
                  <p className="text-xl font-semibold">{todaysPromo.description}</p>
                </div>
                <button 
                  onClick={() => copyCode(todaysPromo.code)}
                  className="bg-white text-black px-6 py-3 rounded-full font-black hover:bg-gray-100 flex items-center space-x-2 transition-colors"
                >
                  <span>{todaysPromo.code}</span>
                  {copiedCode === todaysPromo.code ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Menu Section */}
          <div className="lg:col-span-3">
            
            {/* Productos Populares */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-black">Más Populares</h2>
                <button className="text-red-600 font-semibold flex items-center space-x-1 hover:text-red-700">
                  <span>Ver todos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {getPopularItems().map(item => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-black mb-2 line-clamp-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-red-600">${item.price.toLocaleString()}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Menú por Categorías */}
            <section id="menu-section" className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-black">{currentCategory}</h2>
                
                {/* Category Filter Tabs */}
                <div className="hidden md:flex bg-white rounded-full p-1 shadow-lg">
                  {categories.slice(0, 4).map(category => (
                    <button
                      key={category}
                      onClick={() => setCurrentCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                        currentCategory === category 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === currentCategory).map(item => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {item.image && (
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.popular && (
                          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl text-black line-clamp-2 flex-1">{item.name}</h3>
                        <div className="text-right ml-4">
                          <div className="text-xl font-black text-red-600">${item.price.toLocaleString()}</div>
                          {item.priceWithFries && (
                            <div className="text-sm text-gray-500">+ Papas: ${item.priceWithFries.toLocaleString()}</div>
                          )}
                        </div>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{item.description}</p>
                      )}
                      
                      <div className="flex gap-2">
                        <button 
                          onClick={() => addToCart(item, false)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-full font-bold transition-colors"
                        >
                          Agregar
                        </button>
                        {item.priceWithFries && (
                          <button 
                            onClick={() => addToCart(item, true)}
                            className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-full font-bold transition-colors"
                          >
                            + Papas
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Promoción Universitaria */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-2 mb-3">
                      <GraduationCap className="w-8 h-8" />
                      <h3 className="text-3xl font-black">ESTUDIANTES 20% OFF</h3>
                    </div>
                    <p className="text-xl font-semibold">Presenta tu carnet estudiantil y obtén descuento inmediato</p>
                  </div>
                  <button 
                    onClick={() => copyCode('UNIVERSITARIO20')}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-black hover:bg-gray-100 flex items-center space-x-2 transition-colors"
                  >
                    <span>UNIVERSITARIO20</span>
                    {copiedCode === 'UNIVERSITARIO20' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Carrito Sidebar */}
          <div className="lg:col-span-1">
            <div id="cart-section" className="sticky top-24">
              
              {/* Información del Cliente */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-black">Datos de Entrega</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({...prev, name: e.target.value}))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 focus:outline-none font-medium"
                  />
                  <input
                    type="tel"
                    placeholder="Número de teléfono"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({...prev, phone: e.target.value}))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 focus:outline-none font-medium"
                  />
                  <textarea
                    placeholder="Dirección de entrega"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({...prev, address: e.target.value}))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 focus:outline-none font-medium resize-none"
                    rows="3"
                  />
                </div>
              </div>

              {/* Carrito */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-red-600" />
                  Tu Pedido ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </h3>
                
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                      {cart.map(item => (
                        <div key={item.cartId} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                          <div className="flex-1 mr-3">
                            <h4 className="font-bold text-sm text-black line-clamp-2">{item.name}</h4>
                            <p className="text-red-600 text-sm font-bold">${item.price.toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="bg-gray-200 hover:bg-gray-300 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Aplicar Promociones */}
                    <div className="space-y-3 mb-6">
                      {todaysPromo && (
                        <button 
                          onClick={() => applyPromotion(todaysPromo)}
                          className={`w-full bg-gradient-to-r ${todaysPromo.color} text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity`}
                        >
                          Aplicar {getDayName(currentDay)} - {todaysPromo.discount}% OFF
                        </button>
                      )}
                      
                      <button 
                        onClick={() => applyPromotion(specialPromotions[0])}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                      >
                        Aplicar Descuento Universitario - 20% OFF
                      </button>
                    </div>

                    {/* Total */}
                    <div className="border-t-2 border-gray-100 pt-4">
                      {activePromo && (
                        <div className="mb-3 p-3 bg-green-50 rounded-xl">
                          <p className="text-green-700 text-sm font-bold">
                            ✅ Promoción aplicada: {activePromo.code} (-{activePromo.discount}%)
                          </p>
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold text-black">TOTAL:</span>
                        <span className="text-3xl font-black text-red-600">
                          ${calculateTotal().toLocaleString()}
                        </span>
                      </div>
                      
                      <button 
                        onClick={sendWhatsAppOrder}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center space-x-2 transition-colors shadow-lg"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <span>PEDIR POR WHATSAPP</span>
                      </button>
                      
                      <p className="text-center text-xs text-gray-500 mt-3">
                        Se abrirá WhatsApp con tu pedido completo
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer estilo McDonald's */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center">
                  911
                </div>
                <h3 className="text-2xl font-black">911 STREET FOOD</h3>
              </div>
              <p className="text-gray-300">La mejor comida callejera de Socorro, Santander</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +57 300 911 0911</p>
                <p>📍 Socorro, Santander</p>
                <p>⏰ Todos los días</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Promociones</h4>
              <div className="space-y-2 text-gray-300">
                <p>🎓 Estudiantes 20% OFF</p>
                <p>🚚 Domicilio gratis fines de semana</p>
                <p>📅 Promociones diarias</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Hoy - {getDayName(currentDay)}</h4>
              <p className="text-gray-300">{todaysPromo?.description || 'Servicio normal'}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 911 Street Food. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Emergencia de Sabor en Socorro • Promociones sujetas a términos y condiciones
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StreetFood911App;