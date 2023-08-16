// Core Modules

// path: includes methods to deal with file paths.

const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

console.log(path.extname(__dirname))
console.log(path.extname(__filename))


console.log(path.parse(__dirname))
console.log(path.parse(__filename))


console.log(path.format(path.parse(__dirname)))
console.log(path.format(path.parse(__filename)))


console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute("./README.md"))

console.log(path.join(__dirname,"README.md"))
console.log(path.join(__dirname,"../README.md"))
console.log(path.join(__dirname,"/README.md"))

console.log(path.resolve('/home', 'user', 'project')); // /home/user/project
console.log(path.resolve('folder1', 'folder2', 'file.txt')); // /current/working/directory/folder1/folder2/file.txt