# Frontend Mentor REST Countries API with color theme switcher

> This is a solution to a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The challenge was to display information about the world's countries using the [REST Countries API](https://restcountries.com/).

## General Information

- This project is the fourth project of the "JavaScript frameworks and libraries" career path from [Frontend Mentor](https://www.frontendmentor.io/)
- In contrast to the previous projects this challenge included the implementation of routing. I took the opportunity to try out TanStack Router for this challenge. I used to work with React Router in the past, but I wanted to try something new
- Data-fetching is another part of this challenge. Considering I'm already using TanStack router, it was logical to use TanStack query for data-fetching. Normally I just use useEffect to implement data-fetching for projects of this scope but in this context I was also willing to experiment with using a library for data-fetching.
- The project also demanded finding and using different icons to work with. I went with lucide react icons because I find them very easy to integrate with React and Tailwind
- I wanted to add some additional type-safety and used Zod schemas to validate the API response
- The emphasis of this project was on routing and data-fetching. I didn't focus that much on styling (e.g. not providing a proper loading spinner, error messages or not-found-page)

## Technologies Used

- React 18.3.1
- Tailwind CSS 3.4.13
- TanStack Router 1.64.0
- TanStack Query 5.59.15
- zod 3.23.8
- Tailwind-Merge 2.5.4
- clsx 2.1.1
- Lucide React 0.451.0

## Features

- displays all countries from the API on the homepage
- seach for a country using an input field
- filter countries by region
- display more detailed information on a country on a separate page
- click on border countries to get details of the respective country
- back navigation
- toggle the color scheme between light and dark mode (persists)
- keyboard navigation

## Screenshots

![Example screenshot](https://i.ibb.co/nPw6NdQ/rest-countries.jpg)

## Demo

Live demo [_here_](https://fem-rest-countries-eight.vercel.app/).

## Setup

The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Install NPM packages in the project folder by running

```
npm install
```

in the terminal. 3. Run the app

```
npm run dev
```

4. Visit http://localhost:3001/ in your browser

## Learnings

- creating zod schemas and using them to validate API responses
- working with TanStack Router in general (setting up routes, accessing URL params)
- setting up navigation using TanStack router (Link component, router.history.back etc.)
- working with TanStack Query in general (useQuery hook, using query keys)
- accessibility considerations in setting up a form (e.g. screen reader announcement of results of submitting the form)
- using and adjusting the Select component from shadcn/ui to filter the countries by region

## Project Status

The project is basically finished. In the future I may revisit this project to challenge myself in implementing infinite scrolling using TanStack query.

## Acknowledgements

- This project is a solution to this [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).
