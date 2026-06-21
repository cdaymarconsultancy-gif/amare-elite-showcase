/* ==========================================================================
   AMARE ELITE - TIKTOK SHOWROOM INTERACTIEVE LOGICA
   ========================================================================== */

// 1. Configuratie
const WHATSAPP_NUMBER = "5978172661"; // Vul hier uw Surinaamse telefoonnummer in (zonder + of spaties)
const SLIDE_DURATION = 6500; // Tijd per slide (6.5 seconden)
const YOUTUBE_VIDEO_ID = "ZAo9VycYH1M"; // De Samba muziek video die u wilde!

// 2. Product Data (Exclusieve Brazil Collectie — allemaal $35 USD)
const products = [
    {
        id: 1,
        title: "Amare Elite Branco",
        type: "pair",
        frontImage: "images/shirt_5.jpeg",
        backImage: "images/shirt_1.jpeg",
        price: "$35 USD",
        desc: "NL: AE-schild & O Redentor watermark (voor), goud 10 & 'Deus • Fé • Brasil' (achter). PT: Escudo AE & O Redentor (frente), 10 dourado & 'Deus • Fé • Brasil' (costas). Limited Edition. Op is op!",
        likes: 1420,
        commentsCount: 34
    },
    {
        id: 2,
        title: "Amare Cuba La Vida",
        type: "pair",
        frontImage: "images/shirt_3.jpeg",
        backImage: "images/shirt_2.jpeg",
        price: "$35 USD",
        desc: "NL: 'La Vida es Bella' & klassieke auto (voor), 'Un Buen Tabaco' & Cuba vlag (achter). PT: 'La Vida es Bella' e carro clássico (frente), 'Un Buen Tabaco' e bandeira de Cuba (costas). Limited Edition. Op is op!",
        likes: 954,
        commentsCount: 18
    },
    {
        id: 3,
        title: "Amare Seleção Neymar",
        type: "pair",
        frontImage: "images/shirt_7.jpeg",
        backImage: "images/shirt_4.jpeg",
        price: "$35 USD",
        desc: "NL: Neymar Jr. actie print (voor), Neymar Jr 10 & penseelstreken (achter). PT: Neymar Jr. em ação (frente), Neymar Jr 10 e pinceladas (costas). Limited Edition. Op is op!",
        likes: 1672,
        commentsCount: 41
    },
    {
        id: 4,
        title: "Amare Rio Redentor",
        type: "pair",
        frontImage: "images/shirt_9.jpeg",
        backImage: "images/shirt_8.jpeg",
        price: "$35 USD",
        desc: "NL: O Redentor bij zonsopgang (voor), goud 10 & Corcovado berg (achter). PT: O Redentor ao amanhecer (frente), 10 dourado e morro do Corcovado (costas). Limited Edition. Op is op!",
        likes: 1034,
        commentsCount: 19
    },
    {
        id: 5,
        title: "Amare Neymar Maracanã",
        type: "pair",
        frontImage: "images/shirt_11.jpeg",
        backImage: "images/shirt_12.jpeg",
        price: "$35 USD",
        desc: "NL: Neymar careta (voor), Neymar Jr 10 & Maracanã (achter). PT: Careta do Neymar (frente), Neymar Jr 10 & estádio do Maracanã (costas). Limited Edition. Op is op!",
        likes: 2450,
        commentsCount: 92
    },
    {
        id: 6,
        title: "Amare Brasil-Suriname Flat",
        type: "single",
        frontImage: "images/shirt_6.jpeg",
        price: "$35 USD",
        desc: "NL: Split-ontwerp met vlaggen van Brazilië en Suriname. PT: Design com bandeiras do Brasil e do Suriname. Limited Edition. Op is op!",
        likes: 1250,
        commentsCount: 29
    },
    {
        id: 7,
        title: "Amare Brasil-Suriname V-Neck",
        type: "single",
        frontImage: "images/shirt_10.jpeg",
        price: "$35 USD",
        desc: "NL: Luxe V-hals split-ontwerp met vlaggen van Brazilië en Suriname. PT: Gola V com bandeiras do Brasil e do Suriname. Limited Edition. Op is op!",
        likes: 1140,
        commentsCount: 25
    }
];

