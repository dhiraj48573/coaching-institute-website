# Premium Coaching Institute Website Template

> **A modern, responsive, high-converting, and reusable website template for coaching institutes, tuition centres, and competitive exam preparation academies.**
> 
> *Target Customization Time: 30–60 minutes per client — entirely driven by a single central configuration file.*

---

## 🌟 Business Overview & Value Proposition

This template is engineered specifically for web development agencies, freelance developers, and ed-tech consultants who want to sell customized, high-converting websites to coaching centres without rebuilding code from scratch every time.

### What Makes This Template Reusable?
- **Zero Hardcoding**: All institute names, logos, phone numbers, WhatsApp links, Google Maps coordinates, course lists, fee structures, faculty profiles, toppers, gallery photos, and testimonials are read dynamically from `src/config/institute.config.js`.
- **30–60 Minute Turnaround**: Deliver a fully branded client website in under an hour by merely editing text and uploading the client's brochure and photos.
- **Built-in WhatsApp Conversion Engine**: Floating WhatsApp button, per-course enquiry buttons, free demo class CTA, and an intelligent form generator that drafts prefilled WhatsApp messages for parents and students.
- **Multi-Colour Brand System**: Toggle between 3 pre-configured academic palettes (Navy Blue + Orange, Royal Blue + Gold, Imperial Purple + Cyan) or input custom hex codes. Includes a live theme switcher widget for client sales demos!
- **Ethical Marketing & Compliance**: Clear disclaimers for sample statistics, transparent demo class explanations, and honest admission terms that adhere to education-industry advertising guidelines.

---

