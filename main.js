console.log("Skillbee Futurelab Website Loaded.");


document.addEventListener('DOMContentLoaded', () => {
    
    
    const modal = document.getElementById('registrationModal');
    const coursesOverlay = document.getElementById('coursesOverlay');

    
    window.openModal = function() {
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function() {
        if (modal) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    window.openCourses = function() {
    const coursesOverlay = document.getElementById('coursesOverlay');
    if (coursesOverlay) {
        
        coursesOverlay.classList.remove('hidden');
        
        
        coursesOverlay.style.display = 'block';
        
        
        document.body.style.overflow = 'hidden';
        
        console.log("Courses Overlay Opened Successfully");
    } else {
        console.error("Critical Error: The ID 'coursesOverlay' was not found in your HTML.");
    }
};

window.closeCourses = function() {
    const coursesOverlay = document.getElementById('coursesOverlay');
    if (coursesOverlay) {
        coursesOverlay.classList.add('hidden');
        coursesOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};
    
    window.onclick = function(event) {
        if (event.target == modal) closeModal();
        if (event.target == coursesOverlay) closeCourses();
    };
});