/**
 * main.js — Core site functionality
 * Handles: hamburger menu, scrollspy, scroll-to-top, AOS, Typed.js,
 * PureCounter, skills animation, GLightbox, Isotope, Swiper, EmailJS.
 * Old sidebar and dark-mode-toggle code removed (replaced by theme.js).
 */
(function () {
  "use strict";

  /* ====================================================
     TOP HEADER — hamburger menu for mobile
     ==================================================== */
  const hamburgerBtn = document.querySelector('.header-hamburger');
  const mobilePanel = document.querySelector('.mobile-nav-panel');
  const mobileCloseBtn = document.querySelector('.mobile-nav-close');

  function openMobileNav() {
    if (mobilePanel) {
      mobilePanel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeMobileNav() {
    if (mobilePanel) {
      mobilePanel.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);

  // Close mobile nav when clicking a link inside it
  document.querySelectorAll('.mobile-nav-panel a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ====================================================
     HEADER SHRINK ON SCROLL
     ==================================================== */
  const topHeader = document.querySelector('.top-header');
  function handleHeaderScroll() {
    if (topHeader) {
      if (window.scrollY > 60) {
        topHeader.classList.add('scrolled');
      } else {
        topHeader.classList.remove('scrolled');
      }
    }
  }
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  /* ====================================================
     PRELOADER
     ==================================================== */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /* ====================================================
     SCROLL TO TOP
     ==================================================== */
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /* ====================================================
     AOS (Animate On Scroll)
     ==================================================== */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /* ====================================================
     TYPED.JS — typewriter effect in hero
     ==================================================== */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    window.typedInstance = new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /* ====================================================
     PURECOUNTER
     ==================================================== */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /* ====================================================
     SKILLS ANIMATION (Waypoint-triggered progress bars)
     ==================================================== */
  const skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    if (typeof Waypoint !== 'undefined') {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    }
  });

  /* ====================================================
     GLIGHTBOX
     ==================================================== */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  /* ====================================================
     ISOTOPE (portfolio filters)
     ==================================================== */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filterEl) {
        filterEl.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          if (typeof aosInit === 'function') aosInit();
        }, false);
      });
    }
  });

  /* ====================================================
     SWIPER
     ==================================================== */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      if (typeof Swiper !== 'undefined') {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  /* ====================================================
     HASH SCROLL ON LOAD
     ==================================================== */
  window.addEventListener('load', function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /* ====================================================
     SCROLLSPY — highlight active nav link
     ==================================================== */
  const navmenulinks = document.querySelectorAll('.header-nav a, .mobile-nav-panel a');
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.header-nav a.active, .mobile-nav-panel a.active').forEach(link => link.classList.remove('active'));
        // Highlight matching links in both desktop and mobile nav
        document.querySelectorAll(`.header-nav a[href*="${navmenulink.hash}"], .mobile-nav-panel a[href*="${navmenulink.hash}"]`).forEach(link => link.classList.add('active'));
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /* ====================================================
     EMAILJS — contact form submission
     ==================================================== */
  (function () {
    var EMAILJS_USER_ID = "dSpnVMB5lljbN-Lig";
    var EMAILJS_SERVICE_ID = "service_78o81jq";
    var EMAILJS_TEMPLATE_ID = "template_0zpq0pc";

    if (typeof emailjs === "undefined") {
      console.warn("EmailJS not loaded");
      return;
    }
    emailjs.init(EMAILJS_USER_ID);

    var contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    var newForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newForm, contactForm);

    newForm.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var loadingDiv = newForm.querySelector(".loading");
      var errorDiv = newForm.querySelector(".error-message");
      var sentDiv = newForm.querySelector(".sent-message");

      loadingDiv.style.display = "block";
      errorDiv.style.display = "none";
      sentDiv.style.display = "none";

      var formData = {
        name: document.getElementById("name-field").value,
        email: document.getElementById("email-field").value,
        subject: document.getElementById("subject-field").value,
        message: document.getElementById("message-field").value
      };

      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        loadingDiv.style.display = "none";
        errorDiv.style.display = "block";
        errorDiv.textContent = "Please fill in all fields.";
        return;
      }

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(function () {
          loadingDiv.style.display = "none";
          sentDiv.style.display = "block";
          newForm.reset();
        }, function (err) {
          loadingDiv.style.display = "none";
          errorDiv.style.display = "block";
          errorDiv.textContent = "Failed to send. Please try again.";
          console.error("EmailJS error:", err);
        });
    });
  })();

  /* ====================================================
     CUSTOM PROFESSIONAL CURSOR
     ==================================================== */
  (function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (!cursorDot || !cursorRing) return;

    // Check if touch device / mobile screen
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 992) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHidden = true;

    // Initial state hidden until mouse moves
    cursorDot.classList.add('cursor-hidden');
    cursorRing.classList.add('cursor-hidden');

    // Update mouse coords
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      if (isHidden) {
        isHidden = false;
        ringX = mouseX;
        ringY = mouseY;
        cursorDot.classList.remove('cursor-hidden');
        cursorRing.classList.remove('cursor-hidden');
      }
    });

    // Smooth animation loop for ring with lerp
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Interactive element hover detection
    const interactiveSelectors = 'a, button, input, textarea, select, .tool-card, .btn-hero, .footer-social-btn, .header-avatar, .service-item, .portfolio-item, .info-item, [role="button"]';

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        cursorRing.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        cursorRing.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }
    });

    // Click effect
    window.addEventListener('mousedown', () => {
      cursorRing.classList.add('cursor-click');
    });

    window.addEventListener('mouseup', () => {
      cursorRing.classList.remove('cursor-click');
    });

    // Hide when mouse leaves window
    document.addEventListener('mouseleave', () => {
      isHidden = true;
      cursorDot.classList.add('cursor-hidden');
      cursorRing.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
      isHidden = false;
      cursorDot.classList.remove('cursor-hidden');
      cursorRing.classList.remove('cursor-hidden');
    });
  })();

})();

