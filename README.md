![PrimeStream Banner](https://github.com/krpiyush1302/PrimeStream/blob/main/MainImage.jpg)

# 🎥 PrimeStream

PrimeStream is a full-stack video streaming platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register, log in, browse movies or series, and stream content. It features authentication, admin routes, and a responsive UI.

---

## 🚀 Features

- ✅ User registration and login (JWT-based authentication)
- 🎬 View and browse movies/series
- 🛡️ Protected routes for users and admins
- ⚙️ Admin panel for managing genres/content
- 🌐 Responsive frontend built with Vite + React + Redux
- 📦 MongoDB for database, Express.js as backend API

---

## 🛠 Tech Stack

| Layer       | Technology               |
|-------------|---------------------------|
| Frontend    | React, Vite, Redux Toolkit |
| Backend     | Node.js, Express.js       |
| Database    | MongoDB + Mongoose        |
| Authentication | JWT + Role-based access |
| Styling     | CSS / Tailwind (optional) |
| Dev Tools   | Nodemon, Concurrently     |

---

## 📁 Folder Structure

PrimeStream/<br>
├── backend/ # Node.js backend with Express<br>
│ ├── controllers/<br>
│ ├── models/<br>
│ ├── routes/<br>
│ ├── middleware/<br>
│ └── index.js<br>
│
├── frontend/ # React frontend using Vite<br>
│ ├── components/<br>
│ ├── pages/<br>
│ ├── redux/<br>
│ └── main.jsx<br>
│
├── .env # Environment variables<br>
├── package.json # Root package file for fullstack scripts<br>
└── README.md # Project README<br>


1️⃣ Clone the repository <br>
git clone https://github.com/krpiyush1302/PrimeStream.git <br>
cd PrimeStream <br>

2️⃣ Setup the backend <br>
cd backend<br>
npm install<br>

🔐 Create a .env file inside the backend/ folder:<br>
PORT=3000<br>
MONGO_URI='mongodb://127.0.0.1:27017/moviesApp' <br>
NODE_ENV='development' <br>
JWT_SECRET=akzbugxeebuhex23123asdc <br>

3️⃣ Setup the frontend<br>
cd ../frontend <br>
npm install <br>

4️⃣ Start the full project (from root folder) <br>
npm run fullstack <br>

🌐 Deployment Guide<br>
Frontend: Deploy frontend/ to Vercel or Netlify <br>
Backend: Deploy backend/ to Render, Railway, or Heroku <br>
Database: Use MongoDB Atlas <br>
Set your MONGO_URL and JWT_SECRET as environment variables on your hosting platform <br>


🧪 Future Improvements <br>
📺 Video player integration (e.g., using Video.js) <br>
📤 Admin upload panel <br>
💬 User reviews and comments<br>
🌟 Watchlist & rating system<br>
📱 Mobile responsiveness <br>


🤝 Contributing <br>
Contributions are welcome! Feel free to fork the repo and submit a pull request. <br>


👨‍💻 Author <br>
Developed by Piyush Raj <br>
Feel free to ⭐ this repo and share your feedback! <br>

📬 Connect with Me <br>

- 💼 [LinkedIn](https://www.linkedin.com/in/piyushraj-infosec/)  <br>
- 🐙 [GitHub](https://github.com/krpiyush1302)  <br>
- ✉️ Email: pk7049153@gmail.com<br>