// Gesimuleerde reacties per product (Nederlands, Surinaamse context)
const mockComments = {
    1: [
        { user: "rashid_prm", text: "Mooi shirt man! Heb je nog maat L in voorraad?", time: "2u" },
        { user: "amare_elite", reply: true, text: "Zeker Rashid! We hebben nog enkele stuks in L. Stuur ons een bericht via de WhatsApp-knop!", time: "1u" },
        { user: "cheryl.srd", text: "Echt een dikke kwaliteit, zit heel lekker.", time: "4u" },
        { user: "diego_09", text: "Kan ik betalen in SRD?", time: "5u" },
        { user: "amare_elite", reply: true, text: "Ja, dat kan tegen de dagkoers Diego! 🇸🇷", time: "5u" }
    ],
    2: [
        { user: "kevin_wanica", text: "Die goudkleurige letters zijn echt gevaarlijk 🔥", time: "1d" },
        { user: "sherida_v", text: "Bezorgen jullie ook in Lelydorp?", time: "1d" },
        { user: "amare_elite", reply: true, text: "Jazeker Sherida, we bezorgen in heel Paramaribo en Wanica!", time: "1d" }
    ],
    3: [
        { user: "fabian_m", text: "Perfect shirt voor de hitte hier, heerlijk ademend.", time: "12u" },
        { user: "mariska_t", text: "Zijn er ook dames maten?", time: "10u" },
        { user: "amare_elite", reply: true, text: "Dit zijn unisex modellen Mariska, vallen heel mooi!", time: "9u" }
    ]
};

// Generieke reacties om aan te vullen voor overige producten
const defaultComments = [
    { user: "streetwear_su", text: "Exclusieve fit! Blij dat dit eindelijk in Suriname te krijgen is.", time: "3u" },
    { user: "amare_elite", reply: true, text: "Dankjewel! We proberen altijd de beste kwaliteit uit Brazilië te halen! 🇧🇷🔥", time: "2u" },
    { user: "jason_p", text: "Morgen direct bestellen. $35 is echt een koopje voor deze kwaliteit.", time: "5u" },
    { user: "angel_88", text: "Op is op toch? Moet snel zijn.", time: "6u" }
];

// 3. Applicatie Staat
let currentIndex = 0;
let isAutoplay = true;
let autoplayTimer = null;
let horizontalAutoplayTimer = null;

// Touch besturing (TikTok swipe gebaren)
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Interactie Staat per product
const userLikedMap = {}; // houdt bij welke shirts de gebruiker geliked heeft
const commentsDataMap = {}; // houdt de dynamische comments per product bij

// Audio Staat
let audioPlaying = false;

// DOM Elementen
const splashScreen = document.getElementById('splash-screen');
const appContainer = document.getElementById('app-container');
const startBtn = document.getElementById('start-btn');
const bgMusic = document.getElementById('bg-music');
const musicDisc = document.getElementById('music-disc');

// Dynamic Background Layers
const bgFade1 = document.getElementById('bg-fade-1');
const bgFade2 = document.getElementById('bg-fade-2');
let currentBgLayer = 1;

// TikTok Overlays DOM
const slidesContainer = document.getElementById('slides-container');
const heartFloatOverlay = document.getElementById('heart-float-overlay');
const followBtn = document.getElementById('follow-btn');
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
const commentToggle = document.getElementById('comment-toggle');
const commentCount = document.getElementById('comment-count');
const shareBtn = document.getElementById('share-btn');
const productTitle = document.getElementById('product-title');
const productDesc = document.getElementById('product-desc');
const whatsappOrderBtn = document.getElementById('whatsapp-order-btn');

// Comment Drawer DOM
const commentDrawer = document.getElementById('comment-drawer');
const closeCommentsBtn = document.getElementById('close-comments');
const drawerCommentsList = document.getElementById('drawer-comments-list');
const drawerCommentCount = document.getElementById('drawer-comment-count');
const newCommentInput = document.getElementById('new-comment-input');
const submitCommentBtn = document.getElementById('submit-comment-btn');

