import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminReviews() {

const [pendingReviews,setPendingReviews] = useState([]);
const [approvedReviews,setApprovedReviews] = useState([]);

useEffect(() => {

loadReviews();

},[]);

async function loadReviews(){

const { data,error } =
await supabase
.from("reviews")
.select("*")
.order("id",{ ascending:false });

if(!error){

setPendingReviews(
  data.filter(
    item => item.status === "PENDING"
  )
);

setApprovedReviews(
  data.filter(
    item => item.status === "APPROVED"
  )
);

}

}

async function approveReview(id){
	
	console.log(id);
console.log(typeof id);

const { data, error } =
await supabase
.from("reviews")
.update({
  status:"APPROVED"
})
.eq("id",id)
.select();

console.log("UPDATE");
console.log(data);
console.log(error);

loadReviews();

}

async function deleteReview(id){

if(!window.confirm("Delete review?"))
return;

await supabase
.from("reviews")
.delete()
.eq("id",id);

loadReviews();

}

return (

<div className="max-w-6xl mx-auto pt-5">

<div className="
bg-[#ffe0ec]
border-4
border-[#f6b6c9]
rounded-[28px]
px-8
py-5
flex
justify-between
items-center
shadow-[0_15px_30px_rgba(0,0,0,0.08)]
">

<div>

<div className="
text-2xl
font-black
text-[#d65a8d]
">
💅 HBB ADMIN
</div>

<div className="
text-xs
tracking-[5px]
text-[#b9788f]
mt-1
">
REVIEW MANAGEMENT
</div>
</div>

<a
href="/"
className="
font-bold
text-[#8b5a67]
hover:text-[#ff7cab]
"
>
Website
</a>

</div>

<div className="max-w-6xl mx-auto pt-12 pb-6">

<h1 className="
text-6xl
font-black
text-[#7b4658]
mb-2
">
Pending Reviews
</h1>

<p className="
text-[22px]
text-[#8e6875]
">
Customer reviews waiting approval
</p>
</div>

<div
className="
max-w-6xl
mx-auto
pb-10
grid
grid-cols-2
gap-6
"
>

{pendingReviews.map((item)=>(

<div
key={item.id}
className="
bg-[#faf8f8]
rounded-[25px]
shadow-[0_15px_30px_rgba(0,0,0,0.08)]
p-8
"
>

<h3 className="
text-3xl
font-black
text-pink-500
">
{item.nama}
</h3>

<div className="
text-yellow-500
font-bold
mt-2
">
⭐ {item.rating}/5
</div>

<p className="
mt-4
text-gray-700
">
{item.review}
</p>

<div
className="
max-w-6xl
mx-auto
pb-20
grid
md:grid-cols-2
gap-6
"
>

<div className="mt-5 flex gap-3">

<button
onClick={() => approveReview(item.id)}
className="
bg-[#28a745]
hover:bg-[#4e9666]
text-white
px-5
py-2
rounded-xl
font-bold
"
>
✅ Approve
</button>

<button
onClick={() => deleteReview(item.id)}
className="
bg-[#d97989]
hover:bg-[#c76879]
text-white
px-5
py-2
rounded-xl
font-bold
"
>
🗑 Delete
</button>

</div>

</div>

</div>

))}

</div>

<div className="max-w-6xl mx-auto pt-10 pb-6">

<h1
className="
text-6xl
font-black
text-[#7b4658]
mb-2
"
>
Approved Reviews
</h1>

<p
className="
text-[22px]
text-[#8e6875]
"
>
Customer reviews already published
</p>

</div>

<div className="max-w-6xl mx-auto pb-20">

{approvedReviews.map((item)=>(

<div
key={item.id}
className="
bg-[#faf8f8]
rounded-[25px]
shadow-[0_15px_30px_rgba(0,0,0,0.08)]
p-8
mb-6
"
>

<h3
className="
text-3xl
font-black
text-[#d65a8d]
"
>
{item.nama}
</h3>

<div
className="
text-[#f4b400]
font-bold
mt-2
"
>
⭐ {item.rating}/5
</div>

<p
className="
mt-4
text-[#5b3b31]
"
>
{item.review}
</p>

<div className="mt-5">

<button
onClick={() => deleteReview(item.id)}
className="
bg-[#d97989]
hover:bg-[#c76879]
text-white
px-5
py-2
rounded-xl
font-bold
"
>
🗑 Delete
</button>

</div>

</div>

))}

</div>
</div>
);

}