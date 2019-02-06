$('.button').on('click', function() {
  axios.post('/login', {
    user: $('input[name="email"]').val(),
    password: md5($('input[name="password"]').val())
  })
  .then(function(res) {
    if (res.data.msg.length != 0) {
      alert(res.data.msg);
    } else {
      window.location.href = '/index';
    }
  })
  .catch(function(err) {
    console.error(err);
  })
});