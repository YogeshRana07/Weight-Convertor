document.getElementById('all').style.visibility='hidden';
document.getElementById('num').addEventListener('input',(e)=>{

document.getElementById('all').style.visibility='visible';
let pound=e.target.value;
 if(pound!="" && pound!=0){
document.getElementById('output1').textContent= Math.round(pound/0.0022046)+ "g";
document.getElementById('output2').textContent= Math.round(pound*16)+ "ou";
document.getElementById('output3').textContent= Math.round(pound/2.2046)+ "kg";
}});
