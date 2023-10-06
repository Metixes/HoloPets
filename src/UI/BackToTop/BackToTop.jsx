import { FloatButton } from 'antd'; 
import styles from './styles.module.scss'

export default function BackToTop() {
  return (
    <FloatButton.BackTop className={styles.backToTopBtn} />
  )
}