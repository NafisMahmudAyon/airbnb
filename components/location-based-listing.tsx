import React from 'react'
import { getListingByLocation } from '../apis/fetch-listing';
import RoomCard from './room-card';
import { Carousel, CarouselControl, CarouselItem, CarouselNextButton, CarouselPrevButton, CarouselSlides } from './aspect-ui';

export default async function LocationBasedListing ({location}: {location: string}) {
  const listing = await getListingByLocation(location);
  // console.log(listing)
  return (
    <div className=''>
      <Carousel>
        <CarouselSlides className=''>

      {listing.data.map((item, i) => (
        <CarouselItem key={i} className='flex-[0_0_47%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.66%] 2xl:flex-[0_0_14.28%]'>

        <RoomCard room={item} />
        </CarouselItem>
      ))}
        </CarouselSlides>
        <CarouselControl className='hidden md:flex absolute right-4 md:right-0 left-[initial] -top-16 z-50 w-max mt-[1.8rem] gap-1'>
          <CarouselPrevButton className='text-[#222222] disavled:text-[#C1C1C1] bg-[#EBEBEB] disabled:bg-[#F2F2F2] border disabled:border-[#C1C1C1] border-transparent' />
          <CarouselNextButton className='text-[#222222] disavled:text-[#C1C1C1] bg-[#EBEBEB] disabled:bg-[#F2F2F2] border disabled:border-[#C1C1C1] border-transparent' />
        </CarouselControl>
      </Carousel>
    </div>
  )
}