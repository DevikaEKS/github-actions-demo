const add = require("./app");

if (add(2, 3) === 5) {
    console.log("TEST PASSED");
} else {
    console.log("TEST FAILED");
    process.exit(1);
}