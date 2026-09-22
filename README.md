# 🎨 Outsource CRM - Frontend

> **React + TypeScript + Vite** based modern web application for task management

---

## 📋 Table of Contents
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [Features](#-features)
- [Routing](#-routing)
- [User Roles & Access](#-user-roles--access)

---

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM v7.10.1
- **Styling**: TailwindCSS 3.4.17
- **HTTP Client**: Axios 1.13.2
- **Icons**: Lucide React 0.561.0
- **Notifications**: React Hot Toast 2.6.0
- **UI Utilities**: clsx, tailwind-merge

---

## 📁 Project Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── App.tsx          # Main app with routing (127 lines)
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles
│   ├── components/      # Reusable UI components
│   │   └── Layout/      # Layout components (Sidebar, Header)
│   ├── pages/           # Page components
│   │   ├── Auth/        # Login, Register, ForgotPassword
│   │   ├── Tasks/       # TasksList, AddTask, TaskDetails
│   │   ├── Clients/     # ClientsList, AddClient, ClientDetails, EditClient
│   │   ├── Agents/      # AgentsList, AddAgent, AgentDetails, EditAgent
│   │   ├── Organisation/# Organisation, OrganisationDetails, EditOrganisation
│   │   │                # UsersList, InviteUser
│   │   ├── Roles/       # RolesList, RoleForm, RoleEdit
│   │   ├── Settings.tsx # User settings page
│   │   └── NotificationsList.tsx
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions
│   └── hooks/           # Custom React hooks
├── .env                 # Environment variables
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # TailwindCSS config
```

---

## 💻 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend API running on `http://localhost:1601`

### Steps

1. **Navigate to frontend directory**:
```bash
cd frontend
```

2. **Install dependencies**:
```bash
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:1601
```

This configures the backend API endpoint for all HTTP requests.

---

## 🚀 Running the Application

### Development Mode (with hot reload):
```bash
npm run dev
```

**Server will start on**: `http://localhost:5173`

### Build for Production:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

### Lint Code:
```bash
npm run lint
```

---

## ✨ Features

### 🔐 Authentication
- Login with username/password
- JWT token-based authentication
- Auto-redirect to login if token expired
- Protected routes

### 👥 User Management
- Invite users with roles
- View organization users
- Update user profiles
- Change password

### 🏢 Organization Management (Super Admin)
- Create multiple organizations
- View organization details
- Edit organization info
- Impersonate organization admins

### 🎭 Role Management
- Create custom roles
- Assign granular permissions
- Edit/delete roles
- Role-based access control

### 🏪 Client Management
- Add/edit/delete clients
- View client details
- Multiple client types support
- Client-specific tasks

### 🧑‍💻 Agent Management
- Add/edit agents
- View agent profiles
- Assign tasks to agents

### 📋 Task Management
- Create tasks with details
- Assign to agents
- Track task status
- Add comments
- Upload attachments
- Task workflow management

### 🔔 Notifications
- Real-time notifications
- Task updates
- User invitations
- Mark as read/unread

### ⚙️ Settings
- Profile management
- Password change
- Preferences

---

## 🗺️ Routing

### Public Routes
- `/login` - User login
- `/register` - New user registration
- `/forgot-password` - Password recovery

### Protected Routes (Require Authentication)

#### Tasks
- `/tasks` - Tasks list (dashboard)
- `/tasks/new` - Create new task
- `/tasks/:id` - Task details

#### Clients
- `/clients` - Clients list
- `/clients/new` - Add new client
- `/clients/:id` - Client details
- `/clients/edit/:id` - Edit client

#### Agents
- `/agents` - Agents list
- `/agents/new` - Add new agent
- `/agents/:id` - Agent details
- `/agents/edit/:id` - Edit agent

#### Organizations (Super Admin Only)
- `/organizations` - Organizations list
- `/organizations/:id` - Organization details
- `/organizations/edit/:id` - Edit organization

#### Users & Roles
- `/users` - Users list
- `/users/invite` - Invite new user
- `/roles` - Roles list
- `/roles/new` - Create new role
- `/roles/:roleId/edit` - Edit role

#### Other
- `/settings` - User settings
- `/notifications` - Notifications list

---

## 👥 User Roles & Access

### 🔐 Super Admin
**Access**: Everything
- ✅ All organizations
- ✅ Create/edit organizations
- ✅ Impersonate admins
- ✅ System-wide access

**Sidebar Menu**:
- Organizations
- Settings

### 👨‍💼 Admin
**Access**: Own organization only
- ✅ Manage clients
- ✅ Manage agents
- ✅ Manage tasks
- ✅ Invite users
- ✅ Create roles

**Sidebar Menu**:
- Dashboard (Tasks)
- Tasks
- Clients
- Agents
- Users
- Roles
- Settings

### 🧑‍💻 Agent
**Access**: Assigned tasks only
- ✅ View assigned tasks
- ✅ Update task status
- ✅ Submit completed tasks
- ✅ Add comments

**Sidebar Menu**:
- Tasks (assigned only)
- Settings

### 👤 Client
**Access**: Own tasks only
- ✅ Create tasks
- ✅ View own tasks
- ✅ Track task status
- ✅ Add comments

**Sidebar Menu**:
- Tasks (own only)
- Settings

---

## 🎨 UI Components

### Layout Components
- **Sidebar**: Role-based navigation menu
- **Header**: User profile, notifications
- **Protected Route**: Authentication wrapper

### Common Components
- Loading spinner
- Toast notifications
- Form inputs
- Buttons
- Cards
- Modals

---

## 🔧 Configuration Files

### `vite.config.ts`
- Build configuration
- Dev server settings
- Plugin configuration

### `tailwind.config.js`
- Custom theme colors
- Typography settings
- Responsive breakpoints

### `tsconfig.json`
- TypeScript compiler options
- Path aliases
- Type checking rules

---

## 📦 Key Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.10.1",
  "axios": "^1.13.2",
  "lucide-react": "^0.561.0",
  "react-hot-toast": "^2.6.0",
  "tailwindcss": "^3.4.17",
  "typescript": "~5.9.3",
  "vite": "^7.2.4"
}
```

---

## 🔐 Authentication Flow

1. User enters credentials on `/login`
2. Frontend sends `POST /auth/login` to backend
3. Backend returns JWT token
4. Token stored in `localStorage`
5. All API requests include `Authorization: Bearer <token>` header
6. Protected routes check for token presence
7. Redirect to `/login` if token missing/expired

---

## 🌐 API Integration

### Axios Configuration
```typescript
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

### Base URL
```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1601';
```

---

## 🎯 Code Splitting

The app uses **React.lazy()** for route-based code splitting:
- Faster initial load
- Smaller bundle sizes
- Better performance

### Loading States
All lazy-loaded routes show a loading spinner during component load.

---

## 🐛 Troubleshooting

### API Connection Error
- Ensure backend is running on `http://localhost:1601`
- Check `.env` file for correct `VITE_API_URL`
- Verify CORS settings in backend

### Token Expired
- Re-login to get new token
- Token expires after 60 minutes

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

---

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

---

## 🚀 Performance Optimizations

- ✅ Code splitting with React.lazy()
- ✅ Lazy loading of routes
- ✅ Optimized bundle size
- ✅ TailwindCSS purging
- ✅ Vite fast refresh

---

## 📝 Development Guidelines

### Adding New Routes
1. Create component in `src/pages/`
2. Add lazy import in `App.tsx`
3. Add route in `<Routes>` section
4. Update sidebar menu if needed

### Adding New API Calls
1. Create service function in `src/utils/`
2. Use axios with token header
3. Handle errors with try-catch
4. Show toast notifications

### Styling
- Use TailwindCSS utility classes
- Follow existing component patterns
- Maintain consistent spacing
- Use Lucide icons for consistency

---

## 🔄 State Management

Currently using:
- **React useState** for local state
- **localStorage** for token persistence
- **Context API** (if needed for global state)

---

## 📞 Support

For issues or questions, contact the development team.

---

**Built with ⚡ using Vite + React + TypeScript**
