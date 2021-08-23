let allSum = 0;
let kirimChiqim = [];

function addText() {
    let name = document.getElementById("name").value;
    let sum = document.getElementById("sum").value;

    if (name.length>0 && sum.length) {
        document.getElementById("name").value = "";
        document.getElementById("sum").value = "";

        document.getElementById('hiName').innerHTML = "Salom, " + name;
        document.getElementById('allSum').innerHTML = sum + " so`m";

        allSum = sum;
    }
}

function kirim(select) {
    let kirimSum = document.getElementById("kirimSum").value;
    let kirimCause = document.getElementById("kirimCause").value;


   if (kirimSum.length>0 && kirimCause.length) {
       document.getElementById("kirimSum").value = "";
       document.getElementById("kirimCause").value = "";

       let kirimObject = {
           kirimSum: kirimSum,
           cause: kirimCause,
           k : select
       };

        kirimChiqim.push(kirimObject);

       let summa;
       let tbody = "";

       if (select === 'Kirim') {
           summa = parseFloat(kirimSum) + parseFloat(allSum);

           allSum = summa;

           document.getElementById("allSum").innerHTML = summa + " so`m";
       }

       if (select === 'Chiqim') {
           if (parseFloat(allSum) >= parseFloat(kirimSum)) {
               summa = parseFloat(allSum) - parseFloat(kirimSum);

               allSum = summa;

               document.getElementById("allSum").innerHTML = summa + " so`m";

           } else if (parseFloat(allSum) < parseFloat(kirimSum)) {
               let alert = "<div class='alert alert-warning alert-dismissible fade show'>" +
                   "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
                   "<strong>Chiqim budjetdan katta bo`lib ketti bizda buncha pul yo`q 🤦‍♂️</strong>" +
                   "</div>";

               document.getElementById('alert1').innerHTML = alert;

               kirimChiqim.splice(kirimChiqim.length-1,1);

           }
       }

       for (let i=0; i<kirimChiqim.length; i ++) {

           tbody += "<tr id='table-color"+i+"'>" +
               "<td>"+(i+1)+"</td>" +
               "<td>"+ kirimChiqim[i].kirimSum +"</td>" +
               "<td>"+ kirimChiqim[i].cause +"</td>" +
               "<td>"+ kirimChiqim[i].k +"</td>" +
               "</tr>";
       }

       document.getElementById("tbody").innerHTML = tbody;

       for (let i=0; i<kirimChiqim.length; i ++) {

           if (kirimChiqim[i].k === 'Kirim') {
               document.getElementById('table-color' + i).classList.add('table-success');
           } else if(kirimChiqim[i].k === 'Chiqim') {
               document.getElementById('table-color' + i).classList.add('table-danger');
           }
       }
   }
}

function borYuq(x) {
    if (x === 'Kirim'){
        document.getElementById("chiqim").style.display = 'none';
        document.getElementById("kirim").style.display = 'block';
    } else if (x === 'Chiqim') {
        document.getElementById("kirim").style.display = 'none';
        document.getElementById("chiqim").style.display = 'block';
    }
}
