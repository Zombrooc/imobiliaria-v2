import sharp from 'sharp'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const resize = sharp('./images/robo.jpg')
        .resize(350, 260)
        .toFile(__dirname + '/processed_images/resize_robo.jpg')

      console.log(resize)

  }
}