const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
export async function getLocations() {
	const res = await fetch(`${API_URL}/api/listings`);
	const data = await res.json();

	const locations = [...new Set(data.data.map((item) => item.location))];

	return locations;
}

export async function getListingByLocation(location: string) {
  // const loc = location.trim().split("");

	const res = await fetch(`${API_URL}/api/listings?location=${location}`);
	const data = await res.json();
  // console.log(data)
	return data;
}

export function getRandomStars() {
	return parseFloat((2.51 + Math.random() * (5 - 2.51)).toFixed(2));
}
