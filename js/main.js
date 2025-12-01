/* 
    MAIN JAVASCRIPT
    Handles grid generation, modal interactions, X-ray video logic, and Image Carousels.
*/

// --- 1. RENDER PROJECTS GRID ---
const grid = document.getElementById('projects-grid');

if (typeof projectData !== 'undefined') {
    projectData.forEach(p => {
        const card = document.createElement('div');
        card.className = "project-card group cursor-pointer";
        card.onclick = () => openModal(p.id);
        card.innerHTML = `
            <div class="relative overflow-hidden rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                <div class="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 overlay-grid pointer-events-none"></div>
                <div class="h-64 overflow-hidden border-b border-slate-100 dark:border-slate-700 relative">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute bottom-4 right-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">${p.title}</h3>
                            <p class="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">${p.subtitle}</p>
                        </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">${p.shortDesc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${p.tags.map(tag => `<span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded border border-slate-200 dark:border-slate-700">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- 2. MODAL LOGIC & CAROUSEL ---
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const body = document.body;
let stopGliderLoop = false; 
let carouselInterval = null; 

function openModal(id) {
    const p = projectData.find(proj => proj.id === id);
    if(!p) return;

    // --- CAROUSEL HTML GENERATION ---
    let galleryHTML = '';
    if(p.gallery && p.gallery.length > 0) {
        galleryHTML = `
            <!-- Gallery Container: Fixed Height (h-[30rem]) + Dark Background to prevent jumping -->
            <div id="carousel-${id}" class="relative w-full h-[20rem] md:h-[30rem] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-md mt-6 group select-none">
                
                ${p.gallery.map((img, index) => `
                    <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-500 flex items-center justify-center bg-black" data-index="${index}">
                        <!-- Image: Object-Contain ensures the whole image fits without cropping -->
                        <img src="${img.url}" class="w-full h-full object-contain" alt="Slide ${index}">
                        
                        <!-- Caption Bar: Gradient background + Padding Bottom for Dots -->
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-12 px-6">
                            <p class="text-white text-sm md:text-base font-medium text-center leading-relaxed drop-shadow-md">
                                ${img.caption}
                            </p>
                        </div>
                    </div>
                `).join('')}
                
                <!-- Navigation Arrows -->
                <button onclick="moveSlide(-1)" class="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onclick="moveSlide(1)" class="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                
                <!-- Indicators (Dots): Positioned at the very bottom, separated from text -->
                <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    ${p.gallery.map((_, index) => `
                        <button onclick="setSlide(${index})" class="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white transition-all indicator shadow-sm" data-index="${index}"></button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let primaryMedia = p.media ? p.media : '';
    let secondaryMedia = (p.media && p.gallery) ? galleryHTML : (p.media ? '' : galleryHTML);

    // Inject Content
    modalContent.innerHTML = `
        <div class="lg:col-span-7">
            <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">${p.title}</h2>
            <p class="font-mono text-sky-600 dark:text-sky-400 text-sm mb-8 uppercase tracking-widest">${p.subtitle}</p>
            
            <div class="mb-8 space-y-6">
                ${primaryMedia}
                ${secondaryMedia}
            </div>

            <div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                ${p.fullDesc}
            </div>
        </div>

        <div class="lg:col-span-5">
            <div class="sticky top-10 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full"></span> Technical Data
                </h3>
                <div class="space-y-4 font-mono text-sm">
                    ${p.techSpecs.map(spec => `
                        <div class="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                            <span class="text-slate-500">${spec.label}</span>
                            <span class="text-slate-900 dark:text-slate-200 text-right font-medium">${spec.value}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 class="text-xs font-bold text-slate-500 mb-3 uppercase">Core Competencies</h4>
                    <div class="flex flex-wrap gap-2">
                        ${p.tags.map(tag => `<span class="px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-xs font-bold rounded border border-sky-100 dark:border-sky-800">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Open Animation
    modal.classList.add('active');
    body.style.overflow = 'hidden'; 
    
    gsap.to(modalContent, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out"
    });

    if (id === 'glider') setTimeout(initGliderLogic, 100);
    if (p.gallery) setTimeout(() => initCarousel(), 100);
}

function closeModal() {
    modal.classList.remove('active');
    body.style.overflow = 'auto'; 
    stopGliderLoop = true;
    if(carouselInterval) clearInterval(carouselInterval);

    gsap.set(modalContent, { opacity: 0, y: 30 });
    setTimeout(() => {
        modalContent.innerHTML = '';
    }, 500);
}

// --- CAROUSEL ENGINE ---
let currentSlide = 0;
let totalSlides = 0;

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if(slides.length === 0) return;
    
    currentSlide = 0;
    totalSlides = slides.length;
    
    updateCarouselUI();
    
    // Auto Play settings (4 seconds)
    if(carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => moveSlide(1), 4000); 
}

function moveSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    updateCarouselUI();
    // Reset timer on manual interaction
    if(carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => moveSlide(1), 4000);
}

function setSlide(n) {
    currentSlide = n;
    updateCarouselUI();
    if(carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => moveSlide(1), 4000);
}

function updateCarouselUI() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if(slides.length === 0) return;

    slides.forEach((slide, index) => {
        // Toggle opacity for smooth fade effect
        slide.style.opacity = index === currentSlide ? '1' : '0';
        // Z-index ensures the active slide is clickable/on top
        slide.style.zIndex = index === currentSlide ? '10' : '0';
    });

    indicators.forEach((dot, index) => {
        if(index === currentSlide) {
            dot.classList.add('bg-sky-500', 'scale-125'); // Highlight active dot
            dot.classList.remove('bg-white/30');
        } else {
            dot.classList.remove('bg-sky-500', 'scale-125');
            dot.classList.add('bg-white/30');
        }
    });
}

// --- GLIDER LOGIC (Unchanged) ---
function initGliderLogic() {
    const container = document.getElementById('glider-video-container');
    const vidExt = document.getElementById('vid-external');
    const vidInt = document.getElementById('vid-internal');
    const clipper = document.getElementById('vid-clipper');
    const handle = document.getElementById('slider-handle');
    const playBtn = document.getElementById('play-btn');
    const iconPlay = document.getElementById('icon-play');
    const iconPause = document.getElementById('icon-pause');
    const seekBar = document.getElementById('seek-bar');

    if(!container || !vidExt || !vidInt) return;

    let isDragging = false;
    let isPlaying = false;
    stopGliderLoop = false;

    function resizeVideos() {
        if (container && vidInt) {
            vidInt.style.width = container.clientWidth + 'px';
            vidInt.style.height = container.clientHeight + 'px';
        }
    }
    const resizeObserver = new ResizeObserver(() => resizeVideos());
    resizeObserver.observe(container);
    window.addEventListener('resize', resizeVideos);
    resizeVideos(); 

    function setSliderPos(x) {
        const rect = container.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        clipper.style.width = percentage + "%";
        handle.style.left = percentage + "%";
    }

    container.addEventListener('mousedown', (e) => {
        if(e.target.closest('#play-btn') || e.target.closest('#seek-bar')) return;
        isDragging = true;
        setSliderPos(e.clientX);
    });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => { if(isDragging) setSliderPos(e.clientX); });

    container.addEventListener('touchstart', (e) => {
        if(e.target.closest('#play-btn') || e.target.closest('#seek-bar')) return;
        isDragging = true;
        setSliderPos(e.touches[0].clientX);
    });
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => { if(isDragging) setSliderPos(e.touches[0].clientX); });

    playBtn.addEventListener('click', () => {
        if (vidExt.paused) {
            vidExt.play();
            vidInt.play();
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
            isPlaying = true;
        } else {
            vidExt.pause();
            vidInt.pause();
            iconPlay.classList.remove('hidden');
            iconPause.classList.add('hidden');
            isPlaying = false;
        }
    });

    seekBar.addEventListener('input', () => {
        const time = (seekBar.value / 100) * vidExt.duration;
        vidExt.currentTime = time;
        vidInt.currentTime = time;
    });

    function syncLoop() {
        if (stopGliderLoop) return;
        if (isPlaying) {
            if (vidExt.duration) seekBar.value = (vidExt.currentTime / vidExt.duration) * 100;
            if (Math.abs(vidExt.currentTime - vidInt.currentTime) > 0.1) {
                vidInt.currentTime = vidExt.currentTime;
            }
        }
        requestAnimationFrame(syncLoop);
    }
    requestAnimationFrame(syncLoop);

    setTimeout(() => {
        vidExt.play().then(() => {
            vidInt.play();
            isPlaying = true;
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
        }).catch(() => console.log("Autoplay blocked"));
    }, 500);
}

// Close Modal on Esc
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Tag Styling
document.querySelectorAll('.skill-tag').forEach(el => {
    el.className = "px-3 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-sm font-medium rounded border border-sky-100 dark:border-sky-900/50";
});

// --- 3. DARK MODE ---
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const htmlElement = document.documentElement;

if (localStorage.theme === 'dark') {
    htmlElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
} else {
    htmlElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

// --- 4. CANVAS ANIMATION ---
const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');
let width, height;
const nodes = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Node {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw(isDark) {
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.5)' : 'rgba(51, 65, 85, 0.3)'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
}
for (let i = 0; i < 35; i++) nodes.push(new Node());

function animate() {
    const isDark = htmlElement.classList.contains('dark');
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.15)' : 'rgba(15, 23, 42, 0.08)';
    ctx.lineWidth = 1;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw(isDark);
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            if (Math.sqrt(dx*dx + dy*dy) < 150) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
animate();


// --- 6. LOADING SCREEN LOGIC ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const percentText = document.getElementById('loader-percent');
    const progressBar = document.getElementById('loader-bar');
    const statusText = document.getElementById('loader-text');
    
    const messages = [
        "Calibrating...",
        "Loading Assets...",
        "System Ready."
    ];

    document.body.style.overflow = 'hidden';

    let progress = 0;
    let messageIndex = 0;

    // Cycle text faster (every 200ms)
    const textInterval = setInterval(() => {
        statusText.innerText = messages[messageIndex % messages.length];
        messageIndex++;
    }, 200);

    // SPEED UPDATE: Faster interval (15ms) and larger increments
    const loadInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5; // Jumps by 5-15% at a time
        
        if (progress > 100) {
            progress = 100;
            clearInterval(loadInterval);
            clearInterval(textInterval);
            statusText.innerText = "Ready.";
            
            // Reduced delay before opening (200ms)
            setTimeout(hideLoader, 200);
        }

        percentText.innerText = progress;
        progressBar.style.width = `${progress}%`;
    }, 15);

    function hideLoader() {
        const tl = gsap.timeline();

        // 1. Quick fade out of loader text
        tl.to([percentText, statusText, progressBar.parentElement, document.querySelector('#loader svg')], {
            opacity: 0,
            duration: 0.2,
            stagger: 0.05
        })
        // 2. Blast door opens faster (0.5s)
        .to(loader, {
            yPercent: -100,
            duration: 0.5,
            ease: "power4.inOut",
            onComplete: () => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto'; 
            }
        })
        // 3. FIX: Animate Hero TO visible (Since it starts as opacity-0 in HTML)
        .to(".gsap-hero", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3"); // Start slightly before blast door finishes
    }
});