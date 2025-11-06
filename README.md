# My Portfolio Website

A modern, responsive portfolio website showcasing my projects, experience, and skills as a Full-Stack Developer specializing in Java Backend and React development.

**Live Demo:** [denizaltun.de](https://denizaltun.de/)

![Portfolio Preview](frontend/public/screenshots/projects.png)

---

## Features

- Modern, clean UI with Material-UI components
- Dark/Light mode toggle with persistent theme preference
- Fully responsive design for all devices
- Fast performance with Vite
- Smooth scrolling navigation
- Sections: About, Projects, Resume
- Type-safe with TypeScript

---

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety and better DX
- **Material-UI (MUI)** - Component library
- **Vite** - Build tool and dev server

### DevOps & Deployment
- **Docker** - Containerization
- **Docker Hub** - Container registry
- **Hetzner VPS** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

---

## Local Development

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ad-altun/MyPortfolio.git
   cd MyPortfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## Docker Deployment

### Build and Run with Docker

1. **Build the Docker image**
   ```bash
   docker build -t my-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 80:80 my-portfolio
   ```

3. **Access the application**
   ```
   http://localhost
   ```

### Docker Hub Deployment

1. **Tag the image**
   ```bash
   docker tag my-portfolio yourusername/my-portfolio:latest
   ```

2. **Push to Docker Hub**
   ```bash
   docker push yourusername/my-portfolio:latest
   ```

3. **Pull and run on VPS**
   ```bash
   docker pull yourusername/my-portfolio:latest
   docker run -d -p 80:80 --name portfolio yourusername/my-portfolio:latest
   ```

---

## Cloud Deployment

### Option 1: Render.com (Recommended for beginners)
1. Connect your GitHub repository to Render
2. Select "Static Site" as service type
3. Set build command: `cd frontend && npm install && npm run build`
4. Set publish directory: `frontend/dist`
5. Deploy automatically on push

### Option 2: VPS (DigitalOcean, Linode, AWS EC2)
1. Set up a Linux VPS with Docker installed
2. Clone your repository
3. Build and run using Docker:
   ```bash
   docker build -t portfolio .
   docker run -d -p 80:80 --restart unless-stopped portfolio
   ```
4. (Optional) Set up Nginx as reverse proxy
5. (Optional) Configure SSL with Let's Encrypt

### Option 3: Netlify / Vercel
1. Connect GitHub repository
2. Framework: Vite
3. Build command: `cd frontend && npm run build`
4. Publish directory: `frontend/dist`
5. Auto-deploy on commits

---

##  Core Project Structure

```
MyPortfolio/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Resume.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   ├── App.tsx           # Main application component
│   │   ├── main.tsx          # Application entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Static assets
│   ├── package.json
│   └── vite.config.ts
├── Dockerfile                # Docker configuration
├── .gitignore
└── README.md
```

---

## Customization

To customize this portfolio for your own use:

1. **Update personal information** in `About.tsx`
2. **Add your projects** in `Projects.tsx`
3. **Update experience** in `Experience.tsx`
4. **Modify links** in `Sidebar.tsx`
5. **Change theme colors** in `App.tsx` theme configuration
6. **Replace avatar/images** in the `public` folder

---

## Credits & Inspiration

This portfolio was inspired by [Chun-Ho (Hugo) Lin's portfolio](https://github.com/1chooo/portfolio).

The design and structure concepts are adapted from Hugo's work, which is licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).

**Original Author:** [Chun-Ho (Hugo) Lin](https://github.com/1chooo)  
**Original Repository:** [1chooo/portfolio](https://github.com/1chooo/portfolio)

This portfolio has been **completely reimplemented** using:
- React + TypeScript (vs. Next.js in original)
- Material-UI (vs. Tailwind CSS in original)
- Custom components and features
- My own content, projects, and styling preferences

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Attribution Notice:** While the code implementation is original, the design inspiration comes from Hugo Lin's portfolio under CC BY 4.0.

---

**⭐ If you found this helpful, please give it a star!**
