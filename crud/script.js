// data
let data = [
{id:1,
    hid:false,
    name:"SHAXBOZ",
Occupation:"MENTOR",
},
{id:2,
    hid:false,
name:"WAXZODBEK",
Occupation:"developer",
},
{id:3,
    hid:false,
name:"ASRORBEK",
Occupation:"developer",
},
{id:4,
    hid:false,
name:"ISLOMJON",
Occupation:"developer",
},{id:5,
    hid:false,
name:"MIRAS",
Occupation:"developer",
},{id:6,
    hid:false,
name:"FARRUKH",
Occupation:"developer",
},{id:4,
    hid:false,
name:"AHTAM",
Occupation:"developer",
},{id:4,
    hid:false,
    name:"ABDULAZIZ",
    Occupation:"developer",
},
]

// variebles
const mainTag = document.getElementById('body')
document.getElementById('inputName');
document.getElementById('inputAge ');
const inputName = document.getElementById('inputName')
const inputAge  = document.getElementById('inputAge')
const inputSearch = document.getElementById('inputsearch')

// empty var.s
let namevalue ="";
let agevalue = "";
let namechanger = "";
let occupationchanger = "";
let searcher = "";

// listeners
inputSearch.addEventListener("input",(e)=>{
    searcher = e.target.value
    render()
});

inputName.addEventListener("input",(e)=>{
    namevalue = e.target.value
});

inputAge.addEventListener('input',(v)=>{
    agevalue = v.target.value
});


// fNs
function adduser(){
data.push({id:data.length+1,hid:false ,name:namevalue, Occupation:agevalue})
render()
}
function Ondelete(id){
    data = data.filter(val=>val.id !==id)
    render()
};
function OnChange(id){
    namechanger =data.filter(val=>val.id ===id)[0].name
    occupationchanger = data.filter(val=>val.id ===id)[0].Occupation;
    data= data.map((v)=>({id:v.id, hid:v.id===id ? true:false, name:v.name, Occupation:v.Occupation}))
    render()
};
function saveFN(id){
    data= data.map((v)=>({id:v.id, hid:false, name:v.id ===id ? namechanger:v.name, Occupation:v.id === id ? occupationchanger:v.Occupation}))
    render()
}

function render(){
mainTag.innerHTML = data.map((value)=>value.name.toLocaleLowerCase().includes(searcher.toLocaleLowerCase())&&`
<div class ="section">
    <div>
        ID: ${value.id}
    </div>                      
    <div>
        ${value.hid ? `<input type="text" value="${namechanger}" id="changeinputname"></input>`:`${value.name}`}
    </div>
    <div>
        ${value.hid ? `<input type="text" value="${occupationchanger}" id="changeinputoccupation"></input>`:`${value.Occupation}`}
    </div>
    <div>   
        ${value.hid ? 
        `<button onclick="saveFN(${value.id})">Save</button>` 
        :
        `<div>
            <button onclick="Ondelete(${value.id})" class="btn">DELETE</button>
            <button onclick="OnChange(${value.id})">CHANGE</button>
        </div>`}
    </div>
</div>
`).filter(Boolean).join('')
const changeinputname = document.getElementById('changeinputname');
const changeinputoccupation = document.getElementById('changeinputoccupation');

changeinputname.addEventListener("input",(e)=>{
    namechanger=e.target.value
});
changeinputoccupation.addEventListener("input",(e)=>{
    occupationchanger = e.target.value
});

}
render()
