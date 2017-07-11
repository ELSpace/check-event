export default [{
  name: 'email',
  label: 'Email',
  placeholder: 'Email',
  rules: 'required|email|string|between:5,50',
},{
  name: 'password',
  label: 'Password',
  placeholder: 'Password',
  rules: 'required|string|between:8,64',
},{
  name:'fullname',
  label:'Full Name',
  placeholder:'Full Name',
  rules:'required|string|between:5,50',
},{
  name:'address',
  label:'Address',
  placeholder:'Address',
  rules:'required|string|between:10,40',
},{
  name:'city',
  label:'City/Town',
  placeholder:'City/Town',
  rules:'required|string|between:2,40',
},{
  name:'country',
  label:'Country',
  placeholder:'Country',
  rules:'required', 
}];

