const properties = [
	{
		title: "Luxury Beachfront Villa",
		location: "Cox's Bazar, Bangladesh",
		coordinates: { lat: 21.4272, lng: 92.0058 },
		price: 150,
		rating: 4.8,
		reviewCount: 124,
		images: [
			"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
			"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
		],
		propertyType: "Villa",
		beds: 3,
		baths: 2,
		guests: 6,
		amenities: ["WiFi", "Beach access", "Pool", "Kitchen"],
		host: {
			name: "Sarah Johnson",
			avatar:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
			superhost: true,
		},
		availabilityCalendar: getDatesInRange(
			new Date(),
			new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
		),
		instantBook: true,
		description: {
			en: "Beautiful beachfront villa with stunning ocean views",
			bn: "সুন্দর সমুদ্র সৈকতের ভিলা যার থেকে মহাসাগরের দৃশ্য দেখা যায়",
		},
	},
	{
		title: "Modern Apartment in Dhaka",
		location: "Gulshan, Dhaka",
		coordinates: { lat: 23.7947, lng: 90.4161 },
		price: 75,
		rating: 4.5,
		reviewCount: 87,
		images: [
			"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
		],
		propertyType: "Apartment",
		beds: 2,
		baths: 1,
		guests: 4,
		amenities: ["WiFi", "Kitchen", "Air conditioning", "Parking"],
		host: {
			name: "Ahmed Rahman",
			avatar:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
			superhost: false,
		},
		availabilityCalendar: getDatesInRange(
			new Date(),
			new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
		),
		instantBook: false,
		description: {
			en: "Modern apartment in the heart of Dhaka with all amenities",
			bn: "ঢাকার কেন্দ্রস্থলে সব সুবিধা সহ আধুনিক অ্যাপার্টমেন্ট",
		},
	},
	{
		title: "Cozy Cabin in Sylhet",
		location: "Sylhet, Bangladesh",
		coordinates: { lat: 24.8949, lng: 91.8687 },
		price: 45,
		rating: 4.6,
		reviewCount: 56,
		images: [
			"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
			"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
		],
		propertyType: "Cabin",
		beds: 1,
		baths: 1,
		guests: 2,
		amenities: ["WiFi", "Nature view", "Fireplace", "Kitchen"],
		host: {
			name: "Fatima Khan",
			avatar:
				"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
			superhost: true,
		},
		availabilityCalendar: getDatesInRange(
			new Date(),
			new Date(Date.now() + 120 * 24 * 60 * 60 * 1000)
		),
		instantBook: true,
		description: {
			en: "Peaceful cabin surrounded by nature in beautiful Sylhet",
			bn: "সুন্দর সিলেটে প্রকৃতি দ্বারা পরিবেষ্টিত শান্তিপূর্ণ কেবিন",
		},
	},
];
