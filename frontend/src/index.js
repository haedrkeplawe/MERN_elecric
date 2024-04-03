import React from "react"
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { QuestsContextProvider } from './context/QuestContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <QuestsContextProvider>
        <App />
      </QuestsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
