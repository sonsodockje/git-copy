import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import cx from 'clsx'

export default function Modal({
	opened,
	title,
	onClose,
	placeholder,
	searchData,
	onClickCell,
}) {
	const [searchValue, setSearchValue] = React.useState('')
	const [filteredData, setFilteredData] = useState(searchData)

	useEffect(() => {
		if (searchValue) {
			const filtered = searchData.filter(item =>
				item.toLowerCase().includes(searchValue.toLowerCase()),
			)
			setFilteredData(filtered)
		} else {
			setFilteredData(searchData)
		}
	}, [searchValue, searchData])

	return opened ? (
		<div className={styles.modal}>
			<div className={styles.header}>
				<span>{title}</span>
				<button className={styles.closeButton} onClick={onClose}>
					X
				</button>
			</div>
			<div className={styles.inputWarp}>
				<input
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder={placeholder}
				/>
				{/* 필터링 데이터 */}
				<ul>
					{filteredData.map((item, index) => (
						<li key={index} role="button" onClick={onClickCell}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	) : null
}