// Catalogus DOM
const navCatalogBtn = document.getElementById('nav-catalog-btn');
const catalogModal = document.getElementById('catalog-modal');
const closeCatalogBtn = document.getElementById('close-catalog');
const catalogGrid = document.getElementById('catalog-grid');

// 4. Initialisatie
function init() {
    initializeDataMaps();
    buildSlideshow();
    buildCatalog();
    setupEventListeners();

    // Eerste achtergrondafbeelding
    bgFade1.style.backgroundImage = `url('${products[0].frontImage}')`;
    bgFade1.classList.add('active');

    updateSlideView();
}

function initializeDataMaps() {
    products.forEach(p => {
        userLikedMap[p.id] = false;
        commentsDataMap[p.id] = mockComments[p.id] ? [...mockComments[p.id]] : [...defaultComments];
    });
}

// Premium studio gradient palettes voor niet-bewerkte shirts (8-12)
const studioGradients = {
    8:  { top: '#0a0010', mid: '#1a0030', accent: '#6600cc', glow: '#9933ff' },  // Deep Purple
    9:  { top: '#001a00', mid: '#002200', accent: '#1a7a00', glow: '#00ff44' },  // Dark Jungle Green
    10: { top: '#100a00', mid: '#2a1500', accent: '#8b4500', glow: '#ff8c00' },  // Dark Amber
    11: { top: '#00001a', mid: '#000d33', accent: '#003399', glow: '#0066ff' },  // Deep Navy
    12: { top: '#1a1100', mid: '#2a1d00', accent: '#9a7a00', glow: '#ffd700' },  // Gold Black
};

// Teken premium studio achtergrond op canvas
function drawStudioBackground(canvas, gradientConfig) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    // Achtergrond verloop
    const bg = ctx.createRadialGradient(w/2, h*0.4, 0, w/2, h/2, w * 0.9);
    bg.addColorStop(0, gradientConfig.mid);
    bg.addColorStop(0.5, gradientConfig.top);
    bg.addColorStop(1, '#000000');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Spotlight van boven
    const spotlight = ctx.createRadialGradient(w/2, -h*0.1, 0, w/2, h*0.3, w*0.55);
    spotlight.addColorStop(0, gradientConfig.accent + '55');
    spotlight.addColorStop(0.4, gradientConfig.accent + '22');
    spotlight.addColorStop(1, 'transparent');
    ctx.fillStyle = spotlight;
    ctx.fillRect(0, 0, w, h);

    // Glow ring onderaan
    const floorGlow = ctx.createRadialGradient(w/2, h*0.85, 0, w/2, h*0.85, w*0.45);
    floorGlow.addColorStop(0, gradientConfig.glow + '33');
    floorGlow.addColorStop(0.6, gradientConfig.glow + '11');
    floorGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = floorGlow;
    ctx.fillRect(0, 0, w, h);

    // Subtiele lichtstralen
    ctx.save();
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = gradientConfig.glow;
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(w/2, h*0.2);
        ctx.lineTo(
            w/2 + Math.cos(angle) * w * 0.8,
            h*0.2 + Math.sin(angle) * h * 0.8
        );
        ctx.lineTo(
            w/2 + Math.cos(angle + 0.15) * w * 0.8,
            h*0.2 + Math.sin(angle + 0.15) * h * 0.8
        );
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore();

    // Vloer reflectie lijn
    const floorLine = ctx.createLinearGradient(0, h*0.78, 0, h*0.82);
    floorLine.addColorStop(0, 'transparent');
    floorLine.addColorStop(0.5, gradientConfig.accent + '44');
    floorLine.addColorStop(1, 'transparent');
    ctx.fillStyle = floorLine;
    ctx.fillRect(0, h*0.78, w, h*0.04);

    // Lichte vignet rand
    const vignette = ctx.createRadialGradient(w/2, h/2, h*0.3, w/2, h/2, h*0.9);
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);
}

