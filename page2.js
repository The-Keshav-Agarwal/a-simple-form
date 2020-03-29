function uploadImage(files)
{
    var x = document.createElement('img');
    x.src = URL.createObjectURL(files[0]);
    var z = document.getElementById('select');
    z.innerHTML="";
    x.height =250;
    x.width=250;
    var y = document.getElementById('image');
    y.appendChild(x);

}
var current = 0;
showContainer(current);
function showContainer(n)
{
    var x = document.getElementsByClassName('container');
    x[n].style.display = 'block';
    if(n==x.length-1)
    {
        document.getElementsByClassName('btn')[0].style.display = 'none';
        var z = document.getElementsByClassName('circle');
        for(var i=0;i<z.length;i++)
        {
            z[i].style.display='none';
        }
        document.getElementsByClassName('heading')[0].style.display='none';
    }
    else
    {
    if(n==0)
    {
        y = document.getElementById('prebtn');
        y.style.display ='none';
    }
    else{
        y = document.getElementById('prebtn');
        y.style.display='inline-block';
    }
    if(n==x.length-2)
    {
        y = document.getElementById('nextbtn');
        y.innerHTML = 'SUBMIT'
    }
    else
    {
        y=document.getElementById('nextbtn');
        y.innerHTML ='NEXT';
    }
    checkActive(n);
}
}
function nextPre(n)
{
    if(n==1&&!validForm())
    {
        return false;
    }
    else
    {
            document.getElementsByClassName('container')[current].style.display='none';
            current = current+n;
            showContainer(current);
    }
}
function validForm()
{
   var x = document.getElementsByClassName('container');
   var status = true;
   var y = x[current].getElementsByTagName("input");
   if(current!=1)
   {
   for(var i=0;i<y.length;i++)
   {
       if(y[i].value=="")
       {
           status=false;
           y[i].className += ' invalid';
       }
       }
       var b = document.getElementById('pword');
       var c = document.getElementById('rpword');
       if(current==2 && b.value.length<8)
       {
           status=false;
           alert("your password is less than 8 character please make your password atleast 8 character long.");
       }
       if(current==2 && b.value!=c.value)
       {
           status=false;
          b.className = 'invalid';
          c.className = 'invalid';
          alert("your password are not same please fill this field carefully");
       }
       
}
   if(status)
   {
       document.getElementsByClassName('circle')[current].className +=' valid';
   }
   return status;
}

function checkActive(n)
{
    var x = document.getElementsByClassName('circle');
    for(var i=0;i<x.length;i++)
    {
        x[i].className = x[i].className.replace(' active','');
    }
    x[n].className += ' active';
}
























































































































// var c=0;
// function upload(files)
// {
//     var image = document.getElementById("image");
//     var file = document.createElement("img");
//     file.src = URL.createObjectURL(files[0]);
//     file.height=250;
//     file.width=250;
//     file.style="margin-left:560px";
//     image.appendChild(file);
// }


// const dob = document.getElementById('dob');
// const country = document.getElementById('country');
// const gender = document.getElementById('gender');
// const form = document.getElementById("form");
// var username;
// function information()
// {
//     window.history.go(-1); 
// }
// function information3()
// {
//     window.history.go(-1);
    
// }
