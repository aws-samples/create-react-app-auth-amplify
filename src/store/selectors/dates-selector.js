import moment from "moment";

export const getDatesInfo = (currentDate) => {
    const theDate = moment(currentDate);
    const firstDate = theDate.clone().startOf('week');
    const firstDateStr = firstDate.format('YYYY-MM-DD');
    const endDate = theDate.clone().endOf('week');
    const endDateStr = endDate.format('YYYY-MM-DD');
    let range = [];
    let curDate = firstDate.clone();
    while(curDate.isBefore(endDate) || curDate.isSame(endDate)) {
        range.push({
           key: curDate.format('YYYY-MM-DD'),
           caption: curDate.format('dddd, D MMM')
        });
        curDate.add(1, 'day');
    }
    const previousDate = theDate.clone().subtract(7, 'days').format('YYYY-MM-DD');
    const nextDate = theDate.clone().add(7, 'days').format('YYYY-MM-DD');
    const theWeek = theDate.week();

    return {
        currentDate: new Date(currentDate),
        startDate: firstDateStr,
        endDate: endDateStr,
        week: theWeek,
        previousDate: previousDate,
        nextDate: nextDate,
        datesRange: range
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