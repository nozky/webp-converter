
// images folder = put all you image in here.
// webp-converted = is where all images place when it's done converting.
// Relative path, in the terminal run -> 'npm start'

const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');


// create a relative path
const imagesDir = path.join(__dirname,'./images');



// set quality
const quality = '80'

// Scan directory for images and convert
const scanDir = (imagesDir)=>{
  console.log(`Selected folder ${imagesDir}`)
  fs.readdir(imagesDir,(err,files)=>{
    if(err){
      console.log(err)
    }
    files.forEach( file => {
      // call convert
      webpConvert(file,imagesDir)
    })
  })}

// function to convert any imag to webp
const webpConvert = (file,dir)=>{
  // q='80' -> 1-100 webp image compression percentage.
const result = webp.cwebp(`${dir}/${file}`,`./webp-converted/${file.split('.')[0] }.webp` ,`-q ${quality}`,logging="-v");
result.then((response) => {
  console.log(response);
});
}

// run
scanDir(imagesDir);