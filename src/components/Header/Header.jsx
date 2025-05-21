import React from 'react'
import styles from './Header.module.css'
import Button from '../Button/Button.jsx'
import Space from '../Space.jsx'
import Tabs from '../Tabs/Tabs.jsx'

export default function Nav() {
	return (
		<div className={styles.header}>
			<div className={styles.headerTitle}>
				<Button
					name={'Watch'}
					style={{ backgroundColor: 'transparent', color: 'black' }}
				>
					<div className={styles.circle}>1</div>
				</Button>
				<Space />
				<Button
					name={'Fork'}
					style={{ backgroundColor: 'transparent', color: 'black' }}
				/>
				<Space />
				<Button
					name={'Star'}
					style={{ backgroundColor: 'transparent', color: 'black' }}
				/>
			</div>
			<div>
				<Tabs />
			</div>
		</div>
	)
}
