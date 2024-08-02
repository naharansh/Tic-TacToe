let box=document.querySelectorAll(".btn")
let set=document.querySelector(".reset")
const res=[	[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]		]
let turn=true;
let game=document.querySelector(".new")
let meg=document.querySelector("#dat")
let  f=document.querySelector(".mgs-container")
box.forEach((but) =>{
	but.addEventListener("click",()=>{
		if(turn)
		{
			but.innerHTML="O"
			turn=false;
		}
		else
		{
			but.innerHTML="X"
			turn=true
		}
		but.disabled=true;
		win();
	})
})
const win=()=>{
	for(num of res)
	{
		console.log(num)
		console.log(box[num[0]].innerText,box[num[1]].innerText,box[num[2]].innerText)
		let pos1=box[num[0]].innerText
		let pos2=box[num[1]].innerText
		let pos3=box[num[2]].innerText
		if (pos1 !=""&&pos2!=""&&pos3!="") {
			if (pos1==pos2 && pos2==pos3 && pos3==pos1) {
				console.log("winner")
					winner(pos1);
			}
			else
			{
				console.log("tiewd")
			}
		}
	}


}
const winner=(finak)=>{
	meg.innerHTML=`Congratualtoins the winner is${finak}`
	f.classList.remove("hdie")
	game.classList.remove("hdie")
	disablzed();
}

function resset() {
	
}

const disablzed=()=>{
	for(let num of box)
	{
		num.disabled=true
	}

}
const enab=()=>
{
	for(let num of box)
	{
		num.disabled=false;
		num.innerHTML="";
	}
};
set.addEventListener("click",()=>
{
	turn=true;
	enab()
	f.classList.add("hdie")
	game.classList.add("hdie")
})
game.addEventListener("click",()=>
{
	turn=true;
	enab()
	f.classList.add("hdie")
	game.classList.add("hdie")
})
