import React from 'react'
import styles from './ListItem.module.css'
import ListItemLayout from '../ListItemLayout/ListItemLayout'

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
	return (
		<ListItemLayout>
			<div>
				<div onClick={onClickTitle} className={styles.title}>
					이슈예시
				</div>
				<div onClick={onClickTitle} className={styles.description}>
					# 디스트립션
				</div>
			</div>
		</ListItemLayout>
	)
}
