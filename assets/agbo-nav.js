document.addEventListener('DOMContentLoaded', function() {
  // Add padding to the main content to account for the fixed header
  const headerHeight = document.querySelector('.header-wrapper').offsetHeight;
  document.getElementById('MainContent').style.paddingTop = headerHeight + 'px';
  
  // Add event listener for window resize to update the padding
  window.addEventListener('resize', function() {
    const headerHeight = document.querySelector('.header-wrapper').offsetHeight;
    document.getElementById('MainContent').style.paddingTop = headerHeight + 'px';
  });
  
  // Add Barlow Condensed font if not already included
  if (!document.getElementById('barlow-condensed-font')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'barlow-condensed-font';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap';
    document.head.appendChild(fontLink);
  }
  
  // Set the Shop link as active
  const menuItems = document.querySelectorAll('.header__menu-item');
  menuItems.forEach(item => {
    // Check if the text content includes "Shop" or if the href contains collections or products
    if (item.textContent.trim().toLowerCase() === 'shop' || 
        item.href && (item.href.includes('/collections') || item.href.includes('/products'))) {
      item.classList.add('header__menu-item--active');
    }
  });
  
  // Reorganize the header elements
  const header = document.querySelector('.header');
  const headerIcons = document.querySelector('.header__icons');
  const headerMenu = document.querySelector('.header__inline-menu');
  
  if (header && (headerIcons || headerMenu)) {
    // Create a right side container if it doesn't exist
    let rightSide = document.querySelector('.header__right-side');
    if (!rightSide) {
      rightSide = document.createElement('div');
      rightSide.className = 'header__right-side';
      
      // Insert the right side container after the logo
      const logo = header.querySelector('.header__heading-logo-wrapper') || 
                  header.querySelector('.header__heading');
      if (logo) {
        header.insertBefore(rightSide, logo.nextSibling);
      } else {
        header.appendChild(rightSide);
      }
      
      // Move the menu into the right side container if it exists
      if (headerMenu) {
        rightSide.appendChild(headerMenu);
      }
      
      // Create a container for all icons if it doesn't exist
      let iconsContainer = document.querySelector('.header__icons-container');
      if (!iconsContainer) {
        iconsContainer = document.createElement('div');
        iconsContainer.className = 'header__icons-container';
        rightSide.appendChild(iconsContainer);
        
        // Use the existing social icons container
        const socialIcons = document.querySelector('.header-social-icons');
        if (socialIcons) {
          iconsContainer.appendChild(socialIcons);
        }
        
        // Move the Shopify icons into the container
        if (headerIcons) {
          iconsContainer.appendChild(headerIcons);
        }
      }
    }
  }
});

