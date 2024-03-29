 
import { json, useRouteLoaderData, redirect } from "react-router-dom"
import EventItem from '../components/EventItem'



export default function EventDEtailPage() {
    const data = useRouteLoaderData('event-detail')
    
    return<>
   <EventItem event={data.event}/>
   
    </>
}

export async function loader ({request, params}) {
    const id = params.eventid

  const response = await fetch('http://localhost:8080/events/' + id)
  if(!response.ok){
    throw json({message: 'Could not fetch response'}, {status: 500})
  }else{
    return response
  }
   
}

export async function action ({request,params}) {
  const id = params.eventid
    const response = await fetch('http://localhost:8080/events/' + id, {
      method: request.method
    })
    if(!response.ok){
      throw json({message: 'Could not delete event'}, {status: 500})
    }


    return redirect('/events')

}
