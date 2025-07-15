import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4 ">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p className="mt-4 text-md leading-relaxed">
        This IMDB Clone is a modern web application built using Next.js, React,
        and Tailwind CSS. It offers a sleek and responsive interface where users
        can explore movie details, view trending titles, and access in-depth
        information about actors and genres. The project mimics the core
        features of the original IMDB to provide a familiar yet refined
        experience.
      </p>
      <p className="mt-3 text-md leading-relaxed">
        Designed with a mobile-first approach and powered by the TMDB API, the
        clone ensures real-time access to updated movie data. Whether you’re
        browsing through popular films or searching for a specific title, the
        interface provides intuitive navigation and quick-loading pages
        optimized for performance.
      </p>
      <p className="mt-3 text-md leading-relaxed">
        This project was created for educational and portfolio purposes. It
        demonstrates how modern tools like Next.js 15 App Router, dark mode with
        `next-themes`, and component-based UI development can be combined to
        deliver a fast, accessible, and visually engaging web experience.
      </p>
    </div>
  );
}
