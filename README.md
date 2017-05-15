# Option 2: Penny Rounding

After cloning repo, run `npm i`, then `gulp` and navigate to `localhost:8888` to see the live project. The key files to examine will be `./src/js/components/main/main.controller.js` and `./src/js/components/tests/main.controller.tests.js`.
`npm test` will run the tests that I've written. 

### One hour limit  - Send your Github repo link to Apto contact
1. Create a function called “moneySplitter” that takes a decimal value called “total” as input.
1. Create a function to call from “moneySplitter” that splits “total” evenly into three decimal
variables, and rounds each result to the nearest two decimals. Return these three
decimal variables as a list or array.
1. Create another function to call from “moneySplitter” that validates that all list/array items
created by the previous function add up to the total value. If they do not add up, the function should add/subtract a penny (.01) from each list/array item until the values match the parent target value. Return the validated decimal variables as a list or array.
1. Print the result of both function calls in “moneySplitter.”
1. Write code to call moneySplitter with 800.0 as the argument.
1. BONUS: Add an extra parameter to moneySplitter called “count” that enables “total” to
be divided among “count” people.
