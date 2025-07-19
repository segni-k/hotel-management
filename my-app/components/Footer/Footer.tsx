import Link from "next/link"
import { BiMessageDetail } from "react-icons/bi"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"


const Footer = () => {
  return (
    <footer className="mt-16 dark:text-white">
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark">
            Hotelzz
            </Link>
            <h4 className="font-semibold text-[40px] py-6">Contact Us</h4>
            <div className="flex flex-wrap gap-16 items-center justify-between">
                <div className="fex-1">
                    <p>Addis Ababa, Ethiopia</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill />
                        <p className="ml-2">@Elite_stay</p>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneOutbound />
                        <p className="ml-2">+251911229008</p>
                    </div>
                    <div className="flex items-center pt-4">
                        <BiMessageDetail />
                        <p className="ml-2">Elitestay@official.com</p>
                    </div>
                </div>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">Our Story</p>
                    <p className="pb-4">Get in Touch</p>
                    <p className="pb-4">Our privacy Commitment</p>
                    <p className="pb-4">Terms of service</p>
                    <p>Customer Assistance</p>

                </div>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">Dining Experiance</p>
                    <p className="pb-4">Wellness</p>
                    <p className="pb-4">Fitness</p>
                    <p className="pb-4">Sports</p>
                    <p>Events</p>
    
                </div>
               
            </div>
        </div>
        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  )
}

export default Footer