import React, {useState} from 'react';
import './InterestForm.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Form({api}) {

    const formData = {
        name: '',
        email: '',
        deployed_state: '',
        nysc_state_code: '',
    }

    const [form, setForm] = useState(formData);

    const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});    
    }

    async function handleSubmit(e) {
        e.preventDefault(e)
            const customId = "custom-id-yes"
            const id = toast.loading("Please wait...", {position: "top-center", autoClose: true, toastId: customId})
            try {
            if (!form.name || !form.email || !form.deployed_state || !form.nysc_state_code) 
                return toast.update(id,{ render:"Please fill in all fields!", type:"error",isLoading:false, position: "top-center", autoClose: true, toastId: customId});
            if (form.name.length < 3) return toast.update(id,{ render:"The name must be at least 3 characters!", type:"error",isLoading:false, position: "top-center", autoClose: true, toastId: customId});                                
            const response = await axios.post(`${api}/apply`, form)
                if (response.data.success === true) {
                    toast.update(id, { render:"Thank you for showing interest, kindly contact the Schedule Officer", type:"success", isLoading:false, position:"top-center", autoClose:true, toastId: customId });
                    setTimeout(() => window.location.reload(false), 3000);
                }
                
            } 

            catch (error) {

                if (error.response.status === 500) {
                    return toast.update(id, { render: "Internal Server Error", type:"error", position:"top-center", isLoading:false, autoClose:true, toastId: customId });
                }
                 else if (error.response) { 
                    return toast.update(id, { render: error.response.data.error.message, type:"error", position:"top-center", isLoading:false, autoClose:true, toastId: customId });
                    }
                 
                 else if (error.request ) {
                    return toast.update(id, { render:"You are offline", type:"error", isLoading:false , position:"top-center", autoClose:true, toastId: customId });
                }

                 else {
                   return toast.update(id, { render:"You are offline", type:"error", isLoading:false , position:"top-center", autoClose:true, toastId: customId });
                }
            }  
        }

    return (
        <div id='InterestForm' className="bg-white">
            <div  class="flex bg-white items-center justify-center mt-28 mb-32">
                <div  class="grid bg-white rounded-lg w-11/12 md:w-11/12 lg:w-9/12">
                    <div class="flex justify-center">
                        <div class="flex">
                            <h2 className='interest-header font-semibold text-2xl font-Gilroy sm:text-3xl text-center sm:mb-5 mb-5'>Solidify your interest by filling the form below</h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-5 mx-2">
                            <div class="grid grid-cols-1">
                                <label className='sm:text-2xl text-md font-Gilroy font-semibold text-gray-500' htmlFor="name">Full Name</label>
                                <input
                                    className="input-field my-1 appearance-none rounded py-3 px-3 text-md focus:outline-none focus:border-transparent"
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    value={form.name}
                                />
                            </div>
                            <div class="grid grid-cols-1">
                                <label className='sm:text-2xl text-md font-Gilroy font-semibold text-gray-500' htmlFor="email">Email</label>
                                    <input
                                        className="input-field my-1 appearance-none rounded py-3 px-3 text-md focus:outline-none focus:border-transparent"
                                        id="email"
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        value={form.email}
                                    />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-5 sm:mt-16 mx-2">

                            <div class="grid grid-cols-1">
                                <label className='sm:text-2xl text-md font-Gilroy font-semibold text-gray-500' htmlFor="nysc_state_code">State Code</label>
                                <input
                                    className="input-field my-1 rounded appearance-none py-3 px-3 text-md focus:outline-none focus:border-transparent"
                                    id="nysc_state_code"
                                    name="nysc_state_code"
                                    type="text"
                                    onChange={handleChange}
                                    value={form.nysc_state_code}
                                />
                            </div>
                            <div class="grid grid-cols-1">
                                <label className='sm:text-2xl text-md font-Gilroy font-semibold text-gray-500' htmlFor="deployed_state">State of deployment</label>
                                <div className="relative">
                                    <select className="block font-Gilroy appearance-none w-full border pr-8 leading-normal input-field my-1 rounded bg-transparent py-3 px-3 text-md focus:outline-none focus:border-transparent"
                                        id="deployed_state"
                                        name="deployed_state"
                                        onChange={handleChange}
                                        value={form.deployed_state}
                                        >
                                        <option>Select State</option>
                                        <option value="AB">Abia</option>
                                        <option value="AD">Adamawa</option>
                                        <option value="AK">Akwa Ibom</option>
                                        <option value="AN">Anambra</option>
                                        <option value="BA">Bauchi</option>
                                        <option value="BY">Bayelsa</option>
                                        <option value="BN">Benue</option>
                                        <option value="BO">Borno</option>
                                        <option value="CR">Cross River</option>
                                        <option value="DT">Delta</option>
                                        <option value="EB">Ebonyi</option>
                                        <option value="ED">Edo</option>
                                        <option value="EK">Ekiti</option>
                                        <option value="EN">Enugu</option>
                                        <option value="GM">Gombe</option>
                                        <option value="IM">Imo</option>
                                        <option value="JG">Jigawa</option>
                                        <option value="KD">Kaduna</option>
                                        <option value="KN">Kano</option>
                                        <option value="KT">Katsina</option>
                                        <option value="KB">Kebbi</option>
                                        <option value="KG">Kogi</option>
                                        <option value="KW">Kwara</option>
                                        <option value="LA">Lagos</option>
                                        <option value="NW">Nasarawa</option>
                                        <option value="NG">Niger</option>
                                        <option value="OG">Ogun</option>
                                        <option value="OD">Ondo</option>
                                        <option value="OS">Osun</option>
                                        <option value="OY">Oyo</option>
                                        <option value="PL">Plateau</option>
                                        <option value="RV">Rivers</option>
                                        <option value="SO">Sokoto</option>
                                        <option value="TR">Taraba</option>
                                        <option value="YB">Yobe</option>
                                        <option value="ZF">Zamfara</option>
                                        <option value="FCT">FCT Abuja</option>        
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='text-center mt-5 sm:mt-10'>
                                <button className='bg-black font-Gilroy w-auto text-white px-5 sm:px-9 sm:py-4 py-3 rounded-md font-semibold border-none active:bg-gray-600 ' type="submit">Submit my details</button>
                            </div>
                    </form>
                </div>         
            </div>
        </div>
    )
}