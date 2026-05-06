# PROCESS.md

## Stack Choice

I chose React for the frontend, Node.js with Express for the backend, and MongoDB for the database.

The main reason for this choice is familiarity and speed. I have worked on several previous projects using this stack, including my most recent one, so I was confident I could build and deliver a complete application within the one-week timeframe.

This stack also allows for rapid development and flexibility, especially for building a full-stack application with authentication and API handling.

---

## The Design Problem

In my experience, most reading list applications fail because they feel boring and unengaging.

They are usually very simple CRUD-based tools that focus only on adding and tracking books, without considering the user’s emotional experience. For someone who already struggles to finish books, this simplicity becomes a problem rather than a solution.

There is often:
- No motivation to return to the app
- No emotional connection to the reading process
- Too much focus on “completion” rather than experience

Because of this, users lose interest and stop using the app.

---

## A Design Decision I Debated

One key decision I debated was whether to include a “delete book” feature.

Although deleting is standard in most applications and even part of the expected CRUD model, I decided not to include it.

Instead, I introduced a status like “Not for me” to allow users to move on from a book without removing it entirely.

My reasoning was that deleting a book can sometimes feel like failure or loss, while changing its status feels softer and more reflective of the user’s experience. It keeps a record of their interaction without creating pressure.

---

## AI Usage

I used AI tools such as claude to assist with development, especially for:
- Debugging issues
- Suggesting UI/UX improvements

One suggestion I adopted was the idea of a “highlight popup.”  
When a user changes a book’s status:
- If marked as “Done,” they are asked what they liked about the book
- If marked as “Not for me,” they are asked what they didn’t enjoy

This added an interactive and reflective layer to the app, making it more engaging.

However, I did not blindly accept all AI suggestions. I evaluated them based on whether they aligned with my design goal.

---

## One Bug I Encountered

A significant issue I faced was during deployment.

My frontend was unable to communicate with the backend, even though both were deployed. After debugging, I realized the problem was related to an incorrect Vercel deployment URL, which prevented requests from reaching the backend.

I resolved this by redeploying the frontend and ensuring the correct backend URL was configured.

---

## Authentication Choice and Tradeoffs

I implemented authentication using JWT.

This approach allows secure user sessions and ensures that each user’s data is private. Passwords are hashed before storage, and tokens are used to manage authentication.

What it protects against:
- Unauthorized access to user data

Limitations:
- Token management can become complex
- Requires careful handling of expiration and storage

If this were a production system, I would improve it by:
- Adding more secure cookie handling
- Implementing additional security layers

---

## What I Would Add With More Time

If I had another week, I would focus on improving usability.

One key feature I would add is a book browsing/search system, allowing users to find and add books directly instead of manually entering details.

This would reduce friction and make the app easier and faster to use.

I would also continue refining the UI/UX to make the experience more engaging and less like a traditional CRUD application.