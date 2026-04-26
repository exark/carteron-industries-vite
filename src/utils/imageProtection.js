/**
 * Image Protection Utility
 * Prevents right-click, drag, and download of images across the website
 */

export const initImageProtection = () => {
  // Prevent right-click on all images
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // Prevent dragging of images
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // Prevent keyboard shortcuts for saving images (Ctrl+S on images)
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S / Cmd+S when focused on an image
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }
  });

  // Add protection to dynamically loaded images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'IMG') {
          protectImage(node);
        } else if (node.querySelectorAll) {
          const images = node.querySelectorAll('img');
          images.forEach(protectImage);
        }
      });
    });
  });

  // Start observing the document for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Protect existing images
  document.querySelectorAll('img').forEach(protectImage);
};

/**
 * Apply protection to a single image element
 */
const protectImage = (img) => {
  // Prevent right-click
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent dragging
  img.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Set attributes
  img.setAttribute('draggable', 'false');
  img.style.pointerEvents = 'auto';
};
