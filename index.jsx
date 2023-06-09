import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Details(){

const [details, setDetails] = useState({})

const { id } = useParams ()

useEffect(() => {
    async function GetDetails() {
        const response = await fetch(`https://stranger-things-api.fly.dev/api/v1/characters/${id}`)
        const data = await response.json()

        setDetails(data)
    }
    getDetails()
}, [])



    return (
        <>

           <img src={details.photo} alt="" />

        </>
    )

}