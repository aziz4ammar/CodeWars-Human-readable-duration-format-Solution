function formatDuration(seconds) {
    if (seconds === 0) {
      return 'now';
    }
  
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const YEAR = DAY * 365;
  
    const years = Math.floor(seconds / YEAR);
    const days = Math.floor((seconds % YEAR) / DAY);
    const hours = Math.floor((seconds % DAY) / HOUR);
    const minutes = Math.floor((seconds % HOUR) / MINUTE);
    const remainingSeconds = seconds % MINUTE;
  
    const timeStrings = [];
  
    if (years > 0) {
      timeStrings.push(years === 1 ? '1 year' : `${years} years`);
    }
  
    if (days > 0) {
      timeStrings.push(days === 1 ? '1 day' : `${days} days`);
    }
  
    if (hours > 0) {
      timeStrings.push(hours === 1 ? '1 hour' : `${hours} hours`);
    }
  
    if (minutes > 0) {
      timeStrings.push(minutes === 1 ? '1 minute' : `${minutes} minutes`);
    }
  
    if (remainingSeconds > 0) {
      timeStrings.push(remainingSeconds === 1 ? '1 second' : `${remainingSeconds} seconds`);
    }
  
    if (timeStrings.length === 1) {
      return timeStrings[0];
    } else if (timeStrings.length === 2) {
      return timeStrings.join(' and ');
    } else {
      const lastTwo = timeStrings.slice(-2).join(' and ');
      const rest = timeStrings.slice(0, -2);
      return rest.join(', ') + ', ' + lastTwo;
    }
  }
  //by aziz ammar