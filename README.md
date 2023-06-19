## In running the CHAT APP

Build the Angular app by running the following command in the project root directory:

`ng build --prod`

Install a web server globally, such as http-server, by running the following command:


`npm install -g http-server`

Navigate to the dist directory of your Angular project:

`cd dist/your-angular-project-name`

Start the web server by running the following command:


`http-server`

This will start the web server and provide you with a URL, such as http://localhost:8080.

Open two separate browser tabs and access the URL provided by the web server in both tabs.

With this setup, the chat application should work as expected, and you can test it by sending messages between the two tabs.

# SocketFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

