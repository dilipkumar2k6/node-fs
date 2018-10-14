# fs module
All the fs module functions has synchronous and asynchronous forms.
```
const fs = require('fs');

// Asynchronous form
fs.readFile(__filename, (err, data)=>{
  console.log(data.toString());
});

// synchronous form
const data = fs.readFileSync(__filename);
console.log(data.toString());
```

# How to read half size of file?
```
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'duplicate.js');
const fixed = path.join(__dirname, 'fixed.js');
const stats = fs.statSync(file);
// Read stream from 0 to half of total size
const stream = fs.createReadStream(file, { start: 0, end: stats.size / 2 });
// Write stream
const write = fs.createWriteStream(fixed);
stream.on('data', data => {
  write.write(data);
});
```

# How to read list of files for given directory?
```
fs.readdirSync(dir)
```
# Get stats of file
```
fs.statSync(filePath)

Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4194304,
  ino: 8649614008,
  size: 245,
  blocks: 8,
  atimeMs: 1539483570433.6746,
  mtimeMs: 1539471967203.244,
  ctimeMs: 1539471967204.93,
  birthtimeMs: 1539471967202.9805,
  atime: 2018-10-14T02:19:30.434Z,
  mtime: 2018-10-13T23:06:07.203Z,
  ctime: 2018-10-13T23:06:07.205Z,
  birthtime: 2018-10-13T23:06:07.203Z }

```
# How to truncate file?
```
const fs = require('fs');
const path = require('path');

const duplicate = path.join(__dirname, 'duplicate.js');
const stats = fs.statSync(duplicate)
fs.truncate(duplicate, Math.floor(stats.size/2), (err)=>{

})
```

# How to delete file?
```
fs.unlinkSync(filepath);
```

# How to delete directory?
```
fs.rmdirSync(filepath);
```

# How to change file timestamp?
```
const accessTime = Date.now();
const modifiedTime = Date.now();
fs.utimesSync(filepath, accessTime, modifiedTime);
```

# How to write into file?
```
const filepath = path.join(__dirname, 'new.js');
// const data = new Uint8Array(Buffer.from('Hello Node.js'))
const data = Buffer.from('Hello Node.js')
fs.writeFileSync(filepath, data);
fs.writeFileSync(filepath, 'Hello Node.js', 'utf8');
```

# How to watch directory for events?
```
const fs = require('fs');
fs.watch(__dirname, (event, file)=>{
  console.log(file)
  console.log(event)
});
```