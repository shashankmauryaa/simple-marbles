import { motion } from 'framer-motion';
import './Gallery.css';

const projects = [
  { id: 1, image: 'images/exhibits/indian_temple_white.png', title: 'Grand Temple' },
  { id: 2, image: 'images/exhibits/indian_bathroom_onyx.png', title: 'Luxury En Suite' },
  { id: 3, image: 'images/exhibits/indian_hotel_black.png', title: 'Hotel Lobby' },
  { id: 4, image: 'images/exhibits/indian_courtyard_onyx.png', title: 'Private Courtyard' },
  { id: 5, image: 'images/exhibits/indian_penthouse_green.png', title: 'Skyline Penthouse' },
  { id: 6, image: 'images/exhibits/indian_home_white.png', title: 'Modern Residence' },
];

export default function Gallery() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Projects Gallery</h2>
          <p className="gallery-subtitle">A showcase of unparalleled elegance. Witness how our premium stone transforms spaces into masterpieces.</p>
        </motion.div>

        <div className="gallery-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={`${basePath}${project.image}`} alt={project.title} />
              <div className="gallery-overlay glass">
                <span>{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
