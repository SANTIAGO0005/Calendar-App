import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = ( calendarEvent) => {
       dispatch( onSetActiveEvent( calendarEvent))
    }

    const startSavingEvent = async( calendarEvent) => {
      // TODO: llegar al backend

      // Todo bien
      if( calendarEvent._id){
        // UPDATE
        dispatch( onUpdateEvent({ ...calendarEvent}))
      } else {
        // CREATE
        dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime()}))
      }
    }

    const starDeleteEvent = () => {
      // Todo: Llegar al backend
      dispatch( onDeleteEvent())
    }


  return {
    //* Prop
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Func
    setActiveEvent,
    startSavingEvent,
    starDeleteEvent
  }
}
