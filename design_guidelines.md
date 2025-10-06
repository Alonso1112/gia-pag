# Design Guidelines: "Hecha con Amor" - Creative Dashboard for Gianela

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern creative tools (Canva, Notion) combined with romantic, personalized aesthetics. Optimized exclusively for laptop viewing with sophisticated animations and modern UI patterns.

## Core Design Principles
- Cute but professional aesthetic with romantic undertones
- Smooth, delightful micro-interactions throughout
- Glass-morphism and modern blur effects
- Non-intrusive, meaningful animations that enhance UX
- Personal, intimate feel while maintaining functionality

## Color Palette

### Primary Colors (Dark Mode)
- **Base Pink Pastel**: 340 70% 85% (primary accent)
- **Soft White**: 0 0% 98% (text and cards)
- **Deep Rose**: 340 45% 25% (dark backgrounds)
- **Midnight Blush**: 340 30% 15% (deeper backgrounds)

### Accent Colors
- **Golden Shimmer**: 45 90% 70% (highlights and special effects)
- **Soft Lilac**: 280 60% 80% (secondary accents)
- **Warm Beige**: 30 25% 85% (neutral warmth)

### Functional Colors
- **Success Glow**: 150 60% 70%
- **Info Sparkle**: 200 70% 75%
- **Gentle Warning**: 40 85% 75%

## Typography
**Primary Font Family**: Poppins (rounded, modern, clean)
**Secondary Font**: Quicksand (for romantic touches)

- **Hero/Welcome Text**: 3.5rem, font-weight 600, letter-spacing -0.02em
- **Section Headings**: 2rem, font-weight 600
- **Card Titles**: 1.25rem, font-weight 500
- **Body Text**: 1rem, font-weight 400, line-height 1.6
- **Romantic Messages**: 1.125rem, font-weight 300, Quicksand
- **Credits**: 0.875rem, font-weight 300, italic

## Layout System
**Desktop-Optimized Grid**: Tailwind spacing units of 4, 6, 8, 12, 16, 24

- **Max Container Width**: 1400px centered
- **Section Padding**: py-16 to py-24
- **Card Spacing**: gap-6 to gap-8
- **Component Margins**: mb-8 to mb-12

## Component Library

### 1. Entrance Screen
- Full-screen centered layout with animated 8-bit cat sprite
- Floating particles (hearts and sparkles) with gentle drift animation
- Glass-morphism card with backdrop-blur-xl
- Glowing button with shimmer effect on hover
- Greeting text with fade-in and scale animation

### 2. Romantic Message Popup
- Floating emoji (💌) with bounce animation every 3 minutes
- Modal with soft blur backdrop (backdrop-blur-md)
- Gentle slide-up entrance with fade
- Auto-dismiss with smooth fade-out after reading
- Elegant close button with hover glow

### 3. Dashboard Layout
- Sidebar navigation with category icons and glow on active
- Grid-based main content area (2-3 columns depending on section)
- Cards with hover lift effect (translateY(-4px))
- Smooth shadow transitions on interaction

### 4. Creative Mural Board
- Masonry grid layout for project cards
- Drag-and-drop with visual feedback (scale and opacity)
- Thumbnail images with zoom on hover
- Quick-add floating action button with pulse animation

### 5. Template Gallery
- Card flip animation on hover to show details
- Color-coded tags with soft gradients
- Image previews with parallax scroll effect
- Filter buttons with active state glow

### 6. Color Palette Generator
- Large color swatches with gradient transitions
- Copy button with success checkmark animation
- Daily rotation with cross-fade effect between palettes
- Hex codes with monospace font

### 7. Progress Dashboard
- Animated circular progress rings with gradient strokes
- Counter animations with easing (count-up effect)
- Motivational text with typing animation
- Achievement badges with sparkle burst on unlock

### 8. Notes Section
- Markdown editor with syntax highlighting
- Category tabs with smooth indicator slide
- Auto-save indicator with pulse dot
- Rich text formatting toolbar with icon buttons

### 9. AI Chat Interface
- Chat bubbles with staggered fade-in
- Typing indicator with animated dots
- Gemini AI responses with gradient text effect
- Input field with focus glow animation

### 10. Backup & Storage
- Toast notifications with slide-in from top-right
- Download progress bar with shimmer effect
- Sync status indicator with rotation animation
- Success confirmation with checkmark burst

## Custom Cursor Effects
- **Trail Effect**: Small hearts and stars following cursor movement
- **Hover States**: Cursor enlarges with soft glow on interactive elements
- **Click Feedback**: Ripple effect radiating from click point

## Animation Specifications
- **Duration Standard**: 300ms for micro-interactions, 500ms for transitions
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1) for smooth, natural movement
- **Particle Systems**: Gentle floating with random delays (1-3s intervals)
- **Scroll Animations**: Parallax with 0.3-0.5 scroll ratio
- **Card Hovers**: Transform scale(1.02) + shadow elevation
- **Page Transitions**: Cross-fade with 400ms duration

## Special Visual Elements
- **Scrollbar**: Custom thin scrollbar with pink gradient thumb
- **Glass-morphism**: backdrop-blur-xl with rgba backgrounds
- **Shimmer Effects**: Continuous gradient animation on credit text
- **Glow Effects**: Box-shadow with pink/golden hues on focus
- **Floating Elements**: Gentle up-down animation (translateY oscillation)

## Credits Section
Elegant footer with centered text:
**"Hecho con amor por Valentino 🌙 para Gianela 🌞"**
- Gradient text (pink to gold)
- Subtle pulse animation (scale 1 to 1.05)
- Continuous shimmer overlay moving left to right
- Surrounded by floating micro hearts

## Images
**8-bit Cat Animation**: Pixel art style cat with heart animations, positioned center of entrance screen. Should be cute, animated sprite with blinking and gentle movements.

**No large hero image required** - the entrance screen uses the animated cat sprite as the focal point instead.