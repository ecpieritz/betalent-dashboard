# BeTalent Dashboard

## Project Description

<p align = "center">
  <img src = "https://github.com/ecpieritz/betalent-dashboard/blob/main/public/desktop-screenshot.png?raw=true" width = "700" height = "auto">
  <img src = "https://github.com/ecpieritz/betalent-dashboard/blob/main/public/mobile-screenshot-01.png?raw=true" width = "350" height = "auto">
</p>

**BeTalent Dashboard** is a web application developed to visualize a list of employees in a structured and responsive way. The application provides a search feature and an optimized mobile layout, ensuring a good user experience across different devices.

---

## Features

- **Search Employees**: Allows users to filter employees based on their names.
- **Employee List**: Displays a complete list of employees in a structured table.
- **Responsive Design**: Adapts the layout for both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: React, TypeScript, SCSS, Axios
- **Backend**: json-server for simulating an API

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/betalent-dashboard.git
   ```

2. Navigate to the project directory:

```bash
cd betalent-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Search for employees using the search bar.
3. View the list of employees in both desktop and mobile layouts.

---

## API Configuration

1. The project uses json-server to mock the API for employee data.

2. Install json-server globally if you haven't already:

```bash
npm install -g json-server
```

3. Start the mock API:

```bash
json-server --watch db.json --port 5000
```

---

## API Endpoints:

- Fetch Employees: `GET /employees`
- Search Employees: `GET /employees?q={name}`
