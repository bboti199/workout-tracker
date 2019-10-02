import moment from 'moment';

export default function(progressData) {
  const chartData = progressData.map(data => ({
    sets: data.sets,
    reps: data.repetitions,
    weight: data.weight,
    workload: data.sets * data.repetitions * data.weight,
    date: moment(data.date).format('DD MMM Y')
  }));

  return chartData.reverse();
}
