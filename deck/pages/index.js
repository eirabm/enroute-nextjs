import styles from '../styles/Home.module.scss'
import Table from '../Components/table/Table'

export default function Home() {
  return (
    <div className={styles.home}>
      <head>
        <title>Card Game</title>
      </head>

    <div className="App">
      <Table />
    </div>
    </div>
  )
}
