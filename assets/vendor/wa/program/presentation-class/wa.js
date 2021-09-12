$(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('names');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6282137760669',
        walink2 = '*Kelas Presentasi:* saya tertarik untuk tahu lebih lanjut.' + '%0A%0A'
                + 'Berikut Data Diri Saya: ',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

     /* Call Input Form */
    var input_select1 = $("#select :selected").text(), 
        // input_date1 = $("#date :selected").text(), 
        input_name1 = $("#name").val(),
        input_email1 = $("#email").val(),
        input_job1 = $("#job").val(),
        input_ig1 = $("#ig").val(),
        input_umur1 = $("#date").val(),
        input_message1 = $("#message").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_name1 + '%0A' +
        '*Email Address* : ' + input_email1 + '%0A' +
        '*Keperluan* : ' + input_select1 + '%0A' +
        '*Job* : ' + input_job1 + '%0A' +
        '*Tanggal Lahir* : ' + input_umur1 + '%0A' +
        '*IG* : ' + input_ig1 + '%0A' +
        '*Isi Message* : ' + input_message1 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});


// yang contact

$(document).on('click','.send_contact', function(){
    var input_blanter = document.getElementById('names');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6282137760669',
        walink2 = '*Kelas Presentasi:* saya tertarik untuk mendaftar.' + '%0A%0A'
                + 'Sebelumnya perkenalkan saya: ',
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
        input_job2 = $("#jobs").val(),
        input_message2 = $("#messages").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_name2 + '%0A' +
        '*Domisili* : ' + input_domisili2 + '%0A' +
        '*Job* : ' + input_job2 + '%0A' +
        '*Isi Message* : ' + input_message2 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});