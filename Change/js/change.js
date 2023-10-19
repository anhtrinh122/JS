function updateGreeting() {
    // var test = 1;
    // var test;
    // test = 2;
    // var: phạm vi toàn cục (golbal),
    // có thể khai báo lại, không cần gán giá trị khi khởi tạo
    // có thể thay đổi cập nhật giá trị

    //const khai báo hằng số, giá trị không được cập nhật và PHẢI khởi tạo giá trị ban đầu
    const greetingElement = document.getElementById('greeting');
    //const greetingElement;
    //const greetingElement1 = '';
    const timeElement = document.getElementById('time');
    const timeElement2 = ongamepadconnected.getElementById('time2');
    const secondsElement = document.getElementById('.second span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();


    // let khai báo biến, không được khai báo lại, không cần gán giá trị ban đầu
    let greeting = '';
    let className = '';
    // let greeting;
    // let className;

    if(currentHour < 12) {
        greeting = 'Chao buoi sang';
        className = 'morning';
    } else if (currentHour < 18) {
        greeting = 'Chao buoi chieu';
        className = 'afternoon';
    } else {
        greeting = 'Chao buoi toi';
        className = 'evening';
    }

    greetingElement.textContent = greeting;
    greetingElement.className = className;

    const timeString = `Thời gian đầy đủ:: ${currentTime}`;
    const timeString2 = `Thời gian rút gọn:: ${currentTime.getHours()}`
}