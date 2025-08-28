# Todo App UI

A modern, responsive todo application built with Next.js 15, TypeScript, and Tailwind CSS. This frontend application provides a clean interface for managing tasks and requires a backend API server to function properly.

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Responsive design with mobile support
- ✅ TypeScript for type safety
- ✅ Server actions for data mutations
- ✅ Tailwind CSS for styling
- ✅ Next.js 15 with Turbopack for fast development

## Prerequisites

Before setting up this project, ensure you have:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Backend API server** - Set up the [Todo App Server](https://github.com/rrhodeswebdev/todo-app-server) first

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd todo-app-ui
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and configure the required environment variable:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```
   
   Replace `http://localhost:8080` with your actual backend API server URL.

### 4. Run the Development Server

Start the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── actions/          # Server actions for API calls
│   └── tasks.ts      # Task-related server actions
├── app/              # Next.js app router pages
│   ├── edit/[id]/    # Task editing page
│   ├── new/          # New task creation page
│   └── page.tsx      # Home page
├── components/       # Reusable UI components
│   ├── button.tsx
│   ├── header.tsx
│   ├── task-form.tsx
│   ├── task-item.tsx
│   └── task-list.tsx
└── types/            # TypeScript type definitions
    └── tasks.ts
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
