<script>
  const Type = {
    President: "President",
    Officer: "Officer"
    };

  export let people = [
    { name: "Caleb", discordUsername:"cjlcjl12", type: Type.President},
    { name: "idk", discordUsername: "csyched", type: Type.Officer},
    { name: "Finn", discordUsername: "Finnder", type: Type.Officer},
    { name: "Hannah", discordUsername: "flubbygubby", type: Type.Officer},
    { name: "John", discordUsername: "bigbadjohn", type: Type.Officer},
    { name: "Max", discordUsername: "MaxVantisio", type: Type.Officer},
  ];
</script>

<ul class="border w-1/3 m-2 mx-auto rounded flex-row phone:w-[90%] ">
  {#each people as person}
  <div class="person p-4 gap-2 flex-row bg-gray-800 first:bg-gray-700 first:border-b"> 
    <span class="uppercase text-2xl">{person.name}</span>
    <span class="border rounded-lg p-3 m-3 bg-discord text-white">{person.discordUsername}</span>
    <span class="border p-2 bg-black/30">{person.type}</span>
  </div>
  {/each}
</ul>
   
