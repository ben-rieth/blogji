import { format } from "date-fns";

export const formatMMMMdoYYYY = (date: string | Date) => {
    
    let prepare = date;

    if (typeof prepare === 'string' ) {
        prepare = new Date(prepare);
    }

    return format(prepare, "MMMM do, yyyy")
}