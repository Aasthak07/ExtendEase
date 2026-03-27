const { exec } = require('child_process');
const fs = require('fs');
exec('npm run build', (error, stdout, stderr) => {
  fs.writeFileSync('build-error.txt', stdout + '\n' + stderr);
});
