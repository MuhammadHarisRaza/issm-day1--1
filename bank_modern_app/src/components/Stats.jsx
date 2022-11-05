import React from 'react'
import styles from '../styles'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {
        stats.map((stat)=>(
          <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white mr-3">
              {stat.value}
            </h4>
            <h4 className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient">
              {stat.title}
            </h4>
          </div>
        ))
      }

    </section>
  )
}

export default Stats