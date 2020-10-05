# hirewd-next-dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

You need the latest version of [NodJS](https://nodejs.org/en/) installed to run this project, with its associated `npm` command available to your current user.

### To run a local version of the site

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
Please use the `.scss` files located in the [`/styles`](https://github.com/SkySails/hirewd/tree/master/styles) directory to style the page. The filenames are self-explanatory.

## Adding stylesheets

When creating additional stylesheets, do so in the [`/styles`](https://github.com/SkySails/hirewd/tree/master/styles) directory only!

1.  Add a stylesheet and make note of its path (e.g `/styles/globals.scss`).
2.  Add a reference to this stylesheet in the global app page located in [`/pages/_app.js`](https://github.com/SkySails/hirewd/blob/master/pages/_app.js). Follow the existing pattern at the top of the file.
3.  Done! Make sure that no duplicate rulesets are applied, or else only the rulesets defined in the last of the conflicting stylesheet entries will be applied.

## Adding pages

Do you need to add a page? Thanks to Next.js's routing system, this is almost as easy as just adding another HTML file!

1.  Add a new JavaScript (`.js`) file to the [`/pages`](https://github.com/SkySails/hirewd/tree/master/pages) directory. NOTE: The filThis means that `contact.js` would be available to the public at `hirewd.vercel.app/contact`!ename defines what path the page will be available at.
2.  Add this template to the file

```javascript
export default function Home() {
  return <div id="#app">// Skriv HTML här!</div>;
}
```

3. Code away! The page will be rendered in real-time.

## Continuous Integration (CI)

This project is compiled and published to [hirewd.vercel.app](hirewd.vercel.app) every time a push is made to the master branch, or when a pull request gets approved and merged. If you're working on a larger change, please do so in a separate branch and only ever push to the master branch when you feel like the changes are done.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
