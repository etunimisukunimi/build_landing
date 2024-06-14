function clickScrollHandler(id) {
    document.getElementById(id + '_block').scrollIntoView({ behavior: "smooth" });
}

// 
// 
// 

function contactFormHandler() {
    const email = document.getElementById('email_subscribe_form').email_subscribe_input.value;

    if (email.includes('@')) {
        document.getElementById('email_subscribe_button').disabled = false;
    } else {
        document.getElementById('email_subscribe_button').disabled = true;
    }
}

function contactButtonHandler() {
    const email = document.getElementById('email_subscribe_form').email_subscribe_input.value;
    alert('Subscribe successfull! Email to subscribe: ' + email);
}

function ctaFormHandler() {
    const form = document.getElementById('cta_form');
    const name = form.cta_name.value;
    const email = form.cta_email.value;

    if (name.length && email.length === 0) {
        document.getElementById('cta_form_submit_button').disabled = true;
    } else {
        document.getElementById('cta_form_submit_button').disabled = false;
    }
}

function ctaButtonHandler() {
    const form = document.getElementById('cta_form');
    const name = form.cta_name.value;
    const email = form.cta_email.value;
    const reason = form.cta_reason.value;
    const phone = form.cta_phone.value;
    const message = form.cta_textarea.value;
    console.log('submitFormHandler:', name, email, reason, phone, message)
}


// 
// 
// 

let previousProjectValue = 'all';
let currentProjectButtonValue = 1;
function projectRadioFormHandler() {
    const currentProjectValue = document.getElementById('form_radio').radio.value;
    document.getElementById('project_' + previousProjectValue + currentProjectButtonValue).style.display = 'none';
    document.getElementById('project_' + currentProjectValue + currentProjectButtonValue).style.display = 'block';
    previousProjectValue = currentProjectValue;
    // 2947A9
}

function projectButtonBackHandle() {
    if (currentProjectButtonValue > 1) {
        const radioProjectValue = document.getElementById('form_radio').radio.value;
        document.getElementById('project_' + radioProjectValue + currentProjectButtonValue).style.display = 'none';
        currentProjectButtonValue = currentProjectButtonValue - 1;
        document.getElementById('project_' + radioProjectValue + currentProjectButtonValue).style.display = 'block';
        document.getElementById('project_next_button').disabled = false;
        document.getElementById('circle_' + (currentProjectButtonValue + 1)).style.backgroundColor = '#F6F8F7';
        document.getElementById('circle_' + currentProjectButtonValue).style.backgroundColor = '#2947A9';
    } else {
        document.getElementById('project_back_button').disabled = true;
    }
}

function projectButtonNextHandle() {
    if (currentProjectButtonValue < 5) {
        const radioProjectValue = document.getElementById('form_radio').radio.value;
        document.getElementById('project_' + radioProjectValue + currentProjectButtonValue).style.display = 'none';
        currentProjectButtonValue = currentProjectButtonValue + 1;
        document.getElementById('project_' + radioProjectValue + currentProjectButtonValue).style.display = 'block';
        document.getElementById('project_back_button').disabled = false;
        document.getElementById('circle_' + (currentProjectButtonValue - 1)).style.backgroundColor = '#F6F8F7';
        document.getElementById('circle_' + currentProjectButtonValue).style.backgroundColor = '#2947A9';
    } else {
        document.getElementById('project_next_button').disabled = true;
    }
}

