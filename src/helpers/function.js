function secToTime(time, full = false) {
  // Перевод СЕКУНД во время
  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  const secs = time % 60;
  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';
  if (full) {
    ret += hrs < 10 ? '0' + hrs + 'ч ' : hrs + 'ч ';
    ret += mins < 10 ? '0' + mins + 'м ' : mins + 'м';
    ret += secs < 10 ? '0' + secs + 'c ' : secs + 'c ';
  } else {
    if (hrs > 0) {
      ret += hrs < 10 ? '0' + hrs + 'ч ' : hrs + 'ч ';
      ret += mins < 10 ? '0' + mins + 'м ' : mins + 'м';
    } else {
      ret += mins < 10 ? '0' + mins + 'м ' : mins + 'м ';
      ret += secs < 10 ? '0' + secs + 'c ' : secs + 'c';
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
