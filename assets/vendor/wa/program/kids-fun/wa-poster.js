$(document).on('click','.send_contact', function(){
    var input_blanter = document.getElementById('names');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6282137760669',
        walink2 = '*Formulir Pendaftaran Kids Fun:* saya mau mendaftar.' + '%0A%0A' 
                + 'Berikut data diri saya: ',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

     /* Call Input Form */
    var input_name2 = $("#names").val(),
    input_domisili2 = $("#domisilis").val(),
    input_select2 = $("#select :selected").text(),
    input_age2 = $("ages").text(),
    input_job2 = $("#jobs").val(),
    input_message2 = $("#messages").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_name2 + '%0A' +
        '*Program* : ' + input_select2 + '%0A' +
        '*Job* : ' + input_job2 + '%0A' +
        '*Anak Umur :* ' + input_age2 + '%0A' +
        '*Domisili* : ' + input_domisili2 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});

