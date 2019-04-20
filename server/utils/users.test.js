const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id : '1',
      name : 'Mike',
      room : 'Hogwards'
    },{
      id : '2',
      name : 'Jen',
      room : 'Knowhere'
    },{
      id : '3',
      name : 'Thanos',
      room : 'Hogwards'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id : '123',
      name : 'Andrew',
      room : 'The Office Fans'
    }

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Hogwards', ()=> {
    var userList = users.getUserList('Hogwards');
    expect(userList).toEqual(['Mike','Thanos']);
  });

  it('should return names for Knowhere', ()=> {
    var userList = users.getUserList('Knowhere');
    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);
    console.log(user);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '23';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', ()=> {

    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });
});
