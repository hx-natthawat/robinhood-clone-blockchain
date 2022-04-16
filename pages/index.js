import Head from 'next/head'
import Image from 'next/image'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  mainContainer: '',
  portfolioAmountContainer: '',
  portfolioAmount: '',
  portfolioPercent: '',
  pastHour: '',
  chartContainer: '',
  buyingPowerContainer: '',
  buyingPowerTitle: '',
  buyingPowerAmount: '',
  notice: '',
  noticeContainer: '',
  noticeTitle: '',
  noticeMessage: '',
  rightMain: '',
  rightMainItem: '',
  ItemTitle: '',
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* header */}
      <header>
        <div className={styles.mainContainer}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.portfolioAmount}>23 ETH</div>
            <div className={styles.portfolioPercent}>
              +0.0008(+0.57%)
              <span className={styles.pastHour}></span>
            </div>
          </div>
          <div>
            <div className={styles.chartContainer}></div>
            {/* PortfolioChart */}
          </div>
        </div>
        <div className={styles.buyingPowerContainer}>
          <div className={styles.buyingPowerTitle}>Buying Power</div>
          <div className={styles.buyingPowerAmount}>12 ETH</div>
        </div>
        <div className={styles.notice}>
          <div className={styles.noticeContainer}>
            <div className={styles.noticeTitle}>Send Funds</div>
            <div className={styles.noticeMessage}>Transfer your fund here.</div>
            {/* <BuyToken /> */}
          </div>
        </div>
        {/* <Notice /> */}
      </header>
      <div className={styles.rightMain}>
        <div className={styles.rightMainItem}>
          <div className={styles.ItemTitle}>Crypto Currencies</div>
        </div>
      </div>
    </div>
  )
}
