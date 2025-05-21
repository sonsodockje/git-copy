import React from 'react'
import styles from './Button.module.css'

export default function Button({ name, style, children }) {
	return (
		<button className={styles.button} style={style}>
			{name}
			{children}
		</button>
	)
}
