module.exports = function dateSample(sampleActivity) {
  const halfLifePeriod = 5730;
  const modernActivity = 15;
  if (isNaN(parseFloat(sampleActivity))) {
      return false;
  }
  return Math.ceil(Math.log(modernActivity / parseFloat(sampleActivity))/(0.693 / halfLifePeriod));
}