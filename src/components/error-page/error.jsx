import { Link } from 'react-router-dom'

import styles from './style.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <p>404 Not Found</p>
      <Link to='/'>Return to Main</Link>
    </div>
  )
}
