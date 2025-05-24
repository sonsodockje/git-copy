import React, { useState } from 'react'
import styles from './ListContainer.module.css'
import Button from '../Button/Button.jsx'
import ListItem from '../ListItem/ListItem.jsx'
import ListItemLayout from '../ListItemLayout/ListItemLayout.jsx'

import cx from 'clsx'
import Modal from '../Modal/Modal.jsx'

export default function ListContainer() {
	const [inputValue, setInputValue] = useState('is:pr is:open')
	const [list, setList] = useState([
		{
			id: 1,
			title: 'Issue 1',
			description: 'Description for issue 1',
			badges: [{ color: 'red', title: 'urgent' }],
		},
		{
			id: 2,
			title: 'Issue 2',
			description: 'Description for issue 2',
			badges: [{ color: 'blue', title: 'info' }],
		},
	])
	const [filteredData, setFilteredData] = useState([])

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
			<ListItemLayout className={cx(styles.listHeader, styles.first)}>
				<FilterList
					onChangeFilter={filteredData => {
						// 필터링된 요소에 맞게 데이터 불러오기
					}}
				/>
			</ListItemLayout>
			<div className={styles.continer}>
				{list.map(item => (
					<ListItem
						key={item.id}
						title={item.title}
						description={item.description}
						badges={item?.badges}
					/>
				))}
				{/* <ListItem
					title={'issue'}
					description={'디스트립션'}
					badges={[{ color: 'red', title: 'badge' }]}
				/>
				<ListItem
					title={'issue'}
					description={'디스트립션'}
					badges={[{ color: 'blue', title: 'badge' }]}
				/> */}
			</div>
		</div>
	)
}

// 오픈, 클로즈된 정보 포함하는 컴포넌트
// 각 개별 컴포넌트 포함
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

// 오픈, 클로즈된 정보를 표시하는 컴포넌트 객체 자체
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

// 리스트에 필터링 기능을 추가하는 컴포넌트
// 리스트 필터 아이템을 포함함.
function FilterList({ onChangeFilter }) {
	// const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className={styles.filteringList}>
				<ListFilterItem>lando</ListFilterItem>
				<ListFilterItem>norris</ListFilterItem>
				<ListFilterItem>and</ListFilterItem>
				<ListFilterItem>bruce</ListFilterItem>
				<ListFilterItem>lee</ListFilterItem>
			</div>
		</>
	)
}

// 리스트 필트 아이템 자체 컴포넌트
// 각 필터의 모달을 띄우는 역할을 함
function ListFilterItem({ onClick, children, onChangeFilter }) {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className={styles.filterItem}>
			<span role="button" onClick={() => setShowModal(true)}>
				{children} ▼
			</span>
			<Modal
				opened={showModal}
				onClose={() => setShowModal(false)}
				placeholder={'Filter labels'}
				searchData={['lando', 'norris', 'bruce', 'lee']}
				onClickCell={e => {
					console.log(e.target.innerText)

					// 클릭된 정보를 통해 리스트 필터링
					onChangeFilter()
				}}
			/>
		</div>
	)
}
