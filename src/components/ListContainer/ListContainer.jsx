import React, { useState } from 'react'
import styles from './ListContainer.module.css'
import Button from '../Button/Button.jsx'

export default function ListContainer() {
	const [inputValue, setInputValue] = useState('is:pr is:open')

	return (
		<div className={styles.listContainer}>
			<div className={styles.topSection}>
				<input
					className={styles.input}
					type="text"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					placeholder="Search issues"
				/>
				<Button
					name={'New Issue'}
					style={{ backgroundColor: 'green', color: 'white' }}
				/>
			</div>
		</div>
	)
}
