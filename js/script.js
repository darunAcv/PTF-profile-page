function are_you_sure(){
    confirm("Are you sure you want to log out?")
};

function aceptar(numero){
    let nombre_actual=document.querySelector(".nombre"+numero).innerText;
    console.log(`estás aceptando a ${nombre_actual}`);
    console.log(`el número es ${numero}`);
    let req=document.querySelector(".request");
    console.log(`el objeto request es ${req}`);
    let connections=document.querySelector(".conn");
    console.log(`las conexiones son ${connections}`);
    let request_html=document.querySelector(".request"+numero);
    console.log(`el objeto request seleccionado es ${request_html}`);
    let conn_actual=connections.innerText;
    console.log(`el número de conexiones actuales es ${conn_actual}`);
    let cant_conn=document.querySelector(".n_req");
    let n_conn=cant_conn.innerText;
    console.log(`la cantidad de conexiones actuales es ${n_conn}`)
    alert(`You're accepting ${nombre_actual}.`)
    request_html.remove();
    conn_actual++;
    n_conn--;
    
    cant_conn.innerText=n_conn;
    connections.innerText=conn_actual;
    console.log(`el número de conexiones actuales es ${conn_actual}`);
}   

function rechazar(numero){
    let nombre_actual=document.querySelector(".nombre"+numero).innerText;
    console.log(`estás aceptando a ${nombre_actual}`);
    console.log(`el número es ${numero}`);
    let req=document.querySelector(".request");
    console.log(`el objeto request es ${req}`);
    let connections=document.querySelector(".conn");
    console.log(`las conexiones son ${connections}`);
    let request_html=document.querySelector(".request"+numero);
    console.log(`el objeto request seleccionado es ${request_html}`);
    let conn_actual=connections.innerText;
    console.log(`el número de conexiones actuales es ${conn_actual}`);
    let cant_conn=document.querySelector(".n_req");
    let n_conn=cant_conn.innerText;
    console.log(`la cantidad de conexiones actuales es ${n_conn}`)
    alert(`You're deleting ${nombre_actual}'s request.`)
    request_html.remove();

    n_conn--;
    cant_conn.innerText=n_conn;
    connections.innerText=conn_actual;
    console.log(`el número de conexiones actuales es ${conn_actual}`);
}  