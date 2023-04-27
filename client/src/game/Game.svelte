<script>
  import { onMount, afterUpdate} from 'svelte';

  let player;
  let ground;
  const gravity = 0.5;
  let playerSpeedY = 0;
  let playerSpeedX = 0;
  let isJumping = false;
  const movementSpeed = 10;
  const acceleration = 0.9;
  const deceleration = 0.5;
  let targetSpeedX = 0;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      targetSpeedX = -movementSpeed;
    } else if (e.key === 'ArrowRight') {
      targetSpeedX = movementSpeed;
    } else if (e.key === ' ' && !isJumping) {
      jump();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      targetSpeedX = 0;
    }
  };

    let gameLoopInitialized = false;

   const initGameLoop = () => { 
    if (!gameLoopInitialized && player && ground) {
      gameLoopInitialized = true;
      const loop = () => {

        // Handle vertical movement
        if (!isJumping && player.offsetTop + player.offsetHeight < ground.offsetTop) {
          playerSpeedY += gravity;
          player.style.top = `${player.offsetTop + playerSpeedY}px`;
        } else if (player.offsetTop + player.offsetHeight >= ground.offsetTop) {
          playerSpeedY = 0;
          isJumping = false;
          player.style.top = `${ground.offsetTop - player.offsetHeight}px`; // Make sure the player stays on the ground
        }

        // Handle horizontal movement
        if (playerSpeedX < targetSpeedX) {
          playerSpeedX = Math.min(playerSpeedX + acceleration, targetSpeedX);
        } else if (playerSpeedX > targetSpeedX) {
          playerSpeedX = Math.max(playerSpeedX - acceleration, targetSpeedX);
        }

        // Apply deceleration when no movement keys are pressed
        if (targetSpeedX === 0) {
          if (playerSpeedX > 0) {
            playerSpeedX = Math.max(playerSpeedX - deceleration, 0);
          } else if (playerSpeedX < 0) {
            playerSpeedX = Math.min(playerSpeedX + deceleration, 0);
          }
        }

        player.style.left = `${player.offsetLeft + playerSpeedX}px`;

        requestAnimationFrame(loop);
      };

      loop();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);


    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  afterUpdate(() => {
      initGameLoop();
    });

  const jump = () => {
    console.log('jumping')
    isJumping = true;
    playerSpeedY = -300;
  };

</script>

<style>
  .game {
    position: relative;
    height: 360px;
    width: 50%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-radius: 5px;
    overflow: hidden;
  }

  .player {
    position: absolute;
    width: 32px;
    height: 60px;
    background-color: skyblue;
    border-radius: 2px;
  }

  .ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 32px;
    background-color: lawngreen;
  }
</style>

<main>
  <div class="game" on:click="{jump}">
    <h1>Game The Game</h1>
    <p class="text-gray-400/30">There is absolutely no purpose to this game.<p/>
    <p class="text-gray-400/20">Controls: Arrow Keys</p>
    <div class="player" bind:this="{player}" style="top: 200px; left: 50px;"></div>
    <div class="ground" bind:this="{ground}"></div>
  </div>
</main>
