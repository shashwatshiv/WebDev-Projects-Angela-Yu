/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "Type in a URL:", name: "URL" }])
  .then((answers) => {
    let url = answers.URL;
    fs.writeFile("./QR/url.txt", url, (err) => {
      if (err) throw err;
      console.log("The QR has been saved in QR Folder!");
    });
    let qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("./QR/url.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
