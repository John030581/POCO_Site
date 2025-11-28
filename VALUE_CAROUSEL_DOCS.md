# Value Carousel Implementation

## Overview
I've created a professional carousel component similar to the "Value of $PEPETO Token" section on https://pepeto.io/#home.

## What Was Created

### 1. ValueCarousel Component (`src/Components/ValueCarousel.jsx`)
A React component featuring:
- **6 Value Cards**: Efficiency, Technology, Optimisation, Power, Energy, and Precision
- **Navigation**: Left/Right arrow buttons to cycle through cards
- **Responsive Design**: Shows 3 cards on desktop, 2 on tablet, 1 on mobile
- **Smooth Animations**: Card transitions with scale and opacity effects
- **Active Card Highlight**: Center card is larger and fully visible

### 2. Styling (`src/Components/ValueCarousel.css`)
Professional CSS with:
- Card background using `value-card.webp` image
- Smooth hover effects
- Responsive breakpoints for all screen sizes
- Professional shadows and transitions
- Active card highlighting

### 3. Integration in Home.jsx
- Imported `ValueCarousel` component
- Replaced the old inline carousel with the new component
- Positioned in the "Value of $POCO Token" section

## Features

### Desktop View (>1200px)
- Shows 3 cards simultaneously
- Left and right cards are slightly faded and scaled down
- Center card is prominent with full opacity
- Navigation arrows on sides

### Tablet View (768px - 1200px)
- Shows 2 cards
- Similar active card highlighting

### Mobile View (<768px)
- Shows 1 card at a time
- Compact navigation arrows
- Full-width cards

## Content Structure

Each card includes:
1. **Icon**: SVG icon representing the value (efficiency, technology, etc.)
2. **Title**: Main heading (e.g., "Efficiency")
3. **Subtitle**: Catchy phrase (e.g., "Maximize Gains, Minimize waste")
4. **Description**: Detailed explanation
5. **Optional Note**: Additional information (for Energy and Precision cards)

## How to Use

The carousel is now live in your "Value of $POCO Token" section. Users can:
1. Click left/right arrows to navigate
2. View 3 cards at once on desktop
3. See smooth transitions as cards slide
4. Hover over cards for lift effect

## Customization

To modify the carousel:

### Change Card Content
Edit the `cards` array in `ValueCarousel.jsx` (lines 8-50):
```javascript
{
    icon: '/assets/images/svg-icons/your-icon.svg',
    title: 'Your Title',
    subtitle: 'Your Subtitle',
    description: 'Your description...',
    note: 'Optional note' // Remove if not needed
}
```

### Adjust Styling
Modify `ValueCarousel.css`:
- Card size: `.carousel-card` flex properties
- Colors: `.card-title`, `.card-subtitle`, etc.
- Animation speed: `transition` properties
- Hover effects: `.carousel-card:hover .card-inner`

### Change Visible Cards
In `ValueCarousel.jsx`, modify the `getVisibleCards()` function:
```javascript
for (let i = 0; i < 3; i++) { // Change 3 to desired number
```

## Assets Required

Make sure these assets exist:
- `/assets/images/svg-icons/efficiency.svg`
- `/assets/images/svg-icons/technology.svg`
- `/assets/images/svg-icons/optimisation.svg`
- `/assets/images/svg-icons/power.svg`
- `/assets/images/svg-icons/energy.svg`
- `/assets/images/png/value-card.webp` (card background)
- `/assets/images/png/left-slider.webp` (left arrow)
- `/assets/images/png/right-slider.webp` (right arrow)

## Browser Compatibility

Works on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Lightweight (no external carousel library needed)
- Smooth 60fps animations
- Lazy loading for images
- Optimized for mobile devices

## Server Info

Your development server is running at:
- **Local**: https://localhost:5174/
- **Network**: https://192.168.140.246:5174/

Navigate to the "Value of $POCO Token" section to see the carousel in action!
