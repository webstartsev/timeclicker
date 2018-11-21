function secToTime(time, full = false) {
  // Перевод СЕКУНД во время
  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  const secs = time % 60;
  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';
  if (full) {
    ret += hrs < 10 ? '0' + hrs + ':' : hrs + ':';
    ret += mins < 10 ? '0' + mins + ':' : mins + ':';
    ret += secs < 10 ? '0' + secs : secs;
  } else {
    if (hrs > 0) {
      ret += hrs < 10 ? '0' + hrs + ':' : hrs + ':';
      ret += mins < 10 ? '0' + mins : mins;
    } else {
      ret += mins < 10 ? '0' + mins + ':' : mins + ':';
      ret += secs < 10 ? '0' + secs : secs;
    }
  }

  return ret;
}

function timeDiff(time, deadline) {
  const deadlineTime = deadline * 60 * 60;
  const diff = deadlineTime - time;

  const hrs = ~~(diff / 3600);

  return hrs;
}

export { secToTime, timeDiff };
