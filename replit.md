# Professional Portfolio Application

## Overview

This is a full-stack web application for a professional portfolio of a Senior Quality Engineer. The application features a modern React frontend with a Node.js/Express backend, designed to showcase professional experience, skills, and provide a contact form for potential employers or clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas for API request/response validation
- **Development**: Hot module replacement with Vite integration

### Project Structure
- **Monorepo**: Single repository with shared code between client and server
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory
- **Shared**: Common schemas and types in `/shared` directory

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and education information
- **Experience Section**: Career timeline with current and previous roles
- **Skills Section**: Categorized technical and soft skills
- **Projects Section**: Placeholder for future project showcases
- **Contact Section**: Form for potential employers to reach out
- **Footer**: Additional navigation and social links

### Backend Components
- **API Routes**: RESTful endpoints for contact form and resume download
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: PostgreSQL tables for users and contact submissions
- **Middleware**: Request logging and error handling

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Form submissions (id, name, email, subject, message, created_at)

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **API Processing**: Express routes validate requests with Zod schemas
3. **Data Storage**: Contact form submissions stored in PostgreSQL via Drizzle ORM
4. **Response Handling**: Structured JSON responses with proper error handling
5. **UI Updates**: React Query manages cache updates and UI state synchronization

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS
- **Fonts**: Google Fonts (Inter)
- **Icons**: Lucide React icons

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript
- **Code Quality**: ESLint, Prettier (inferred from setup)
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `/dist/public`
2. **Backend Build**: ESBuild bundles server code to `/dist/index.js`
3. **Static Assets**: Frontend assets served from Express in production

### Environment Setup
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Express serves built React app and API endpoints
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Deploy database schema changes

### Database Management
- **Migrations**: Stored in `/migrations` directory
- **Schema**: Defined in `/shared/schema.ts`
- **Connection**: Configured via Drizzle config with environment variables

## Technical Decisions

### Architecture Choices
- **Monorepo Structure**: Simplifies development and deployment while maintaining code organization
- **TypeScript**: Provides type safety across the entire application stack
- **Drizzle ORM**: Modern, type-safe database toolkit with excellent TypeScript integration
- **React Query**: Efficient server state management with caching and background updates

### UI/UX Decisions
- **Radix UI**: Accessible, unstyled components provide solid foundation
- **Tailwind CSS**: Utility-first approach enables rapid styling and consistent design
- **Framer Motion**: Smooth animations enhance user experience without complexity
- **Responsive Design**: Mobile-first approach ensures compatibility across devices

### Development Experience
- **Vite**: Fast hot module replacement and optimized builds
- **Shared Types**: Common schemas between client and server prevent type mismatches
- **Path Aliases**: Simplified imports with `@/` for client and `@shared/` for shared code

## Recent Changes: Latest modifications with dates

### July 13, 2025
- **Fixed rotating border animation**: Now properly displays only on card borders instead of covering entire card content
- **Fixed dark mode text color**: Education section header now displays white text in dark mode
- **Enhanced responsive navigation**: 
  - Desktop/tablet (md+): Shows both title and nav items using 70-80% screen width
  - Mobile: Shows only title using 70-80% screen width, nav items in hamburger menu
  - Scrolled state: Navigation centers and becomes rounded on larger screens
- **Updated with authentic user data**: Replaced placeholder content with real information from Rishav Kumar Rajak's resume
- **Updated contact form**: Now sends emails to rajakrishav395@gmail.com
- **Enhanced project information**: Updated with actual project details and GitHub links
- **Updated skills section**: Reflects real technical skills including Python, Selenium, pyATS, and certifications