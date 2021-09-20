import { TicketProp } from "../App"

const getTime = (ticket: TicketProp, index: number): string[] => {
    const timeDepartureArray = [
        new Date(ticket.segments[index].date).getHours(),
        new Date(ticket.segments[index].date).getMinutes(),
    ]
    const timeDeparture = timeDepartureArray.join(':')

    const departureMinutes = timeDepartureArray[0] * 60 + timeDepartureArray[1]
    const durationMinutes = ticket.segments[index].duration
    const timeArrivalMinutes = departureMinutes + durationMinutes

    const rawArriveHours = Math.floor(timeArrivalMinutes / 60)
    const arriveHours = rawArriveHours > 23 ? rawArriveHours - 24 : rawArriveHours
    const timeArrive = [arriveHours, timeArrivalMinutes % 60].join(':')

    return [timeDeparture, timeArrive]
}

export default getTime