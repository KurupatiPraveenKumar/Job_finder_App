/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Data=[
  {
  id:1,
  image:'',
  title:'Web Developer',
  time:'Now',
  location:'Bangalore,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'google'
},
{
  id:2,
  image:'',
  title:'Web Designer',
  time:'Now',
  location:'Mumbai,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'Adobe'
},
{
  id:3,
  image:'',
  title:'FrontEnd Developer',
  time:'Now',
  location:'Bangalore,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'NTT'
},
{
  id:4,
  image:'',
  title:'BackEnd Developer',
  time:'Now',
  location:'Bangalore,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'NTT'
},
{
  id:5,
  image:'',
  title:'FullStack Developer',
  time:'Now',
  location:'Bangalore,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'Capgemini'
},
{
  id:6,
  image:'',
  title:'GET',
  time:'Now',
  location:'Chennai,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'TCS'
},
{
  id:7,
  image:'',
  title:'Data Analyst',
  time:'Now',
  location:'Hyderabad,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'IBM'
},
{
  id:8,
  image:'',
  title:'Python Developer',
  time:'Now',
  location:'Hyderabad,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'HCL'
},
{
  id:9,
  image:'',
  title:'MERN Developer',
  time:'Now',
  location:'Hyderabad,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'HCL'
},
{
  id:10,
  image:'',
  title:'NodeJs Developer',
  time:'Now',
  location:'Vizag,india',
  desc:'The customer himself,the customer will be able to pursue the adipiscing of the company',
  company:'Infosys'
},

]

const jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      {
        Data.map(({id,image,title,time,location,desc,company})=>{
          return(
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'><BiTimeFive/>{time}</span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
    
    
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
                </p>
                <div className="company flex items-center gap-2">
                  <img src={location} alt='' className='w-[10%]'/>
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
  
            
          </div>
          )
        })
      }

      </div>

    </div>
  )
}

export default jobs
