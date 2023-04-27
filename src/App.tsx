import Card from './components/Card';

function App() {
	return (
		<main className="bg-neutral-light-grey flex flex-col h-full font-poppins px-4">
			<Card />
			<div className="mt-auto mb-10 text-center text-sm">
				Challenge by{' '}
				<a
					className="text-attribution"
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. <br />
				Coded by{' '}
				<a
					className="text-attribution"
					target="_blank"
					href="https://github.com/JuaniSilva"
				>
					Juani Silva
				</a>
				.
			</div>
		</main>
	);
}

export default App;
