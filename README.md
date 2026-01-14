# WillHord.dev

This repository contains the source code for [WillHord.dev](https://WillHord.dev/), a personal portfolio built with Astro.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / Server-Side Rendering)
- **UI Components**: [Svelte 5](https://svelte.dev/) (Runes-based reactive components)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (High-performance styling)
- **3D Graphics**: [Three.js](https://threejs.org/) with [Threlte](https://threlte.xyz/) and [Theatre.js](https://www.theatrejs.com/)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

1.  **Bun**: [Install Bun](https://bun.sh/docs/installation) (version 1.0 or greater recommended)
2.  **Node.js**: v20 or greater (if not using Bun directly)
3.  **Git**

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/WillHord/WillHord.org.git
    cd WillHord.org
    ```
2.  Install dependencies:
    ```bash
    bun install
    ```

### Running Locally

1.  Start the development server:
    ```bash
    bun dev
    ```
2.  Open [http://localhost:4321](http://localhost:4321) in your browser.

## Project Structure

- `src/pages/`: Contains the site's routes and pages.
- `src/components/`: Reusable Svelte and Astro components.
- `src/lib/`: Utility functions, stores, and shared logic.
- `public/`: Static assets like images and fonts.
- `astro.config.mjs`: Astro configuration and integrations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
