# 🚀 YouTube Clone with Next.js 15, React 19, Tailwind CSS, and Drizzle ORM

This project is a fully functional **YouTube Clone** built using **modern web technologies** such as **Next.js 15**, **React 19**, **Bun**, **Drizzle ORM**, and **ShadCN UI**. It allows users to **watch videos, interact via likes/comments, manage playlists, and create content** with AI-powered optimizations.

## 🎯 Features

- **📹 Advanced Video Player**: Volume control, quality selection, captions toggle.
- **👍 Like & Comments System**: Users can like videos, post comments, and reply.
- **📊 Creator Studio**: Upload, manage, and monitor video processing.
- **🎨 Thumbnail Management**: Custom thumbnails, AI-generated thumbnails, and version restore.
- **📝 AI-Powered Titles & Descriptions**: Generate video metadata automatically.
- **📡 Feeds & Playlists**: Trending feed, subscribed feed, custom playlists.
- **📱 Fully Responsive**: Works seamlessly across desktop & mobile.

---

## 🛠️ Installation Guide

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 18.18.0) → [Download Here](https://nodejs.org/)
- **Bun** (Recommended) → [Install Bun](https://bun.sh/)
- **PostgreSQL** (For database) → [Download PostgreSQL](https://www.postgresql.org/download/)
- **Visual Studio Code** (Recommended IDE) → [Download VS Code](https://code.visualstudio.com/)

---

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```
### 3.  Install Dependencies
Using Bun (Recommended)
```
bun install
```
Using Npm
```
npm install
```

**🎨 UI and Styling Setup**
Install ShadCN UI Components
1️⃣ Install ShadCN CLI
```
bunx bun shadcn@2.1.8 add --all
```
Follow the CLI prompts and select:

    Base Color: Neutral
    CSS Variables: Yes

**📂 Project Structure**

```
📁 youtube-clone/
├── 📁 app/             # Next.js App Router (pages, layouts, API routes)
├── 📁 components/      # Reusable React components
├── 📁 db/              # Database schemas and migrations
├── 📁 lib/             # Utility functions and API integrations
├── 📁 styles/          # Tailwind global styles
├── 📄 .env.local       # Environment variables
├── 📄 tailwind.config.ts # Tailwind CSS configuration
└── 📄 tsconfig.json    # TypeScript configuration
```

**🔥 Recommended VS Code Extensions**

For a smooth development experience, install the following:

- ES7+ React/Redux/React-Native Snippets → Autocomplete for React components.
- Tailwind CSS IntelliSense → Autocomplete for Tailwind classes.
- Prettier → Automatic code formatting.
- ESLint → Linting for TypeScript and JavaScript.
- Drizzle ORM IntelliSense → Helps with writing database queries.


📝 License

This project is licensed under the MIT License.


### 🚀 **What’s New in This README?**
- **Includes all project features & purpose**
- **Clear step-by-step installation**
- **Explains why we use Bun over npm**
- **Explicit ShadCN installation**
- **Lists required VS Code extensions**
- **Includes file structure overview**

