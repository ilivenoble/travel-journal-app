import React from "react"
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"
import data from "./data"
import  "./style.css"
console.log(data)

export default function App() {     
    const journals = data.map(item => {
        return (
            <Journal 
            key = {item.id}
            {...item}
            />
        )
    })
    
    return (
        <div className="container">
            <Navbar />
            {journals}
        </div>
    )
}