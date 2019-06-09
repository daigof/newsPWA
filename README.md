
# Diego Fortes News PWA App Demo

## Deploy Instructions

### `yarn build`

Build the app, place it in the build directory. This does all the heavylifting and optimization for us to make a great PWA. Features in this [link](https://facebook.github.io/create-react-app/docs/production-build)
But a short list:
* Code splitting (chunks)
* Static file caching
* [Offline-first](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app): I opted-in by register the ServiceWorker
* manifest.json in place

### `yarn serve`

You would normally install `serve` global. But I included as dependency to avoid the extra step. This will serve the `build` folder so you must run `yarn run build` first.


## Additional Scripts

### `yarn start`

Runs the app in the development mode. [http://localhost:3000](http://localhost:3000)

### `yarn test`

Launches the test runner.

## Challenges explained

* **Personal challenge**: use Hooks and not write a single `class XXX extends React.Component` in the Project. I was surprised the support of Hooks in Libraries and I fell in love inmediately. Dont want to go back to old format.
* **Second Challenge (PWA)**: Let's be honest Create React App took care of most for me, but I did read/learn a great deal of PWA and I like it. I do have sort of Work experience with it Too!!!, I was an Ionic developer and I did use tools like Geolocalization and Offline/Online Detectors. The environment in general worked similar to a PWA (JS+CSS+HTML but with App focus)
* **Third Challenge (Progressive Loading)**: You can see the iamges are not loaded by default, only when they are in View range (I exagerated the threshold margin a little so you can see the placeholder before loading the image)
* **Fourth Challenge**: I included Material Design Library (first time for React). It includes a lot of Microinteractions by default like button ripple, Expand/Collapse Icon animation (actually I did this). It turns out I did Microinteractions in current Jobs so plaease ask for a demo.
* **Fifth Challenge**: I did a robust test