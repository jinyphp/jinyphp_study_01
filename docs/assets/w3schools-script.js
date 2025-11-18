// W3Schools Style JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지에 맞는 메뉴 활성화
    activateCurrentPage();

    // 현재 활성화된 메뉴 그룹 열기
    openActiveMenuGroup();
});

// 사이드바 토글 (모바일)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay') || createOverlay();

    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

// 오버레이 생성
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.onclick = closeSidebar;
    document.body.appendChild(overlay);
    return overlay;
}

// 사이드바 닫기
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    sidebar.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
}

// 메뉴 토글
function toggleMenu(menuId) {
    const menuItems = document.getElementById(menuId);
    const menuTitle = menuItems.previousElementSibling;

    // 다른 모든 메뉴 닫기
    const allMenuItems = document.querySelectorAll('.menu-items');
    const allMenuTitles = document.querySelectorAll('.menu-title');

    allMenuItems.forEach(item => {
        if (item.id !== menuId) {
            item.classList.remove('show');
        }
    });

    allMenuTitles.forEach(title => {
        if (title.nextElementSibling.id !== menuId) {
            title.classList.remove('active');
        }
    });

    // 현재 메뉴 토글
    menuItems.classList.toggle('show');
    menuTitle.classList.toggle('active');
}

// 현재 페이지 활성화
function activateCurrentPage() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.classList.remove('active');

        // 현재 페이지와 일치하는 메뉴 아이템 찾기
        if (item.getAttribute('href') === currentPath ||
            currentPath.includes(item.getAttribute('href').replace('.html', '/'))) {
            item.classList.add('active');
        }
    });

    // 상단 네비게이션 탭도 활성화
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.classList.remove('active');

        if (tab.getAttribute('href') === currentPath ||
            currentPath.includes(tab.getAttribute('href'))) {
            tab.classList.add('active');
        }
    });
}

// 활성화된 메뉴 그룹 열기
function openActiveMenuGroup() {
    const activeItem = document.querySelector('.menu-item.active');
    if (activeItem) {
        const menuGroup = activeItem.closest('.menu-items');
        if (menuGroup) {
            menuGroup.classList.add('show');
            menuGroup.previousElementSibling.classList.add('active');
        }
    }
}

// 스무스 스크롤
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 코드 복사 기능
function copyCode(button) {
    const codeBlock = button.nextElementSibling.querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(function() {
        button.textContent = 'Copied!';
        button.classList.add('copied');

        setTimeout(function() {
            button.textContent = 'Copy';
            button.classList.remove('copied');
        }, 2000);
    });
}

// 목차 자동 생성
function generateTOC() {
    const headings = document.querySelectorAll('.content-wrapper h2, .content-wrapper h3');
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';

    if (headings.length > 0) {
        const title = document.createElement('h4');
        title.textContent = '목차';
        toc.appendChild(title);

        const list = document.createElement('ul');

        headings.forEach((heading, index) => {
            // ID가 없으면 생성
            if (!heading.id) {
                heading.id = 'heading-' + index;
            }

            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            link.onclick = function(e) {
                e.preventDefault();
                smoothScrollTo(heading.id);
            };

            if (heading.tagName === 'H3') {
                listItem.style.marginLeft = '20px';
            }

            listItem.appendChild(link);
            list.appendChild(listItem);
        });

        toc.appendChild(list);

        // 첫 번째 h2 앞에 삽입
        const firstH2 = document.querySelector('.content-wrapper h2');
        if (firstH2) {
            firstH2.parentNode.insertBefore(toc, firstH2);
        }
    }
}

// 페이지 로드 후 목차 생성
window.addEventListener('load', function() {
    generateTOC();
});

// 윈도우 리사이즈 시 사이드바 처리
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        sidebar.classList.remove('show');
        if (overlay) overlay.classList.remove('show');
    }
});

// 검색 기능 (기본)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
}

function performSearch(query) {
    // 기본 검색 구현 (향후 확장 가능)
    console.log('검색어:', query);
    // 실제 검색 로직 구현
}

// 키보드 네비게이션
document.addEventListener('keydown', function(e) {
    // ESC 키로 사이드바 닫기
    if (e.key === 'Escape') {
        closeSidebar();
    }

    // Ctrl/Cmd + K로 검색 포커스
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// 진행률 표시 (스크롤 기반)
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = scrolled + '%';
        }
    });
}

// 페이지 네비게이션 버튼 추가
function addPageNavigation() {
    const content = document.querySelector('.content-wrapper');
    if (content) {
        const navButtons = document.createElement('div');
        navButtons.className = 'nav-buttons';

        // 이전/다음 페이지 정보는 페이지에서 메타데이터로 제공되어야 함
        const prevPage = document.querySelector('meta[name="prev-page"]');
        const nextPage = document.querySelector('meta[name="next-page"]');

        if (prevPage) {
            const prevBtn = document.createElement('a');
            prevBtn.href = prevPage.content;
            prevBtn.className = 'nav-btn';
            prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i> 이전';
            navButtons.appendChild(prevBtn);
        }

        if (nextPage) {
            const nextBtn = document.createElement('a');
            nextBtn.href = nextPage.content;
            nextBtn.className = 'nav-btn';
            nextBtn.innerHTML = '다음 <i class="fas fa-chevron-right"></i>';
            navButtons.appendChild(nextBtn);
        }

        if (prevPage || nextPage) {
            content.appendChild(navButtons);
        }
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    addPageNavigation();

    // 페이지에 fade-in 효과 적용
    document.querySelector('.content-wrapper').classList.add('fade-in');
});

// 외부 링크에 타겟 블랭크 추가
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});