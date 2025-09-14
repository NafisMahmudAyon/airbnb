import { getLocations } from "@/apis/fetch-listing";
import LocationBasedListing from "@/components/location-based-listing";
import { ArrowRightIcon } from "@/components/icon";

export default async function Home() {
  const locations = await getLocations();
  const prefix = [
    "Popular homes in",
    "Available next month in",
    "Stay in",
    "Available next week in",
    "Homes in",
    "Available this month in",
    "Places to stay in"
  ]
  return (
    <div className="max-w-[1440px] mx-auto 2xl:px-[48px] mt-[190px]">
      {locations.map((location, i) => (
        <div key={i} className="pl-4 md:px-4">
          <h2 className="text-[20px] font-semibold mt-6 md:mt-8 mb-3.5 cursor-pointer inline-block">{prefix[i]} {location} <ArrowRightIcon /></h2>
          <LocationBasedListing location={location} />
        </div>
      ))}
    </div>
  );
}
