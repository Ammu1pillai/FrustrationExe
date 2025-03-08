# FrustrationExe

FrustrationExe is a pranking game installation website designed to trick users into thinking they are downloading a game, only to frustrate them with a series of prank interactions and mini-games. This project is built using HTML, CSS, and JavaScript for the frontend, with Python handling the backend logic.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python

## Features
### 1. Landing Page
- Contains a **Download** button that initiates a fake progress bar.
- Progress bar stops at **99%** and then redirects to the **Sign-Up page**.
- Displays **reviews**, system requirements (CPU, RAM, etc.), and a "Help" button that offers no help.

### 2. Sign-Up Page
- Standard fields: **Username**, **Password**, and **Phone Number**.
- **Prank elements:**
  - **Password field:** The keyboard input is hijacked, making it difficult to enter.
  - **Phone number field:** Numbers fall down randomly, making entry frustrating. After multiple tries, manual input is enabled.
  - **Submit button:** Moves away when hovered over, but clicking it eventually redirects to the **Game Display page**.

### 3. Game Display Page
- Three game links:
  - **Minecraft**
  - **GTA 6**
  - **Call of Duty (COD)**
- Clicking any link leads to **prank mini-games** instead of actual games.

### 4. Mini Game Series
#### i. Jumping Game
- A **Santa character** tries to jump over Christmas trees.
- Jumping is **delayed**, frustrating the user.
- After **five failed attempts**, redirects to the **Window Page**.

#### ii. Never Click Button
- A **treasure chest** moves away when the user tries to click it.
- If clicked, the chest **opens**, but after **30 seconds**, redirects to the **Window Page**.

#### iii. Color Test
- A word is displayed in a color that **does not match its meaning**.
- User must select the **actual color** of the word.
- After a few attempts, redirects to the **Window Page**.

### 5. Window Page
- A **mocking page** appears, teasing the user for failing all the games.
- Contains two buttons:
  - **Try Again:** Displays a "Tata!" message and exits.
  - **Exit:** Redirects back to the **Mini Game Series**.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/FrustrationExe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd FrustrationExe
   ```
3. Install necessary dependencies:
   ```sh
   pip install -r requirements.txt  # For Python backend
   ```
4. Start the backend server:
   ```sh
   python app.py
   ```
5. Open `index.html` in a browser or use a local server like:
   ```sh
   python -m http.server 8000  # For local testing
   ```
6. Access the website at `http://localhost:8000/`.

## Made by: 
1.Soya RF - Frontend 
2.Sneha Vijayan - Frontend
3.Anjita Pillai - Fronntend, Backend


