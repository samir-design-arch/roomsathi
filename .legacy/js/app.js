/* ============================================
   RoomSathi - Main Application JavaScript
   ============================================ */

// --- Data: Nepal-Focused Listings ---
const listings = [
  {
    id: 1,
    title: 'Modern Studio Apartment near Pulchowk Campus',
    location: 'Pulchowk, Lalitpur',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
    type: 'Studio',
    gender: 'Boys & Girls',
    distance: '0.5 km',
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 92,
    verified: true,
    available: true,
    furnished: true,
    badge: 'verified',
    amenities: ['Food', 'WiFi', 'Water', 'Attached Bathroom', 'Furnished']
  },
  {
    id: 2,
    title: 'Girls Hostel - Affordable & Safe - Near TU',
    location: 'Kirtipur, Kathmandu',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ez2c0d8ea?w=600',
    type: 'Hostel',
    gender: 'Girls Only',
    distance: '1.2 km',
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: false,
    safety: 88,
    verified: true,
    available: true,
    furnished: false,
    badge: 'verified',
    amenities: ['Food', 'WiFi', 'Water', 'Laundry', 'Study Room']
  },
  {
    id: 3,
    title: 'Premium 1BHK Flat - New Baneshwor',
    location: 'New Baneshwor, Kathmandu',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
    type: 'Flat',
    gender: 'Family/Any',
    distance: '2.0 km',
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 95,
    verified: true,
    available: false,
    furnished: true,
    badge: 'premium',
    amenities: ['WiFi', 'Water', 'Attached Bathroom', 'Furnished', 'Parking']
  },
  {
    id: 4,
    title: 'Budget Room - Shared Kitchen - Near KU',
    location: 'Dhulikhel, Kavre',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
    type: 'Room',
    gender: 'Boys Only',
    distance: '0.3 km',
    food: false,
    wifi: false,
    water: true,
    attachedBathroom: false,
    safety: 75,
    verified: false,
    available: true,
    furnished: false,
    badge: 'discount',
    amenities: ['Water', 'Shared Kitchen', 'Common Room']
  },
  {
    id: 5,
    title: 'Cozy Hostel - Walking Distance to PAS',
    location: 'Chhauni, Kathmandu',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1555852105-64f1f5e8b2f1?w=600',
    type: 'Hostel',
    gender: 'Girls Only',
    distance: '0.8 km',
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 90,
    verified: true,
    available: true,
    furnished: true,
    badge: 'verified',
    amenities: ['Food', 'WiFi', 'Water', 'Attached Bathroom', 'AC', 'Study Room']
  },
  {
    id: 6,
    title: 'Fully Furnished Flat - Jawalakhel',
    location: 'Jawalakhel, Lalitpur',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
    type: 'Flat',
    gender: 'Family',
    distance: '1.5 km',
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 96,
    verified: true,
    available: true,
    furnished: true,
    badge: 'premium',
    amenities: ['WiFi', 'Water', 'Attached Bathroom', 'Furnished', 'Parking', 'Generator']
  },
  {
    id: 7,
    title: 'Boys PG - Near Kantipur Engineering College',
    location: 'Dhapakhel, Lalitpur',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ez2c0d8ea?w=600',
    type: 'PG',
    gender: 'Boys Only',
    distance: '0.4 km',
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: false,
    safety: 82,
    verified: false,
    available: true,
    furnished: false,
    badge: null,
    amenities: ['Food', 'WiFi', 'Water', 'Common Room']
  },
  {
    id: 8,
    title: 'Luxury Apartment with Valley View',
    location: 'Budhanilkantha, Kathmandu',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
    type: 'Apartment',
    gender: 'Family',
    distance: '5.0 km',
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 98,
    verified: true,
    available: true,
    furnished: true,
    badge: 'premium',
    amenities: ['WiFi', 'Water', 'Attached Bathroom', 'Furnished', 'Parking', 'AC', 'Gym']
  }
];

