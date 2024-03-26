# Interactive Crypto Dashboard Widget

**Overview**

This React application showcases an interactive dashboard widget designed to display real-time cryptocurrency prices using the Finnhub.io API. It leverages TypeScript, React, and TailwindCSS for a robust and visually appealing user experience.

**Key Features**

- **Real-time Cryptocurrency Data:** Displays live prices for four popular cryptocurrency pairs (BINANCE:BTCUSDT, MSFT, AAPL, and IC MARKETS:1) fetched from Finnhub.io.
- **Dynamic Widget Management:** Add and remove widgets as needed to customize your dashboard layout and track specific cryptocurrencies.
- **Seamless User Interaction:** Intuitive buttons enable you to easily add widgets to the dashboard and remove them for a streamlined workflow.
- **TailwindCSS Integration:** Utilizes TailwindCSS for a clean, responsive, and customizable design aesthetic.

**Technologies Used**

- **Frontend:** React, TypeScript, TailwindCSS
- **API:** [Finnhub.io](https://finnhub.io/)
- **Development Toolchain:** [Vite ⚡](https://vitejs.dev/)

**Running the Project**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/astghik19/crypto-dashboard-widget.git
   ```

2. **Install Dependencies:**
   ```bash
   cd crypto-dashboard-widget
   npm install
   ```

3. **Acquire Finnhub.io API Key:**
    - Create a free Finnhub.io account to obtain an API key.
    - Copy a `.env.example` file and create `.env` file in the project root directory.
      ```
      cp .env.example .env
      ```
    - Replace `YOUR_API_KEY` with your actual Finnhub.io API key:
      ```
      VITE_APP_FINNHUB_API_KEY=YOUR_API_KEY
      ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

This will launch the development server, and you can access the interactive dashboard widget in your web browser, typically at `http://127.0.0.1:5173/`.

**Adding the Personal Touch**

I've added a pulse animation effect to `Add New Widget +` button, so users can easily understand what they should do.
Also, I tried to make everything so users can do things intuitively.

**Using Custom Chart Animation**

This project demonstrates a custom chart animation that smoothly transitions between price updates, enhancing the user experience by providing a visually appealing and informative representation of price movements. This animation is implemented using the `react-chartjs-2` library and tailored to seamlessly integrate with the overall widget design.
