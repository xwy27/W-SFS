
$('.icon').on('click', (ele) => {
  console.log(ele);
  switch(ele.currentTarget.className.split(' icon')[0]) {
    case('github'):
      window.location.href = 'https://github.com/xwy27';
      break;
    case('user'):
      window.location.href = 'https://github.com/xwy27';
      break;
    default:
      break; 
  }
});

$('.download').on('click', function() {
  let filename = this.getAttribute('data-filename');
  window.open('/download/' + filename, '_blank');
});

$('table').tablesort();