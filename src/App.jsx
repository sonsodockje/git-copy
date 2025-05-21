import React from 'react'

import styles from './App.module.css'
import Header from './components/Header/Header.jsx'
import ListContainer from './components/ListContainer/ListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
	return (
		<div>
			<div className={styles.nav}>Nav</div>
			<Header />
			<ListContainer />
			<Footer />
		</div>
	)
}