/* ====================================================
   SERVICE DETAIL MODAL (Full details popup)
   ==================================================== */
function openServiceModal(card) {
  var modal = document.getElementById('serviceModal');
  if (!modal) return;

  var iconElem = document.getElementById('serviceModalIcon');
  var titleElem = document.getElementById('serviceModalTitle');
  var descElem = document.getElementById('serviceModalDesc');
  var capElem = document.getElementById('serviceModalCapabilities');
  var toolsElem = document.getElementById('serviceModalTools');

  var iconClass = card.getAttribute('data-svc-icon') || 'bi-shield-check';
  var title = card.getAttribute('data-svc-title') || '';
  var desc = card.getAttribute('data-svc-desc') || '';
  var capabilities = card.getAttribute('data-svc-capabilities') || '';
  var tools = card.getAttribute('data-svc-tools') || '';

  var tempDiv = document.createElement('div');

  // Icon
  if (iconElem) {
    iconElem.innerHTML = '<i class="bi ' + iconClass + '"></i>';
  }

  // Title & Description
  if (titleElem) {
    tempDiv.innerHTML = title;
    titleElem.textContent = tempDiv.textContent;
  }
  if (descElem) {
    tempDiv.innerHTML = desc;
    descElem.textContent = tempDiv.textContent;
  }

  // Capabilities list
  if (capElem) {
    capElem.innerHTML = '';
    if (capabilities) {
      var capList = capabilities.split(',');
      capList.forEach(function(item) {
        if (item.trim()) {
          var li = document.createElement('li');
          tempDiv.innerHTML = item.trim();
          li.innerHTML = '<i class="bi bi-check-circle-fill"></i> <span>' + tempDiv.textContent + '</span>';
          capElem.appendChild(li);
        }
      });
    }
  }

  // Tools tags
  if (toolsElem) {
    toolsElem.innerHTML = '';
    if (tools) {
      var toolList = tools.split(',');
      toolList.forEach(function(tool) {
        if (tool.trim()) {
          var span = document.createElement('span');
          span.className = 'tool-tag';
          tempDiv.innerHTML = tool.trim();
          span.textContent = tempDiv.textContent;
          toolsElem.appendChild(span);
        }
      });
    }
  }

  // Display modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(function() {
    modal.classList.add('active');
  });
}

function closeServiceModal(event, forceClose) {
  var modal = document.getElementById('serviceModal');
  if (!modal) return;
  if (forceClose || event.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function() {
      modal.style.display = 'none';
    }, 300);
  }
}

/* ====================================================
   PROJECT MODAL (in-page popup instead of page nav)
   ==================================================== */
function openProjectModal(btn) {
  var modal = document.getElementById('projectModal');
  var img = document.getElementById('projectModalImg');
  var title = document.getElementById('projectModalTitle');
  var desc = document.getElementById('projectModalDesc');
  var features = document.getElementById('projectModalFeatures');

  // Get data from button attributes
  var projectTitle = btn.getAttribute('data-project-title') || '';
  var projectImg = btn.getAttribute('data-project-img') || '';
  var projectDesc = btn.getAttribute('data-project-desc') || '';
  var projectFeatures = btn.getAttribute('data-project-features') || '';

  // Decode HTML entities
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = projectTitle;
  title.textContent = tempDiv.textContent;

  tempDiv.innerHTML = projectDesc;
  desc.textContent = tempDiv.textContent;

  img.src = projectImg;
  img.alt = projectTitle;

  // Build features list
  features.innerHTML = '';
  if (projectFeatures) {
    var featureList = projectFeatures.split(',');
    featureList.forEach(function(feature) {
      var li = document.createElement('li');
      tempDiv.innerHTML = feature.trim();
      li.textContent = tempDiv.textContent;
      features.appendChild(li);
    });
  }

  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(function() {
    modal.classList.add('active');
  });
}

function closeProjectModal(event, forceClose) {
  var modal = document.getElementById('projectModal');
  if (forceClose || event.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function() {
      modal.style.display = 'none';
    }, 300);
  }
}

/* ====================================================
   CERTIFICATES HORIZONTAL CAROUSEL SCROLL
   ==================================================== */
function scrollCerts(direction) {
  var carousel = document.getElementById('certCarousel');
  if (carousel) {
    var scrollAmount = 340 * direction;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Close modals on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var pModal = document.getElementById('projectModal');
    if (pModal && pModal.classList.contains('active')) {
      closeProjectModal(e, true);
    }
    var sModal = document.getElementById('serviceModal');
    if (sModal && sModal.classList.contains('active')) {
      closeServiceModal(e, true);
    }
  }
});