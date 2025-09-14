import { ChevronDownIcon, DollarSign, Globe } from 'lucide-react';
import Link from 'next/link';
import { TabContent, TabItem, TabList, Tabs } from './aspect-ui';
import { FacebookIcon, InstagramIcon, XIcon } from './icon';

const footer = () => {
  const tipsContent = [
    {
      title: "Family travel hub",
      description: "Tips and inspiration"
    },
    {
      title: "Family budget travel",
      description: "Get there for less"
    },
    {
      title: "Vacation ideas for any budget",
      description: "Make it special without making it spendy"
    },
    {
      title: "Travel Europe on a budget",
      description: "How to take the kids to Europe for less"
    },
    {
      title: "Outdoor adventure",
      description: "Explore nature with the family"
    },
    {
      title: "Bucket list national parks",
      description: "Must-see parks for family travel"
    },
    {
      title: "Kid-friendly state parks",
      description: "Check out these family-friendly hik"
    },
  ]
  const friendly = [
    { city: "Albuquerque", state: "New Mexico" },
    { city: "Atlanta Metro", state: "Georgia" },
    { city: "Augusta", state: "Georgia" },
    { city: "Austin Metro", state: "Texas" },
    { city: "Baton Rouge", state: "Louisiana" },
    { city: "Bentonville", state: "Arkansas" },
    { city: "Birmingham", state: "Alabama" },
    { city: "Boise", state: "Idaho" },
    { city: "Boston Metro", state: "Massachusetts" },
    { city: "Boulder", state: "Colorado" },
    { city: "Charlotte", state: "North Carolina" },
    { city: "Chicago Metro", state: "Illinois" },
    { city: "Cincinnati", state: "Ohio" },
    { city: "Columbus", state: "Ohio" },
    { city: "Crestview", state: "Florida" },
    { city: "Dallas", state: "Texas" },
    { city: "Denver", state: "Colorado" },
  ];

  const supportLink = [
    "Help Center",
    "Get help with a safety issue",
    "AirCover",
    "Anti - discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern"
  ]

  const hostingLink = [
    "Airbnb your home",
    "Airbnb your experience",
    "Airbnb your service",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Airbnb - friendly apartments",
    "Join a free Hosting class",
    "Find a co‑host"
  ]

  const airbnbLink = [
    "Airbnb",
    "2025 Summer Release",
    "Newsroom",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnb.org emergency stays"
  ]

  return (
    <div className='bg-[#F7F7F7] pt-12'>
      <div className='max-w-[1344px] px-4 pb-12 mx-auto'>
        <h2 className='text-[1.375rem] font-medium mb-4'>Inspiration for future getaways</h2>
        <Tabs defaultActive="tips">
          <TabList className='flex gap-6'>
            <TabItem id="tips">Travel tips & inspiration</TabItem>
            <TabItem id="friendly">Airbnb-friendly apartments</TabItem>
          </TabList>
          <TabContent id="tips" className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 pt-4'>
            {tipsContent.map((item, i) => (
              <div key={i} className='group text-sm'>
                <h2 className='font-medium text-nowrap truncate w-full'>{item.title}</h2>
                <p className='text-text-muted group-hover:text-text text-nowrap overflow-clip'>{item.description}</p>
              </div>
            ))}
          </TabContent>
          <TabContent id="friendly" className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 text-sm pt-4'>
            {friendly.map((item, i) => (
              <div key={i} className='group text-sm'>
                <h2 className='font-medium text-nowrap truncate w-full'>{item.city}</h2>
                <p className='text-text-muted group-hover:text-text text-nowrap overflow-clip'>{item.state}</p>
              </div>
            ))}
            <div className='text-text font-medium cursor-pointer inline-flex items-center'>Show more <ChevronDownIcon size={18} /></div>
          </TabContent>
        </Tabs>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 px-4'>
        <div className='py-6 border-b border-[#DDDDDD]'>
          <h2 className='text-sm text-text font-medium mb-4'>Support</h2>
          <ul className='grid gap-4 justify-items-start'>
            {supportLink.map((item, i) => (
              <li key={i} className='text-text hover:underline text-sm'><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div className='py-6 border-b border-[#DDDDDD]'>
          <h2 className='text-sm text-text font-medium mb-4'>Hosting</h2>
          <ul className='grid gap-4 justify-items-start'>
            {hostingLink.map((item, i) => (
              <li key={i} className='text-text hover:underline text-sm'><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div className='py-6 border-b border-[#DDDDDD]'>
          <h2 className='text-sm text-text font-medium mb-4'>Airbnb</h2>
          <ul className='grid gap-4 justify-items-start'>
            {airbnbLink.map((item, i) => (
              <li key={i} className='text-text hover:underline text-sm'><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-center text-sm py-7 px-4'>
        <div className='flex gap-4'>
          <p>© 2025 Airbnb, Inc.</p>
          <Link href="#" className='hover:underline'>Terms</Link><Link href="#" className='hover:underline'>Sitemap</Link><Link href="#" className='hover:underline'>Privacy</Link><Link href="#" className='hover:underline'>Your Privacy Choices</Link>
        </div>
        <div className='text-sm flex gap-4 font-medium'>
          <span className='inline-flex items-center gap-1'><Globe size={16} />English (US)</span>
          <span className='inline-flex items-center gap-1'><DollarSign size={16} />
            USD</span>
          <span className='inline-flex items-center gap-5'>
            <span className='relative before:absolute before:content-[""] before:w-[32px] before:h-[32px] hover:before:bg-[#EBEBEB] before:z-10 before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full'>
              <FacebookIcon />
            </span>
            <span className='relative before:absolute before:content-[""] before:w-[32px] before:h-[32px] hover:before:bg-[#EBEBEB] before:z-10 before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full'>
              <XIcon />
            </span>
            <span className='relative before:absolute before:content-[""] before:w-[32px] before:h-[32px] hover:before:bg-[#EBEBEB] before:z-10 before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full'>
              <InstagramIcon />
            </span>
          </span>
        </div>

      </div>
    </div>
  )
}

export default footer