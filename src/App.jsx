import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'

function App() {
	console.log(process.env.PUBLIC_URL.KEY)
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App;