// --- Nepal-specific reviews data ---
const reviews = [
  { name: 'Anjali Sharma', college: 'Pulchowk Engineering College', rating: 5, text: 'Found my perfect hostel through RoomSathi. No broker fee, completely transparent process! The AI match was spot on.', avatar: 'AS' },
  { name: 'Rahul Thapa', college: 'TU Kirtipur', rating: 5, text: 'I was struggling to find a room in Kirtipur. RoomSathi made it so easy. The map feature helped me find places near my college.', avatar: 'RT' },
  { name: 'Priya Gurung', college: 'Kathmandu University', rating: 4, text: 'The digital rental agreement feature is a lifesaver. Everything was done online, no paperwork hassle. Highly recommend!', avatar: 'PG' },
  { name: 'Suman Adhikari', college: 'St. Xavier\'s College', rating: 5, text: 'Verified properties only means no scams. I moved into my room within 2 days of searching. The virtual tour saved me so much time.', avatar: 'SA' },
  { name: 'Nisha K.C.', college: 'Padma Kanya College', rating: 5, text: 'Safety was my biggest concern. RoomSathi\'s safety scores and verified badges helped me choose the perfect girls hostel.', avatar: 'NK' },
  { name: 'Bibek Lama', college: 'Himalaya College', rating: 4, text: 'Landlord dashboard is great for property owners too. I listed my flat and got tenants within a week. No middleman needed!', avatar: 'BL' }
];

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSearchBar();
  initListingCards();
  initAIFinder();
  initCarousel();
  initChat();
  initFadeIn();
  initBudgetSlider();
  initNotifications();
  initDashboardCharts();
});

// --- THEME TOGGLE (Dark/Light) ---
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const savedTheme = localStorage.getItem('roomsathi-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
  
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('roomsathi-theme', next);
    toggle.innerHTML = next === 'dark' ? '☀️' : '🌙';
  });
}

// --- MOBILE MENU ---
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;
  
  btn.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = 'var(--header-height)';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--white)';
    nav.style.padding = 'var(--space-xl)';
    nav.style.boxShadow = 'var(--shadow-xl)';
    nav.style.zIndex = '100';
    if (isOpen) {
      nav.style.display = 'none';
    }
  });
}

