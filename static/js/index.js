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

// Upload button
// $('.upload').on('click', function() {
//   let files = $('#file-upload').files;
//   if (files.length > 0) {

//   } else {
//     $('.modal').modal('hide');
//   }
// });

// List Sort
$('table').tablesort();