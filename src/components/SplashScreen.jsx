import { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to handle when the window is fully loaded
    const handleLoad = () => {
      // Set a small timeout to ensure animations work properly
      setTimeout(() => {
        setLoading(false);
      }, 1500); // 1.5 second delay before starting fade out for smoother experience
    };

    // Check if window is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="splash-screen">
          <div className="splash-content">
            <img 
              src="/images/Logo.png" 
              alt="Carteron Industries Logo" 
              className="splash-logo"
            />
          </div>
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default SplashScreen;
