const fs = require('fs-extra');
const path = require('path');

// Define source and destination directories
const sourceDir = path.join(__dirname, 'src/assets/full');
const destDir = path.join(__dirname, 'build/assets/full');

// Copy files only if they don't already exist in the destination
async function copyIfNotExists() {
  try {
    const files = await fs.readdir(sourceDir);

    for (const file of files) {
      const srcFile = path.join(sourceDir, file);
      const destFile = path.join(destDir, file);

      // Check if the file already exists in the destination
      if (!(await fs.pathExists(destFile))) {
        await fs.copy(srcFile, destFile);
        console.log(`Copied: ${file}`);
      } else {
        console.log(`Skipped (already exists): ${file}`);
      }
    }
  } catch (err) {
    console.error('Error while copying assets:', err);
  }
}

copyIfNotExists();
