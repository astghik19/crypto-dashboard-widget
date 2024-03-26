export const socket = new WebSocket(`wss://ws.finnhub.io?token=${import.meta.env.VITE_APP_FINNHUB_API_KEY}`);