// --- BUDGET SLIDER ---
function initBudgetSlider() {
  const slider = document.getElementById('budgetSlider');
  const display = document.getElementById('budgetDisplay');
  if (!slider || !display) return;
  
  const format = (val) => {
    return 'NPR ' + parseInt(val).toLocaleString('en-IN');
  };
  
  slider.addEventListener('input', () => {
    display.textContent = format(slider.value);
    slider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(slider.value - 3000) / 47000 * 100}%, var(--gray-200) ${(slider.value - 3000) / 47000 * 100}%, var(--gray-200) 100%)`;
  });
}

// --- SEARCH BAR FUNCTIONALITY ---
function initSearchBar() {
  const searchBtn = document.getElementById('heroSearchBtn');
  const aiBtn = document.getElementById('aiMatchBtn');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      window.location.href = 'search.html';
    });
  }
  
  if (aiBtn) {
    aiBtn.addEventListener('click', () => {
      document.getElementById('aiSection')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// --- LISTING CARDS (Featured) ---
function initListingCards() {
  document.querySelectorAll('.listing-grid[data-featured]').forEach(grid => {
    grid.innerHTML = '';
    listings.slice(0, 6).forEach(createListingCard).forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.listing-save')) return;
        window.location.href = `property-detail.html?id=${card.dataset.id}`;
      });
      grid.appendChild(card);
    });
  });
}

function createListingCard(item) {
  const card = document.createElement('div');
  card.className = 'listing-card';
  card.dataset.id = item.id;
  
  const badgeHTML = item.badge ? `<span class="listing-badge badge-${item.badge}">${item.badge === 'verified' ? '✓ Verified' : item.badge === 'premium' ? '★ Premium' : '🔥 Offer'}</span>` : '';
  const availableHTML = item.available ? '<span class="listing-badge badge-available">● Live</span>' : '<span class="listing-badge" style="background:rgba(239,68,68,0.9);color:white;">● Booked</span>';
  
  card.innerHTML = `
    <div class="listing-image-wrap">
      <img class="listing-image" src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="listing-badges">
        ${badgeHTML}
        ${availableHTML}
      </div>
      <button class="listing-save" onclick="event.stopPropagation(); this.classList.toggle('saved')">♡</button>
    </div>
    <div class="listing-info">
      <div class="listing-price-row">
        <div class="listing-price">NPR ${item.price.toLocaleString('en-IN')}<span>/month</span></div>
        <div class="listing-distance">📍 ${item.distance}</div>
      </div>
      <div class="listing-title">${item.title}</div>
      <div class="listing-location">📌 ${item.location}</div>
      <div class="listing-amenities">
        ${item.amenities.slice(0, 4).map(a => `<span class="listing-amenity">${a === 'Food' ? '🍽️' : a === 'WiFi' ? '📶' : a === 'Water' ? '💧' : a === 'Attached Bathroom' ? '🚿' : a === 'Furnished' ? '🛋️' : '✓'} ${a}</span>`).join('')}
      </div>
      <div class="listing-footer">
        <div class="listing-safety safety-${item.safety >= 90 ? 'high' : item.safety >= 75 ? 'mid' : 'low'}">
          🛡️ Safety Score: ${item.safety}/100
        </div>
        <div class="listing-actions">
          <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); alert('Booking visit for ${item.title}')">Book Visit</button>
          <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); window.location.href='property-detail.html?id=${item.id}'">360°</button>
        </div>
      </div>
    </div>
  `;
  return card;
}

// --- AI ROOM FINDER ---
function initAIFinder() {
  const form = document.getElementById('aiForm');
  const resultDiv = document.getElementById('aiResult');
  if (!form || !resultDiv) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const budget = parseInt(document.getElementById('aiBudget').value);
    const college = document.getElementById('aiCollege').value;
    const travel = document.getElementById('aiTravel').value;
    const food = document.getElementById('aiFood').value;
    const environment = document.getElementById('aiEnv').value;
    const furnished = document.getElementById('aiFurnished').value;
    
    // Simple AI matching algorithm
    const scored = listings.map(item => {
      let score = 0;
      
      // Budget match (prefer within budget, bonus for well under)
      if (item.price <= budget) {
        score += 30;
        if (item.price <= budget * 0.7) score += 10;
      } else {
        score -= 20;
      }
      
      // Food preference
      if (food === 'yes' && item.food) score += 15;
      if (food === 'no' && !item.food) score += 10;
      if (food === 'no' && item.food) score -= 5;
      
      // Furnished
      if (furnished === 'yes' && item.furnished) score += 15;
      if (furnished === 'no' && !item.furnished) score += 10;
      
      // Safety (prefer higher)
      score += item.safety * 0.2;
      
      // Verified bonus
      if (item.verified) score += 10;
      
      // Availability
      if (item.available) score += 15;
      
      return { ...item, score };
    });
    
    scored.sort((a, b) => b.score - a.score);
    const top = scored[0];
    
    resultDiv.classList.add('show');
    resultDiv.innerHTML = `
      <h4 style="margin-bottom:var(--space-md)">✨ AI Top Pick For You</h4>
      <div class="ai-recommendation">
        <img src="${top.image}" alt="${top.title}">
        <div>
          <div class="listing-price" style="font-size:1.5rem">NPR ${top.price.toLocaleString('en-IN')}<span style="font-size:0.875rem">/month</span></div>
          <div style="font-weight:600;margin:var(--space-xs) 0">${top.title}</div>
          <div style="font-size:0.8125rem;color:var(--gray-500);margin-bottom:var(--space-sm)">📌 ${top.location} · 📍 ${top.distance} from ${college}</div>
          <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
            <span class="listing-amenity">🎯 Match ${Math.round(top.score / 1.05)}%</span>
            <span class="listing-amenity">🛡️ Safety ${top.safety}/100</span>
            ${top.food ? '<span class="listing-amenity">🍽️ Food Included</span>' : ''}
            ${top.verified ? '<span class="listing-amenity">✓ Verified</span>' : ''}
          </div>
          <button class="btn btn-primary btn-sm mt-lg" onclick="window.location.href='property-detail.html?id=${top.id}'">View Details →</button>
        </div>
      </div>
    `;
  });
}

// --- REVIEW CAROUSEL ---
function initCarousel() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  
  reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar" style="display:flex;align-items:center;justify-content:center;background:var(--primary-100);color:var(--primary);font-weight:700;font-size:1rem">${r.avatar}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-college">${r.college}</div>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <div class="review-text">${r.text}</div>
    `;
    track.appendChild(card);
  });
  
  // Carousel navigation
  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');
  if (prevBtn && nextBtn && track) {
    const scroll = (dir) => {
      const cardWidth = track.querySelector('.review-card')?.offsetWidth + 24 || 364;
      track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scroll(-1));
    nextBtn.addEventListener('click', () => scroll(1));
  }
}

