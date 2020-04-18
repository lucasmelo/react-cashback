import * as moment from 'moment';

const DateValidator = (date) => moment(date, 'DD-MM-YYYY').isSame(moment(), 'month')

export default DateValidator;