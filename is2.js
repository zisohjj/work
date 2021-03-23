// 全选
function chooseAll(obj){
    var  cse=document.getElementsByName("cox");
    for(var i=0;i<cse.length;i++){
        cse[i].checked=obj.checked
    }
}
function ock(){
    var count=0;
    var cse=document.getElementsByName("cox");
    for (var i=0;i<cse.length;i++){
        if(cse[i].checked){
            count++
        }
    }
    document.getElementById("q").checked=count==cse.length
}

 // 删除一行
 function clearStudents(obj){
    document.getElementById("tad").deleteRow(obj.parentNode.parentNode.rowIndex)  
   

}
function deleteStudents(){
    var table=document.getElementById("tad");
    for(var i=table.rows.length-1;i>1;i--){
        table.deleteRow(i);
    }
}
// 选中删除
function  zck(){
    var coxs=document.getElementsByName("cox")
    var table=document.getElementById("tad")
    for(i=coxs.length-1;i>=0;i--){
        if(coxs[i].checked){
            table.deleteRow(coxs[i].parentNode.parentNode.rowIndex)
        }
    }
}
// 
var th1=document.getElementById("th1")
var th2=document.getElementById("th2")
function  olk(){
    var coxs=document.getElementsByName("cox")
    var table=document.getElementById("tad")
    for(i=coxs.length-1;i>=0;i--){
        if(coxs[i].checked){
            table.deleteRow(coxs[i].parentNode.parentNode.rowIndex)
        }
    }
alert("总额:"+parseInt(37.5))
}
