import moment from 'moment';

export const formatDate = (date) => {
    return moment(date).format('MMM, DD, YYYY');
};