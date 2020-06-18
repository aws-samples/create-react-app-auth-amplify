export const getSortedEvents = (events) => {
    let sortedEvents = {};
    if (events) {
        events.forEach(eevent => {
                if (!sortedEvents.hasOwnProperty(eevent.day)) {
                    sortedEvents[eevent.day] = [];
                }
                sortedEvents[eevent.day].push(eevent);
            }
        )
    }

    return sortedEvents;
}