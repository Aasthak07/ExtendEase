# CHAPTER 3: SYSTEM ANALYSIS

System analysis is defined as the procedure of studying a process or business to identify its goals and purposes and to create systems and procedures that will efficiently achieve them. For ExtendEase, this involved understanding the environmental conditions, constraints, and resources required to bring the digital marketplace to fruition.

## 3.1 Feasibility Study
The feasibility study served as the core analytical evaluation determining whether the proposed project was viable, profitable, and technically possible within the stipulated constraints. For the ExtendEase marketplace, the feasibility study was meticulously divided into three foundational pillars early in the planning phase.

### 3.1.1 Technical Feasibility
Technical feasibility was conducted to assess whether the existing hardware architectures, software frameworks, and available technical expertise were sufficient to construct the system.
- **Framework Maturity:** The MERN stack (MongoDB, Express, React, Node.js) was selected as it is a globally recognized, highly stable, and incredibly mature JavaScript tier.
- **Protocol Engineering:** Executing software installations via the browser relied on Custom URI Scheme Handlers (e.g., `vscode://`). Since modern browsers universally supported forwarding known protocols to Desktop OS registry handlers, seamless integration was deemed 100% technically feasible.
- **Security Protocols:** Implementing standardized JWT cryptographic tokens and Bcrypt hashing algorithms ensured that the technical integrity of the user data was inherently preserved against cyber-threats.
- **Result:** The project was determined to be **Technologically Highly Feasible**. The required paradigms to handle concurrent web traffic and asynchronous server processing were expertly met by the non-blocking Node.js event loop.

### 3.1.2 Economic Feasibility
Economic feasibility evaluated the cost-effectiveness of the projected system over its development and deployment life cycles.
- **Open-Source Reliance:** Almost 100% of the technological foundations utilized (React.js, Node.js, Express, Tailwind CSS, Mongoose) were robust open-source projects governed by permissive licenses (MIT, Apache). Consequently, software licensing costs were effectively reduced to zero.
- **Cloud Infrastructure:** For database prototyping, the MongoDB Atlas free tier was selected, and deployment was planned over platforms like Vercel or Heroku at minimal to zero academic expense.
- **Result:** The system was declared **Economically Feasible**. Developing ExtendEase incurred minimal infrastructural costs, significantly bypassing the massive capital required for traditional legacy architecture deployments.

### 3.1.3 Operational Feasibility
Operational feasibility analyzed the degree to which the proposed system solved the problems defined in the scope and how well it fit into existing digital workflows.
- **User Competence:** The target demographic for ExtendEase consisted primarily of software developers, students, and system engineers. Since these individuals possessed an extremely high degree of digital literacy, zero friction was expected in their adaptation to a new web interface.
- **Procedural Shift:** The proposed procedure (browsing via a web interface and clicking "Install" to trigger a URI) drastically simplified the operational burden on the user compared to navigating terminal CLI commands.
- **Result:** The project was concluded to be **Operationally Feasible**. It aligned perfectly with the target demographic’s expectations, enhancing their productivity dynamically.

---

## 3.2 Hardware Requirements
The hardware requisite for ExtendEase was bifurcated into two environments: the optimal configuration necessary for developers orchestrating the codebase, and the general requirements for end-users accessing the marketplace via standard web browsers.

**Table 3.1: Hardware Requirements**

| Component | Developer / Server Environment (Minimum) | End-User Client (Minimum) |
| :--- | :--- | :--- |
| **Processor** | Intel Core i3 (8th Gen) or AMD equivalent | Modern 1GHz Dual-Core Processor |
| **RAM (Memory)** | 8 GB DDR4 (16 GB Recommended) | 2 GB to 4 GB |
| **Storage Capacity** | 256 GB SSD (For Node Modules & DB caching) | Minimal (Only Browser Caching) |
| **Architecture** | 64-bit OS Environment | 32-bit or 64-bit Device |
| **Internet Speed** | > 10 Mbps (For Dependency Management) | > 2 Mbps (For SPAs API JSON fetching) |

---

## 3.3 Software Requirements
Software requirements defined the essential compilers, runtime environments, interpreters, and peripheral software dependencies crucial to architecting, debugging, and hosting the software ecosystem.

**Table 3.2: Software Requirements**

| Component | Technology / Software Used |
| :--- | :--- |
| **Operating System** | Windows 10/11, macOS 12+, or Linux distributions (Ubuntu) |
| **Execution Environment**| Node.js Runtime (v18.0.0 LTS or higher) |
| **Database Server** | MongoDB Community Server / MongoDB Atlas (Cloud) |
| **Local IDE Toolkit** | Microsoft Visual Studio Code (The product target) |
| **API Testing** | Postman / ThunderClient |
| **Web Browsers** | Google Chrome, Mozilla Firefox, Microsoft Edge, Safari |

---

## 3.4 Technology Stack Used
ExtendEase embraced a comprehensive, modern Javascript-centric N-tier architecture to meet industry standards.

**1. Frontend Architecture:**
- **React.js:** A declarative, efficient, and flexible JavaScript library used to dynamically construct User Interfaces based on a Virtual DOM.
- **Tailwind CSS:** A utility-first CSS framework providing granular styling components without exiting HTML/JSX constraints. It was used to guarantee a humanized, vibrant UI.
- **Formik & Yup:** Synchronous integration tools implemented to provide rapid, robust client-side form configurations and schema-based state validation prior to submission.

**2. Backend Architecture:**
- **Node.js:** Node.js was utilized to run the V8 JavaScript engine outside the browser. This was crucial for handling asynchronous, highly scalable network applications.
- **Express.js:** A minimal and flexible Node.js web application framework which was used to create rigid RESTful JSON APIs efficiently.
- **JWT (JSON Web Token):** A state-of-the-art URL-safe methodology embedded to cryptographically represent claims exchanged securely between the client and server.

**3. Database Architecture:**
- **MongoDB:** A high-throughput, cross-platform document-oriented NoSQL database was implemented. Instead of traditional table relations, data was mapped logically utilizing dynamic JSON-like documents via a BSON structure.
- **Mongoose ODM:** An elegant object modeling tool used to bind Node.js to MongoDB, enforcing strict schema architectural definitions at the application layer.