## 🚀 Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (Ultra-fast build & HMR)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with CSS Custom Variables for dynamic theming
- **Routing**: [React Router v6](https://reactrouter.com/) (Single-Page Application with 5 dedicated pages)
- **Icons**: [Lucide React](https://lucide.dev/) (Crisp, modern SVG icons)
- **SEO & Schema**: Dynamic document titles, meta descriptions, Open Graph cards, and `EducationalOrganization` Schema.org JSON-LD

---

## 📂 Project Architecture

```text
coaching-template/
├── public/
│   ├── _redirects                  # Netlify SPA routing rules
│   ├── favicon.svg                 # Academic SVG favicon
│   └── sample-brochure.pdf         # Editable prospectus PDF placeholder
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrochureButton.jsx  # Auto-hides if no PDF configured
│   │   │   ├── EnquiryModal.jsx    # Pop-up admission / demo form
│   │   │   ├── FloatingWhatsApp.jsx# Bottom-right pulsing WhatsApp button
│   │   │   ├── Footer.jsx          # Center information, courses & disclaimer
│   │   │   ├── Navbar.jsx          # Top info bar, brand identity & nav links
│   │   │   ├── SEOHead.jsx         # Dynamic meta tags & schema.org script
│   │   │   └── ThemeSwitcher.jsx   # Live brand theme switcher widget
│   │   └── home/
│   │       ├── AdmissionCTA.jsx    # Pre-footer conversion block
│   │       ├── DemoClassCTA.jsx    # 2-Day free trial banner
│   │       ├── FacultyPreviewSection.jsx
│   │       ├── HeroSection.jsx     # Hero headline, photography & badges
│   │       ├── PopularCourses.jsx  # Filterable course cards
│   │       ├── ResultsPreviewSection.jsx
│   │       ├── StatsSection.jsx    # 4-metric trust counters
│   │       ├── TestimonialsSection.jsx
│   │       └── WhyChooseUsSection.jsx # 6 pillars & 5-step methodology
│   ├── config/
│   │   └── institute.config.js     # MASTER CONFIGURATION FILE (All Client Info)
│   ├── context/
│   │   └── ThemeContext.jsx        # Multi-colour theme state provider
│   ├── pages/
│   │   ├── AboutPage.jsx           # History, leadership, vision, methodology
│   │   ├── ContactPage.jsx         # Contact info, Google map, form, FAQs
│   │   ├── CoursesPage.jsx         # Category filters, search, fee cards, modal
│   │   ├── HomePage.jsx            # Conversion-optimized homepage
│   │   └── ResultsPage.jsx         # Toppers, exam breakdown & photo gallery
│   ├── utils/
│   │   └── whatsapp.js             # Formatter for wa.me links
│   ├── App.jsx                     # Route orchestrator & layout wrapper
│   ├── index.css                   # Tailwind directives & CSS theme tokens
│   └── main.jsx                    # React entrypoint
├── index.html                      # HTML template with Google Fonts
├── package.json
├── tailwind.config.js
├── vercel.json                     # Vercel SPA rewrite configuration
└── vite.config.js
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
pnpm install
# or: npm install
```

### 2. Start Development Server
```bash
pnpm run dev
# or: npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to preview the site with hot-reload.

### 3. Build for Production
```bash
pnpm run build
# or: npm run build
```
Creates an optimized, minified bundle in the `dist/` directory ready for deployment.

### 4. Test Configuration Integrity
```bash
node test/verify-config.js
```
Runs automated verification on all configuration parameters to guarantee zero missing keys.

---

## 🛠️ Step-by-Step 30-Minute Customization Guide

Every customization is completed inside **`src/config/institute.config.js`**. You never need to touch internal React page components.

### Step 1: Institute Identity (3 Minutes)
```javascript
identity: {
  name: "CAREER PATH ACADEMY",
  shortName: "CPA",
  tagline: "YOUR SUCCESS, OUR COMMITMENT.",
  subTagline: "Premier Coaching for JEE, NEET, Foundation & Board Excellence",
  establishedYear: "2012",
  // Path to client logo (e.g., "/images/logo.png") or null for the auto-generated SVG badge
  logoImage: null,
  logoBadge: "CPA",
}
```

### Step 2: Choose or Switch Brand Theme (2 Minutes)
Choose one of three pre-built themes:
```javascript
// "theme-a": Navy Blue + White + Vibrant Orange (Classic & Professional)
// "theme-b": Royal Blue + White + Rich Gold (Prestigious Academic)
// "theme-c": Imperial Purple + White + Cyan Blue (Modern Tech & Skills)
activeTheme: "theme-a",

// Set to false before final client handover to hide the demo theme pill
showDemoThemeSwitcher: false,
```

### Step 3: Contact Details, WhatsApp & Google Maps (5 Minutes)
```javascript
contact: {
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Digits only (Country code + 10 digits)
  displayWhatsapp: "+91 98765 43210",
  email: "admissions@yourclient.com",
  
  address: {
    line1: "Plot No. 42, Knowledge Park, Ranipur More",
    line2: "Haridwar Bypass Road",
    city: "Haridwar",
    state: "Uttarakhand",
    pincode: "249407",
    landmark: "Opposite City Centre Mall",
  },

  timings: {
    weekdays: "Monday - Saturday: 8:00 AM - 8:00 PM",
    sunday: "Sunday: 9:00 AM - 3:00 PM (By Appointment)",
  },

  // Embed URL from Google Maps (Share -> Embed a map -> Copy src attribute)
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
}
```

### Step 4: Toggle Categories & Configure Courses (15 Minutes)
Enable or disable categories depending on what the institute offers:
```javascript
courseCategories: [
  { id: "all", name: "All Programs", enabled: true },
  { id: "jee", name: "JEE (Main & Adv)", enabled: true },
  { id: "neet", name: "NEET Medical", enabled: true },
  { id: "foundation", name: "Class 9 & 10 Foundation", enabled: true },
  { id: "boards", name: "Class 11 & 12 Boards", enabled: true },
  { id: "cuet", name: "CUET (UG)", enabled: true },
  { id: "gov-exams", name: "SSC / Banking / NDA", enabled: true },
  { id: "skills", name: "Computer & Spoken English", enabled: true },
  { id: "upsc", name: "UPSC / State PCS", enabled: false }, // Toggle as needed!
]
```
Add or modify courses in `courses`:
```javascript
{
  id: "jee-target-2026",
  name: "JEE (Main + Advanced) 2-Year Target Course",
  category: "jee",
  badge: "Flagship Program",
  targetExam: "IIT-JEE 2026 / 2027",
  shortDescription: "Rigorous 2-year classroom program for Class 10 to 11 moving students...",
  subjects: ["Physics", "Chemistry", "Mathematics"],
  duration: "2 Years (Class 11 & 12)",
  batchTiming: "Morning (8:00 AM - 1:30 PM) / Evening (3:30 PM - 8:30 PM)",
  fees: "₹85,000 / Year", // Leave empty or null to hide fee display
  eligibility: "Class 10 Passed / Appeared (Min. 70% in Science & Maths)",
  features: [ ... ],
  syllabusHighlights: [ ... ]
}
```

### Step 5: Replace Faculty Profiles (5 Minutes)
Update the `faculty` array with the institute's teaching staff:
```javascript
{
  id: "faculty-1",
  name: "Er. Rajesh Verma",
  role: "Head of Physics & Senior Mentor",
  qualification: "B.Tech, IIT Roorkee",
  experience: "15+ Years Teaching Experience",
  image: "https://your-domain.com/faculty1.jpg",
  bio: "Former Kota Senior Faculty who has guided 250+ IIT qualifiers...",
  specialization: "Mechanics & Electrodynamics",
}
```

### Step 6: Configure Brochure PDF (2 Minutes)
Place the client's brochure PDF in the `public/` folder:
```javascript
brochure: {
  pdfUrl: "/CareerPathAcademy_Brochure_2025.pdf",
  fileName: "CareerPathAcademy_Course_Brochure_2025.pdf",
  buttonText: "Download Brochure",
}
```
> **Pro Tip**: If the client does not yet have a brochure, set `pdfUrl: null` or `""`. All "Download Brochure" buttons across the header, hero, footer, and course pages will automatically hide without leaving broken links!

### Step 7: Update Results & Testimonials (5 Minutes)
Replace sample toppers and testimonials in `toppers` and `testimonials` with verified client achievements.

---

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended — 2 Minutes)

#### Via Vercel Web Dashboard:
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build settings (default):
   - **Build Command**: `npm run build` or `pnpm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

> The included `vercel.json` already contains SPA client-side rewrite rules, guaranteeing that navigating directly to `/courses` or refreshing `/about` will never return 404!

#### Via Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

### Option 2: Deploy to Netlify (2 Minutes)

#### Via Netlify Web Dashboard:
1. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site" -> "Import an existing project"**.
2. Connect your Git repository.
3. Configure build settings:
   - **Build command**: `pnpm run build` (or `npm run build`)
   - **Publish directory**: `dist`
4. Click **Deploy site**.

> The included `public/_redirects` file (`/* /index.html 200`) ensures full Single Page Application routing compatibility on Netlify.

#### Via Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

### Option 3: Deploy to Hostinger / cPanel / Apache / Nginx

1. Run `pnpm run build` locally.
2. Upload all files from the `dist/` folder into your server's `public_html/` root.
3. For Apache servers, ensure an `.htaccess` file exists in `public_html` for React routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📱 Mobile Responsiveness & Performance Audit

- **Mobile First**: Fluid layouts designed for smartphones (320px+), tablets, laptops, and ultra-wide desktop displays.
- **Touch-Friendly**: Tap targets of 44px+ for WhatsApp buttons, call links, category pills, and modal triggers.
- **Fast First Paint**: Zero external heavy bundle dependencies; lightweight SVG icons from Lucide React; lazy-loaded imagery.

---

## ⚖️ Legal & Ethical Compliance Note

This template adheres to ethical education marketing standards:
1. All demonstration statistics and ranks are labeled as customizable placeholders.
2. The admission form includes a clear legal notice stating that submitting an enquiry does not constitute confirmed admission or a payment obligation.
3. Free demo classes are clearly defined as trial sessions without hidden financial commitments.

---

## 📄 License & Commercial Rights

You hold full rights to customize, rebrand, and sell completed websites built with this template to multiple coaching institutes and commercial clients.
