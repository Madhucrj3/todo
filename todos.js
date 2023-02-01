// let data = [];
// var ind=0;
// let list = document.getElementById("uliffdbody");
// data.forEach((item)=>{
//     var ul = document.getElementById('uliffdbody'); //ul
//     var li = document.createElement('li');//li
//     var div1 = document.createElement('div');
//     div1.setAttribute('class',"ulfirstdiv");
//     div1.setAttribute('id',"deletediv"+ind);
//     var div2=document.createElement('div');
//     div2.setAttribute('class',"ulsecdiv");
//     var checkbox = document.createElement('input');
//         checkbox.type = "checkbox";
//         checkbox.setAttribute("id","check"+ind);
//         checkbox.name="licheckbox";
//         checkbox.setAttribute("class","checkdiv");
//         checkbox.addEventListener("change", function(event){
//             if(this.checked)
//             document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="line-through";
//             else
//             document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="none";
//         });
//     div1.appendChild(checkbox);
//     li.setAttribute("id","li"+ind);
//     li.setAttribute("class","lic"+ind);
//     li.appendChild(document.createTextNode(item));
//     div2.appendChild(li);
//     var _img=document.createElement('img');
//     _img.src="https://res.cloudinary.com/dqgpcuxoj/image/upload/v1674532048/delete_ryekp1.png";
//     _img.setAttribute("id","img"+ind);
//     _img.addEventListener("click",function(event){
//         // console.log("deletediv"+event.target.id.substring(3));
//         const element=document.getElementById("deletediv"+event.target.id.substring(3));
//         console.log(element);
//         element.remove();
//     });
//     div2.appendChild(_img);
//     div1.appendChild(div2);
//     ul.appendChild(div1);
//     ind++;
// })
// function myfunc(){
//     let input=document.getElementById("taskinput").value;
//     let task=document.getElementById("uliffdbody");
//     data.push(input);
//     var ul = document.getElementById('uliffdbody'); //ul
//     var li = document.createElement('li');//li
//     var div1 = document.createElement('div');
//     div1.setAttribute('class',"ulfirstdiv");
//     div1.setAttribute('id',"deletediv"+ind);
//     var div2=document.createElement('div');
//     div2.setAttribute('class',"ulsecdiv");
//     var checkbox = document.createElement('input');
//         checkbox.type = "checkbox";
//         checkbox.setAttribute("id","check"+ind);
//         checkbox.name="licheckbox";
//         checkbox.setAttribute("class","checkdiv");
//         checkbox.addEventListener("change", function(event){
//             if(this.checked)
//             document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="line-through";
//             else
//             document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="none";
//         });
//     div1.appendChild(checkbox);
//     li.setAttribute("id","li"+ind);
//     li.setAttribute("class","lic"+ind);
//     li.appendChild(document.createTextNode(data[ind]));
//     div2.appendChild(li);
//     var _img=document.createElement('img');
//     _img.src="https://res.cloudinary.com/dqgpcuxoj/image/upload/v1674532048/delete_ryekp1.png";
//     _img.setAttribute("id","img"+ind);
//     _img.addEventListener("click",function(event){
//         // console.log("deletediv"+event.target.id.substring(3));
//         const element=document.getElementById("deletediv"+event.target.id.substring(3));
//         console.log(element);
//         element.remove();
//     });
//     div2.appendChild(_img);
//     div1.appendChild(div2);
//     ul.appendChild(div1);
//     document.getElementById("taskinput").value="";
//     ind++;
// }
// function savefun(){
//     console.log("saved");
// }
// let newTodo = {
//     text: userInputValue,
//     uniqueNo: todosCount,
// };
var ind=0;
let todoval=[];
function retrivefromlocalstorage(){
    if(localStorage.getItem("todolist")!=null)
    {
        todoval=JSON.parse(localStorage.getItem("todolist"));
    }
}
retrivefromlocalstorage();
if(todoval.length!=0)
{
    let currind=todoval[todoval.length-1];
    ind=currind.uniqueNo+1;
}
todoval.forEach((item)=>{
    var ul = document.getElementById('uliffdbody'); //ul
    var li = document.createElement('li');//li
    var div1 = document.createElement('div');
    div1.setAttribute('class',"ulfirstdiv");
    div1.setAttribute('id',"deletediv"+item.uniqueNo);
    var div2=document.createElement('div');
    div2.setAttribute('class',"ulsecdiv");
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check"+item.uniqueNo);
        checkbox.name="licheckbox";
        checkbox.setAttribute("class","checkdiv");
        checkbox.addEventListener("change", function(event){
            if(this.checked){
                item.check=1;
            document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="line-through";
            }
            else{
                item.check=0;
            document.getElementById("li"+(event.target.id.charAt(5))).style.textDecoration="none";
            }
        });
    div1.appendChild(checkbox);
    li.setAttribute("id","li"+item.uniqueNo);
    li.setAttribute("class","lic"+item.uniqueNo);
    li.appendChild(document.createTextNode(item.data));
    div2.appendChild(li);
    var _img=document.createElement('img');
    _img.src="https://res.cloudinary.com/dqgpcuxoj/image/upload/v1674532048/delete_ryekp1.png";
    _img.setAttribute("id","img"+item.uniqueNo);
    _img.addEventListener("click",function(event){
        console.log(event.target.id.substring(3));
        let uniqueremove=parseInt(event.target.id.substring(3));
        let curr=0;
        for(let i=0;i<todoval.length;i++)
        {
            if(todoval[i].uniqueNo==uniqueremove)
            {
                curr=i;
                break;
            }
        }
        const element=document.getElementById("deletediv"+event.target.id.substring(3));
        element.remove();
        todoval.splice(curr,1);
        // console.log(todoval);
    });
    div2.appendChild(_img);
    div1.appendChild(div2);
    ul.appendChild(div1);
    if(item.check==1){
        document.getElementById("li"+item.uniqueNo).style.textDecoration="line-through";
        console.log("li"+item.uniqueNo);
        checkbox.checked=true;
    }
})
function myfunc(){
    let input=document.getElementById("taskinput").value;
    todo={
        uniqueNo:ind,
        data:input,
        check:0
    }
    todoval.push(todo);
    ind++;
    addtodo(todo);
    document.getElementById("taskinput").value="";
}
function addtodo(todo) {
    console.log(typeof(todo.uniqueNo));
    let ul=document.getElementById("uliffdbody");
    var li = document.createElement('li');//li
    var div1 = document.createElement('div');
    div1.setAttribute('class',"ulfirstdiv");
    div1.setAttribute('id',"deletediv"+todo.uniqueNo);
    var div2=document.createElement('div');
    div2.setAttribute('class',"ulsecdiv");
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check"+todo.uniqueNo);
        checkbox.name="licheckbox";
        checkbox.setAttribute("class","checkdiv");
        checkbox.addEventListener("change", function(event){
            if(this.checked){
            document.getElementById("li"+(event.target.id.substring(5))).style.textDecoration="line-through";}
            else{
            document.getElementById("li"+(event.target.id.substring(5))).style.textDecoration="none";}
        });
    div1.appendChild(checkbox);
    li.setAttribute("id","li"+todo.uniqueNo);
    li.setAttribute("class","lic"+todo.uniqueNo);
    li.appendChild(document.createTextNode(todo.data));
    div2.appendChild(li);
    var _img=document.createElement('img');
    _img.src="https://res.cloudinary.com/dqgpcuxoj/image/upload/v1674532048/delete_ryekp1.png";
    _img.setAttribute("id","img"+todo.uniqueNo);
    _img.addEventListener("click",function(event){
        console.log(event.target.id.substring(3));
        let uniqueremove=parseInt(event.target.id.substring(3));
        let curr=0;
        for(let i=0;i<todoval.length;i++)
        {
            if(todoval[i].uniqueNo==uniqueremove)
            {
                curr=i;
                break;
            }
        }
        const element=document.getElementById("deletediv"+event.target.id.substring(3));
        element.remove();
        todoval.splice(curr,1);
        // console.log(todoval);
    });
    div2.appendChild(_img);
    div1.appendChild(div2);
    ul.appendChild(div1);
}
function savefun(){
      localStorage.setItem("todolist",JSON.stringify(todoval));
}