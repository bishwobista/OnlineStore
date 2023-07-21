# Online Store

Welcome to our Online Store! This project is built to provide a seamless shopping experience. It uses data from [Fake Store API](https://fakestoreapi.com/) to display products and their details.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router DOM: Used for client-side routing.
- Redux Toolkit: A set of utilities for efficient Redux development. Version 1.9.5
- React Redux: Binding tool for React and Redux.
- React Query: Data-fetching library for React.
- Axios: Promise-based HTTP client used to fetch data from the server. 
- React Icons: A library that provides popular icons. 

### Development Dependencies

- TypeScript: A superset of JavaScript that provides static typing.
- Vite: A build tool that provides fast development and optimized production builds. Version 4.4.0
- Tailwind CSS: A CSS framework for fast UI development.

## Local Setup

Before running the application locally, please ensure you have the following prerequisites installed on your machine:

- Node.js: Make sure you have Node.js installed. You can download it from the official website: https://nodejs.org/

Once you have Node.js installed, follow these steps to run the program locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/bishwobista/frontend-assignment.git

   cd frontend-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:5173` to access the Online Store.

## Application Structure

The structure of the project is organized as follows:

```
frontend-assignment/
  ├── src/
  │   ├── components/
  │   │   ├── Footer
  │   │   ├── Hero
  │   │   ├── Navbar
  │   │   ├── Products
  │   │   └── SearchBox
  │   ├── pages/
  │   │   ├── Cart
  │   │   ├── ErrorPage
  │   │   ├── Home
  │   │   └── Product
  │   ├── store/
  │   │   ├── CartSlice
  │   │   ├── ProductSlice
  │   │   └── Store
  │   ├── App.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   └── ...other source files
  ├── package.json
  ├── DOCS.md
  └── ...other configuration files
```
- `src/`: Contains the application's source code.
  - `components/`: Contains the React components that are used in the application.
  - `pages/`: Contains the React pages that are used in the application.
  - `store/`: Contains the Redux store and slices that are used in the application.
- `App.tsx`: The main component that acts as the entry point to the application.
- `index.css`: Contains the Tailwind CSS configuration.
- `main.tsx`: The entry point of the React application, where it's connected to the HTML template.
- `package.json`: Contains the project's metadata and dependencies.
- `DOCS.md`: This file, which contains the documentation for the project.
