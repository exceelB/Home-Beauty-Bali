import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ReviewForm() {

const [nama,setNama] = useState("");
const [rating,setRating] = useState("5");
const [review,setReview] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

const { data, error } =
await supabase
.from('reviews')
.insert([
{
nama,
rating,
review,
status:'PENDING'
}
]);

console.log(data);
console.log(error);

if(error){

console.log(error);

alert(
'Failed submit review'
);

return;

}

alert("Review submitted successfully 💖");

setNama("");
setRating("5");
setReview("");

};

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-orange-100 p-6">

<div className="bg-white rounded-[32px] shadow-xl p-8 w-full max-w-xl">

<h1 className="text-4xl font-black text-center text-pink-500 mb-2">
💅 Home Beauty Bali
</h1>

<p className="text-center text-gray-500 mb-8">
Share your beauty experience ✨
</p>

<form onSubmit={handleSubmit}>

<div className="mb-4">

<label className="font-bold block mb-2">
Your Name
</label>

<input
type="text"
value={nama}
onChange={(e)=>setNama(e.target.value)}
className="w-full border rounded-xl p-3"
required
/>

</div>

<div className="mb-4">

<label className="font-bold block mb-2">
Rating
</label>

<select
value={rating}
onChange={(e)=>setRating(e.target.value)}
className="w-full border rounded-xl p-3"
>

<option value="5">⭐⭐⭐⭐⭐</option>
<option value="4">⭐⭐⭐⭐</option>
<option value="3">⭐⭐⭐</option>
<option value="2">⭐⭐</option>
<option value="1">⭐</option>

</select>

</div>

<div className="mb-6">

<label className="font-bold block mb-2">
Review
</label>

<textarea
rows="5"
value={review}
onChange={(e)=>setReview(e.target.value)}
className="w-full border rounded-xl p-3"
required
/>

</div>

<button
type="submit"
className="
w-full
bg-pink-500
hover:bg-pink-600
text-white
font-black
py-4
rounded-2xl
"
>
Submit Review 💖
</button>

</form>

</div>

</div>

);

}