# 🎟️ Sorteazo - Raffle Management Platform

> 🚧 **Project Status:** Active Development (Building in Public)

**Sorteazo** is a full-stack Progressive Web App (PWA) designed to modernize how digital content creators manage online raffles. It automates ticket selection, real-time payments, and winner selection, replacing manual spreadsheet management with a robust, transactional system.

## 🎯 The Engineering Challenge

The core goal of this project is not just to build a UI, but to solve **critical backend challenges** inherent to e-commerce and high-demand events:

* **Concurrency Control:** Preventing race conditions when multiple users attempt to purchase the same ticket simultaneously.
* **Data Integrity:** Ensuring atomic transactions between the payment gateway and our database.
* **Scalability:** Designing a schema capable of handling high traffic spikes during raffle launches.

## 🛠️ Tech Stack

* **Frontend:** React (Vite), Tailwind CSS, Framer Motion.
* **Backend:** Node.js, Express.
* **Database:** PostgreSQL (via **Neon Tech** Serverless).
* **Payments:** Mercado Pago API (Webhooks & integration).
* **Infrastructure:** Vercel (Frontend), Railway (Database).

## 🚀 Roadmap & Progress

I am currently implementing the core transactional features.

- [x] **Project Architecture:** Setup Monorepo/Structure & DB Schema Design.
- [x] **UI/UX:** Landing page, Raffle details, and Ticket grid selection.
- [x] **Authentication:** User login and session management (🚧 *In Progress*).
- [ ] **Payments Integration:** Connecting Mercado Pago Webhooks (🚧 *In Progress*).
- [ ] **Concurrency Locks:** Implementing database row-level locking to prevent double-booking (🚧 *In Progress*).
- [ ] **Admin Dashboard:** Interface for creators to create raffles and view stats (🚧 *In Progress*).

## 📂 Project Structure

This is a Monorepo containing both the client and server logic:

```bash
sorteazo_app/
├── client/   # React + Vite Frontend
└── server/   # Node.js + Express Backend
```

## 📦 How to Run Locally

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/ClaudioMFCDev/sorteazo_app
    ```

2.  **Setup the Backend (Terminal 1)**
    ```bash
    cd server
    npm install
    # Ensure you create a .env file with your DB credentials/PORT
    npm run dev
    ```

3.  **Setup the Frontend (Terminal 2)**
    ```bash
    cd client
    npm install
    npm run dev
    ```

4.  **Setup Environment Variables:**
    Create a `.env.local` file with your credentials (DB_URL, MERCADO_PAGO_KEY, etc.).
    ```bash
    PORT=3000
    DATABASE_URL="postgres://user:pass@ep-random-name.region.aws.neon.tech/neondb..." # Neon Tech connection string
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 📬 Contact & Feedback

Built by **Claudio Castillo** - Software Engineer (5th Year Student).
Connect with me on https://www.linkedin.com/in/claudio-castillo-dev/ to follow the development journey!
