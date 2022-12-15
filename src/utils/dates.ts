//import { format } from "date-fns";
import Moment from 'moment';

export const formatMMMMdoYYYY = (date: string) => {
    
    // let prepare = date;

    // if (typeof prepare === 'string' ) {
    //     prepare = Moment(date);
    // }

    const moment = Moment(date);

    // return format(prepare, "MMMM Do, YYYY")
    return moment.format("MMMM Do, YYYY");
}