

function warnUser( e ){
    // console.log('value ' + e.target.value);
    if ( e.target.value.includes('@')){
        document.getElementById('userwarn').style.visibility = 'visible';
    }else{
        document.getElementById('userwarn').style.visibility = 'hidden';
    }
}

function warnPassword( e ){
    // console.log('value ' + e.target.value);
    if ( e.target.value.length < 6){
        document.getElementById('passwordwarn').style.visibility = 'visible';
    }else{
        document.getElementById('passwordwarn').style.visibility = 'hidden';
    }
}


function initPage(){
    console.log("init");
    document.getElementById( 'username').addEventListener( 'keyup', warnUser, false );
    document.getElementById( 'password').addEventListener( 'keyup', warnPassword , false);
}

