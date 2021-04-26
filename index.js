
let x = "X";
let o = "O";
let count = 1;
let M = [];
let n = 3;

let ad = 0;
let adi = 0;

onload = function () {
  Start();
};

function Start() {
  count = 1;
  Arr();
  Table();
 
}

function Arr() {
  for (let i = 0; i < n; i++) {
    M[i] = [];
  }
}

function Table() {
  let tbl = "<table>";
  for (let i = 0; i < n; i++) {
    tbl += "<tr>";
    for (let j = 0; j < n; j++) {
      M[i][j] = M[i][j] === undefined ? "" : M[i][j];
      tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
    }
    tbl += "</tr>";
  }
  tbl += "</table>";
  document.getElementsByTagName("main")[0].innerHTML = tbl;
}

function Click(i, j) {
  if (M[i][j] === "") {
  	
    if (count % 2 == 0) {
     let ad = 0;
      M[i][j] = o;
     
   

    } else {
      M[i][j] = x;
    }
    count++;

    Table();
    setTimeout(Check,300);

  }

}

function Check() {

    if(M[0][0]==M[1][1] && M[0][0]==M[2][2] && M[0][0]!=""){
    	
          
        alert("Win! " + M[0][0]);
      
    
    location.reload();
      
         // 
    }
  

    if(M[0][2]==M[1][1] && M[0][2]==M[2][0] && M[0][2]!=""){
        alert("Win! " + M[0][2]);
        location.reload();

    }
    if(M[0][2]==M[1][2] && M[0][2]==M[2][2] && M[2][2]!=""){
        alert("Win! " + M[2][2]);
        location.reload();
    }
     if(M[0][0]==M[0][1] && M[0][2]==M[0][1] && M[0][1]!=""){
        alert("Win! " + M[0][1]);
        location.reload();
    }
     if(M[0][0]==M[1][0] && M[1][0]==M[2][0] && M[2][0]!=""){
        alert("Win! " + M[2][0]);
        location.reload();
    }
     if(M[1][0]==M[1][1] && M[1][0]==M[1][2] && M[1][2]!=""){
        alert("Win! " + M[1][2]);
        location.reload();
    }
     if(M[0][1]==M[1][1] && M[2][1]==M[0][1] && M[2][1]!=""){
        alert("Win! " + M[2][1]);
        location.reload();
    }

}



