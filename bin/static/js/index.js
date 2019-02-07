// Icon
$('.icon').on('click', (ele) => {
  console.log(ele);
  switch(ele.currentTarget.className.split(' icon')[0]) {
    case('github'):
      window.location.href = 'https://github.com/xwy27/leggiero';
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

// Upload modal
$('.upload-modal').on('click', function() {
  $('#file-list').html('<div class="item">No files...</div>');
  $('.modal').modal('show');
});

// Chosen files
$('#file').on('change', function() {
  let files = $(this)[0].files;
  // console.log(files);
  if (files.length > 0) {
    let html = ``;
    for (var file of files) {
      html += `<div class='item'><i class="file icon"></i>${file.name}</div>`;
    }
    $('#file-list').html(html);
  }
});

// Size percentage
let percentage = $('.wave').attr('data-percentage'); // range [0, 100]
percentage = 30 - parseInt(percentage);
percentage = percentage < -50 ? -50 : percentage;
// console.log(percentage);
document.documentElement.style.setProperty('--t', percentage + '%');  // Update size control ui

// List Sort
$('table').tablesort();