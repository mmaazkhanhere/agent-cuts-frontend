# AgentCuts - Automated Long-Form Video Repurposing

**Hackathon Project - Google Cloud ADK Hackathon**

## 📌 Project Overview

**AgentCuts** is an AI-powered frontend interface developed for the Google Cloud ADK Hackathon. It enables users to upload long-form videos (like podcasts and lectures), which are then processed into short-form clips optimized for platforms such as **TikTok** and **YouTube Shorts**.

The project focuses on a smooth user experience with real-time feedback, intuitive design, and modern UI animations.

## 🚀 Features

- **Drag-and-Drop Video Upload**

- **Real-Time Upload Progress Tracking**

- **Smart Segment Detection (via ADK backend)**

- **Short-Form Clip Preview**

- **Modern, Responsive UI**

### 🛠️ Technologies Used

- **Next.js** - React-based framework for server-side rendering and routing

- **TypeScript** - Type-safe JavaScript for scalable development

- **Tailwind CSS** - Utility-first styling framework for fast UI development

- **shadcn/ui** - Pre-built accessible UI components with Tailwind integration

- **Framer Motion** - Smooth and interactive animations for enhanced user experience

- **react-toastify** - Elegant toast notifications for success/error feedback

## 📁 Project Structure

```bash

agent-cuts-frontend/
├── 📁 public/                          # Static assets
├── 📁 types/                           # TypeScript types
│
├── 📁 app/                             # Next.js App Router
│   ├── 📁 components/                  # Reusable UI components
│   │   ├── 📁 ui/                      # ShadCN components
│   │   ├── Navbar.tsx                  
│   │   └── Footer.tsx                  
│   │
│   ├── 📁 constants/                   # App constants
│   ├── 📁 data/                        # Static data files
│   │
│   ├── layout.tsx                      # Root layout
│   ├── page.tsx                        # Home page
│   ├── globals.css                     # Global styles
│   │
│   ├── 📁 home/                        # Home page components
│   │
│   ├── 📁 about/                       # About page
│   │   ├── page.tsx                    # About page component
│   │   └── 📁 components/              # Page-specific components
│   │
│   └── 📁 upload/                      # Upload page
│       ├── page.tsx                    # Upload page component
│       └── 📁 components/              # Page-specific components
│
├── 📁 lib/                             # Non-UI logic
│   ├── 📁 hooks/                       # Custom React hooks
│   ├── 📁 services/                    # API services (fetch wrappers)
│   └── 📁 utils/                       # Utility functions
│

```

## ⚙️ Getting Started

```bash

# Clone the repo
git clone https://github.com/mmaazkhanhere/agent-cuts-frontend.git

cd agent-cuts-frontend

# Install dependencies
npm install

# Create a `.env` file in the root directory and add the following:

NEXT_PUBLIC_BACKEND_URL=back-end-url
Replace back-end-url with the actual URL of your backend server

# Run the dev server
npm run dev

```

Visit http://localhost:3000 to view the app in your browser.
