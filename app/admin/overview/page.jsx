import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminOverviewCard from "../../../components/AdminOverviewCard";

import { FcAutomatic } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
const Dashboard = () => {
  
  return (
    <div className=''>
      <AdminSidebar  />
      <AdminNavbar title={"Overview"}/>
      
      <div className='md:pl-[218px] pt-2 mx-[5px] '>
        <div className="bg-rose-100    p-3 rounded ">
          <div className="flex flex-col gap-10">
            <div className="p-3 font-bold text-lg">Information</div>
            <div className="grid grid-cols-1   md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 place-items-center ">

              <AdminOverviewCard title={"Events"} number={"233"} icon={FcAutomatic}/>
              <AdminOverviewCard title={"Activity"} number={"6"} icon={FcEditImage} />
              <AdminOverviewCard title={"Members"} number={"23"} icon={FcBusinessContact}/>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
