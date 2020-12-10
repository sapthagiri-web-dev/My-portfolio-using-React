import React , {useState } from 'react'

function Calender() {
    const now = new Date().toLocaleTimeString() 
    const [date , setDate] = useState(now)


        const getTime = () => {setDate(new Date().toLocaleTimeString() ) }
        setInterval( getTime , 1000)


        let greeting = ''
        const hours = new Date().getHours()
        if (hours < 12){
            greeting = 'Good Morning'
        } else if (hours < 18 ){
            greeting = 'Good AfterNoon'
        } else if (hours < 21){
            greeting = 'Good Evening'
        } else {
            greeting = 'Good Night'
        }


    return (
        <div className="mt-4">
          <h4 className="font-weight-light">{date}</h4>
          <span className=" h2 font-weight-light">{greeting}</span>
        
        </div>
    )
}


export default  Calender;