let btnNext = document.querySelector('#next');

btnNext.onclick = (event) => {
    event.preventDefault();
    let surName = document.querySelector('#surname');
    let name = document.querySelector('#name');
    let patronymic = document.querySelector('#patronymic');
    let birth = document.querySelector('#birth');
    let address = document.querySelector('#address');
    let serialNumber = document.querySelector('#serial-number');
    let inn = document.querySelector('#inn');
    let extradition = document.querySelector('#extradition');
    let contactNumber = document.querySelector('#contact-number');
    let mail = document.querySelector('#mail');
    let bankName = document.querySelector('#bank-name');
    let factAddress = document.querySelector('#fact-address');

    let object = {
        surname: surName.value,
        name: name.value,
        patronymic: patronymic.value,
        birth: birth.value,
        address: address.value,
        serial_number: serialNumber.value,
        inn: inn.value,
        extradition: extradition.value,
        contact_number: contactNumber.value,
        mail: mail.value,
        bank_name: bankName.value,
        fact_address: factAddress.value
    }
    console.log(object);
}



