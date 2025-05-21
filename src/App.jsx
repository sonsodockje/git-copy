import styles from './App.module.css'
import Header from './components/Header/Header.jsx'
import Button from './components/Button/Button.jsx'
import Footer from './components/Footer/Footer.jsx'
import Tab from './components/Tab/Tab.jsx'

export default function App() {
	return (
		<div>
			<div className={styles.nav}>Nav</div>
			<Header />

			<div className={styles.listContainer}>
				<Button
					style={{ backgroundColor: 'green', fontSize: '14px', color: 'white' }}
					name={'New Issue'}
				/>
			</div>
			<Footer />
		</div>
	)
}
