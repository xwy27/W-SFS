// Icon
$('.icon').on('click', (ele) => {
  console.log(ele);
  switch(ele.currentTarget.className.split(' icon')[0]) {
    case('github'):
      window.location.href = 'https://github.com/xwy27/W-SFS';
      break;
    case('user'):
      window.location.href = 'https://github.com/xwy27';
      break;
    default:
      break; 
  }
});

// Download button
$('.download').on('click', function() {
  let filename = this.getAttribute('data-filename');
  window.open('/download/' + filename, '_blank');
});

// Delete button
$('.delete').on('click', function() {
  let filename = this.getAttribute('data-filename');
  axios.post('/delete/' + filename, {})
    .then(function (res) {
      if (res.data.msg.length > 0) {
        alert(msg);
      } else {
        window.location.reload();
      }
    })
    .catch(function (err) {
      console.error(err);
    });
});

// List Sort
$('table').tablesort();