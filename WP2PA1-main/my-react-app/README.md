# Stock Market Application

This is a single-page application for tracking stock market data, including client portfolios, company information, and stock history.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
Start the development server:
bash
Copy code
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:3000 to view the application.
Features
Home Page: Displays a list of clients obtained from the client API. Selecting a client navigates to the Client view.
Client Page: Displays the client's portfolio details obtained from the Portfolio API. The top three stocks in terms of their total value are displayed near the top of the view.
Company Page: Displays information about a company obtained from the Company API, including financial information. Line charts visualize the stock's daily high and low values as well as the daily volume values.
Navigation: Uses React Router for navigation between different views.
Menu: Displays a left-side menu with links to navigate between different views.
Dependencies
React: JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.
Recharts: A charting library for React based on D3.
Axios: Promise-based HTTP client for making API requests.
Mock Data
The application uses mock data stored in the data.js module for testing purposes. You can replace this data with real data fetched from APIs in a production environment.

APIs Used
Client API: https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php
Portfolio API: https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php
Company API: https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php
History API: https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php
Deployment
This project can be deployed using platforms like GitHub Pages, Netlify, or Vercel. Follow the deployment instructions provided by the platform of your choice.