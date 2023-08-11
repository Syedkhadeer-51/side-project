
import profileImg from "../assets/profileImg.png"
import propertyImg from "../assets/property.png"
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Property sold", 11],
  ["property available", 2],
];

export const options = {
  legend: "none",
  colors: ['#8C114A', '#666E73'],
  backgrounColor :'#F5F5F5'
};

const Profile = () => {
  return (
    <>
    <h2 className="font-bold text-3xl">Profile</h2>
    <h5 className="font-medium text-gray-500">Your personal information</h5>
    <div className="flex">
      <div className="w-5/12 h-20 m-2">
        <div className="profile-card card bg-neutral-100 h-50 p-3 rounded-md drop-shadow-md">
          <img className="rounded-full m-auto p-3 bg-slate-50 shadow-md" src={profileImg} alt="profileImg" />
          <h3 className="font-semibold text-xl my-3 text-center">Yusuf Al Saidi</h3>
          <div className="border border-slate-50 my-3"></div>
          <div className="flex my-2">
            <div className="w-4/12 p-2 flex flex-col justify-center text-gray-700">
              <h4 className="text-md font-medium">Age</h4>
              <h4 className="text-md font-medium my-2">City</h4>
              <h4 className="text-md font-medium my-2">Phone</h4>
              <h4 className="text-md font-medium my-2">Email</h4>
            </div>
            <div className="w-8/12">
            <div className="w-4/12 p-2 flex flex-col justify-center text-gray-700">
              <h4 className="text-md font-medium">26</h4>
              <h4 className="text-md font-medium my-2">Muscat</h4>
              <h4 className="text-md font-medium my-2">8613324527</h4>
              <h4 className="text-md font-medium my-2">yusuf.alsaidi@google.com</h4>
            </div>
            </div>
          </div>
        </div>
        <div className="profile-card card bg-neutral-100 h-50 p-3 rounded-md drop-shadow-md my-4">
          <h3 className="font-semibold text-xl my-3">Property Status</h3>
          <div className="bg-neutral-100 rounded-lg" >
          <Chart
          className="rounded-lg"
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"300px"}
          options={options}
        />
          </div>
        </div>
       
      </div>
      
      <div className="w-7/12 h-20">
        <div className="bg-neutral-100 h-50 m-2 rounded-md card p-3 drop-shadow-md">
          <h3 className="font-semibold text-xl m-3">General Information</h3>
          <p className="font-normal text-md m-3 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="recent-activties bg-neutral-100 rounded-md p-3 drop-shadow-sm mx-2 my-5">
        <h3 className="font-semibold text-xl m-3">Recent Activities</h3>
          <div className="activity-card rounded-md bg-neutral-50 hover:drop-shadow-md p-3 hover:bg-neutral-200 my-4">
            <h4 className="text-md font-bold">Listed 5 properties in USA</h4>
            <p className="activity-description text-sm font-normal text-gray-400">Details of description about the update</p>
          </div>
          <div className="activity-card rounded-md bg-neutral-50 hover:drop-shadow-md p-3 hover:bg-neutral-200 my-4">
            <h4 className="text-md font-bold">Skylit Midtown Castle is approved for sale</h4>
            <p className="activity-description text-sm font-normal text-gray-400 py-1">Property approved for sale, share details about the property...</p>
          </div>
        </div>
        <div className="recent-listing rounded-md bg-neutral-100 drop-shadow-sm p-3 my-5 mx-2">
        <h3 className="font-semibold text-xl m-3">Recent Listings</h3>
        <div className="flex">
        <div className="property-card rounded-md bg-neutral-50 p-2 m-3 drop-shadow-md w-50 w-1/2">
          <img className="rounded-md m-auto w-100 my-2 p-2 object-cover" src={propertyImg} alt="property-image" />
          <div className="m-3 text-center">
          <h3 className="font-bold text-md">98AB Alexander Court, London</h3>
          <p className="property-location text-sm font-normal text-gray-400">45 Connor St. London, 44523</p>
          </div>
        </div>
        <div className="property-card rounded-md bg-neutral-50 p-3 m-3 drop-shadow-md w-50 w-1/2">
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile