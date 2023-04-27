<script lang="ts">

export let title : String = "TITLE";
export let description : String = "DESCRIPTION"
export let type : Number;

// 0 - normal
// 1 - no meeting
// 2 - special

</script>

<main>
  
  <div class="bg-black/50 border w-[80%] mx-auto p-2 m-2 rounded">
    <h1 class="text-3xl">{title}</h1> 
    <p class="text-gray-400">{description}</p>
  </div>

</main>
