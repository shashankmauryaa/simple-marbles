export interface Product {
  id: string;
  title: string;
  code: string;
  category: string;
  description: string;
  color: string;
  finish: string;
  thickness: string;
  applications: string[];
  image: string;
  images?: string[];
  videos?: string[];
}

export const collections: Product[] = [
  {
    "id": "fine",
    "title": "Fine",
    "code": "WMV-001",
    "category": "White Marble",
    "description": "Elevate your interior design projects with the pristine elegance of our premium Fine Grain Slab. Exhibiting a seamless, ultra-refined texture, this striking white engineered stone provides a flawless canvas for modern minimalist aesthetics.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/FINE/IMG20251019140756.jpg",
    "images": [
      "images/FINE/IMG20251019140756.jpg",
      "images/FINE/IMG20251019143315.jpg",
      "images/FINE/IMG_20251021_090723.jpg",
      "images/FINE/IMG_20251021_090848.jpg",
      "images/FINE/IMG_20251021_091211.jpg"
    ],
    "videos": [
      "images/FINE/VID20251019134323.mp4",
      "images/FINE/VID20251019135555.mp4",
      "images/FINE/VID20251019143850.mp4"
    ]
  },
  {
    "id": "galaxy",
    "title": "Galaxy",
    "code": "WMV-002",
    "category": "White Marble",
    "description": "Galaxy White is quite hard crystalline marble from Vientam. It has tight mesh of small crystals. Intense white colour of Vietnam White makes it very suitable for creating elegant interiors and sophisticated design combinations in both interior and exterior applications.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/GALAXY/IMG-20250421-WA0001.jpg",
    "images": [
      "images/GALAXY/IMG-20250421-WA0001.jpg",
      "images/GALAXY/IMG-20250421-WA0002.jpg",
      "images/GALAXY/IMG-20250421-WA0003.jpg"
    ],
    "videos": []
  },
  {
    "id": "opal",
    "title": "Opal",
    "code": "WMV-003",
    "category": "White Marble",
    "description": "Opal White Marble is an exceptional natural white marble distinguished by its fine crystalline texture, brilliant white base, and remarkably uniform appearance. Its smaller, tightly packed crystal structure creates a cleaner, softer surface while enhancing the stone's natural brightness and elegance.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/OPAL/IMG-20250421-WA0004.jpg",
    "images": [
      "images/OPAL/IMG-20250421-WA0004.jpg",
      "images/OPAL/IMG-20250421-WA0005.jpg",
      "images/OPAL/IMG-20250421-WA0006.jpg"
    ],
    "videos": []
  },
  {
    "id": "red",
    "title": "Red",
    "code": "WMV-004",
    "category": "Red Marble",
    "description": "An exquisite selection of premium red marble featuring rich, deep crimson tones interspersed with striking white and gold veining. Perfect for creating bold statements in luxury interiors and exclusive architectural projects.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/RED/IMG20260304151401.jpg",
    "images": [
      "images/RED/IMG20260304151401.jpg",
      "images/RED/IMG20260304151716.jpg",
      "images/RED/IMG20260304152017.jpg",
      "images/RED/IMG20260304152456.jpg",
      "images/RED/IMG20260304152810.jpg",
      "images/RED/IMG20260304153229.jpg",
      "images/RED/IMG20260304153745.jpg",
      "images/RED/IMG20260304154257.jpg"
    ],
    "videos": []
  },
  {
    "id": "snow",
    "title": "Snow",
    "code": "WMV-005",
    "category": "White Marble",
    "description": "Snow White Marble is a premium natural white marble celebrated for its clean, uniform appearance and exceptionally smooth surface texture. Unlike crystal-rich marbles, this variety features a plain white background with only subtle, minute natural mineral structures, creating a refined and elegant aesthetic.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/SNOW/IMG-20260217-WA0005.jpg",
    "images": [
      "images/SNOW/IMG-20260217-WA0005.jpg",
      "images/SNOW/IMG-20260217-WA0006.jpg",
      "images/SNOW/IMG-20260217-WA0007.jpg"
    ],
    "videos": []
  },
  {
    "id": "swarovski",
    "title": "Swarovski",
    "code": "WMV-006",
    "category": "Premium",
    "description": "Swarovski White Marble is one of our signature premium white marble collections, distinguished by its large crystalline structure, uniform crystal distribution, and naturally luminous appearance. The consistent crystal pattern creates a sophisticated surface that reflects light beautifully, giving every space a bright, luxurious, and timeless character.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/SWAROVSKI/IMG_20260303_142728.jpg",
    "images": [
      "images/SWAROVSKI/IMG-20260226-WA0009.jpg",
      "images/SWAROVSKI/IMG20251106095300.jpg",
      "images/SWAROVSKI/IMG20251106095304.jpg",
      "images/SWAROVSKI/IMG20251106095311.jpg",
      "images/SWAROVSKI/IMG20251106095833.jpg",
      "images/SWAROVSKI/IMG20251106095910.jpg",
      "images/SWAROVSKI/IMG20251106095912.jpg",
      "images/SWAROVSKI/IMG20251106095919.jpg",
      "images/SWAROVSKI/IMG20251106095926.jpg",
      "images/SWAROVSKI/IMG20251106100140.jpg",
      "images/SWAROVSKI/IMG20251106100146.jpg",
      "images/SWAROVSKI/IMG20251106100154.jpg",
      "images/SWAROVSKI/IMG20251106100216.jpg",
      "images/SWAROVSKI/IMG20251106100220.jpg",
      "images/SWAROVSKI/IMG20251106100319.jpg",
      "images/SWAROVSKI/IMG20251106100555.jpg",
      "images/SWAROVSKI/IMG20251106100559.jpg",
      "images/SWAROVSKI/IMG20251106100622.jpg",
      "images/SWAROVSKI/IMG20251106100629.jpg",
      "images/SWAROVSKI/IMG20251106100725.jpg",
      "images/SWAROVSKI/IMG20251106100741.jpg",
      "images/SWAROVSKI/IMG20251106100748.jpg",
      "images/SWAROVSKI/IMG20251106100813.jpg",
      "images/SWAROVSKI/IMG20251211151518.jpg",
      "images/SWAROVSKI/IMG20251211151623.jpg",
      "images/SWAROVSKI/IMG20251211151625.jpg",
      "images/SWAROVSKI/IMG20251211151626.jpg",
      "images/SWAROVSKI/IMG_20260303_09441207.jpeg",
      "images/SWAROVSKI/IMG_20260303_142728.jpg",
      "images/SWAROVSKI/IMG_20260303_143130.jpg"
    ],
    "videos": [
      "images/SWAROVSKI/VID20251106095904.mp4",
      "images/SWAROVSKI/VID20251106100138.mp4",
      "images/SWAROVSKI/VID20251106100210.mp4",
      "images/SWAROVSKI/VID20251106100545.mp4",
      "images/SWAROVSKI/VID20251106100612.mp4",
      "images/SWAROVSKI/VID_20260303_094351.mp4"
    ]
  },
  {
    "id": "veins",
    "title": "Veins",
    "code": "WMV-007",
    "category": "Specialty",
    "description": "A stunning marble collection characterized by dramatic, pronounced veining patterns that flow naturally across the stone's surface, offering exceptional book-matching possibilities and unparalleled visual depth.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/hero.png",
    "images": ["images/hero.png"],
    "videos": []
  },
  {
    "id": "white",
    "title": "White",
    "code": "WMV-008",
    "category": "White Marble",
    "description": "Our timeless classic pure white marble collection. Offering a luminous and serene aesthetic, this stone brings an airy, sophisticated elegance to any modern or traditional space.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/WHITE/IMG20251106100559.jpg",
    "images": [
      "images/WHITE/IMG20251106095300.jpg",
      "images/WHITE/IMG20251106095304.jpg",
      "images/WHITE/IMG20251106095311.jpg",
      "images/WHITE/IMG20251106095833.jpg",
      "images/WHITE/IMG20251106095910.jpg",
      "images/WHITE/IMG20251106095912.jpg",
      "images/WHITE/IMG20251106095919.jpg",
      "images/WHITE/IMG20251106095926.jpg",
      "images/WHITE/IMG20251106100140.jpg",
      "images/WHITE/IMG20251106100146.jpg",
      "images/WHITE/IMG20251106100154.jpg",
      "images/WHITE/IMG20251106100216.jpg",
      "images/WHITE/IMG20251106100220.jpg",
      "images/WHITE/IMG20251106100319.jpg",
      "images/WHITE/IMG20251106100555.jpg",
      "images/WHITE/IMG20251106100559.jpg",
      "images/WHITE/IMG20251106100622.jpg",
      "images/WHITE/IMG20251106100629.jpg",
      "images/WHITE/IMG20251106100725.jpg",
      "images/WHITE/IMG20251106100741.jpg",
      "images/WHITE/IMG20251106100748.jpg",
      "images/WHITE/IMG20251106100813.jpg"
    ],
    "videos": [
      "images/WHITE/VID20251106095904.mp4",
      "images/WHITE/VID20251106100138.mp4",
      "images/WHITE/VID20251106100210.mp4",
      "images/WHITE/VID20251106100545.mp4",
      "images/WHITE/VID20251106100612.mp4"
    ]
  },
  {
    "id": "lasa",
    "title": "Lasa",
    "code": "WMV-009",
    "category": "White Marble",
    "description": "Lasa White is a serene variation of our white marble with structured veining. It features a striking white background with consistent, lighter diagonal veining throughout the slab. Often used for interior flooring and bathroom cladding as it complements bolder elements without overshadowing them.",
    "color": "White",
    "finish": "Polished, Honed, Leather, Brushed",
    "thickness": "18 mm, 20 mm, 30 mm",
    "applications": [
      "Luxury Flooring",
      "Interior Wall Cladding",
      "Bathroom Walls & Vanity Tops",
      "Kitchen Countertops & Islands",
      "Staircases",
      "Hotel Lobbies"
    ],
    "image": "images/hero.png",
    "images": ["images/hero.png"],
    "videos": []
  }
];
