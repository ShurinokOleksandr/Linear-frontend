'use client';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/navigation';
import { darkTheme } from '@/theme/colors';


export default function Home() {
	const router  = useRouter();
	
	return (
		<ThemeProvider theme={darkTheme}>
			<main>
			
			</main>
		</ThemeProvider>
	);
}
