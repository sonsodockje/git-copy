import React, { useState } from 'react'
import styles from './ListContainer.module.css'
import Button from '../Button/Button.jsx'
import ListItem from '../ListItem/ListItem.jsx'
import ListItemLayout from '../ListItemLayout/ListItemLayout.jsx'

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
			<ListItemLayout className={styles.listHeader}>
				<div className={styles.filteringList}>
					<span>Author</span>
					<span>Author</span>
					<span>Author</span>
					<span>Author</span>
					<span>Author</span>
					<span>Author</span>
				</div>
			</ListItemLayout>
			<div className={styles.continer}>
				<ListItem
					title={'issue'}
					description={'디스트립션'}
					badges={[{ color: 'red', title: 'badge' }]}
				/>
				<ListItem
					title={'issue'}
					description={'디스트립션'}
					badges={[{ color: 'blue', title: 'badge' }]}
				/>
				<ListItem title={'issue'} description={'디스트립션'} />
			</div>
		</div>
	)
}
