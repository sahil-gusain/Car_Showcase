"use client"
import React from 'react'
import { ShowMoreProps } from '@/Types/types'
import { updateSearchParams } from '@/utils'
import { CustomBtn } from '.'
import { useRouter } from 'next/navigation'

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
   const router = useRouter();
   const handleNavigation = () =>{
    const newLimit = (pageNumber+1) * 6;
    const newPathname = updateSearchParams("limit",`${newLimit}`);

    router.push(newPathname,{scroll:false});
   }
  
    return (
    <div className='w-full flex-center gap-5 mt-10'>
        {
            !isNext &&(
                <CustomBtn 
                   btnType='button'
                   title='Show More'
                   containerStyles='bg-primary-blue rounded-full text-white'
                   handleClick={handleNavigation}
                   />
            )
        }
    </div>
  )
}

export default ShowMore