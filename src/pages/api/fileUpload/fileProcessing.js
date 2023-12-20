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
      const uri = file.split(';base64,').pop();
      let imgBuffer = Buffer.from(uri, 'base64');

      sharp(imgBuffer)
        .resize({ width: 1080 })
        .webp({
          quality: 80,
          lossless: true
        })
        .toBuffer()
        .then(data => {
          console.log(data)
          // 100 pixels wide, auto-scaled height
        });
    // const form = new formidable.IncomingForm();
    // const files = [];
    // form.on('file', function (field, file) {
    //   files.push([field, file]);
    // })
    // form.on('end', () => resolve(files));
    // form.on('error', err => reject(err));
    // form.parse(req, () => {
    //   console.log(req)
    // });
    // const resize = await sharp(data)
    //   .resize({ width: 800 })
    //   .toFile(__dirname + '/tmp/resize_robo.jpg')

    // console.log(resize)
    // return resize
  }
  return;
}