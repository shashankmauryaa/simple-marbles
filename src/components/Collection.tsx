import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Collection.css';

const collections = [
  {
    id: 'carrara',
    title: 'Classic Carrara',
    description: 'Soft feathery grey veining on pristine white. The quintessential Italian marble for timeless interiors.',
    image: `${import.meta.env.BASE_URL}images/carrara.png`,
  },
  {
    id: 'onyx',
    title: 'Luminous Onyx',
    description: 'Translucent and warm. A glowing masterpiece of nature that commands attention in any space.',
    image: `${import.meta.env.BASE_URL}images/onyx.png`,
  },
  {
    id: 'travertine',
    title: 'Warm Travertine',
    description: 'Subtle textures and earthy tones. Perfect for creating inviting, luxurious, and organic environments.',
    image: `${import.meta.env.BASE_URL}images/travertine.png`,
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Collection() {
  return (
    <section id="collection" className="section collection-section">
      <div className="container">
        <motion.div 
          className="collection-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Curated Selection</h2>
          <p className="collection-subtitle">Each slab is hand-selected by our master craftsmen for its unique character and structural perfection.</p>
        </motion.div>

        <motion.div 
          className="collection-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((item) => (
            <motion.div key={item.id} className="collection-card" variants={itemVariants}>
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-overlay glass">
                  <span className="view-details">
                    View Details <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
