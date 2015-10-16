import moment from 'npm:moment';

function formatDate(date, format){
  // wrap global moment object
  return moment(date).format(format);
}

export {
  formatDate
};
