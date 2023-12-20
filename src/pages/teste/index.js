import { useForm } from 'react-hook-form';
import axios from 'axios';

import convert2Base64 from '@/utils/convert2Base64';

const URL = process.env.NEXT_PUBLIC_SITEURL;

export default function Teste() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ file }) => {

    const image = file[0]

    const dataURL = await convert2Base64(image);

    console.log('Data URL: ', dataURL)

    const { data } = await axios.post(`${URL}/api/fileUpload/fileProcessing`,
      { file: dataURL }
    )


    // const formData = new FormData();

    // await formData.set("file", formContent.file[0]);

    // const formJSON = await JSON.stringify(formData);

    // console.log(formJSON);

    // const { data } = await axios.post(`${URL}/api/fileUpload/fileProcessing`, formJSON);

    // console.log('Returned data from API with Axios: ', data)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="file" name="file" {...register('file')} />
      <button type="submit"> Enviar Arquivo</button>
    </form >

  )
}