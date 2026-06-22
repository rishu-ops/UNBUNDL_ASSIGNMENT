# Whistle Landing Page - Frontend Assessment

This project is a React-based implementation of Whistle's web landing page, built as a frontend assessment for **Unbundl**. It features responsive components, dynamic API data integration, clean styling systems (without external UI libraries), and premium micro-interactions.

---

## 🚀 Live Demo & Setup

### Requirements
- **Node.js**: v18.0.0 or higher
- **Package Manager**: npm or yarn

### Local Installation
1. **Clone or Extract** the project repository.
2. Navigate to the project root directory:
   ```bash
   cd unbul_assignment
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```
4. Run the local development server with Vite (Hot Module Replacement enabled):
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build
To build the application for production (compiles TypeScript and bundles assets with Vite):
```bash
npm run build
```
The compiled output will be generated inside the `dist` directory.

---

## 📂 Project Structure

The project code is organized in a highly modular, clean, and component-driven structure:

```text
unbul_assignment/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, icons, and illustrations
│   │   └── index.ts        # Centrally exported asset paths
│   ├── components/         # Reusable global layout elements
│   │   ├── ui/             # Core UI elements (Input fields)
│   │   ├── Header.tsx      # Main navigation header
│   │   ├── Footer.tsx      # Multi-column footer
│   │   ├── Marquee.tsx     # Reusable text banner (Animated & Static)
│   │   └── PromoBanner.tsx # Dynamic promo price banners
│   ├── sections/           # Dedicated sections representing the page content
│   │   ├── Hero.tsx        # Hero banner section
│   │   ├── BookScanForm.tsx# Booking form section with custom radios
│   │   ├── AlignerSection.tsx# Features/aligner detail cards
│   │   ├── WhistleDifference.tsx # Grid card section with 3D interactive layout
│   │   ├── HappySmilers.tsx# API-powered customer testimonial carousel
│   │   ├── SmileSteps.tsx  # Interactive workflow step-by-step path
│   │   ├── DoctorLed.tsx   # Doctor-led vs D2C info panel
│   │   ├── ComparisonTable.tsx# Interactive comparison table
│   │   └── FaqSection.tsx  # Collapsible FAQ accordions
│   ├── App.tsx             # Root orchestration component
│   ├── index.css           # Global theme, CSS resets, and typographic variables
│   └── main.tsx            # Main Entrypoint
├── package.json            # Scripts & dependencies configuration
├── tsconfig.json           # TypeScript compilation config
└── vite.config.ts          # Vite bundler configurations
```

---

## 🛠️ Implementation Details

### Task A — Recreating Figma Frames (Fidelity & CSS)
The layout has been meticulously built using **Vanilla CSS** matching the target design across:
- **Colors & Gradients**: Premium color palettes such as Whistle's brand purple (`#8F62D4`), orchid (`#B166D4`), dark slate typography (`#181C1C`), and modern soft background gradients.
- **Typography**: Responsive font scales utilizing modern san-serif families ('Montserrat' and system defaults).
- **Layout Precision**: Native CSS Grid and Flexbox layouts are used throughout. No external UI frameworks (Tailwind, Material UI, or Bootstrap) were imported, ensuring ultra-lightweight rendering.

### Task B — Dynamic Data Fetching
In the **HappySmilers** section ([HappySmilers.tsx](src/sections/HappySmilers.tsx)), user data is loaded dynamically:
- **API Endpoint**: `https://randomuser.me/api/?results=5`
- **React State Hooks**: Employs `useState` and `useEffect` to manage the request lifecycle.
- **Loading State**: An animated CSS `.spinner` loader is rendered while the API request compiles.
- **Robust Fallback Handling**: If the randomuser.me API rate limits or drops offline, the code catches the error and seamlessly renders 5 high-resolution pre-selected Unsplash portraits mapping to local fallback names. This ensures the page never breaks or shows a blank section.

### Task C — Premium Interactions

1. **Testimonial Hover Expansion ([HappySmilers.css](src/sections/HappySmilers.css))**:
   Hovering over a customer card scales the child avatar image to fill the card background (`top: 0; left: 0; right: 0; bottom: 0`), shifts the color space to premium grayscale black-and-white, and hides the decorative quotation marks for a clean hover layout.
2. **Interactive 3D Perspective Tilt Card ([WhistleDifference.tsx](src/sections/WhistleDifference.tsx))**:
   The right-side image card implements custom 3D tilt interactions. Using cursor coordinate offset tracking relative to the card's bounding rectangle (`getBoundingClientRect()`), it updates the dynamic CSS `transform: rotateX(...) rotateY(...)` values in real-time, matching standard desktop mouse movement behaviors.
3. **Collapsible Table Accordions ([ComparisonTable.tsx](src/sections/ComparisonTable.tsx))**:
   In the Whistle Comparison Grid, clicking a feature row opens an animated container exposing a detailed text explanation of that row's feature comparison. The chevron indicators rotate smoothly to indicate open/closed states.
4. **Form Live Validation & Success Toast ([BookScanForm.tsx](src/sections/BookScanForm.tsx))**:
   The scan booking button remains in a disabled lavender state (`#C7B9E5`) until the user fills in a name and a minimum 10-digit mobile number. Submitting triggers an overlay Toast notification that auto-dismisses after 4 seconds.

---

## 📱 Responsiveness & Adaptability

The site adapts perfectly to all viewports (Desktop, Tablet, and Mobile):
- **Booking Form**: Switches to column direction on mobile with all inputs taking up 100% of the screen width for effortless touch interaction.
- **Marquee Banners**: Non-animated (static) marquees drop `white-space: nowrap` on mobile, wrapping the text and scaling down typography so the layout remains clean and avoids overflowing the screen.
- **Testimonial Cards**: Automatically transition from a 5-column desktop grid to a touch-swipeable horizontal scroll carousel on screens under `768px` wide (achieved via CSS scroll snaps without sluggish JS libraries).
- **Whistle Difference Image**: The right card image dimensions scale down proportionally on small screens, preventing the section from being overly tall on mobile devices.
