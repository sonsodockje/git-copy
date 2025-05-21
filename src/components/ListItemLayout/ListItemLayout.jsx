import React from 'react' // 'children' import 오류 수정
import cx from 'clsx'
import styles from './ListItemLayout.module.css'

export default function ListItemLayout({ children, className }) {
	return (
		<div className={cx(styles.oneListItemWapper, className)}>
			<input
				type="checkbox"
				className={styles.chekbox}
				// value={checked}
				// onChange={onChangeCheckBox}
			/>
			{children}
		</div>
	)
}
