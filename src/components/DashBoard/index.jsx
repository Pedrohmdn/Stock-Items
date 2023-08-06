/* eslint-disable react-hooks/exhaustive-deps */
import InformationCard from '../InformationCard'
import Styles from '../DashBoard/styles.module.css'
import { useEffect } from 'react'

import useDashBoard from '../../hooks/useDashBoard'
import ItemsRunningOutTable from '../ItemsRunningOutTable'
import RecentItemsTable from '../RecentItemsTable'

export default function DashBoard() {
  const dashBoard = useDashBoard()

  useEffect(() => {
    dashBoard.calculateTotalItems()
    dashBoard.calculateItemsRunningOut()
    dashBoard.calculateDifferentItems()
    dashBoard.calculateRecentItems()
  }, [])

  return (
    <>
      <h1 className={Styles.title}>DashBoard</h1>
      <div className={Styles.container}>
        <div className={Styles.col1}>
          <div className={Styles.card1}>
            <InformationCard
              text={'Diversidade de itens'}
              data={dashBoard.differentItems}
            />
          </div>

          <div className={Styles.card2}>
            <InformationCard
              text={'Inventário total'}
              data={dashBoard.totalItems}
            />
          </div>
          <div className={Styles.table1}>
            <RecentItemsTable />
          </div>
        </div>
        <div className={Styles.col2}>
          <div className={Styles.card3}>
            <InformationCard
              text={'Itens acabando'}
              data={dashBoard.itemsRunningOut}
            />
          </div>
          <div className={Styles.card4}>
            <InformationCard
              text={'Itens recentes'}
              data={dashBoard.recentItems}
            />
          </div>
          <div className={Styles.table2}>
            <ItemsRunningOutTable />
          </div>
        </div>
      </div>
    </>
  )
}
