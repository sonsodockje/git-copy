import React from 'react'
import styles from './Pagination.module.css'
import cx from 'clsx'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	return (
		<div className={styles.pagination}>
			<button
				className={cx(styles.button, { [styles.disable]: currentPage === 1 })}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				{'<'}
			</button>
			{new Array(totalPages).fill(null).map((_, index) => (
				<PageBtn
					key={index}
					number={index + 1}
					onClick={onPageChange}
					selected={currentPage === index + 1}
				/>
			))}

			<button
				className={cx(styles.button, {
					[styles.disable]: currentPage === totalPages,
				})}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				{'>'}
			</button>
		</div>
	)
}

function PageBtn({ number, onClick, selected }) {
	return (
		<div className={styles.pageBtn}>
			<button
				className={cx(styles.button, { [styles.selected]: selected })}
				onClick={() => onClick(number)}
			>
				{number}
			</button>
		</div>
	)
}
