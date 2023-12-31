// import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOpsions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import Loader from '../../../assets/Loader/Loader';


const AvailableAppointment = ({selectedDate}) => {

const [doctors, setDoctors] = useState([])
const [treatment, setTreatment] = useState(null)
// const [loader, setLoader] = useState(false)

// useEffect(()=>{
//     setLoader(true)
//     setTimeout(()=>{
//         setLoader(false)
        
//     },5000)
// },[])

// load data using query function
// const {data:doctors = []} = useQuery({
//     key:['doctors'],
//     queryFn:() => fetch('https://race-hospital-server-e3mhyxjma-laizuakram1.vercel.app/doctors')
//     .then(res => res.json())
// })

    useEffect(() =>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data));
    },[])

    return (
        <>
            <div>
            <h3 className='text-2xl text-teal-400 font-bold text-center mt-10'>Available Appointment on:{format(selectedDate, 'PP')}</h3>
            <div className='grid md:grid-cols-3 gap-y-5 text-center my-10'>
            {
                doctors.map((doctor,index) => <AppointmentOptions
                doctor = {doctor}
                key={index}
                setTreatment = {setTreatment}
                ></AppointmentOptions> )
            }
            
        </div>
        {
            treatment &&
            <BookingModal 
            treatment = {treatment}
            selectedDate = {selectedDate}
            setTreatment = {setTreatment}
            ></BookingModal>
        }
        </div>

        </>
    );
};

export default AvailableAppointment;