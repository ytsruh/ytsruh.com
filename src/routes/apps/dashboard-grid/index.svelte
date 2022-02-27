<script>
  function toggleClass(e) {
    if (e.target.classList.contains("bg1")) {
      e.target.classList.remove("bg1");
      e.target.classList.add("bg2");
    } else if (e.target.classList.contains("bg2")) {
      e.target.classList.remove("bg2");
      e.target.classList.add("bg1");
    }
  }
</script>

<div class="main contain grid grid-rows-4 gap-2.5 min-w-screen">
  <div class="bg1 col-span-2" on:click={(e) => toggleClass(e)}>
    <h2>16 <span>| 24</span></h2>
    <p>Goals Completed</p>
  </div>
  <div class="bg1" on:click={(e) => toggleClass(e)}>
    <h2>New</h2>
    <p>Respiration</p>
  </div>
  <div class="bg2" on:click={(e) => toggleClass(e)}>
    <h2>50</h2>
    <p>Miles</p>
  </div>
  <div class="bg1" on:click={(e) => toggleClass(e)}>
    <h2>36 &deg;</h2>
    <p>Temperature</p>
  </div>
  <div class="bg1" on:click={(e) => toggleClass(e)}>
    <h2>9 <span>hrs</span></h2>
    <p>Sleep</p>
  </div>
  <div class="bg2 col-start-3 col-span-2" on:click={(e) => toggleClass(e)}>
    <h2>98 <span>bpm</span></h2>
    <p>Heart Rate</p>
  </div>
  <div class="bg1" on:click={(e) => toggleClass(e)}>
    <h2>170 <span>lbs</span></h2>
    <p>Weight</p>
  </div>
  <div class="bg1" on:click={(e) => toggleClass(e)}>
    <h2>28 <span>%</span></h2>
    <p>Fat Percentage</p>
  </div>
  <div class="bg2 col-start-3 col-span-2" on:click={(e) => toggleClass(e)}>
    <h2>118 <span>mgdl</span></h2>
    <p>Blood Glucose</p>
  </div>
  <div class="bg2 col-span-2" on:click={(e) => toggleClass(e)}>
    <h2>680 <span>kcal</span></h2>
    <p>AVG Consumption</p>
  </div>
  <div class="bg2" on:click={(e) => toggleClass(e)}>
    <h2>New</h2>
    <p>Workouts</p>
  </div>
  <div class="bg2" on:click={(e) => toggleClass(e)}>
    <h2>85 <span>%</span></h2>
    <p>Body Hydration</p>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

  .main {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #333;
    color: #fff;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    font-size: 45px;
    font-weight: 300;
    margin: 10px;
  }

  h2 span {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  .contain > div {
    cursor: pointer;
    height: 210px;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.5s ease-in;
  }

  .contain > div:hover {
    opacity: 0.7;
    transform: scale(0.98);
  }

  .bg1 {
    background: url("https://i.ibb.co/dBLbrRV/bg1.jpg");
  }

  .bg2 {
    background: url("https://i.ibb.co/Fb5jb3J/bg2.jpg");
    color: #333;
  }
</style>
