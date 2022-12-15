import Moment from 'moment';

export const formatMMMMdoYYYY = (date: string) => {

    const moment = Moment(date);

    return moment.format("MMMM Do, YYYY");
}