// --- AI CHAT ASSISTANT ---
function initChat() {
  const bubble = document.getElementById('chatBubble');
  const window = document.getElementById('chatWindow');
  const close = document.getElementById('chatClose');
  const send = document.getElementById('chatSend');
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  
  if (!bubble || !window) return;
  
  bubble.addEventListener('click', () => {
    window.classList.toggle('open');
    if (window.classList.contains('open') && messages.children.length === 0) {
      addBotMsg('👋 Namaste! I\'m Sathi, your AI assistant. Looking for a room? Tell me your budget and preferred area!');
    }
  });
  
  if (close) {
    close.addEventListener('click', () => window.classList.remove('open'));
  }
  
  if (send && input && messages) {
    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;
      addUserMsg(text);
      input.value = '';
      
      // Simple bot response
      setTimeout(() => {
        const lower = text.toLowerCase();
        if (lower.includes('budget') || lower.includes('price') || lower.includes('cost')) {
          addBotMsg('💰 We have rooms from NPR 5,000 to NPR 45,000 per month. What\'s your budget range?');
        } else if (lower.includes('kirtipur') || lower.includes('lalitpur') || lower.includes('baneshwor') || lower.includes('location')) {
          addBotMsg('📍 Great choices! We have verified listings in Kirtipur, Pulchowk, Baneshwor, Jawalakhel, and more. Which area interests you?');
        } else if (lower.includes('safe') || lower.includes('safety') || lower.includes('girl')) {
          addBotMsg('🛡️ Safety is our priority! All our listings have safety scores 75+. We have many girls-only hostels with 24/7 security, CCTV, and female wardens.');
        } else if (lower.includes('ai') || lower.includes('match') || lower.includes('recommend')) {
          addBotMsg('✨ Try our AI Room Finder! Click the "AI Match" button in the search section. Just answer a few questions and we\'ll find your perfect room instantly!');
        } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('namaste')) {
          addBotMsg('👋 Namaste! Welcome to RoomSathi. How can I help you find your perfect room today?');
        } else {
          addBotMsg('That\'s interesting! 🏠 You can browse our featured listings below or try the AI Room Finder for personalized recommendations. What would you like to know?');
        }
      }, 600);
    };
    
    send.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }
}

function addBotMsg(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot';
  msg.textContent = text;
  document.getElementById('chatMessages')?.appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function addUserMsg(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg user';
  msg.textContent = text;
  document.getElementById('chatMessages')?.appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

// --- FADE-IN ON SCROLL ---
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// --- NOTIFICATIONS ---
function initNotifications() {
  const notifBtn = document.getElementById('notifBtn');
  if (!notifBtn) return;
  
  notifBtn.addEventListener('click', () => {
    alert('🔔 Notifications:\n• New room listed near Pulchowk Campus\n• Price dropped for a flat in Baneshwor\n• Your booking at Modern Studio is confirmed');
  });
}

// --- PARTICLES (Hero) ---
(function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (10 + Math.random() * 20) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    container.appendChild(p);
  }
})();

// --- DASHBOARD CHARTS (Simple visual) ---
function initDashboardCharts() {
  // Animate stat numbers on dashboard
  document.querySelectorAll('.stat-card-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current.toLocaleString('en-IN');
    }, 40);
  });
}

// --- PROPERTY DETAILS LOADING ---
if (window.location.pathname.includes('property-detail')) {
  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const item = listings.find(l => l.id === id) || listings[0];
    loadPropertyDetail(item);
  });
}

