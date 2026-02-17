import ForumThreadItem from "./ForumThreadItem";

export default function ForumThreadList() {
	const threads = [
		{
			title: "Welcome to the Bee Ecosystem DAO Forum!",
			author: "BeeDAO Admin",
			tag: "Announcements",
			tagColor: "yellow" as const,
			replies: 45,
			time: "15/01/2025",
			isPinned: true,
		},
		{
			title: "Welcome to the Bee Ecosystem DAO Forum!",
			author: "BeeDAO Admin",
			tag: "Announcements",
			tagColor: "yellow" as const,
			replies: 45,
			time: "15/01/2025",
			isPinned: true,
		},
		{
			title: "How do i purchase P-NECTR tokens?",
			author: "0x4351...3098",
			tag: "Presale Q&A",
			tagColor: "purple" as const,
			replies: 45,
			time: "15/01/2025",
		},
		{
			title: "Best practices for listing assets on the marketplace",
			author: "MarketMaven",
			tag: "Marketplace",
			tagColor: "green" as const,
			replies: 45,
			time: "15/01/2025",
		},
		{
			title: "How do i purchase P-NECTR tokens?",
			author: "0x4351...3098",
			tag: "Presale Q&A",
			tagColor: "blue" as const,
			replies: 45,
			time: "15/01/2025",
		},
	];

	return (
		<div className="space-y-4">
			{threads.map((thread, index) => (
				<ForumThreadItem key={index} {...thread} />
			))}
		</div>
	);
}
