# Gharpayy CRM – Lead Management System

## Overview

Gharpayy CRM is a lightweight lead management system designed for real estate teams to track leads, manage visits, and monitor pipeline progress.

The system allows recruiters to simulate leads, track their lifecycle, and analyze activity through a simple dashboard.

## Features

### Dashboard

* KPI cards (Total Leads, Interested, Visits, Closed)
* Pipeline visualization
* Recent lead activity

### Leads Management

* View all leads
* Lead status tracking
* Simulated lead generation

### Visit Management

* Schedule and track visits
* Filter visits by:

  * Interested
  * Completed
  * Cancelled

### Agents

* View agents in the system
* Agent contact details

### Simulation Feature

A **Simulate Lead** button generates random leads for testing and demonstration.

---

## Tech Stack

Frontend

* React
* React Router
* Axios
* React Icons

Backend

* Node.js
* Express.js

Database

* MongoDB

Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

```
gharpayy-crm
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
└── README.md
```

---

## Installation

### Clone repository

```
git clone https://github.com/yourusername/gharpayy-crm
```

### Backend setup

```
cd backend
npm install
npm start
```

### Frontend setup

```
cd frontend
npm install
npm run dev
```

---

## Demo Workflow

1. Click **Simulate Lead**
2. Lead appears in the system
3. View lead activity in Dashboard
4. Track visits and statuses
5. Monitor agents

---

## Future Improvements

* Drag and drop lead pipeline
* Real-time updates with sockets
* Authentication system
* Lead assignment to agents
* Visit scheduling calendar

---

## Author

Amit Yadav
Software Developer

Passionate about building scalable web applications and solving real-world problems through technology.

Built with ❤️ and curiosity
