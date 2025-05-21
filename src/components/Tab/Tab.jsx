import React from 'react'
import styles from './Tab.module.css'

export default function Tab() {
	const tabList = [
		{ name: 'Code', count: 10 },
		{ name: 'is' },
		{ name: 'All', count: 15 },
	]

	return (
		<ul className={styles.tab}>
			{tabList.map((tab, index) => (
				<li key={index} className={styles.tabItem}>
					<button className={styles.tabButton}>
						{tab.name}
						{tab.count ? (
							<span className={styles.circle}>{tab.count}</span>
						) : null}
					</button>
				</li>
			))}
		</ul>
	)
}
