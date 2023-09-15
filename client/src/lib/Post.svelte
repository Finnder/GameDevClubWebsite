<script lang="ts">

export let title : String = "TITLE";
export let description : String = "DESCRIPTION"
export let type : Number;
export let date : String = "00/00/2023";

// 0 - normal
// 1 - no meeting
// 2 - special

</script>

<main>
  
  <div class="bg-black/50 border w-[70%] mx-auto p-2 m-2 rounded">
    <span class="text-xl ">{date}</span>
    <h1 class="text-3xl text-yellow-300">{title}</h1> 
    <p class="text-gray-400 text-2xl w-1/2 mx-auto">{description}</p>
  </div>

</main>
