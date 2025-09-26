# Portfolio ([prcpham.com](https://prcpham.com))

This repository contains the source code and assets for Percy Pham's personal portfolio website, built with Next.js, React, and TypeScript.

## Structure

```
prcpham-portfolio
├── .github/
│   └── workflows/
│       └── nextjs.yml   # GitHub Actions workflow for CI/CD
│   
├── portfolio/
│   ├── pages/           # Page components
│   ├── public/          # Images, GIFs, GhostRun
│   ├── styles/          # Global and module CSS
│   ├── package.json     # Project dependencies and scripts
│   └── ...              # Other Next.js app files
└── README.md            # Project documentation
```

## Commands

1. **Install dependencies:**
   ```
   cd portfolio
   npm install
   ```

2. **Run development server:**
   ```
   npm run dev
   ```

3. **Build static export:**
   ```
   npm run build && npm run export
   ```

4. **Serve static site:**
   ```
   npx serve@latest out
   ```

## Credits
- Built by **Percy Pham** ([GitHub](https://github.com/prcpham-dev))
- Drawings and artwork by **Tai**.