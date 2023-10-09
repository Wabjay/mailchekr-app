
import { useEffect, useState } from 'react';
import ProfileImg from '../../assets/images/Deep icons.svg'
const ProfileImage = () => {
const [img, setImg] = useState(ProfileImg)

const UploadImg = async (e) =>{
const image = await e.target.files[0].name;
setImg(image)
console.log(image)
}
useEffect(()=>{
  console.log(img)
},[img])

  return (
    <div className='w-fit'>
<div className='w-[156px]'>
    <img src={img} className='p-6 mx-auto rounded-[50%] bg-green-50 border-green-500 border-[3.5px]'/>
</div>
<button className=' mx-[9px] relative border border-grey-200 rounded-[8px] p-4 py-2 mt-4'
>
<input type='file' className='absolute left-0 opacity-0 w-full' onChange={UploadImg} />
    Upload Image</button>
    </div>
  )
}

export default ProfileImage