function modf(A){
    let mod = 94;
    mod = Number(mod);
    A %= mod;
    if(A<0){
        A += mod;
    }
    return A;
}

document.getElementById("make").addEventListener("click",function (){

    let A;
    key1 = document.getElementById("key1").value;
    key2 = document.getElementById("key2").value;
    key3 = document.getElementById("key3").value;
    key4 = document.getElementById("key4").value;

    const mod = 94;

    A = key1*key4-key2*key3;
    Number(A);
    A = modf(A);

    let a,b,q,L,E,r=1,i=0,j=0;
    let ans = [],fans = [];;
    a = A; b = mod; L = A; E = mod;
    const q2=[];

    while((r=L%E) !== 0){
        L=E;
        E=r;
    }

    if(E !== 1){
        alert(a+"と94が互いに素でないためエラーです")
        return;
    }

    r = 1;
    //一次不定方程式//
    while(r!==0){
        q = a/b;
        q2.push(parseInt(q,10));
        r = a%b;
        a = b;
        b = r;
        i += 1;
    }

    

    let i2 = i-1;

    while(i2 !== -1){
        q2[i2] *=-1;
        i2--;
    }

    i -= 1;
    q2[i] = 1;

    let z,w;
    if(i<2){
        z = r[0];
        w = q2[0];
    }else{
        z = q2[i-1];
        w = q2[i]+q2[i-1]*q2[i-2];
    
        let y;
        
        while (i !== 2){
            y = z;
            z = w;
            w = y;
            w = w+z*q2[i-3];
            i--;
        }
    }


    let akey=[];
    key1_2 = key1;
    akey[0] = modf(z*key4);
    akey[1] = modf(z*key2*-1);
    akey[2] = modf(z*key3*-1);
    akey[3] = modf(z*key1_2);

    //平文を求める//
    let cr = document.getElementById("normal").value;
    const length = cr.length;
    let code = [];
    i=0;
    while(i<length){
        code.push(cr.charCodeAt(i)-33);
        i++;
    }

    if(length%2 !== 0){
        code.push(33);
    }

    i=0;
    while(i+1<=length){
        j=0;
        ans[i]=(akey[j]*code[i]+akey[j+1]*code[i+1])%mod;
        fans[i] = String.fromCharCode(ans[i]+33);
        j=2;
        ans[i+1] = (akey[j]*code[i]+akey[j+1]*code[i+1])%mod;
        fans[i+1] = String.fromCharCode(ans[i+1]+33);
        i+=2;
    }

    if(ans[length-1] === 7){
        fans.splice(i-1,1);
    }

    document.getElementById("final").value += (fans.join(""))+"\n";
});