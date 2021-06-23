function checkForm($this)
{
    var str=$this.value;
    while(str.match(/\D/))
    {
        str=str.replace(/\D/,"");
    }
    $this.value=str;
}


document.getElementById("make").addEventListener("click",function (){
    
    let a1 = document.getElementById("normal").value;
    let a2 =[],key=[4];
    let ans = [],fans = [];
    const length = a1.length;
    let i=0,j=1;

    key[0] = document.getElementById("key1").value;
    key[1] = document.getElementById("key2").value;
    key[2] = document.getElementById("key3").value;
    key[3] = document.getElementById("key4").value;
    const mod = 94

    while(i<length){
        a2.push(a1.charCodeAt(i)-33);
        i++;
    }
    if(length%2 !== 0){
        a2.push(7);
    }
    let b;
    i=0;
    while(i+1<=length){
        j=0;
        ans[i]=((key[j]*a2[i]+key[j+1]*a2[i+1])%mod+33)
        fans[i] = String.fromCharCode(ans[i]);

        j=2;
        ans[i+1] = ((key[j]*a2[i]+key[j+1]*a2[i+1])%mod+33)
        fans[i+1] = String.fromCharCode(ans[i+1]);
        i+=2;
    }

    document.getElementById("final").value +=(fans.join(""))+"\n";
});