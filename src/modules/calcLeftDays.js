import moment from 'moment';

const calcLeftDays = (targetDate) => {
  const date = moment(targetDate);
  const now = moment().startOf('day');
  const thisYearAnniversaryDate = moment(new Date(now.year(), date.month(), date.date()));
  const diff = now < thisYearAnniversaryDate ? thisYearAnniversaryDate.diff(now) : thisYearAnniversaryDate.add(1, 'years').diff(now);
  const duration = moment.duration(diff);
  const days = Math.floor(duration.asDays());
  return days;
}

export default calcLeftDays;