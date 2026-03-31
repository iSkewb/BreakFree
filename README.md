# Break Free

A subscription management and financial optimization tool. Track what you pay for, spot what you don't need, and get AI-powered advice to cut costs.

Built at TAMUHack 2025.

---

## Screenshots

| Landing page | Dashboard overview |
|---|---|
| <img width="400" alt="Landing page" src="https://github.com/user-attachments/assets/35d80d25-e189-4879-a912-e309744d8f24" /> | <img width="400" alt="Dashboard overview" src="https://github.com/user-attachments/assets/015fd3ad-d0f3-4285-918e-d1aed629e0e1" /> |

| Subscription list with flag-for-review | Profile view |
|---|---|
| <img width="400" alt="Subscription list" src="https://github.com/user-attachments/assets/c31a6fa5-5e13-4f80-8449-4e5b64ead970" /> | <img width="400" alt="Profile view" src="https://github.com/user-attachments/assets/da9a78eb-2e73-4996-82cd-10577f082dad" /> |

---

## Features

- **Dashboard** — monthly and annual spending totals, spending by category (pie chart), upcoming renewal alerts (highlighted when due within 7 days), and an insights panel surfacing your most expensive subscription
- **Subscription tracking** — add subscriptions with name, cost, frequency (monthly/yearly), category, and start date; all costs normalized to a monthly equivalent
- **Flag for review** — mark subscriptions you're reconsidering; flagged items are tracked separately and factored into the AI advisor
- **AI Advisor** — sends your full subscription list, profile preferences, and flagged subscriptions to GPT-4o-mini for personalized advice on what to cut, bundle, or keep
- **Profile** — household size, budget range, student status, and preferred frequency; displayed as a read-only view with an edit flow
- **CSV export** — download your full subscription list with next renewal dates

---

## Stack

- **Frontend:** React 19, React Router 7, Recharts
- **AI:** OpenAI GPT-4o-mini via REST
- **Persistence:** localStorage

![React](https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/css-264de4?style=flat&logo=css3&logoColor=white)

---

## Getting Started

```bash
npm install
```

Create a `.env` file:

```
REACT_APP_OPENAI_API_KEY=your_key_here
```

```bash
npm start
```

> The AI advisor requires a valid OpenAI API key. All other features work without one.
