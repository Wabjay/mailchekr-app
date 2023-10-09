import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext";

const UpdateProfileForm = () => {

  const {user} = useContext(UserContext)


    const [username, setUsername] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName );
    const [businessName, setBusinessName] = useState("Enter business name");

    const UpdateProfile = () => {
        // API to Update Profile
      };
    
      const Logout = () => {
        // API to Logout Profile
      };

  return (
    <div className="mt-10 lg:mt-0 w-full">
        <div className="mb-6">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Username</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="username" id="" placeholder={user.displayName} onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div className="mb-6">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Email</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="email" id="" placeholder={user.email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="flex gap-6 mb-6 w-full">
             <div className=" w-full">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">First Name</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder={user.firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          </div>
          <div className=" w-full">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Last Name</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder={user.lastName
            } onChange={(e)=> setLastName(e.target.value)}/>
          </div>
          </div>

          <div className="mb-6">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Business Name</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder={businessName} onChange={(e)=> setBusinessName(e.target.value)}/>
          </div>

          <button
            onClick={UpdateProfile}
            className="bg-yellow-400 rounded-[8px] py-3 px-4 mt-4 w-full max-w-[287px] text-grey-900 font-medium text-sm leading-[20px]"
          >
            Update
          </button>
                {/* LOGOUT */}
          <button
            onClick={Logout}
            className="bg-white rounded-[8px] border border-red-500 py-3 px-4 mt-10 w-full max-w-[287px] text-red-500 font-medium text-sm leading-[20px]"
          >
            Logout Account
          </button>
        
    </div>
  )
}

export default UpdateProfileForm