# Mohat Shil's Portfolio

A modern and responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Shadcn UI. This portfolio showcases my work experience, technology stack, and projects.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Live Demo](#live-demo)

## Features

- **Responsive Design**: Adapts to various screen sizes for optimal viewing on desktop, tablet, and mobile devices.
- **Modern UI**: Utilizes Shadcn UI components and Tailwind CSS for a sleek and consistent user interface.
- **Dynamic Content**: Easily update work experience, tech stack, and projects.
- **Dark/Light Mode**: Toggle between dark and light themes.
- **Project Showcase**: Dedicated section to highlight personal and professional projects with details and links.

## Technologies

- **React**: Frontend JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn UI**: Reusable components built with Radix UI and Tailwind CSS.
- **Lucide React**: A collection of beautiful open-source icons.
- **React Router DOM**: Declarative routing for React.
- **Vercel Analytics**: For performance monitoring and analytics.

## Installation

To get a copy of the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shilCode/porfolio.git
    cd porfolio
    ```

2.  **Install dependencies:**

    This project uses `npm`. Ensure you have Node.js and npm installed.

    ```bash
    npm install
    ```

## Usage

To start the development server:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000`.

## Project Structure

```
porfolio/
├── public/
├── src/
│   ├── components/       # Reusable UI components (e.g., Header, Footer, Button, Card)
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── TechStack.tsx
│   │   ├── WorkExperience.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/            # Main application pages
│   │   ├── LandingPage.tsx
│   │   └── ProjectPage.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── App.tsx           # Main application component and routing setup
│   └── index.css         # Global styles and Tailwind CSS directives
├── components.json     # Shadcn UI configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Live Demo

[https://mohat.vercel.app](https://mohat.vercel.app)

### todo

- [x] update responsiveness
- [x] update footer
- [x] update header with linkedn profile
- [x] fix issues with technologies stack
- [] need to add a profile pic
- [] need to underline all the links
- [] Update a section with what I do well
