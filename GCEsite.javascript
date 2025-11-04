document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 3000; // 3 seconds

    // Clone the first slide and append to end for seamless looping
    const firstClone = slides[0].cloneNode(true);
    firstClone.classList.remove('active');
    slider.appendChild(firstClone);

    // Initialize slider
    function initSlider() {
        if (slides.length > 0) {
            slides[currentSlide].classList.add('active');
            startSlideShow();
        }
    }

    // Move to next slide with smooth continuous animation
    function nextSlide() {
        const current = document.querySelector('.slide.active');
        const next = current.nextElementSibling || slides[0];
        
        current.style.transform = 'translateX(-100%)';
        current.classList.remove('active');
        
        next.style.transform = 'translateX(0)';
        next.classList.add('active');

        // If we've reached the clone, reset position without animation
        if (!next.nextElementSibling) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slides[0].style.transform = 'translateX(0)';
                slides[0].classList.add('active');
                firstClone.style.transform = 'translateX(100%)';
                firstClone.classList.remove('active');
                
                // Force reflow
                void slider.offsetWidth;
                
                slider.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }
    }

    // Move to previous slide
    function prevSlide() {
        const current = document.querySelector('.slide.active');
        const prev = current.previousElementSibling || slides[slides.length - 1];
        
        current.style.transform = 'translateX(100%)';
        current.classList.remove('active');
        
        prev.style.transform = 'translateX(0)';
        prev.classList.add('active');
    }

    // Start automatic slideshow
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Reset automatic slideshow timer
    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideShow();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideShow();
    });

    // Initialize the slider
    initSlider();
});





//_________




document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.updatesdiv2');
    if (!container) return;

    // Get all original items
    const originalItems = container.querySelectorAll('.updatesdiv2inside');
    if (originalItems.length === 0) return;

    // Clone all items and append to container for seamless looping
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    // Set container styles
    container.style.height = '600px';
    container.style.overflow = 'hidden';
    container.style.position = 'relative';

    // Animation variables - adjusted for smoother scrolling
    let currentPosition = 0;
    let currentItemIndex = 0;
    const scrollStep = 15; // Reduced from 50 for smoother scroll
    const pauseBetweenItems = 3000; // Increased pause to 3 seconds
    let isScrolling = true;
    let animationId;
    let pauseTimeout;
    let startTime;
    let duration = 1000; // Animation duration in ms per item

    // Get array of all items (original + clones)
    const allItems = Array.from(container.querySelectorAll('.updatesdiv2inside'));

    function scrollNextItem() {
        if (!isScrolling) return;

        const currentItem = allItems[currentItemIndex];
        if (!currentItem) return;

        const itemHeight = currentItem.offsetHeight;
        const targetPosition = currentPosition + itemHeight;
        startTime = performance.now();

        function animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother movement
            const easeProgress = easeOutQuad(progress);
            currentPosition = easeProgress * itemHeight + (targetPosition - itemHeight);
            
            container.scrollTop = currentPosition;
            
            if (progress < 1) {
                animationId = requestAnimationFrame(animateScroll);
            } else {
                // Move to next item after pause
                currentItemIndex++;
                
                // Check if we need to loop (reached end of original items)
                if (currentItemIndex >= originalItems.length) {
                    // Remove scrolled items
                    for (let i = 0; i < originalItems.length; i++) {
                        if (container.firstChild) {
                            container.removeChild(container.firstChild);
                        }
                    }
                    
                    // Reset positions
                    currentPosition = 0;
                    currentItemIndex = 0;
                    container.scrollTop = 0;
                    
                    // Rebuild item references
                    allItems.splice(0, originalItems.length);
                }
                
                // Longer pause before next item
                pauseTimeout = setTimeout(scrollNextItem, pauseBetweenItems);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Easing function for smooth scrolling
    function easeOutQuad(t) {
        return t * (2 - t);
    }

    // Start scrolling
    scrollNextItem();

    // Pause on hover
    container.addEventListener('mouseenter', () => {
        isScrolling = false;
        cancelAnimationFrame(animationId);
        clearTimeout(pauseTimeout);
    });
    
    container.addEventListener('mouseleave', () => {
        isScrolling = true;
        scrollNextItem();
    });
});


//_______marquee effect div 3 moving div

document.addEventListener('DOMContentLoaded', function() {
    const marqueeContainer = document.querySelector('.marquee-container');
    const marqueeLink = document.querySelector('.marquee-link');
    
    if (!marqueeContainer || !marqueeLink) return;

    // Clone the element for seamless looping
    //const clone = marqueeLink.cloneNode(true); //stpped cloning here
    //marqueeContainer.appendChild(clone);  //stpped cloning here

    // Set container styles
    marqueeContainer.style.overflow = 'hidden';
    marqueeContainer.style.whiteSpace = 'nowrap';
    marqueeContainer.style.position = 'relative';
    marqueeContainer.style.width = '100%';

    // Set initial position (start from right)
    let position = marqueeContainer.offsetWidth;
    const speed = 1; // Pixels per frame (adjust for speed)
    let animationId;

    function animateMarquee() {
        position -= speed;
        
        // Reset position when first element completely exits
        if (position < -marqueeLink.offsetWidth) {
            position = marqueeContainer.offsetWidth;
        }
        
        marqueeContainer.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animateMarquee);
    }

    // Start animation
    animateMarquee();

    // Pause on hover
    marqueeContainer.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });
    
    marqueeContainer.addEventListener('mouseleave', () => {
        animateMarquee();
    });
});
