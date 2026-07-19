import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { collections } from '../data/collections';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const basePath = import.meta.env.BASE_URL;
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  const product = collections.find(c => c.id === id);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Catalogue not found</h2>
        <a href="/" className="btn" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Return Home</a>
      </div>
    );
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="product-detail-page">
      <div className="product-hero">
        <img src={`${basePath}${product.image}`} alt={product.title} className="product-hero-image" />
        <a href="/" onClick={handleBack} className="back-btn glass">
          <ArrowLeft size={20} /> Back to Catalogues
        </a>
      </div>
      
      <div className="product-info-container container">
        <div className="product-info-header">
          <span className="product-category">{product.category} Collection</span>
          <h1>{product.title}</h1>
        </div>
        
        <div className="product-details-grid">
          <div className="product-description">
            <h3>Overview</h3>
            <p>{product.description}</p>

            {product.videos && product.videos.length > 0 && (
              <div className="product-media-videos">
                {product.videos.map((vid, idx) => (
                  <video key={`vid-${idx}`} className="product-video" controls muted loop preload="metadata">
                    <source src={`${basePath}${vid}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            )}
            
            {product.images && product.images.length > 1 && (
              <div className="product-media-images">
                <h3>Gallery</h3>
                <div className="media-image-grid">
                  {product.images.map((img, idx) => (
                    <img key={`img-${idx}`} src={`${basePath}${img}`} alt={`${product.title} gallery ${idx + 1}`} className="gallery-img" loading="lazy" />
                  ))}
                </div>
              </div>
            )}
            
            <div className="applications-section">
              <h3>Applications</h3>
              <div className="applications-tags">
                {product.applications.map((app, index) => (
                  <span key={index} className="app-tag">{app}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="product-specs glass">
            <h3>Specifications</h3>
            <ul>
              <li><strong>Product Code:</strong> {product.code}</li>
              <li><strong>Color:</strong> {product.color}</li>
              <li><strong>Finish:</strong> {product.finish}</li>
              <li><strong>Thickness:</strong> {product.thickness}</li>
              <li><strong>Material:</strong> {product.category}</li>
            </ul>
            
            <a 
              href={`https://wa.me/84948973901?text=I'm%20interested%20in%20${encodeURIComponent(product.title)}%20(${product.code}).`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn whatsapp-btn"
            >
              <MessageCircle size={20} /> Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
