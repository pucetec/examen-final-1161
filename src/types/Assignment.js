export const Address = function Address(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  };
  
  export const Driver = function Driver(name, photo) {
    this.name = name;
    this.photo = photo;
  };
  
  export const Assignment = function Assignment(address, driver) {
    this.address = address;
    this.driver = driver;
  };