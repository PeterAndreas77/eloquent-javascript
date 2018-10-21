# eloquent-javascript

This is a git repo project to help myself learn JavaScript fundamentals using the book Eloquent Javascript.
Every chapter content in this book is replicated and typed by hand to make it "stick" using repetition and help my typing speed.
I also did the exercises and projects from scratch.

## Using NPM to install Jest

- Install npm (latest stable version).
- Run **npm init -y** in your terminal (the -y flag is there to make a package.json with default settings).
- make a **.gitignore** file with **node_modules** in it.
- Run **npm i --save-dev jest**
- Open your package.json file. Change the "test" value to "jest", then save.

## Running unit tests on the exercises

- Run **npm test** to run all test exercise files.
- Run **npm test -t < filename >** to run test on a specific file you wanted to test on, so you don't have to run the entire tests.
