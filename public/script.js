// Theme toggle functionality
// Image Modal functionality
function initImageModal() {
    // Get the modal element and its components
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-modal');
    
    // Function to open the modal with the clicked image
    function openModal(imgElement) {
        modal.style.display = 'block';
        modalImg.src = imgElement.src;
        captionText.textContent = imgElement.alt || '';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Add click event listeners to all images in the travel section
    document.querySelectorAll('.photo-grid img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openModal(this);
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the image modal functionality
    initImageModal();
    
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }
    
    // Theme toggle event listener
    themeBtn.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Smooth scrolling for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add subtle animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('.section, .experience-item, .education-item, .publication-item, .achievement-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for interactive elements
    document.querySelectorAll('.experience-item, .education-item, .publication-item, .achievement-item, .skill-category').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
    
    // Photo modal functionality
    const travelPhotos = document.querySelectorAll('.travel-photo');
    let photoModal = null;
    
    // Create modal if it doesn't exist
    function createPhotoModal() {
        if (!photoModal) {
            photoModal = document.createElement('div');
            photoModal.className = 'photo-modal';
            photoModal.innerHTML = `
                <span class="modal-close">&times;</span>
                <img class="modal-content" src="" alt="">
            `;
            document.body.appendChild(photoModal);
            
            // Close modal when clicking the X or outside the image
            photoModal.addEventListener('click', function(e) {
                if (e.target === photoModal || e.target.classList.contains('modal-close')) {
                    closePhotoModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && photoModal.classList.contains('active')) {
                    closePhotoModal();
                }
            });
        }
    }
    
    function openPhotoModal(imageSrc, imageAlt) {
        createPhotoModal();
        const modalImg = photoModal.querySelector('.modal-content');
        modalImg.src = imageSrc;
        modalImg.alt = imageAlt;
        photoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closePhotoModal() {
        if (photoModal) {
            photoModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    // Add click event to all travel photos
    travelPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            openPhotoModal(this.src, this.alt);
        });
    });

    // Toggle folder contents
    function toggleFolder(folder) {
        // Toggle active class on the clicked folder
        folder.classList.toggle('active');
        
        // Close other open folders
        const allFolders = document.querySelectorAll('.folder');
        allFolders.forEach(f => {
            if (f !== folder && f.classList.contains('active')) {
                f.classList.remove('active');
            }
        });
    }

    // Close folder when clicking outside
    document.addEventListener('click', (e) => {
        const folders = document.querySelectorAll('.folder');
        let isClickInside = false;
        
        folders.forEach(folder => {
            if (folder.contains(e.target)) {
                isClickInside = true;
            }
        });
        
        if (!isClickInside) {
            folders.forEach(folder => {
                folder.classList.remove('active');
            });
        }
    });
    
    // Add animation to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        observer.observe(card);
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Initialize travel grid
    initTravelGrid();
});
