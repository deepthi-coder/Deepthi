function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid))
{
if(passid_validation(passid))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(ValidateEmail(uemail))
{
} 
}
}
}
}
return false;
}
function userid_validation(uid)
{
var uid_len = uid.value.length;
if (uid_len == 0)
{
alert("User Id should not be empty");
uid.focus();
return false;
}
return true;
}
function passid_validation(passid)
{
var pass_len = passid.value.length;
if (pass_len == 0)
{
alert("password should not be empty");
uid.focus();
return false;
}
return true;
}
function allLetter(uname)
{
var all_len = uname.value.length;
if (all_len == 0)
{
alert("name should not be empty");
uid.focus();
return false;
}
return true;
}

function alphanumeric(add)
{
var add_len = add.value.length;
if (add_len == 0)
{
alert("address should not be empty");
uid.focus();
return false;
}
return true;
}

function ValidateEmail(uemail)
{
var uemail = add.value.length;
if (uemail == 0)
{
alert("email should not be empty");
uid.focus();
return false;
}
return true;
}
