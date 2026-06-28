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
  videoUrl?: string;
}

export const collections: Product[] = [
  {
    id: 'sparkling-calacatta',
    title: 'Sparkling Calacatta',
    code: 'LM-IT-001',
    category: 'Italian',
    description: 'Just as its Italian namesake, Sparkling Calacatta features a stunning white background contrasting to its dramatic, bolder veining. The veining randomly branches across the entire slab, but still maintains a diagonal direction, making it an excellent choice for book matching.',
    color: 'White with Grey Veining',
    finish: 'Polished / Honed',
    thickness: '20mm',
    applications: ['Interior Flooring', 'Cladding', 'Furniture Tops', 'Kitchen Countertops'],
    image: 'images/sparkling_calacatta.png',
  },
  {
    id: 'indian-green',
    title: 'Indian Green Marble',
    code: 'LM-IN-042',
    category: 'Indian',
    description: 'A classic and highly durable marble featuring a deep forest green background interwoven with an intricate web of light green and white veins. Perfect for bringing a rich, natural elegance to any space.',
    color: 'Deep Forest Green',
    finish: 'Polished',
    thickness: '18mm',
    applications: ['Flooring', 'Wall Panels', 'Staircases', 'Bathroom Vanities'],
    image: 'images/indian_green_marble.png',
  },
  {
    id: 'aurora-borealis',
    title: 'Aurora Borealis',
    code: 'LM-QZ-011',
    category: 'Quartzite',
    description: 'The exotic allure of Aurora Borealis lies in its crisp pastel green shades. In daylight, its calming hues trickle Zen into any interior. Under back lighting, the translucent mint green transforms into electric emerald and grabs the spotlight within any room.',
    color: 'Translucent Mint Green',
    finish: 'Polished / Backlit',
    thickness: '20mm',
    applications: ['Countertops', 'Wall Cladding', 'Bar Tops', 'Feature Walls'],
    image: 'images/aurora_borealis.png',
  },
  {
    id: 'premium-black-granite',
    title: 'Absolute Black Granite',
    code: 'LM-GR-099',
    category: 'Granite',
    description: 'Pitch black, extremely glossy, and highly durable. Absolute Black Granite is the ultimate choice for spaces requiring a solid, uncompromising dark aesthetic. It features very subtle fine silver specks that catch the light.',
    color: 'Absolute Black',
    finish: 'Polished / Flamed / Leathered',
    thickness: '30mm',
    applications: ['Kitchen Countertops', 'Exterior Cladding', 'Flooring', 'Monuments'],
    image: 'images/premium_black_granite.png',
  },
  {
    id: 'calacatta-quartz',
    title: 'Calacatta Quartz',
    code: 'LM-QZ-022',
    category: 'Quartz',
    description: 'Engineered perfection. A bright, pure white background with thick, dramatic, highly defined grey and gold veins running through it. Offers the luxurious look of Italian marble with the zero-maintenance durability of premium quartz.',
    color: 'White with Grey & Gold Veins',
    finish: 'Polished',
    thickness: '20mm',
    applications: ['Kitchen Countertops', 'Islands', 'Bathroom Vanities', 'Splashbacks'],
    image: 'images/calacatta_quartz.png',
  },
  {
    id: 'carrara',
    title: 'Classic Carrara',
    code: 'LM-IT-002',
    category: 'Italian',
    description: 'Soft feathery grey veining on pristine white. The quintessential Italian marble for timeless interiors. Sourced from the finest quarries to ensure consistent quality and beauty.',
    color: 'White with Soft Grey',
    finish: 'Polished / Honed',
    thickness: '18mm',
    applications: ['Flooring', 'Bathrooms', 'Wall Tiles', 'Fireplace Surrounds'],
    image: 'images/carrara.png',
  },
  {
    id: 'onyx',
    title: 'Luminous Onyx',
    code: 'LM-ON-005',
    category: 'Warm',
    description: 'Translucent and warm. A glowing masterpiece of nature that commands attention in any space. Its highly translucent properties make it the perfect candidate for dramatic backlighting.',
    color: 'Honey / Amber',
    finish: 'Polished',
    thickness: '20mm',
    applications: ['Feature Walls', 'Bar Fronts', 'Backlit Installations'],
    image: 'images/onyx.png',
  },
  {
    id: 'travertine',
    title: 'Warm Travertine',
    code: 'LM-TR-008',
    category: 'Warm',
    description: 'Subtle textures and earthy tones. Perfect for creating inviting, luxurious, and organic environments. Its porous nature provides a beautiful rustic charm.',
    color: 'Beige / Tan',
    finish: 'Honed & Filled / Tumbled',
    thickness: '18mm',
    applications: ['Pool Coping', 'Exterior Pavers', 'Bathroom Walls', 'Flooring'],
    image: 'images/travertine.png',
  }
];