// Dynamisch slides bouwen
function buildSlideshow() {
    slidesContainer.innerHTML = '';
    products.forEach((product) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.productId = product.id;
        slide.dataset.carouselIndex = '0'; // Standaard voorkant (pagina 0)

        // Voeg canvas toe voor alle slides als luxe studio achtergrond
        const canvas = document.createElement('canvas');
        canvas.className = 'slide-bg-canvas';
        canvas.width = 540;
        canvas.height = 960;
        const defaultGrad = { top: '#050505', mid: '#0d0d0d', accent: '#2a2a2a', glow: '#444444' };
        drawStudioBackground(canvas, defaultGrad);
        slide.appendChild(canvas);

        // Main Horizontal Swiper Container
        const carousel = document.createElement('div');
        carousel.className = 'carousel-horizontal';

        const track = document.createElement('div');
        track.className = 'carousel-track';

        // Voorkant (item 1)
        const frontItem = document.createElement('div');
        frontItem.className = 'carousel-item';
        const frontImg = document.createElement('img');
        frontImg.src = product.frontImage;
        frontImg.alt = `${product.title} Voorkant`;
        frontImg.loading = 'lazy';
        frontItem.appendChild(frontImg);
        track.appendChild(frontItem);

        // Achterkant (item 2 - indien gepaard)
        if (product.type === 'pair') {
            const backItem = document.createElement('div');
            backItem.className = 'carousel-item';
            const backImg = document.createElement('img');
            backImg.src = product.backImage;
            backImg.alt = `${product.title} Achterkant`;
            backImg.loading = 'lazy';
            backItem.appendChild(backImg);
            track.appendChild(backItem);
            
            carousel.appendChild(track);

            // Paginerings-dots (TikTok style)
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'carousel-dots';

            const dot1 = document.createElement('span');
            dot1.className = 'dot active';
            dot1.addEventListener('click', (e) => {
                e.stopPropagation();
                setCarouselPage(slide, 0);
                pauseAutoplayTemp();
            });

            const dot2 = document.createElement('span');
            dot2.className = 'dot';
            dot2.addEventListener('click', (e) => {
                e.stopPropagation();
                setCarouselPage(slide, 1);
                pauseAutoplayTemp();
            });

            dotsContainer.appendChild(dot1);
            dotsContainer.appendChild(dot2);
            carousel.appendChild(dotsContainer);

            // Index Indicator (bijv. 1/2) rechtsboven
            const numIndicator = document.createElement('div');
            numIndicator.className = 'carousel-number-indicator';
            numIndicator.innerText = '1/2';
            carousel.appendChild(numIndicator);

            // Desktop navigatie-pijltjes
            const prevArrow = document.createElement('button');
            prevArrow.className = 'carousel-arrow prev';
            prevArrow.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                setCarouselPage(slide, 0);
                pauseAutoplayTemp();
            });

            const nextArrow = document.createElement('button');
            nextArrow.className = 'carousel-arrow next';
            nextArrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                setCarouselPage(slide, 1);
                pauseAutoplayTemp();
            });

            carousel.appendChild(prevArrow);
            carousel.appendChild(nextArrow);

            // Hint tekst onderin de slide
            const hint = document.createElement('div');
            hint.className = 'flip-hint';
            hint.innerHTML = '👉 Swipe horizontaal voor de achterkant';
            slide.appendChild(hint);

            // Automatisch verbergen van de hint
            setTimeout(() => {
                hint.classList.add('fade-out');
            }, 3500);
        } else {
            carousel.appendChild(track);
        }

        slide.appendChild(carousel);
        slidesContainer.appendChild(slide);
    });
}

