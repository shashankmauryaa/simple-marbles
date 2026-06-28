import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Collection.css';

export const collections = [
  {
    id: 'carrara',
    title: 'Classic Carrara',
    category: 'White',
    description: 'Soft feathery grey veining on pristine white. The quintessential Italian marble for timeless interiors.',
    thickness: '18mm',
    image: 'images/carrara.png',
  },
  {
    id: 'onyx',
    title: 'Luminous Onyx',
    category: 'Warm',
    description: 'Translucent and warm. A glowing masterpiece of nature that commands attention in any space.',
    thickness: '20mm',
    image: 'images/onyx.png',
  },
  {
    id: 'travertine',
    title: 'Warm Travertine',
    category: 'Warm',
    description: 'Subtle textures and earthy tones. Perfect for creating inviting, luxurious, and organic environments.',
    thickness: '18mm',
    image: 'images/travertine.png',
  }
];

const categories = ['All', 'White', 'Warm', 'Dark'];

export default function Collection() {
  const basePath = import.meta.env.BASE_URL;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCollections = collections.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

        <div className="collection-controls">
          <div className="search-bar glass">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search catalogues..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="collection-grid">
          <AnimatePresence>
            {filteredCollections.map((item) => (
              <motion.div 
                key={item.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="collection-card"
              >
                <Link to={`/product/${item.id}`} className="card-link-wrapper">
                  <div className="card-image-wrapper">
                    <img src={`${basePath}${item.image}`} alt={item.title} className="card-image" />
                    <div className="card-overlay glass">
                      <span className="view-details">
                        View Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-tags">
                      <span className="card-category">{item.category}</span>
                      <span className="card-thickness">{item.thickness}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredCollections.length === 0 && (
            <div className="no-results">
              <p>No marbles found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
