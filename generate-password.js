var generator = require('generate-password');
var bcrypt = require('bcryptjs');

var password =
    process.argv[2] ??
    generator.generate({
        length: 36,
        numbers: true
    });

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(password, salt);

console.log(`Password generated successfully!
    Password: ${password}
    Hash: ${hash}`);