// Helper om van pagina te wisselen binnen de horizontale swiper
function setCarouselPage(slide, pageIndex) {
    slide.dataset.carouselIndex = pageIndex;
    const track = slide.querySelector('.carousel-track');
    if (track) {
        track.style.transform = `translateX(-${pageIndex * 100}%)`;
    }

    // Update dots
    const dots = slide.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, idx) => {
        if (idx === pageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update cijfer-indicator rechtsboven
    const numInd = slide.querySelector('.carousel-number-indicator');
    if (numInd) {
        numInd.innerText = `${pageIndex + 1}/2`;
    }

    // Verberg hint bij interactie
    const hint = slide.querySelector('.flip-hint');
    if (hint) hint.classList.add('fade-out');
}

// Start horizontaal doorschuiven voor het actieve model
function startHorizontalAutoplay() {
    clearInterval(horizontalAutoplayTimer);
    horizontalAutoplayTimer = setInterval(() => {
        const currentProduct = products[currentIndex];
        if (currentProduct.type !== 'pair') return;
        
        const currentSlide = document.querySelector(`.slide[data-product-id="${currentProduct.id}"]`);
        if (!currentSlide) return;

        let pageIndex = parseInt(currentSlide.dataset.carouselIndex || '0');
        pageIndex = (pageIndex === 0) ? 1 : 0; // wissel van 0 naar 1 en terug
        
        setCarouselPage(currentSlide, pageIndex);
    }, 3500);
}

// Dynamisch catalogus bouwen
function buildCatalog() {
    catalogGrid.innerHTML = '';
    products.forEach((product, idx) => {
        const card = document.createElement('div');
        card.className = 'catalog-card';

        // Card img wrapper
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'card-img-wrapper';

        // Badge voor paren
        if (product.type === 'pair') {
            const badge = document.createElement('span');
            badge.className = 'pair-badge';
            badge.innerText = 'Voor & Achter';
            imgWrapper.appendChild(badge);
        }

        const img = document.createElement('img');
        img.src = product.frontImage;
        img.alt = product.title;
        img.loading = 'lazy';
        imgWrapper.appendChild(img);
        card.appendChild(imgWrapper);

        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        cardInfo.innerHTML = `
            <span class="card-title">Model #${product.id}</span>
            <span class="card-badge">${product.price}</span>
        `;
        card.appendChild(cardInfo);

        card.addEventListener('click', () => {
            goToSlide(idx);
            closeCatalog();
        });
        catalogGrid.appendChild(card);
    });
}

// 5. Slideshow besturing
function updateSlideView() {
    // Beweeg de slides-container VERTICAAL
    slidesContainer.style.transform = `translateY(-${currentIndex * 100}%)`;

    // Actieve slide klasse toevoegen en horizontale positie resetten voor alle slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
            slide.classList.add('active');
            
            // Toon de tip weer kort bij binnenkomst
            const hint = slide.querySelector('.flip-hint');
            if (hint) {
                hint.classList.remove('fade-out');
                setTimeout(() => {
                    hint.classList.add('fade-out');
                }, 3500);
            }
            // Start op de voorkant (pagina 0)
            setCarouselPage(slide, 0);
        } else {
            slide.classList.remove('active');
            // Reset andere slides naar voorkant
            setCarouselPage(slide, 0);
        }
    });

    const currentProduct = products[currentIndex];

    // Teksten en overlays bijwerken
    productTitle.innerText = currentProduct.title;
    productDesc.innerText = currentProduct.desc;

    // Likes en Comments tellers bijwerken
    updateInteractionCounters(currentProduct.id);

    // Genereer WhatsApp Link
    const waMessage = `Hallo Amare Elite, ik wil graag de "${currentProduct.title}" bestellen voor $35 USD (Model #${currentProduct.id}) uit uw exclusieve Brazil Collectie. Is deze nog beschikbaar?`;
    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(waMessage)}`;
    whatsappOrderBtn.href = waUrl;

    // Fading effect voor de achtergrond
    updateDynamicBackground(currentProduct.frontImage);

    // Reset autoplay timers
    resetAutoplayTimer();
}

function updateDynamicBackground(imageUrl) {
    if (currentBgLayer === 1) {
        bgFade2.style.backgroundImage = `url('${imageUrl}')`;
        bgFade2.classList.add('active');
        bgFade1.classList.remove('active');
        currentBgLayer = 2;
    } else {
        bgFade1.style.backgroundImage = `url('${imageUrl}')`;
        bgFade1.classList.add('active');
        bgFade2.classList.remove('active');
        currentBgLayer = 1;
    }
}

function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= products.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = products.length - 1;
    updateSlideView();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

// 6. Autoplay
function startAutoplay() {
    isAutoplay = true;
    resetAutoplayTimer();
}

function stopAutoplay() {
    isAutoplay = false;
    clearInterval(autoplayTimer);
    clearInterval(horizontalAutoplayTimer);
}

function resetAutoplayTimer() {
    clearInterval(autoplayTimer);
    clearInterval(horizontalAutoplayTimer);
    if (isAutoplay) {
        autoplayTimer = setInterval(nextSlide, SLIDE_DURATION);
        startHorizontalAutoplay();
    }
}

function pauseAutoplayTemp() {
    if (isAutoplay) {
        resetAutoplayTimer();
    }
}

// 7. Likes & Reacties Interactie logica
function updateInteractionCounters(productId) {
    const product = products.find(p => p.id === productId);
    const hasLiked = userLikedMap[productId];
    const commentsList = commentsDataMap[productId];

    // Like knop kleur en count
    if (hasLiked) {
        likeBtn.classList.add('active');
        likeCount.innerText = formatNumber(product.likes + 1);
    } else {
        likeBtn.classList.remove('active');
        likeCount.innerText = formatNumber(product.likes);
    }

    // Comment count
    commentCount.innerText = formatNumber(commentsList.length);
}

function toggleLike(productId) {
    userLikedMap[productId] = !userLikedMap[productId];
    updateInteractionCounters(productId);
}

// Hartje toevoegen op scherm bij dubbelklik/tap
function createFloatingHeart(x, y) {
    const heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart floating-heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    // Willekeurige rotatie en zweef-richting
    const randomRot = Math.floor(Math.random() * 40) - 20; // -20 tot 20 deg
    heart.style.transform = `translate(-50%, -50%) rotate(${randomRot}deg)`;
    
    heartFloatOverlay.appendChild(heart);

    // Opruimen na animatie
    setTimeout(() => {
        heart.remove();
    }, 800);
}

// Comment drawer openen en comments inladen
function openCommentDrawer() {
    const currentProduct = products[currentIndex];
    const commentsList = commentsDataMap[currentProduct.id];

    drawerCommentCount.innerText = commentsList.length;
    drawerCommentsList.innerHTML = '';

    commentsList.forEach(c => {
        const item = document.createElement('div');
        item.className = `comment-item ${c.reply ? 'reply' : ''}`;
        
        const initial = c.user.substring(0, 2).toUpperCase();
        
        item.innerHTML = `
            <div class="comment-avatar">${initial}</div>
            <div class="comment-content">
                <span class="comment-user">${c.user}</span>
                <span class="comment-text">${c.text}</span>
                <span class="comment-time">${c.time}</span>
            </div>
        `;
        drawerCommentsList.appendChild(item);
    });

    commentDrawer.classList.remove('hidden');
    stopAutoplay();
}

function closeCommentDrawer() {
    commentDrawer.classList.add('hidden');
    startAutoplay();
}

function submitComment() {
    const text = newCommentInput.value.trim();
    if (!text) return;

    const currentProduct = products[currentIndex];
    const commentsList = commentsDataMap[currentProduct.id];

    // Voeg comment toe aan map
    commentsList.push({
        user: "gast_zoeker",
        text: text,
        time: "1s"
    });

    newCommentInput.value = '';
    
    // Herlaad comments drawer en update counts
    openCommentDrawer();
    updateInteractionCounters(currentProduct.id);
}

// 8. Audio Regeling (Lokaal Audiobestand & Mute)
function startPlayback() {
    audioPlaying = true;
    musicDisc.classList.add('playing');

    if (bgMusic) {
        bgMusic.volume = 0.55;
        bgMusic.play().catch(e => console.log('Audio playback failed:', e));
    }
}

function pausePlayback() {
    audioPlaying = false;
    musicDisc.classList.remove('playing');

    if (bgMusic) bgMusic.pause();
}

function closeCatalog() {
    catalogModal.classList.add('hidden');
    startAutoplay();
}

function toggleMute() {
    if (audioPlaying) {
        pausePlayback();
    } else {
        startPlayback();
    }
}

// Helper: Formatteren van getallen (bijv. 1420 -> 1.4K)
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

// 9. Event Listeners
function setupEventListeners() {
    // Start knop splashscreen
    startBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        appContainer.classList.remove('hidden');
        startPlayback();
        startAutoplay();
    });

    // Follow button click
    followBtn.addEventListener('click', () => {
        followBtn.classList.add('followed');
        setTimeout(() => {
            followBtn.style.display = 'none';
        }, 300);
    });

    // Like button click
    likeBtn.addEventListener('click', () => {
        const currentProduct = products[currentIndex];
        toggleLike(currentProduct.id);
    });

    // Dubbelklik/dubbeltap op de slide feed voor Liken + Hartjes effect
    const viewport = document.querySelector('.tiktok-feed');
    let lastTap = 0;
    viewport.addEventListener('click', (e) => {
        // Controleer of de klik op interactieve elementen is (knoppen, drawer, etc)
        if (e.target.closest('.tiktok-sidebar') || 
            e.target.closest('.tiktok-bottom-panel') || 
            e.target.closest('.sponsored-banner') || 
            e.target.closest('.comment-drawer') || 
            e.target.closest('.tiktok-navbar')) {
            return;
        }

        const now = new Date().getTime();
        const timesince = now - lastTap;
        
        if (timesince < 300 && timesince > 0) {
            // DUBBELKLIK gedetecteerd
            const currentProduct = products[currentIndex];
            if (!userLikedMap[currentProduct.id]) {
                toggleLike(currentProduct.id);
            }
            createFloatingHeart(e.clientX - viewport.getBoundingClientRect().left, e.clientY - viewport.getBoundingClientRect().top);
        }
        lastTap = now;
    });

    // Comment drawer openen / sluiten
    commentToggle.addEventListener('click', openCommentDrawer);
    closeCommentsBtn.addEventListener('click', closeCommentDrawer);
    
    // Nieuwe comment insturen
    submitCommentBtn.addEventListener('click', submitComment);
    newCommentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitComment();
    });

    // Share button kopiëren link
    shareBtn.addEventListener('click', () => {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        
        alert("Link gekopieerd naar klembord! Deel de Amare Elite showcase met je vrienden!");
    });

    // Vinyl record klik togglet geluid
    musicDisc.addEventListener('click', toggleMute);

    // Catalogus Modus
    navCatalogBtn.addEventListener('click', () => {
        catalogModal.classList.remove('hidden');
        stopAutoplay();
    });
    closeCatalogBtn.addEventListener('click', () => {
        catalogModal.classList.add('hidden');
        startAutoplay();
    });

    // Toetsenbord besturing (omhoog/omlaag voor TikTok feed!)
    document.addEventListener('keydown', (e) => {
        if (appContainer.classList.contains('hidden')) return;
        if (!catalogModal.classList.contains('hidden')) return;
        if (!commentDrawer.classList.contains('hidden')) return;

        if (e.key === 'ArrowDown') {
            nextSlide();
            pauseAutoplayTemp();
        } else if (e.key === 'ArrowUp') {
            prevSlide();
            pauseAutoplayTemp();
        }
    });

    // Swipe besturing (TikTok look and feel: horizontaal en verticaal)
    const feedMain = document.querySelector('.tiktok-feed');
    feedMain.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    feedMain.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipeGesture();
    }, { passive: true });
}

function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const threshold = 45; // min afstand in px

    // Controleer of de swipe overwegend horizontaal of verticaal is
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontale swipe
        if (Math.abs(deltaX) > threshold) {
            const currentProduct = products[currentIndex];
            if (currentProduct.type === 'pair') {
                const currentSlide = document.querySelector(`.slide[data-product-id="${currentProduct.id}"]`);
                if (currentSlide) {
                    let pageIndex = parseInt(currentSlide.dataset.carouselIndex || '0');
                    if (deltaX < 0) {
                        // Swipe naar links -> volgende pagina (achterkant)
                        if (pageIndex < 1) {
                            setCarouselPage(currentSlide, 1);
                            pauseAutoplayTemp();
                        }
                    } else {
                        // Swipe naar rechts -> vorige pagina (voorkant)
                        if (pageIndex > 0) {
                            setCarouselPage(currentSlide, 0);
                            pauseAutoplayTemp();
                        }
                    }
                }
            }
        }
    } else {
        // Verticale swipe
        if (Math.abs(deltaY) > threshold) {
            if (deltaY < 0) {
                // Swipe omhoog -> volgende slide
                nextSlide();
                pauseAutoplayTemp();
            } else {
                // Swipe omlaag -> vorige slide
                prevSlide();
                pauseAutoplayTemp();
            }
        }
    }
}

// 10. Start de app
init();
