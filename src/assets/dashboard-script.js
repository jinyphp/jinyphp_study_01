// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard
    initializeDashboard();

    // Add fade-in effect to main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    // Initialize dropdown menus
    initializeDropdowns();

    // Update active navigation
    updateActiveNavigation();
});

// Initialize Dashboard
function initializeDashboard() {
    // Set current user info (can be dynamic)
    updateUserProgress();

    // Initialize course progress
    initializeCourseProgress();
}

// Sidebar Functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

// Dropdown Menu Functions
function initializeDropdowns() {
    const dropdownTriggers = document.querySelectorAll('[data-dropdown]');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownId = this.getAttribute('data-dropdown');
            toggleDropdown(dropdownId);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-dropdown]') && !e.target.closest('.dropdown-menu')) {
            closeAllDropdowns();
        }
    });
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        // Close other dropdowns first
        closeAllDropdowns();

        // Toggle current dropdown
        dropdown.classList.toggle('show');

        // Update arrow icon
        const trigger = document.querySelector(`[data-dropdown="${dropdownId}"]`);
        if (trigger) {
            const arrow = trigger.querySelector('.dropdown-arrow');
            if (arrow) {
                arrow.classList.toggle('rotated');
            }
        }
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    const arrows = document.querySelectorAll('.dropdown-arrow');

    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });

    arrows.forEach(arrow => {
        arrow.classList.remove('rotated');
    });
}

// Navigation Functions
function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item, .nav-subitem, .nav-link');

    navItems.forEach(item => {
        item.classList.remove('active');

        const href = item.getAttribute('href');
        if (href && (href === currentPath || currentPath.includes(href.replace(/\/$/, '')))) {
            item.classList.add('active');

            // If it's a subitem, also activate parent dropdown
            if (item.classList.contains('nav-subitem')) {
                const parentDropdown = item.closest('.dropdown-menu');
                if (parentDropdown) {
                    const triggerId = parentDropdown.id;
                    const trigger = document.querySelector(`[data-dropdown="${triggerId}"]`);
                    if (trigger) {
                        trigger.classList.add('active');
                        parentDropdown.classList.add('show');
                    }
                }
            }
        }
    });
}

// Progress Functions
function updateUserProgress() {
    // This can be made dynamic with real user data
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progress = 35; // Example: 35% progress
        progressBar.style.width = progress + '%';
    }

    // Update progress text
    const progressText = document.querySelector('.progress-percentage');
    if (progressText) {
        progressText.textContent = '35%';
    }
}

function initializeCourseProgress() {
    const progressSteps = document.querySelectorAll('.progress-step');

    progressSteps.forEach((step, index) => {
        setTimeout(() => {
            if (index < 3) { // First 3 steps completed
                step.classList.add('completed');
            } else if (index === 3) { // Current step
                step.classList.add('current');
            }
        }, index * 100);
    });
}

// Search Function
function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
}

function performSearch(query) {
    if (query.trim()) {
        console.log('검색어:', query);
        // 실제 검색 로직 구현
        // 예: 페이지 리다이렉트 또는 AJAX 검색
    }
}

// Notification Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Course Card Functions
function navigateToCourse(courseUrl) {
    window.location.href = courseUrl;
}

// Statistics Animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;

        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            stat.textContent = Math.round(currentValue);
        }, 20);
    });
}

// Utility Functions
function formatDate(date) {
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme Toggle (if needed)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Mobile Responsive Functions
function handleResize() {
    const width = window.innerWidth;

    if (width >= 1024) {
        closeSidebar();
    }
}

// Initialize search on load
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    loadTheme();

    // Animate stats when page loads
    setTimeout(animateStats, 500);
});

// Handle window resize
window.addEventListener('resize', debounce(handleResize, 250));

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close sidebar/dropdowns
    if (e.key === 'Escape') {
        closeSidebar();
        closeAllDropdowns();
    }

    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Learning Path Creation
function createLearningPath() {
    showNotification('학습 경로 생성 기능이 곧 제공될 예정입니다.', 'info');
}

// Course Management
function enrollInCourse(courseId) {
    // Simulate course enrollment
    showNotification('코스에 등록되었습니다!', 'success');
}

function markLessonComplete(lessonId) {
    // Simulate lesson completion
    const lesson = document.querySelector(`[data-lesson="${lessonId}"]`);
    if (lesson) {
        lesson.classList.add('completed');
        updateUserProgress();
        showNotification('레슨이 완료되었습니다!', 'success');
    }
}