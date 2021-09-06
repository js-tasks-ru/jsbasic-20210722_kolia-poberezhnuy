function highlight(table) {
  let tr = table.querySelectorAll('tr');

  tr.forEach(function (e) {
    let status = e.lastElementChild;

    const gender = status.previousElementSibling;
    if (gender.innerText == 'm') {
      e.classList.add('male');
    } else if (gender.innerText == 'f') {
      e.classList.add('female');
    }

    const age = gender.previousElementSibling;
    if (age.innerText < 18) {
      e.style.textDecoration = 'line-through';
    }

    if (status.dataset.available == 'true') {
      e.classList.add('available');
    } else if (status.dataset.available == 'false') {
      e.classList.add('unavailable');
    } else {
      e.hidden = true;
    }
  });
}
