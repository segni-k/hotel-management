'use client'

import { AiFillApple, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { ChangeEvent, FormEvent, useState } from "react";


const Auth = () => {

  const defoultFormData = {
    email: '',
    name: '',
    password: '',

  }

  const [formData, setFormData] = useState( defoultFormData ); 

  const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none dark:text-gray-400'

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log(formData);
    } catch (error) {
      console.log(error);    
    } finally {
      setFormData(defoultFormData);
    }
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <section className='container mx-auto '> 
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-[80%] md:-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between dark:text-white">
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
          <button type='submit' className='w-full bg-orange-700 dark:text-white focus:outline-none font-medium rounded:lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
        </form>
        <button className="text-orange-700 underline p-5 text-md font-semibold border-1 border-indigo-600">Login</button>
      </div>
    </section>
    <div className="bg-white dark:bg-gray-950 text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Welcome back</h2>
    <form>
        <input id="email" className="w-full dark:text-gray-400 bg-transparent border my-3 dark:border-gray-400/30 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
        <input id="password" className="w-full dark:text-gray-400 bg-transparent border mt-1 dark:border-gray-400/30 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
        <div className="text-right py-4">
            <a className="text-blue-600 underline" href="#">Forgot Password</a>
        </div>
        <button type="submit" className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
    </form>
    <p className="text-center mt-4 dark:text-white">Don’t have an account? <a href="#" className="text-blue-500 underline">Signup</a></p>
    <button type="button" className="w-full dark:bg-indigo-500 flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
         <AiFillApple className="mr-3 text-4xl cursor-pointer text-black dark:text-white"/>
        Log in with Apple
    </button>
    <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
        <FcGoogle className='ml-3 text-4xl cursor-pointer' />
        Log in with Google
    </button>
    </div>
    </div>
    </>
  )
}

export default Auth;