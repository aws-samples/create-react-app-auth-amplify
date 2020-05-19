import moment from "moment";

export const getDatesInfo = (currentDate) => {
    const theDate = moment(currentDate);
    const firstDate = theDate.clone().startOf('week').format('YYYY-MM-DD');
    const endDate = theDate.clone().endOf('week').format('YYYY-MM-DD');
    const previousDate = theDate.clone().subtract(7, 'days').format('YYYY-MM-DD');
    const nextDate = theDate.clone().add(7, 'days').format('YYYY-MM-DD');
    const theWeek = theDate.week();

    return {
        currentDate: new Date(currentDate),
        startDate: firstDate,
        endDate: endDate,
        week: theWeek,
        previousDate: previousDate,
        nextDate: nextDate
    }
}

export const detectCurrentDate = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentDate = urlParams.get('date');
    if (currentDate && currentDate.match(/^d{4}-d{2}-d{2}$/)) {
        return currentDate;
    }
    const a = moment().format('YYYY-MM-DD');
    console.log(a);
    return a;
}