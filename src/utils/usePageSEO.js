import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageSEO = (seoData) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update title
    if (seoData.title) {
      document.title = seoData.title;
    }
    
    // Update meta description
    if (seoData.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      }
    }
    
    // Update Open Graph tags
    if (seoData.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seoData.ogTitle);
      }
    }
    
    if (seoData.ogDescription) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoData.ogDescription);
      }
    }
    
    // Update Twitter tags
    if (seoData.twitterTitle) {
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', seoData.twitterTitle);
      }
    }
    
    if (seoData.twitterDescription) {
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', seoData.twitterDescription);
      }
    }
  }, [seoData, location.pathname]);
};

export default usePageSEO;