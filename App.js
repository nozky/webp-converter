
// images folder = put all you image in here.
// webp-converted = is where all images place when it's done converting.
// Relative path, in the terminal run -> 'npm start'



const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');
const process = require('process')

// accept commandline argument
if (process.argv.length < 3 || process.argv.length > 3) {
  console.log("error, please input a single directory as a command line argument")
  process.exit(1)
}

// create a relative path
//const imagesDir = path.join(__dirname,'./images');

let imagesDir = process.argv[2];
console.log(path.imagesDir)

// set quality
const quality = '80'

// Scan directory for images and convert
const scanDir = ()=>{
  fs.readdir(imagesDir,(err,files)=>{
    if(err){
      console.log(err)
    }

    files.forEach( file => {
      // call convert
      webpConvert(file)
    })
  })
}

// function to convert any imag to webp
const webpConvert = (file)=>{
  // q='80' -> 1-100 webp image compression percentage.
const result = webp.cwebp(`${imagesDir}/${file}`,`./webp-converted/${file.split('.')[0] }.webp` ,`-q ${quality}`,logging="-v");
result.then((response) => {
  console.log(response);
});
}
// execute scan directory and convert to webp
scanDir()
