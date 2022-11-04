import React from 'react'
import Detail from './Detail'
import amazon from './amazon.jpg'
import hotstar from './hotstar.jpg'
import Shemaro from './shemaro.jpg'
import sony from './sony.jpg'
import timesprime from './timesprime.jpg'
import voot from './voot.jpg'


export default function Home() {
    // const [data,setData] = useState()
    const data = [
        
        {
            heading: "Amazon prime",
            rate: "1499",
            colour: "1 Year",
            storage: " ",
            img: amazon,
            message:"Need Amazon Prime"


        },
        {
            heading: "TimesPrime",
            rate: "999",
            colour: "1 Year",
            storage: " ",
            img: timesprime,
            message:"Need TimesPrime"
            

        },
        {
            heading: "Hotstar premium",
            rate: "1499",
            colour: "4 device",
            storage: "1 year ",
            img: hotstar,
            message:"Need Hotstar premium"

        },
        {
            heading: "Sony liv Premium",
            rate: "699 Rs",
            colour: "6 Month",
            storage: " ",
            img: sony,
            message:"Need Sony liv Premium"

        },
        {
            heading: "ShemarooMe Premium",
            rate: "499 Rs",
            colour: "6 month",
            storage: " ",
            img: Shemaro,
            message:"Need ShemarooMe Premium"

        },
        {
            heading: "Voot Select",
            rate: "999 Rs",
            colour: "1 Year",
            storage: " ",
            img: voot,
            message:"Need Voot Select"

        },
        {
            heading: "Amazon prime",
            rate: "1499",
            colour: "1 Year",
            storage: " ",
            img: amazon,
            message:"Need Amazon Prime"


        },
        {
            heading: "TimesPrime",
            rate: "999",
            colour: "1 Year",
            storage: " ",
            img: timesprime,
            message:"Need TimesPrime"
            

        },
        {
            heading: "Hotstar premium",
            rate: "1499",
            colour: "4 device",
            storage: "1 year ",
            img: hotstar,
            message:"Need Hotstar premium"

        },
        {
            heading: "Sony liv Premium",
            rate: "699 Rs",
            colour: "6 Month",
            storage: " ",
            img: sony,
            message:"Need Sony liv Premium"

        },
        {
            heading: "ShemarooMe Premium",
            rate: "499 Rs",
            colour: "6 month",
            storage: " ",
            img: Shemaro,
            message:"Need ShemarooMe Premium"

        },
        {
            heading: "Voot Select",
            rate: "999 Rs",
            colour: "1 Year",
            storage: " ",
            img: voot,
            message:"Need Voot Select"

        }

    ]




    return (

        <div className='container'>
            {data.map((idx) => (
                <Detail data={idx}></Detail>
            ))
            }
        </div>
    )
}
