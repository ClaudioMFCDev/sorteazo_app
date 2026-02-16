# 🎟️ Sorteazo - Raffle Management Platform

> 🚧 **Project Status:** Active Development (Building in Public)

**Sorteazo** is a full-stack Progressive Web App (PWA) designed to modernize how digital content creators manage online raffles. It automates ticket selection, real-time payments, and winner selection, replacing manual spreadsheet management with a robust, transactional system.

## 🎯 The Engineering Challenge

The core goal of this project is not just to build a UI, but to solve **critical backend challenges** inherent to e-commerce and high-demand events:

* **Concurrency Control:** Preventing race conditions when multiple users attempt to purchase the same ticket simultaneously.
* **Data Integrity:** Ensuring atomic transactions between the payment gateway and our database.
* **Scalability:** Designing a schema capable of handling high traffic spikes during raffle launches.

## 🛠️ Tech Stack

* **Frontend:** React, Next.js 14 (App Router), Tailwind CSS, Framer Motion.
* **Backend:** Node.js, Express.
* **Database:** PostgreSQL (Relational schema for data consistency).
* **Payments:** Mercado Pago API (Webhooks & integration).
* **Infrastructure:** Vercel (Frontend), [Tu proveedor de BD, ej: Supabase/Neon/Local] (Database).

## 🚀 Roadmap & Progress

I am currently implementing the core transactional features.

- [x] **Project Architecture:** Setup Monorepo/Structure & DB Schema Design.
- [x] **UI/UX:** Landing page, Raffle details, and Ticket grid selection.
- [x] **Authentication:** User login and session management.
- [ ] **Payments Integration:** Connecting Mercado Pago Webhooks (🚧 *In Progress*).
- [ ] **Concurrency Locks:** Implementing database row-level locking to prevent double-booking (🚧 *In Progress*).
- [ ] **Admin Dashboard:** Interface for creators to create raffles and view stats.

## 📦 How to Run Locally

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/your-username/sorteazo.git](https://github.com/your-username/sorteazo.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env.local` file with your credentials (DB_URL, MERCADO_PAGO_KEY, etc.).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 📬 Contact & Feedback

Built by **Alex [Tu Apellido]** - Software Engineer (5th Year Student).
Connect with me on [LinkedIn](LINK_A_TU_LINKEDIN) to follow the development journey!
