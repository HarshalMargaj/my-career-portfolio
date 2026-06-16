import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Harshal Margaj — Full Stack Developer",
	description:
		"Full Stack Developer specializing in React, Next.js and Node.js. Building modern, scalable web applications from pixel-perfect UIs to robust backends.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				"bg-black",
				inter.className,
				"font-sans",
			)}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col overflow-x-hidden">
				<CustomCursor />
				{children}
			</body>
		</html>
	);
}
