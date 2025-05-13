'use client'

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { ChangeEvent, FormEvent, useState } from "react";

const Auth = () => {

  const defoultFormData = {
    email: '',
    name: '',
    password: '',

  }

  const [formData, setFormData] = useState( defoultFormData ); 

  const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none'

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault;

    try {
      console.log(formData);
    } catch (error) {
      console.log(error);    
    } finally {
      setFormData(defoultFormData);
    }
  }
  return (
    <section className='container mx-auto '> 
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-[80%] md:-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
            Create an account
          </h1>
          <p className='font-normal'>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white"/>
            |
            <FcGoogle className='ml-3 text-4xl cursor-pointer' />
          </span>

        </div>
        <form className=' mx-auto space-y-4 md:space-y-6' onSubmit={ handleSubmit } >
          <input type="email" name="email" placeholder='Type your Email' required value={formData.email} className={inputStyles} onChange={handleInputChange}/>
          <input type="text" name="name"  placeholder='Type your Name' required value={formData.name} className={inputStyles} onChange={handleInputChange}/>
          <input type="password" name="password" placeholder='Type your Password' required value={formData.password} className={inputStyles} onChange={handleInputChange}/>
          <button type='submit' className='w-full bg-tertiary-dark focus:outline-none font-medium rounded:lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
        </form>
        <button className="text-orange-700 underline">Login</button>
      </div>
    </section>
  )
}

export default Auth;