import Filters from "./components/Filters"
import { makeStyles, Grid } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Ticket from './components/Ticket';
import PriorityFilter from "./components/PriorityFilter";
import sortBy from 'lodash/sortBy'


const useStyles = makeStyles(() => ({
  app: {
    padding: '4em',
    marginTop: '2em',
    justifyContent: 'space-around',
    display: 'flex'
  },
  container: {
    width: '60%',
  }
}));

export interface TicketProp {
  price: number
  carrier: string
  segments: [
    { //tuda
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    { //obratno
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export type Priority = 'cheap' | 'fast'


const App = () => {
  const [searchId, setSearchId] = useState('')
  const [tickets, setTickets] = useState<TicketProp[]>([])  // тип тикетс 
  const [filters, setFilters] = useState<number[]>([])
  const [active, setActive] = useState<Priority>('cheap')

  const classes = useStyles()

  useEffect(() => {
    axios.get('https://front-test.beta.aviasales.ru/search')
      .then(response => {
         if (response.status === 200) {
           setSearchId(response.data.searchId)
         }
      })
      .catch(error => console.log(error))  
    },[])

  useEffect(() => {
    if(searchId) {
      axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(response => {
        if (response.status === 200) {
          setTickets(response.data.tickets)
        }
        })
      .catch(error => console.log(error))
    }
  }, [searchId])

  const setTab = (active: Priority) => {
    if (active === 'cheap') {
      setTickets(sortBy(tickets, (ticket) => { return ticket.price }))
      setActive('cheap')
    } else {
        setTickets(sortBy(tickets, (ticket) => { return (ticket.segments[0].duration + ticket.segments[1].duration)}))
        setActive('fast')
    }
  }
  

  const handleChange = (label: number) => {
    if (filters.includes(label)) {
      const newFilters = filters.filter(filter => filter !== label)
      setFilters(newFilters)
    } else {
      setFilters([...filters, label])
    }
  }



  return (
    <Grid className={classes.app}>
      <Filters filters={filters} onChange={handleChange} />
      <Grid className={classes.container}>
      <PriorityFilter  setTab={setTab} active={active}/>

        {tickets && 
          filters.length === 0
            ? tickets
            .slice(0,30)
            .map((ticket: TicketProp, index) => {
              return (
                  <Ticket ticket={ticket} key={index}/>
              )
            })
            : tickets
                .filter(ticket => {
                  return (
                    filters.includes(ticket.segments[0].stops.length) && filters.includes(ticket.segments[1].stops.length)
                  )
                })
                .slice(0,5)
                .map((ticket: TicketProp, index) => {
                  return (
                    <Ticket ticket={ticket} key={index}/>
                  )
                })
        }
      </Grid>
    </Grid>
  );
}

export default App;
