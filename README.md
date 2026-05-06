# Shelved — Frontend

A reading list app for people who never finish the books they start. No guilt, no progress bars, no streaks.

---

## Stack

- **React** 
- **React Router v6**
- **Context API** for auth state
- **Deployed on:** Vercel

---

## Getting Started

### Prerequisites

- Node.js v18+
- Shelved API running locally or deployed

### Installation

```bash
git clone https://github.com/zma8/Shelved-React.git
cd Shelved-React
npm install
```

### Environment Variables

Create a `.env` file in the root and don't commit this

### Run Locally

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## Key Design Decisions

**Status language matters.** Instead of "Reading / Want to Read / Finished" the app uses language that matches how this user actually lives — Maybe today?, Loading..., Resting, Done, Not for me.

**No delete.** Books can only be moved to "Not for me". Deleting feels like failure. This doesn't.

**Highlight popup.** When marking a book Done or Not for me, the app asks one optional question — what worked or what didn't. It saves to the book card permanently.

**Random pick.** The home page surfaces one random book from your waiting pile with a soft prompt. Not a notification, just a question.

---

## Backend repo

[Shelved-API](https://github.com/zma8/Shelved-api)

---

## Author

Zainab Moosa — [github.com/zma8](https://github.com/zma8)