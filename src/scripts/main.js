'use strict';

const list = document.querySelector('ul');

const parseSalary = (salary) => parseFloat(salary.replace(/[$,]/g, ''));
// eslint-disable-next-line no-shadow, no-unused-vars
const sortList = (list) => {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
};

// eslint-disable-next-line no-undef
sortList(list);
