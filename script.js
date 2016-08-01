"use strict";

function createContact(name, email, phone) {
  // TODO: Create li element and return
}

function handleNewContactSubmit(ev) {
  ev.preventDefault();

//TODO: Validate email

  var ck_email= /[A-z0-9._%+-]+@+[A-z0-9.]+uc.edu/g;
  var ck_phone = /[0-9]/g;
  var key1 = true;
  var key2 = true;
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var phone = document.getElementById("inputPhone").value;
  

  if(!ck_email.test(email)) {
    key1=false;
  	alert("Invalid email");
  }
  if(!ck_phone.test(phone)) {
    key2=false;
  	alert("invalid phone number");
  }


  if(key1 & key2) {
  	var iteration = sessionStorage.length;
  	console.log(iteration);
  	sessionStorage.setItem("Name"+iteration, name);
  	sessionStorage.setItem("Email"+iteration, email);
  	sessionStorage.setItem("Phone"+iteration, phone);
  	console.log("Phone"+iteration);

  	var list = document.createElement('ul');
  	var item = document.createElement('li');
        item.appendChild(document.createTextNode(sessionStorage.getItem("Name"+iteration)+"   "));
        item.appendChild(document.createTextNode(sessionStorage.getItem("Email"+iteration)+"   "));
        item.appendChild(document.createTextNode(sessionStorage.getItem("Phone"+iteration)+"   "));
      
        list.appendChild(item);

        document.getElementById('contactList').appendChild(list);
  }
     
  // TODO: Save to offline storage (localStorage, IndexedDB, PouchDB)

  // TODO: Create contact (li element)

  // TODO: Append contact to ul#contactList
  
}


function createContact() {
    
    var list = document.createElement('ul');

    for(var i = 0; i < sessionStorage.length; i+= 3) {

       console.log(i);
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(sessionStorage.getItem("Name"+i)+"   "));
        item.appendChild(document.createTextNode(sessionStorage.getItem("Email"+i)+"   "));
        item.appendChild(document.createTextNode(sessionStorage.getItem("Phone"+i)+"   "));
        console.log("Phone"+i);
        list.appendChild(item);
    }
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('contactList').appendChild(createContact());





document.getElementById('contactForm').addEventListener('submit', handleNewContactSubmit);

// TODO: Load contacts from offline storage (localStorage, IndexedDB, PouchDB)

// TODO: Create contacts for each record

// TODO: Append contacts (li elements) to ul#contactList

// TODO: Add submit event listener to form#contactForm and use handleNewContactSubmit
