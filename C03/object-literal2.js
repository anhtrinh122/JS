var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
    checkAvaibility : function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvaibility();