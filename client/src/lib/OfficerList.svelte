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
  ];
</script>

<ul class="border w-1/4 m-2 mx-auto rounded flex-col phone:w-[90%]">
  {#each people as person}
      <div class="person border-b-2 p-5"> 
        <span class="uppercase text-2xl">{person.name}</span>
        <span class="border rounded-lg p-3 m-3 bg-[#7289DA] text-white">{person.discordUsername}</span>
      </div>
  {/each}
</ul>
   
