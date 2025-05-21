import React from 'react'
import styles from './ListItem.module.css'
import ListItemLayout from '../ListItemLayout/ListItemLayout.jsx'
import Badge from '../Badge/Badge.jsx'

export default function ListItem({
	title,
	description,
	checked,
	onChangeCheckBox,
	onClickTitle,
	badges,
}) {
	return (
		<ListItemLayout>
			<div>
				<div onClick={onClickTitle} className={styles.title}>
					{title}
					{badges &&
						badges.map((value, index) => <Badge key={index} {...value} />)}

					<div onClick={onClickTitle} className={styles.description}>
						# {description}
					</div>
				</div>
			</div>
		</ListItemLayout>
	)
}
