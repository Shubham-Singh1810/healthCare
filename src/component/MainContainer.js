import React from 'react'
import "../Style/body.css"
import Card from './Card'
import cardData from '../dataBase/cardData'
function MainContainer() {
  return (
    <div className='MainContainer'>
    <div className='SlideImage'>
        <img src="https://previews.123rf.com/images/chagin/chagin1809/chagin180900009/107646733-young-female-doctor-on-modern-clinic-background-horizontal-image-for-website-design-.jpg" alt="" />
    </div>

    {/* popular Test start   */}
    <section>
    <h1>Popular Test Start</h1>
    <div className="cardLister">
      {cardData.filter((v, i)=>{
        return (
          v.type==="popularTests"
        )
      }).map((v, i)=>{
        return(
          <Card value={v} key={i}/>
        )
      })}
    </div>
    </section>
    {/*  popular Test end  */}

    {/* popular Test start   */}
    <section style={{background:"whitesmoke"}}>
    <h1>Popular Health Packages</h1>
    <div className="cardLister">
      {cardData.filter((v, i)=>{
        return (
          v.type==="healthPackage"
        )
      }).map((v, i)=>{
        return(
          <Card value={v} key={i}/>
        )
      })}
    </div>
    <div className="cardLister">
    
    </div>
    </section>
    {/*  popular Test end  */}

    {/* popular Test start   */}
    <section>
    <h1>Top Booked Tests</h1>
    <div className="cardLister">
    {cardData.filter((v, i)=>{
        return (
          v.type==="topBooked"
        )
      }).map((v, i)=>{
        return(
          <Card value={v} key={i}/>
        )
      })}
    </div>
    </section>
    {/*  popular Test end  */}
    </div>
  )
}

export default MainContainer