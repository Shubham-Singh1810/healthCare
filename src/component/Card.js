import React from 'react'
import {useState} from "react"
function Card(props) {
  // states for style and read more
  const [style, setStyle] = useState({})
  const[readMore , setReadMore] = useState(false)

// show details function
  const showDetails=()=>{
    const styleobj ={
      gridColumnStart : 1,
      gridColumnEnd : 3,
      gridRowEnd : 3,
      gridRowStart : 1,
    }
    if(readMore===false){
      setReadMore(true)
      setStyle(styleobj)
    }
    else{
      setReadMore(false)
      setStyle({})
    }
  }

  return (
    <div className='Card' onClick={showDetails} style={style}>
        <img src="data:image/png;base64,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" alt="" /><br />
        <b>{props.value.title}</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odit!</p>
         <hr />
         <div style={{display:"flex", justifyContent:"space-between"}}>
            <p>&#8377;<s>{props.value.priceBefore} </s><b>&#8377; {props.value.price}</b><br /> <b style={{color:"green"}}>{100-(props.value.price /props.value.priceBefore)*100}% off</b></p>
            <p><button>Add to card</button></p>
         </div>


         {/* conditional rendaring for read more */}
         {
          readMore && 
          <div style={{background:"whitesmoke", padding:"2rem", borderRadius:"1rem"}}>
          <h2><b>Sample Type : <i>Blood</i> </b></h2>
          <p><b>Prepration : </b>fasting from early morning</p>
          <p><b>Categery :</b>Lab Test</p>
            <p><b>About :</b>Possimus maiores corporis necessitatibus suscipit! Accusamus non eius magni veniam repellendus soluta rerum iure blanditiis magnam, expedita, esse asperiores, quia repellat laboriosam sequi fuga minus optio assumenda! Beatae praesentium iusto natus id. Accusamus nemo quis nulla corporis quia suscipit eius architecto veritatis ad modi provident accusantium maxime totam, neque recusandae voluptatibus quos, amet, sequi mollitia? Excepturi blanditiis libero alias eos ut dolorem ad ab a dignissimos. Sapiente blanditiis magni quo, quas ullam quis, atque dolore inventore iure ducimus harum quos tempore earum tempora. Odio fugiat iste, autem nostrum sed totam officia in tempore, facere accusamus ipsa praesentium soluta adipisci? Error, distinctio vel. Aut, debitis autem earum facere ratione dignissimos! Eveniet tempora labore voluptas iste omnis tenetur enim sequi officiis aperiam facilis autem modi, illo ipsum magnam. Mollitia in quis explicabo repellat quasi at corporis incidunt dignissimos fugiat. Alias, deserunt eos reiciendis culpa similique, quidem pariatur dicta tenetur enim aliquam explicabo molestiae fugiat iure!</p>
          </div>
         }
         
    </div>
  )
}

export default Card