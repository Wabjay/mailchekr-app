import ProfileImage from '../Cards/ProfileImage'
import UpdateProfileForm from '../Forms/UpdateProfileForm'

const EditProfile = () => {
  return (
    <div className="w-full max-w-[831px] lg:flex lg:gap-[88px] p-6 bg-white border border-gey-100 rounded-[12px] mt-4 lg:mt-6">
    <ProfileImage />
    <UpdateProfileForm />
    </div>
  )
}

export default EditProfile