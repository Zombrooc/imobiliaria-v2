import sharp from 'sharp';
import formidable from 'formidable';
import { createRouter, expressWrapper } from "next-connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {

  switch (req.method) {
    case 'POST':
      const form = formidable({});
      let fields;
      let files;
      try {
        [fields, files] = await form.parse(req);
        console.log(files)
      } catch (err) {
        // example to check for a very specific error
        if (err.code === formidableErrors.maxFieldsExceeded) {

        }
        console.error(err);
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
      }
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