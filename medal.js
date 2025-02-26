document.getElementById("medalTable").style.visibility = "hidden";
// document.getElementById("medalTable2").style.visibility = "visible";

const gold = () =>{
    document.getElementById("medalTable").style.visibility = "visible";
    let yes = "yes"
    let medalTable = document.getElementById('medalTable');
    
    let tr = medalTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textvlaue = td.textContent || td.innerHTML;

            if(textvlaue.indexOf(yes) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

const silver = () =>{
    document.getElementById("medalTable").style.visibility = "visible";
    
    let yes = "yes"
    let medalTable = document.getElementById('medalTable');
    
    let tr = medalTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];

        if(td){
            let textvlaue = td.textContent || td.innerHTML;

            if(textvlaue.indexOf(yes) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

const bronze = () =>{
    document.getElementById("medalTable").style.visibility = "visible";
    
    let yes = "yes"
    let medalTable = document.getElementById('medalTable');
    
    let tr = medalTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[3];

        if(td){
            let textvlaue = td.textContent || td.innerHTML;

            if(textvlaue.indexOf(yes) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}
