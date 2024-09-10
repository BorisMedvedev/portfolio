export const sendEmail = () => {
  const fullName = document.getElementById('name');
  const email = document.getElementById('email');
  const tel = document.getElementById('tel');
  const telegram = document.getElementById('telegram');
  const message = document.getElementById('message');

  const bodyMsg = `
  Имя: ${fullName.value}<br>
  email: ${email.value}<br>
  tel: ${tel.value}<br>
  telegram: ${telegram.value}<br>
  message: ${message.value}<br>
  `;
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'medvedevboris2021@gmail.com',
    Password: '0AF3F0B1FD20966C39786FD6A00D7486AB2C',
    To: 'medvedevboris2021@gmail.com',
    From: 'medvedevboris2021@gmail.com',
    Subject: 'This is the subject',
    Body: bodyMsg,
  }).then(
      message => {
        if (message === 'OK') {
          Swal.fire({
            title: 'Отлично!',
            text: 'Сообщение отправлено!',
            icon: 'success',
          });
        }
      },
  );
};

