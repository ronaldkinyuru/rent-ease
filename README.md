# **Rental Management System**

A web application designed to streamline the process of managing property rentals. The system caters to landlords, tenants, and admins by providing features like property listing management, rental agreements, payment tracking, and maintenance requests. Built with a modern tech stack, this platform prioritizes user-friendliness, responsiveness, and security.

---

## **Features**

### Authentication System:
- Secure user authentication using JSON Web Tokens (JWT).
- Role-based access control for Landlords, Tenants, and Admins.
- Modular and reusable authentication forms for Login and Registration.

### Property Management:
- Add, edit, and delete property listings.
- Display properties with images, descriptions, and filters.

### Tenant Interaction:
- Online application system for tenants to apply for listed properties.
- Maintenance request submission for tenants.

### Payment Management:
- Record and track rental payments.
- Notify users of upcoming payment deadlines.

---

## **Tech Stack**
- **Frontend**: Next.js 13, Tailwind CSS, shadcn/ui components.
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB (or PostgreSQL as an alternative).
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing.
- **Styling**: Tailwind CSS with dark mode support.
- **Icons**: Lucide React.
- **Payment Integration**: M-Pesa (Future integration planned).

---

## **Project Structure**

### Key Directories:
- **`/app`**:  
  Houses all pages, layouts, and API routes. Each folder corresponds to a specific route in the application.

- **`/components`**:  
  Reusable UI components such as `Navbar`, `AuthForm`, and `PropertyList`.

- **`/lib`**:  
  Contains utility functions for session management, validation, and other shared logic.

### Notable Files:
- **`lib/auth/validation.ts`**: Validates user inputs with Zod schemas.  
- **`lib/auth/session.ts`**: Handles JWT-based session management.  
- **`app/api/auth/login/route.ts`**: Handles user login API requests.  
- **`app/api/auth/register/route.ts`**: Handles user registration API requests.  

---

## **Getting Started**

### Prerequisites:
- Node.js (v16 or above)
- MongoDB or PostgreSQL database
- npm or yarn

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/ronaldkinyuru/rental-management.git
   cd rental-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file:
   ```
   DATABASE_URL=<Your Database URL>
   JWT_SECRET=<Your JWT Secret>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

---

## **Future Features (To-Do List)**

### Authentication:
- [ ] **Email Verification**: Ensure email addresses are verified before account activation.
- [ ] **Password Recovery**: Add functionality to reset forgotten passwords.
- [ ] **OAuth Integration**: Support third-party logins like Google and Facebook.

### Property Management:
- [ ] **Property Search**: Advanced search with filters for price, location, and availability.
- [ ] **Map Integration**: Show property locations on an interactive map.

### Payment Management:
- [ ] **M-Pesa Integration**: Allow tenants to pay rent directly through M-Pesa.
- [ ] **Payment Reminders**: Automatic email/SMS reminders for upcoming payments.

### Maintenance Requests:
- [ ] **Request Dashboard**: Allow landlords and tenants to track and manage maintenance requests.
- [ ] **Priority Levels**: Add priority levels for requests (e.g., urgent, medium, low).

### Admin Dashboard:
- [ ] **User Management**: Admins can manage all users (Landlords and Tenants).
- [ ] **Property Insights**: Analytics for property performance, rent collection, and maintenance history.

### General:
- [ ] **Mobile App**: Develop a mobile version for Android and iOS.
- [ ] **Notifications**: Real-time notifications for system updates, payments, and messages.

---

## **Contributing**
Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
If you have any questions or feedback, feel free to reach out to me:  
**Ronald Kinyuru**  
- GitHub: [ronaldkinyuru](https://github.com/ronaldkinyuru)
