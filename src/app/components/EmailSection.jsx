"use client";
import React, { useState } from "react";
import connectDB from "../../../middleware/mongoose";
import { motion } from "framer-motion";
import { set } from "mongoose";
const EmailSection = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [check, setcheck] = useState(false);
  const [click, setClick] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data={subject,email,message}
      fetch(`api/clientinfo`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res)=>{return res.json()}).then((res)=>{setcheck(res.ok)
      console.log('js',res)
     if(res.ok){
       setEmail('');
       setSubject('');
       setmessage('');
       setClick(false);
     }
    })
    
    
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {console.log('isi ',check)}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        
      </div>
      <div>
     
          <form className="flex flex-col" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
              value={email}
                name="email"
                type="email"
                id="email"
                onChange={(e) =>{ setEmail(e.target.value); setClick(false) ;setcheck(false)}}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"

              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
              value={subject}
                name="subject"
                onChange={(e) => {setSubject(e.target.value); setClick(false) ;setcheck(false)}}
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
              value={message}
              onChange={(e) => {setmessage(e.target.value) ;setClick(false) ;setcheck(false)}}
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let&apos;s talk about..."
              />
            </div>
            <button
            onClick={()=>{setClick(true)}}
              type="submit"
              className={`${click?'cursor-not-allowed ':''} bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full`}
            >
              Send Message
            </button>

      {check&&<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.4}} className="text-white text-sm pt-1">Thank you for reaching out! I&apos;ll get back to you soon.</motion.p>}  
          </form>
      </div>

    </section>
  );
};

export default EmailSection;
