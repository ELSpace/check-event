export default function(data) {
  return [{
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    rules: 'required|email|string|between:5,50',
    initial: data.email
  },{
    name:'fullname',
    label:'Full Name',
    placeholder:'Full Name',
    rules:'required|string|between:5,50',
    initial: data.fullname
  },{
    name:'address',
    label:'Address',
    placeholder:'Address',
    rules:'required|string|between:10,40',
    initial: data.email
  },{
    name:'city',
    label:'City/Town',
    placeholder:'City/Town',
    rules:'required|string|between:2,40',
    initial: data.city
  },{
    name:'country',
    label:'Country',
    placeholder:'Country',
    rules:'required', 
    initial: data.country
  },{
    name:'phone',
    label:'Phone',
    placeholder:'Phone Number',
    rules:'required|numeric', 
    initial: data.phone
  },{
    'type': 'radio',
    'name': 'type',
    'label': 'Type',
    'rules': 'required',
    'value': data.type
  },{
    'type': 'checkbox',
    'name': 'terms',
    'label': 'Terms',
    'rules': 'boolean|accepted',
    'initial': false
  },{  
    'name': 'entity_name',
    'label': 'Compnay/Organisation Name',
    'rules': 'required|string|between:2,50',
    'placeholder':'Compnay/Organisation Name',
    'initial': data.entity_name
  }];
}