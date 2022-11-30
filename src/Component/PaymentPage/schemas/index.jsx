import * as yup from 'yup';

export const signUpSchema=yup.object({
    card_number:yup.string().positive().min(14).max(14).required("Please enter valid card number"),
    cvv:yup.string().positive().min(6).max(6).required("please enter valid cvv"),
    country_name:yup.string().positive().min(2).max(15).required("please enter country name"),
    cvv:yup.string().positive().min(6).max(6).required("please enter valid cvv number"),
    name_card:yup.string().positive().min(2).max(20).required("please enter valid name"), 
    email:yup.string().positive().email().min(2).required("please enter valid email address"),
    country:yup.string().positive(),
    first_name:yup.string().positive().min(2).max(20).required("Please enter valid first name"),
    last_name:yup.string().positive().min(2).max(20),
    company:yup.string().positive().min(2).max(20),
    appartment:yup.string().positive().min(2).max(20),
    city:yup.string().positive().min(2).max(13).required("Please enter valid city name"),
    address:yup.string().positive().min(2).max(20).required("Please enter valid email address"),
    region:yup.string().positive().min(3).max(12),
    Zip:yup.string().positive().min(6).max(6).required("Please enter valid zip code "),
    phone:yup.string().positive().min(10).max(10).required("Please enter Valid mobile number")

   

})
// email:"",
// country:"",
// first_name:"",
// last_name:"",
// comapany:"",
// appartment:"",
// city:"",
// region:"",
// Zip:"",
// phone:""