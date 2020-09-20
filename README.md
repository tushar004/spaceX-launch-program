# spaceX-launch-program

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.
Live Demo: `http://super-grip.surge.sh/`.

## Description
This is a simple project that shows information about SpaceX launch programs ,i.e., launching and landing status of their various rockets and missions with filters so that one can filter the desired content. It's UI is simple and responsive for small devices(phones), medium devices(tablets) and large devices(PCs or laptops).

## Approach used
- For UI, flex is used with media query to create the different layouts ,i.e., one column in case of phones, two coumns in case of tablets and four columns in case of PC or laptop. For the Filters column, Bootstrap grid layout is used for all extra small to large devices.

- For HTTP communication, fecth is used to communicate and call the API.

- For unit testing, unit tests are written in Jasmine which can be executed on Karma test runner by `ng test`
command.

- For deployment, I've used npm package named `surge` but can be deployed on Heroku as well as the script is created for it and it can be done just by changing `start` in `scripts` in `package.json` to `node server.js` as heroku treats angular applications as node applications but deploying using surge is easier.


## Extras 
- Loader attached as it was taking long to load and was confusing if the page was blank.

- No data found shown when there no results for a filter

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
