<script lang="ts">

import "./app.css"
import Game from "./game/Game.svelte"
import OfficerList from "./lib/OfficerList.svelte"
import MountainBackground from "./assets/images/bg_2.png"
import Post from "./lib/Post.svelte";

enum WeekDay {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WENSDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATERDAY = "Saterday",
  SUNDAY = "Sunday"
}

const discordInviteLink = "https://discord.gg/33eHFavezf"

// Meeting Time Data
const meetingTime : String = "5:00 - 6:30"; // PM
const dayOfWeek = WeekDay.FRIDAY;
const location = "Room 310 | Anne Belk Hall";

let showGame : Boolean = false;

enum Tabs {
	UPCOMING_MEETINGS,
	OFFICER_LIST,
    GAME
}

let currentTab : Tabs = null
const handleMeetingsClick = () => { currentTab = Tabs.UPCOMING_MEETINGS }
const handleOfficerListClick = () => { currentTab = Tabs.OFFICER_LIST }
const handleGameClick = () => { currentTab = Tabs.GAME }

</script>

<main class="text-center">

	<div class="absolute z-10">
    <img src={MountainBackground} alt="Mountains" class="inset-0 w-screen h-screen"/>
		<div class="absolute inset-0 bg-black opacity-70"/>
  </div>

	<div class="content relative z-20">
    		
		<h1 class="text-6xl p-2 font-[gum] text-yellow-300 text-primary hover:translate-y-1 select-none w-fit mx-auto phone:text-5xl">Appstate</h1>
    <h1 class="text-6xl text-white mb-2 font-[gum] py-3 text-secondary flex gap-7 justify-center select-none phone:text-3xl">
      <span class="hover:translate-y-1">Game</span> 
      <span class="hover:translate-y-1">Dev</span> 
      <span class="hover:translate-y-1">Club</span> 
    </h1>	
    <h2 class="text-3xl bg-black/10 w-fit mx-auto p-2 select-none phone:text-xl">Official Website</h2>

		<div class="basic_information bg-black/40 border p-5 m-auto mt-5 mb-5 text-2xl text-center w-1/3 phone:w-[90%]">
      <h2><span class="font-bold">Meeting Time: </span><span class="text-emerald-400">{meetingTime} PM</span></h2>
      <h2><span>Day Of The Week:</span> <span class="text-orange-400">{dayOfWeek}</span></h2>
      <h2><span>Location:</span> <span class="text-purple-400">{location}</span></h2>
		</div>
		
		<div class="navbar mt-4 gap-4 m-auto text-center flex mx-auto justify-center text-3xl phone:text-2xl">
			<div class="btn-landingpage">
        <button on:click={handleMeetingsClick}>Upcoming Meetings</button>
				<button on:click={handleOfficerListClick}>Officer List</button>
			</div>
		</div>

		<button class="fixed left-0 bottom-0 p-2 m-2 border border-dotted phone:hidden" on:click={handleGameClick}>?</button>

		{#if currentTab == Tabs.OFFICER_LIST}
			<OfficerList/>
		{/if}

        {#if currentTab == Tabs.UPCOMING_MEETINGS}
        <div class="posts overflow-scroll">

          <Post title="Our First Meeting!"  
                description="Welcome all adventurers! This will be the first of many meetings in the game developement club.
                All of the officers will introduce themselves and we will explain what the club will be doing for the future."
                date="09/15/2023"
          />
          <Post title="Our First Meeting!"  
                description="Welcome all adventurers! This will be the first of many meetings in the game developement club.
                All of the officers will introduce themselves and we will explain what the club will be doing for the future."
                date="09/15/2023"
          />
          <Post title="Our First Meeting!"  
                description="Welcome all adventurers! This will be the first of many meetings in the game developement club.
                All of the officers will introduce themselves and we will explain what the club will be doing for the future."
                date="09/15/2023"
          />
        </div>
          
        {/if}

		{#if currentTab == Tabs.GAME}
          <span class="phone:hidden">
            <Game/>
          </span>
		{/if}
    
        <a href="{discordInviteLink}" class="bg-discord p-1 fixed right-0 bottom-0 m-2 rounded hover:bg-discord/80 active:bg-discord/60">JOIN THE DISCORD!</a>

	</div>
</main>
