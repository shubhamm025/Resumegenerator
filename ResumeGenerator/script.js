function addnewAcad(){

     
    let details = document.createElement('textarea');
    details.classList.add('form-control');
    details.classList.add('weField');
    details.classList.add('mt-2');
    details.setAttribute('placeholder','write about your work experience in brief   ')
 
// adding node 
let school= document.getElementById('we');
let addbtn= document.getElementById('wbtn');


school.insertBefore(details,addbtn);


}


function addnewProject(){

    // let pTitle = document.createElement('input');
    // pTitle.classList.add('form-control');
    // pTitle.classList.add('projectTitle');
    // pTitle.classList.add('mt-3');
    // pTitle.setAttribute('placeholder','Enter your second projectc title ')
    
    let details = document.createElement('textarea');
    details.classList.add('form-control');
    details.classList.add('projectDetail');
    details.classList.add('mt-2');
    details.setAttribute('placeholder','Describe your project in brief   ')
    
    // adding node 
    let project= document.getElementById('projects');
    let addbtn= document.getElementById('pbtn');
    
    // project.insertBefore(pTitle,addbtn);
    project.insertBefore(details,addbtn);
    }


// CV generating function
   function genCV(){

    let name= document.getElementById('name').value;
    let Tname= document.getElementById('Tname');
    Tname.innerHTML=name;

  
    document.getElementById('Tnumber').innerHTML=document.getElementById('number').value;

    document.getElementById('address').innerHTML=document.getElementById('Eaddress').value;

    document.getElementById('Tobjective').innerHTML=document.getElementById('objective').value;

    document.getElementById('linkd').innerHTML=document.getElementById('linkedin').value;

    document.getElementById('git').innerHTML=document.getElementById('github').value;

    document.getElementById('Ttskills').innerHTML=document.getElementById('Tskill').value;

    document.getElementById('Tsoftskills').innerHTML=document.getElementById('softSkills').value;

   
    // for work exp
    let we = document.getElementsByClassName("weField");
    let str="";
    for (let e of we) {
        str= str +`<li> ${e.value} </li>`;
        
    }   
    document.getElementById("weT").innerHTML=str;



     // for Projects exp
     let projects = document.getElementsByClassName("proField");
     let strr="";
     for (let e of projects) {
         strr=strr +`<li> ${e.value} </li>`;
         
     }   
     document.getElementById("projectsT").innerHTML=strr;


     document.getElementById('resume').style.display='none';
     document.getElementById('nav').style.display='none';
     document.getElementById('resume-templet').style.display='block';


    }



// printingcv
    function printCV(){
        window.print();
    }