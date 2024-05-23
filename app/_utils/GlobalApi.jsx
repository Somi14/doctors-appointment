 const {default: axios} =require("axios");
 const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

 if (!API_KEY) {
   console.error("API key is missing. Please set NEXT_PUBLIC_STRAPI_API_KEY environment variable.");
 }
 const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
         'Authorization':`Bearer ${API_KEY}`
    }
 })

 const getCategory=()=>axiosClient.get('/categories?populate=*')
 .catch(error => {
   console.error("Error fetching categories:", error);
   throw error;
 });

 const getDoctorList=()=>axiosClient.get('/doctors?populate=*')

 const getDoctorCategory = (category) => axiosClient.get(`/doctors?filters[categories][Name][$in]=${category}&populate=*`);
 
 const getDoctorDetailsById=(id)=>axiosClient.get('/doctors/'+id+'?populate=*') 
 
 const bookAppointment=(data)=>axiosClient.post('/appointments', data);
 
 const getUserBookingList=(userEmail)=>axiosClient.get(`/appointments?[filters][Email][$eq]=${userEmail}&populate[doctor][populate][image][populate][0]=url&populate=*`)

 const sendEmail=(data)=>axios.post('/api/sendEmail', data)
 
 const cancelBooking=(id)=>axiosClient.delete('/appointments/'+id)
 

 export default{
   getCategory,
   getDoctorList,
   getDoctorCategory,
   getDoctorDetailsById,
   bookAppointment,
   getUserBookingList,
   cancelBooking,
   sendEmail
 }