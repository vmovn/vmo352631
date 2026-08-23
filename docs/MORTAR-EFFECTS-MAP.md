# Mortar Effects & Interaction Map

## Global runtime
Current `src/app/layout.js`:
- client-only root;
- Bootstrap bundle;
- GSAP scripts (`gsap.min.js`, `ScrollTrigger.min.js`, `SplitText.min.js`);
- WOW hooks;
- magnetic hover;
- button hover;
- smooth page scroll;
- animated cursor;
- scroll-circle progress;
- theme switch.

## Component-level effect families
- **GSAP**: notably Digital Agency hero and other text-motion patterns.
- **Swiper**: banners, testimonials, team, blogs and other carousels.
- **WOW / animate.css**: widespread entrance animation.
- **Modal video**: About/Testimonial patterns.
- **ApexCharts**: IT Consulting process/data visual.
- **Lightbox**: inner pages such as About.
- **CountUp**: counters/metrics in multiple sections.
- **Compare Slider**: available in source.
- **Confetti**: globally loaded helper.
- **Custom cursor**: desktop pointer experience.

## Migration rule
Each dependency must be classified during React/Next migration:
1. compatible unchanged;
2. compatible after import/API adjustment;
3. replace with equivalent behavior;
4. remove only with human approval.

Never replace a visual effect solely to silence peer-dependency warnings.

## Mobile
Cursor/animation must be capability-aware:
- disable custom cursor on touch/coarse pointer;
- respect reduced motion;
- keep content accessible without animation;
- avoid hydration-dependent blank content.
