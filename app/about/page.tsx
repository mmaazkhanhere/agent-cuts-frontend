import React from "react";
import Image from "next/image";
import { Card } from "../components/ui/card";

const teamMembers = [
	{
		name: "Mian Maaz Ullah Khan",
		role: "Backend Developer",
		image: "/maaz.jpeg",
		description:
			"A skilled backend developer specialized in building robust and scalable server architectures. Led the development of core API infrastructure and database design for Agent Cuts.",
	},
	{
		name: "Muhammad Abdullah",
		role: "Backend Developer",
		image: "/abdullah.jpeg",
		description:
			"Expert in backend systems and data processing. Implemented complex video processing pipelines and optimization algorithms for the platform.",
	},
	{
		name: "Fatima Moumni",
		role: "Frontend Developer",
		image: "/fatima.jpeg",
		description:
			"Creative frontend developer with a keen eye for design. Responsible for crafting intuitive user interfaces and smooth user experiences.",
	},
	{
		name: "Furqan Nasir",
		role: "Frontend Developer",
		image: "/furqan.jpeg",
		description:
			"Specialized in modern frontend technologies and responsive design. Led the implementation of the video editing interface and real-time previews.",
	},
];

const AboutPage = () => {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
				<p className="text-xl text-muted-foreground">
					We're a passionate team of developers working together to revolutionize
					video editing through AI. Agent Cuts is the result of our combined
					expertise in both frontend and backend development.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{teamMembers.map((member) => (
					<Card key={member.name} className="overflow-hidden bg-card">
						<div className="p-6">
							<div className="aspect-square relative w-full max-w-[300px] mx-auto mb-6 rounded-full overflow-hidden">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover"
									sizes="(max-width: 300px) 100vw, 300px"
								/>
							</div>
							<div className="text-center">
								<h3 className="text-2xl font-semibold mb-2">
									{member.name}
								</h3>
								<p className="text-primary mb-4">{member.role}</p>
								<p className="text-muted-foreground">
									{member.description}
								</p>
							</div>
						</div>
					</Card>
				))}
			</div>

			<div className="max-w-3xl mx-auto text-center mt-16">
				<h2 className="text-3xl font-bold mb-6">Our Mission</h2>
				<p className="text-lg text-muted-foreground">
					At Agent Cuts, we're committed to making video editing more accessible
					and efficient through artificial intelligence. Our team combines
					expertise in AI, web development, and user experience to create a
					platform that revolutionizes the way content creators work with video.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
