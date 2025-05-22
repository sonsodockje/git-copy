import React, { useState } from 'react'
import styles from './ListContainer.module.css'
import Button from '../Button/Button.jsx'
import ListItem from '../ListItem/ListItem.jsx'
import ListItemLayout from '../ListItemLayout/ListItemLayout.jsx'

import cx from 'clsx'

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
			<OpenClosedFilters />
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

function OpenCloseFilter({ size, state, onClick, slected }) {
	return (
		<span
			role="button"
			onClick={onClick}
			className={cx(styles.textFilter, {
				[styles.sleted]: slected,
			})}
		>
			{size} {state}
		</span>
	)
}

function OpenClosedFilters({ data }) {
	const [isOpenMode, setIsOpenMode] = useState(true)

	const openModeDataSize = 1
	const closedModeDataSize = 2

	return (
		<>
			<OpenCloseFilter
				size={openModeDataSize}
				state={'Open'}
				slected={isOpenMode}
				onClick={() => setIsOpenMode(true)}
			/>

			<OpenCloseFilter
				size={closedModeDataSize}
				state={'Closed'}
				slected={!isOpenMode}
				onClick={() => setIsOpenMode(false)}
			/>
		</>
	)
}
