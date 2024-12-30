import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { RiCss3Line } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { RiHtml5Line } from 'react-icons/ri'
import { SiPostman } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiJira } from 'react-icons/si'
import { RiJavaLine } from 'react-icons/ri'
import { SiApachejmeter } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiReactjsLine className='text-5xl text-cyan-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiCss3Line className='text-5xl text-blue-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiMongodb className='text-5xl text-green-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiHtml5Line className='text-5xl text-orange-600'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaNodeJs className='text-5xl text-green-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiJavascriptLine className='text-5xl text-yellow-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiJavaLine className='text-5xl'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiSelenium className='text-5xl text-yellow-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiCypress className='text-5xl'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiJira className='text-5xl text-blue-600'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiMysql className='text-5xl text-blue-300'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiPostman className='text-5xl text-orange-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiApachejmeter className='text-5xl text-red-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <VscAzureDevops className='text-5xl text-blue-500'/>
           </div>
           
        </div>
    </div>
  )
}

export default Technologies