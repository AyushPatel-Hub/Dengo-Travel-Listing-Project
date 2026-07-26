# 🌍 DENGO – Full-Stack Travel Platform

DENGO is a robust, production-ready full-stack web application developed using the Model-View-Controller (MVC) design pattern. It serves as a comprehensive travel platform that enables users to browse, create, review, and map dynamic travel listings worldwide. 

🔗 **Live Demo:** https://dengo-travel-listing-project.onrender.com

---

## 🛠️ Tech Stack & Technologies Used

* **Backend Environment:** Node.js, Express.js (with custom centralized error-handling middleware)
* **Database:** MongoDB, Mongoose ODM (Object Data Modeling)
* **Frontend UI:** EJS (Embedded JavaScript Templates), Bootstrap 5 (Mobile-first responsive layouts)
* **Authentication & Security:** Passport.js (Session-based local authentication & strict resource authorization gates)
* **Cloud Storage:** Cloudinary (Secure, optimized media hosting)
* **Maps & Geocoding:** MapLibre GL, OpenStreetMap API
* **Deployment:** Render

---

## 🔥 Key Technical Features

### 1. Full CRUD & RESTful API Architecture
* **Listings Management:** Full capabilities to Create, Read, Update, and Delete travel destinations globally.
* **Interactive Reviews:** A nested review system allowing users to leave dynamic ratings and text feedback on specific listings.

### 2. Strict Security & Granular Authorization Gates
* **Passport.js Integration:** Implemented secure user registration, session tracking, and password hashing.
* **Resource Ownership Protection:** Built custom authentication middleware preventing unauthorized users from editing or deleting listings and reviews they did not natively create.

### 3. Real-Time Geocoding & Interactive Mapping
* **Dynamic Location Pinning:** Automatically captures user-input text locations and translates them into real-time geographic coordinate markers via the OpenStreetMap API.
* **Interactive Visuals:** Renders high-performance vector map layouts using MapLibre GL.

### 4. Optimized Cloud Storage Automation
* **Storage Hooks:** Utilized Mongoose data lifecycle middleware (`post-remove` hooks) to automatically cross-reference and purge hosted image assets from Cloudinary whenever a listing is deleted, eliminating dead storage costs.

### 5. Custom Error Architecture
* Built centralized Express error-handling middleware to intercept runtime validation issues and gracefully render custom error templates instead of breaking the user experience.

---

## 🚀 Future Roadmap

* [ ] Transition from a single-photo upload structure to support multi-image array uploads.
* [ ] Implement an advanced client-side form validation layer.
* [ ] Integrate user profile dashboards tracking active listings and past reviews.

---

## ⚠️ Notes on the Live Demo

Because this application is hosted on **Render's Free Tier**, the server automatically spins down when it stays idle for 15 minutes. 

* **First Load Delay:** If you access the live link and the site takes roughly **1 minute** to respond, please hang tight! The cloud container is simply spinning up. Subsequent page loads will be fast and responsive.

---

## 💻 Getting Started (Local Installation)

To clone and run this application locally, you will need Node.js and MongoDB installed on your system.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/dengo.git](https://github.com/yourusername/dengo.git)
   cd dengo