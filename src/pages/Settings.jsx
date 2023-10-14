import Layout from "../component/Layouts/Layout"
import Heading from "../component/Others/Heading";
import SettingsTab from "../component/Layouts/SettingsTab";
import Main from "../component/Layouts/Main";
import EditProfile from "../component/Settings/EditProfile";
import { useState } from "react";
import Billings from "../component/Settings/Billings";



const Settings = () => {
  
  const [tab, setTab] = useState('edit')

  const activeTab = (tab) =>{
  setTab(tab)
  console.log(tab)
}
    return (
      <>
        {/* // <Layout> */}
           <Heading text="Settings"/>
           <SettingsTab active={activeTab}/>
           <Main>
           { tab === 'edit' ? 
           <EditProfile /> :
           <Billings />
}
          
           </Main>
        {/* // </Layout> */}
        </>
      )
    }

export default Settings