function loadPropertyDetail(item) {
  const title = document.getElementById('propertyTitle');
  const price = document.getElementById('propertyPrice');
  const location = document.getElementById('propertyLocation');
  const gallery = document.getElementById('propertyGallery');
  const sidebar = document.getElementById('propertySidebar');
  
  if (title) title.textContent = item.title;
  if (price) price.innerHTML = `NPR ${item.price.toLocaleString('en-IN')}<span>/month</span>`;
  if (location) location.textContent = `📍 ${item.location}`;
  
  if (gallery) {
    gallery.innerHTML = `
      <img class="property-gallery-main" src="${item.image}" alt="${item.title}">
      <img src="https://images.unsplash.com/photo-1598928506311-c55ez2c0d8ea?w=400" alt="View 2">
      <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" alt="View 3">
    `;
  }
  
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="property-sidebar-price">NPR ${item.price.toLocaleString('en-IN')}<span>/month</span></div>
      <div class="safety-meter">
        <span style="font-size:1.5rem">🛡️</span>
        <div>
          <div class="safety-score">${item.safety}/100</div>
          <div style="font-size:0.75rem;color:var(--gray-500)">Safety Score</div>
        </div>
      </div>
      <div class="property-sidebar-actions">
        <button class="btn btn-primary btn-lg" style="width:100%;justify-content:center">📅 Book a Visit</button>
        <button class="btn btn-secondary btn-lg" style="width:100%;justify-content:center">🔍 Virtual Tour</button>
        <button class="btn btn-ghost btn-lg" style="width:100%;justify-content:center">♡ Save to Favorites</button>
        <button class="btn btn-success btn-lg" style="width:100%;justify-content:center">💬 Chat with Landlord</button>
      </div>
      <div style="margin-top:var(--space-lg);padding-top:var(--space-lg);border-top:1px solid var(--gray-100)">
        <div style="font-size:0.75rem;color:var(--gray-500);margin-bottom:var(--space-sm)">SHARE THIS PROPERTY</div>
        <div style="display:flex;gap:var(--space-sm)">
          <button class="btn btn-sm btn-secondary">📱 WhatsApp</button>
          <button class="btn btn-sm btn-secondary">📧 Email</button>
          <button class="btn btn-sm btn-secondary">🔗 Copy Link</button>
        </div>
      </div>
    `;
  }
  
  // Load amenities
  const amenitiesContainer = document.getElementById('propertyAmenities');
  if (amenitiesContainer) {
    amenitiesContainer.innerHTML = item.amenities.map(a => `
      <div class="property-amenity-item">
        <span style="color:var(--success)">✓</span>
        ${a}
      </div>
    `).join('');
  }
  
  // Update other meta
  const typeEl = document.getElementById('propertyType');
  const genderEl = document.getElementById('propertyGender');
  const distEl = document.getElementById('propertyDist');
  const availEl = document.getElementById('propertyAvail');
  const furnishedEl = document.getElementById('propertyFurnished');
  
  if (typeEl) typeEl.textContent = item.type;
  if (genderEl) genderEl.textContent = item.gender;
  if (distEl) distEl.textContent = item.distance;
  if (availEl) availEl.textContent = item.available ? '✅ Available Now' : '❌ Currently Booked';
  if (availEl) availEl.style.color = item.available ? 'var(--success)' : 'var(--error)';
  if (furnishedEl) furnishedEl.textContent = item.furnished ? '✅ Fully Furnished' : '❌ Unfurnished';
}

// --- SEARCH PAGE ---
if (window.location.pathname.includes('search')) {
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('searchResults');
    const count = document.getElementById('resultCount');
    if (!grid) return;
    
    grid.innerHTML = '';
    listings.forEach(item => {
      const card = createListingCard(item);
      card.addEventListener('click', (e) => {
        if (e.target.closest('.listing-save')) return;
        window.location.href = `property-detail.html?id=${item.id}`;
      });
      grid.appendChild(card);
    });
    
    if (count) count.innerHTML = `<strong>${listings.length}</strong> properties found`;
  });
}

// --- AUTH PAGE ---
if (window.location.pathname.includes('auth')) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('authForm');
    const toggleBtns = document.querySelectorAll('.auth-toggle');
    const title = document.getElementById('authTitle');
    
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (title) title.textContent = mode === 'login' ? 'Welcome Back!' : 'Create Your Account';
        if (form) {
          const extraFields = form.querySelectorAll('.auth-extra');
          extraFields.forEach(f => f.style.display = mode === 'register' ? 'flex' : 'none');
        }
      });
    });
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Account created successfully! Welcome to RoomSathi.');
      });
    }
  });
}

console.log('🏠 RoomSathi - Find Your Perfect Room in Nepal');
console.log('Made with ❤️ for students and renters in Kathmandu Valley');
