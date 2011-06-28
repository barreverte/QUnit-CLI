load("qunit-cli/qunit-cli.js");

load("test/myLibTest.js");

// run the tests
QUnit.begin(); // hacked b/c currently QUnit.begin is normally called on document.load
QUnit.start();
