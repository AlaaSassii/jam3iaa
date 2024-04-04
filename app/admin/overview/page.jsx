"use client";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminOverviewCard from "../../../components/AdminOverviewCard";
import { v4 } from "uuid";
import { FcAutomatic } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import ModalCharityFinance from "../../../components/ModalCharityFinance";
import { useCreateEvent } from "../../../hooks/Store/useCreateEvent";
import { useCreateActivity } from "../../../hooks/Store/useCreateActivity";
import { useCreateMember } from "../../../hooks/Store/useCreateMember";
import { useEffect } from "react";
import { getMembers } from "../../../firebase/memeber";
import { getEvents } from "../../../firebase/event";
import { getActivities } from "../../../firebase/activity";
import { useAdminPassword } from "../../../hooks/Store/useAdminPassword";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
const Dashboard = () => {
  const { events, getEvent } = useCreateEvent((state) => ({
    events: state.events,
    getEvent: state.getEvent,
  }));
  const { activities, getActivities: getActivitiesFunction } =
    useCreateActivity((state) => ({
      activities: state.activities,
      getActivities: state.getActivities,
    }));
  const { members, getMembers: getMembersState } = useCreateMember((state) => ({
    members: state.members,
    getMembers: state.getMembers,
  }));
  const { password, passwordStored, storePassword } = useAdminPassword(
    (state) => ({
      password: state.password,
      passwordStored: state.passwordStored,
      storePassword: state.storePassword,
    })
  );
  const handleAddingPdf = (e) => {
    const uploadPDF = (imageUpload) => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `pdf/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            alert("added ");
          });
        })
        .catch((error) => {
          console.error("Error uploading file: ", error);
        });
    };
    if (e.target.files) {
      uploadPDF(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (!passwordStored) {
      const userPassword = prompt("Admin password");
      if (userPassword === password) {
        storePassword();
      }
    }
  }, [passwordStored]);
  useEffect(() => {
    getMembers().then((res) => {
      getMembersState(res);
      console.log({ res });
    });
    getEvents()
      .then((data) => {
        getEvent(data);
      })
      .catch((err) => console.log(err));

    getActivities()
      .then((data) => {
        getActivitiesFunction(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!passwordStored) return null;
  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Overview"} />

      <div className='md:pl-[218px] pt-2 mx-[5px] '>
        {/* <ModalCharityFinance /> */}
        <input
          type='file'
          className='file-input file-input-bordered w-full max-w-xs'
          onChange={handleAddingPdf}
          value=''
        />
        <div className='bg-rose-100    p-3 rounded '>
          <div className='flex flex-col gap-10'>
            <div className='p-3 font-bold text-lg'>Information</div>
            <div className='grid grid-cols-1   md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 place-items-center '>
              <AdminOverviewCard
                title={"Events"}
                number={events?.length || 0}
                icon={FcAutomatic}
              />
              <AdminOverviewCard
                title={"Activity"}
                number={activities?.length || 0}
                icon={FcEditImage}
              />
              <AdminOverviewCard
                title={"Members"}
                number={members?.length || 0}
                icon={FcBusinessContact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
