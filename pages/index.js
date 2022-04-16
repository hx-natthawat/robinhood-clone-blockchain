import Head from "next/head"
import Image from "next/image"

const styles = {
  wrapper: "w-screen h-screen flex flex-col",
  mainContainer: "",
  portfolioAmountContainer: "",
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* header */}
      <header>
        <div className={styles.main}></div>
      </header>
    </div>
  )
}
