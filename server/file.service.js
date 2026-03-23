const { v4: uuidv4 } = require("uuid");
const path = require("path"); // path module for handling file paths
const fs = require("fs"); // file system

class FileService {
  save(file) {
    try {
        const fileName = uuidv4() + '.jpg'; // Generate a unique file name
        const currentDir = __dirname; // Get the current directory of the file
        const staticDir = path.join(currentDir, '..', 'static'); // Create the path to the static directory
        const filePath = path.join(staticDir, fileName); // Create the full path to save the file



        if(!fs.existsSync(staticDir)){
            fs.mkdirSync(staticDir, { recursive: true }); //create the static directory if it doesn't exist, mdirSync :  create a directory synchronously, recursive: true allows creating nested directories
        }

        file.mv(filePath); // Move the file to the specified path

        return fileName; // Return the generated file name
    } catch (error) {
      throw new Error(`FileService.save: ${error.message}`);
    }
  }
}


module.exports = new FileService();