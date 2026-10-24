# Uma Maheswari V — Portfolio & Resume (Professional Project)

A clean, production-grade portfolio and ATS-compliant resume for **Uma Maheswari V** (Aspiring MERN Stack Developer), incorporating all requested client/reviewer revisions.

---

## 📁 Professional Folder Structure

```
portfolio-clone/
│
├── public/                 # Static assets served as-is (images, favicon, resume)
│   ├── favicon.ico         # Site icon
│   ├── resume.pdf          # Latest compiled ATS resume PDF
│   └── uma.png             # Profile avatar image
│
├── src/                    # Clean, modular React application source code
│   ├── components/         # Reusable UI components
│   │   ├── Avatar.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized profile & project data
│   ├── App.jsx             # Main layout & component tree
│   ├── index.css           # Tailwind & custom CSS utility styles
│   └── main.jsx            # React root mount
│
├── dist/                   # Production-ready build (ready for Netlify deployment)
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── resume.pdf
│   └── uma.png
│
├── resume/                 # ATS Resume source template & automated PDF generator
│   ├── resume.html         # HTML/CSS template conforming to feedback requirements
│   └── generate_pdf.py     # Automated script to compile HTML -> PDF via Edge/Chrome
│
├── server/                 # Optional Python backend
│   ├── app.py              # Flask API for /api/profile and /api/contact
│   └── requirements.txt    # Python dependencies (Flask, Flask-CORS)
│
├── BIN/                    # Archived / unwanted scratch files (ignored by git)
│   ├── scraped/            # Original scraped legacy assets
│   ├── data.json           # Raw intermediate dump
│   ├── github_repo_index.html # Legacy standalone test page
│   └── organize.py         # Cleanup script
│
├── .gitignore              # Git ignore file (excludes node_modules, BIN, etc.)
├── index.html              # Vite entry HTML
├── package.json            # Node.js project configuration & scripts
├── package-lock.json       # Exact lockfile
├── postcss.config.js       # PostCSS Tailwind config
├── tailwind.config.js      # Tailwind theme configuration
├── vite.config.js          # Vite configuration with proxy
└── README.md               # Documentation
```

---

## 🚀 Getting Started

### 1. Frontend Development

```bash
# Install dependencies
npm install

# Run Vite dev server (opens on http://localhost:3000)
npm run dev
```

### 2. Building for Production (Netlify / Vercel)

```bash
# Build the production assets into dist/
npm run build
```

### 3. Re-generating the Resume PDF

If you edit [`resume/resume.html`](./resume/resume.html), regenerate [`public/resume.pdf`](./public/resume.pdf) and [`dist/resume.pdf`](./dist/resume.pdf) with:

```bash
python resume/generate_pdf.py
```

### 4. Optional Flask Backend

```bash
cd server
pip install -r requirements.txt
python app.py
```

Runs on `http://127.0.0.1:5000` with CORS enabled.

---

## 🌐 Deploying to Netlify

1. Log into [Netlify](https://app.netlify.com/).
2. Drag and drop the **`dist/`** folder into the Netlify dashboard.
3. The updated portfolio and resume PDF will be instantly live!
"# Uma-Maheswari-portfolio" 
