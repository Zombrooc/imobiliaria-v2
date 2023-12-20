import sharp from 'sharp';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '60mb' // Set desired value here
    }
  }
}



export default async function handler(req, res) {

  const { file } = req.body;

  switch (req.method) {
    case 'POST':

      let imgURI;
      let bluredImgURI;

      const uri = file.split(';base64,').pop();
      let imgBuffer = Buffer.from(uri, 'base64');

      sharp(imgBuffer)
        .resize({ width: 200 })
        .blur()
        .webp({
          quality: 10,
          lossless: true
        })
        .toBuffer()
        .then(data => {
          bluredImgURI = data
        });

      sharp(imgBuffer)
        .resize({ width: 1080 })
        .webp({
          quality: 80,
          lossless: true
        })
        .toBuffer()
        .then(data => {
          imgURI = data
        });

      return {
        imgURI,
        bluredImgURI
      }
  }
  return;
}