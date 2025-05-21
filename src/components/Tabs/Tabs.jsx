import React, { useState } from 'react'
import styles from './Tabs.module.css'
import cx from 'clsx'

const TabList = [
	{ title: 'Issues', number: 0 },
	{ title: 'Pull Requests', number: 0 },
]
export default function Tabs() {
	const [slectedTabIdx, setslectedTabIdx] = useState(0)
	return (
		<ul className={styles.tabs}>
			{TabList.map((tab, index) => (
				<Tab
					key={index}
					title={tab.title}
					number={tab.number}
					selected={slectedTabIdx === index}
					onClick={() => setslectedTabIdx(index)}
					className={cx(styles.tab, {
						[styles.selected]: slectedTabIdx === index,
					})}
				/>
			))}
		</ul>
	)
}

function Tab({ title, selected, onClick, number }) {
	return (
		<li>
			<button
				onClick={onClick}
				className={cx(styles.tab, { [styles.selected]: selected })}
			>
				<span>{title}</span>
				{number && <div className={styles.number}>{number}</div>}
			</button>
		</li>
	)
}
