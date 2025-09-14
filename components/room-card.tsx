import { getRandomStars } from '@/apis/fetch-listing';
import { myFont2 } from '@/app/font';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from './aspect-ui';
import { StarIcon, WishlistIcon } from './icon';

const RoomCard = ({ room, className }: { room: any, className?: string }) => {
  const days = room.checkoutDate - room.checkinDate || 2;
  return (
    <Card className={`py-0 overflow-hidden shadow-none border-0 rounded-t-[20px] gap-2 ${className}`}>
      <div className='relative'>
        <Image src={room.images[0]} alt={room.title} width={500} height={500} className='aspect-square object-cover rounded-[20px] ' />
        <span className='absolute top-3 right-3 hover:scale-[1.08] transition-all duration-250'><WishlistIcon /></span>
        {room.favorite && (<span className={`absolute top-3 left-3 bg-white/80 py-[5.5px] rounded-full text-[11px] font-semibold px-[9.5px] ${myFont2.className}`}>Guest favorite</span>)}
      </div>
      <CardContent className='px-0 grid gap-.5'>
        <CardTitle className='text-[13px]'>
          {room.title}
        </CardTitle>
        <CardDescription className='text-[.75rem] flex items-center text-text-muted'>
          <span>${room.price * days} for {days} nights</span>
          <span>&nbsp;.&nbsp;</span>
          <span className='flex items-center gap-[1px]'><StarIcon />{getRandomStars()}</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default RoomCard