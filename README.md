# S47 F1 Out of Context

Welcome to **S47 F1 Out of Context**!  
This is a fun, interactive web project for Formula 1 fans who love the sport’s wildest moments, epic celebrations, hilarious rages, and jaw-dropping crashes—all in one place.

## 🚦 What is this?

S47 F1 Out of Context is your one-stop destination for:
- **Victory Celebrations:** Relive the most epic and iconic F1 celebrations.
- **Rage Moments:** Watch the funniest and most intense rages between drivers, stewards, team principals, and more.
- **Crashes:** Experience the most dramatic and entertaining crashes, all portrayed in a light-hearted, funny way.

If you love F1, you’ll find nostalgia, adrenaline, and laughs here!

---

## 🌐 Live Demo

- **Frontend:** [https://f1outofcontext.netlify.app/content](https://f1outofcontext.netlify.app/content)
- **Backend:** [https://s47-f1-out-of-context.onrender.com](https://s47-f1-out-of-context.onrender.com)

---

## 🚀 Features

- Choose from three categories: **Victory Celebration**, **Rage**, or **Crashes**
- Instantly get a random, out-of-context F1 video clip for your chosen mood
- JWT-based authentication for secure access
- Add your own favorite moments (if you’re logged in)
- Responsive and fun UI

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB
- **Deployment:** Netlify (Frontend), Render (Backend)

---

## 🏁 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/S47_F1_out_of_Context.git
cd S47_F1_out_of_Context
```

### 2. Setup Backend

```bash
cd S47_F1_out_of_Context-main/Server
npm install
# Add your MongoDB URI and JWT secret to .env
npm start
```

### 3. Setup Frontend

```bash
cd ../Client
npm install
# Add your backend URL to .env as VITE_backend_URI
npm run dev
```

### 4. Environment Variables

**Frontend (`Client/.env`):**
```
VITE_backend_URI=https://s47-f1-out-of-context.onrender.com
```

**Backend (`Server/.env`):**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📸 Screenshots

![Screenshot](screenshot.png) <!-- Add your screenshot here -->

---

## 👨‍💻 Author

Created by **Manvesh Thakur**

---

## 📄 License

This project is for fun and educational purposes.

---

Enjoy the chaos and glory of F1, out of context! 🏎️🔥
