# 🌟 Revati Ponkshe — Personal Portfolio

This is a **full-stack personal portfolio project** built with **React (frontend)** and **FastAPI (backend)**, featuring a **PostgreSQL** database for storing contact form submissions.

The portfolio highlights skills, projects, education, and experience of **Revati Anirudha Ponkshe**, with an attractive UI, smooth animations, and backend connectivity.

---

## 🚀 Features

### 🎨 Frontend (React + Vite + Tailwind + Framer Motion)
- Responsive and animated portfolio UI
- Sections: Home, About, Experience, Projects, Contact
- "View Resume" button to open your PDF resume
- Interactive design with modern animations
- Hosted easily on **Vercel** or **Render (Static Site)**

### ⚙️ Backend (FastAPI + PostgreSQL)
- Handles **Contact form submissions**
- Saves user messages in **PostgreSQL** (Render cloud database)
- Uses SQLAlchemy ORM for easy database management
- Ready for deployment on **Render.com**

---

## 🗂️ Project Structure

portfolio/
│
├── frontend/ # React Frontend (revati-portfolio)
│ ├── public/
│ │ └── Revati_Ponkshe_Resume.pdf
│ ├── src/
│ │ ├── assets/
│ │ │ └── profile.jpg
│ │ ├── components/
│ │ │ ├── Hero.jsx
│ │ │ ├── About.jsx
│ │ │ ├── Projects.jsx
│ │ │ ├── Experience.jsx
│ │ │ ├── Contact.jsx
│ │ │ └── Footer.jsx
│ │ ├── data/
│ │ │ └── resume.js
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── package.json
│ ├── vite.config.js
│ └── .gitignore
│
├── backend/ # FastAPI Backend
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── requirements.txt
│ ├── .env # (contains DB credentials)
│ └── .gitignore
│
└── README.md


## ⚡ Local Setup Instructions

### 1️⃣ Frontend (React)

```bash
cd frontend
npm install
npm run dev
Open → http://localhost:5173

2️⃣ Backend (FastAPI)
Create and activate virtual environment
bash
Copy code
cd backend
python -m venv venv
venv\Scripts\activate      # on Windows
# or
source venv/bin/activate   # on macOS/Linux
Install dependencies
bash
Copy code
pip install -r requirements.txt
Create .env file
bash
Copy code
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
Run the server
bash
Copy code
uvicorn main:app --reload
Backend runs on → http://127.0.0.1:8000

3️⃣ Connect Frontend and Backend Locally
In your React Contact component, make sure the API call points to:

js
Copy code
fetch("http://127.0.0.1:8000/contact", { ... })
