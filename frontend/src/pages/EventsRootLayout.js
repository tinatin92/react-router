import EventNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

export default function EventsRootLayout () {

    return <>
    <EventNavigation />
    <Outlet />
    
    </>
}