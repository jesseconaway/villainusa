const footer = document.getElementById('myFooter');
const nav = document.getElementById('myTopNav');

footer.innerHTML = '<div class="row mx-auto">     <div class="col-6 col-md-4 mx-auto footerColumn1">     <a href="customization.html" class="footerLink">Customization</a><br>     <a href="ordering.html" class="footerLink">Placing an Order</a><br>     <a href="production.html" class="footerLink">Production Facilities</a>     </div>     <div class="col-6 col-md-4 mx-auto footerColumn2">     <a href="shipping.html" class="footerLink">Shipping</a><br>     <a href="policies.html" class="footerLink">Product Policies</a><br>     <a href="contact.html" class="footerLink">Contact Us</a>     </div>     <div class="col-6 col-md-4 mx-auto footerColumn3">     <h1 class="footerItem"><a href="index.html">VillainUSA</a></h1><br>     <p class="footerItem">©2020 VillainUSA LLC</p>     </div>     </div>';

nav.innerHTML = '<a class="navbar-brand" href="index.html">VillainUSA</a>     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">     <span class="navbar-toggler-icon"></span>     </button>     <div class="collapse navbar-collapse" id="navbarSupportedContent">     <ul class="navbar-nav mr-auto">     <li class="nav-item dropdown">     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">     All Categories     </a>     <div class="dropdown-menu" aria-labelledby="navbarDropdown">     <a class="dropdown-item" href="barbells.html">Barbells</a>     <a class="dropdown-item" href="collars.html">Barbell Collars</a>     <a class="dropdown-item" href="weightliftingequipment.html">Weightlifting Equipment</a>     <a class="dropdown-item" href="outfitting.html">Gym Outfitting</a>     <a class="dropdown-item" href="agilityandaerobic.html">Agility & Aerobic Training</a>     <a class="dropdown-item" href="mobility.html">Mobility</a>     <a class="dropdown-item" href="strengthequipment.html">Strength Equipment</a>     <a class="dropdown-item" href="kettlebells.html">Kettlebells</a>     <a class="dropdown-item" href="dumbbells.html">Dumbbells</a>     <a class="dropdown-item" href="bodyweight.html">Bodyweight Strength</a>     <a class="dropdown-item" href="jumpboxes.html">Jump Boxes</a>     <a class="dropdown-item" href="plates.html">Plates</a>     <a class="dropdown-item" href="gear.html">Weightlifting Gear & Apparel</a>     <a class="dropdown-item" href="xendurance.html">Xendurance Supplements</a>     </div>     </li>     <li class="nav-item">     <a class="nav-link" href="barbells.html">Barbells</a>     </li>     <li class="nav-item">     <a class="nav-link" href="plates.html">Plates</a>     </li>     <li class="nav-item">     <a class="nav-link" href="mobility.html">Mobility</a>     </li>     <li class="nav-item">     <a class="nav-link" href="outfitting.html">Outfitting</a>     </li>     <li class="nav-item">     <a class="nav-link" href="gear.html">Gear & Apparel</a>     </li>     <li class="nav-item">     <a class="nav-link" href="xendurance.html">Xendurance Supplements</a>     </li>     </ul>     <div class="d-inline my-2 my-lg-0">     <div class="my-2 my-sm-0 snipcart-checkout cartIcon"><img style="width: 100%; height: auto;" src="images/cart.png"></div>     </div>     </div>';

/*
<a class="navbar-brand" href="index.html">VillainUSA</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Categories
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="barbells.html">Barbells</a>
                  <a class="dropdown-item" href="collars.html">Barbell Collars</a>
                  <a class="dropdown-item" href="weightliftingequipment.html">Weightlifting Equipment</a>
                  <a class="dropdown-item" href="outfitting.html">Gym Outfitting</a>
                  <a class="dropdown-item" href="agilityandaerobic.html">Agility & Aerobic Training</a>
                  <a class="dropdown-item" href="mobility.html">Mobility</a>
                  <a class="dropdown-item" href="strengthequipment.html">Strength Equipment</a>
                  <a class="dropdown-item" href="kettlebells.html">Kettlebells</a>
                  <a class="dropdown-item" href="dumbbells.html">Dumbbells</a>
                  <a class="dropdown-item" href="bodyweight.html">Bodyweight Strength</a>
                  <a class="dropdown-item" href="jumpboxes.html">Jump Boxes</a>
                  <a class="dropdown-item" href="plates.html">Plates</a>
                  <a class="dropdown-item" href="gear.html">Weightlifting Gear & Apparel</a>
                  <a class="dropdown-item" href="xendurance.html">Xendurance Supplements</a>
                </div>
              </li>
    <li class="nav-item">
      <a class="nav-link" href="barbells.html">Barbells</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="plates.html">Plates</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="mobility.html">Mobility</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="outfitting.html">Outfitting</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="gear.html">Gear & Apparel</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="xendurance.html">Xendurance Supplements</a>
    </li>
  </ul>
  <div class="d-inline my-2 my-lg-0">
    <div class="my-2 my-sm-0 snipcart-checkout cartIcon"><img style="width: 100%; height: auto;" src="images/cart.png"></div>
  </div>
</div>

----------------------

<div class="row mx-auto">
      <div class="col-6 col-md-4 mx-auto footerColumn1">
        <a href="customization.html" class="footerLink">Customization</a><br>
        <a href="ordering.html" class="footerLink">Placing an Order</a><br>
        <a href="production.html" class="footerLink">Production Facilities</a>
      </div>
      <div class="col-6 col-md-4 mx-auto footerColumn2">
          <a href="shipping.html" class="footerLink">Shipping</a><br>
          <a href="policies.html" class="footerLink">Product Policies</a><br>
          <a href="contact.html" class="footerLink">Contact Us</a>
      </div>
      <div class="col-6 col-md-4 mx-auto footerColumn3">
          <h1 class="footerItem"><a href="index.html">VillainUSA</a></h1><br>
          <p class="footerItem">©2019 VillainUSA LLC</p>
      </div>
    </div>
*/

/*-------------------------
---------PRICES------------
-------------------------*/

const addItemButtons = document.querySelectorAll('.snipcart-add-item');

addItemButtons.forEach(function(addItemButton) {

    function setPrice(price, uiSelect) {
        addItemButton.setAttribute('data-item-price', price);
        document.getElementById(uiSelect).innerText = "$" + addItemButton.getAttribute('data-item-price');
    }

    if(addItemButton.matches('[data-item-id="15kgCompBar"]')) {
            
        // 15kg Competition Bar
        setPrice('327.75', '15kgCompBarPrice');

    } else if(addItemButton.matches('[data-item-id="15kgTrainingBar"]')) {
                
        // 15kg Training Bar
        setPrice('199.99', '15kgTrainingBarPrice');

    } else if(addItemButton.matches('[data-item-id="20kgCompBar"]')) {
                
        // 20kg Competition Bar
        setPrice('344.99', '20kgCompBarPrice');

    } else if(addItemButton.matches('[data-item-id="20kgTrainingBar"]')) {
                
        // 20kg Training Bar
        setPrice('219.99', '20kgTrainingBarPrice');

    } else if(addItemButton.matches('[data-item-id="speedRope"]')) {
                
        // Speed Rope
        setPrice('11.99', 'speedRopePrice');

    } else if(addItemButton.matches('[data-item-id="agilityLadder"]')) {
                
        // Agility Ladder
        setPrice('49.99', 'agilityLadderPrice');

    } else if(addItemButton.matches('[data-item-id="agilityHurdles"]')) {
                
        // Hurdles
        setPrice('39.99', 'agilityHurdlesPrice');

    } else if(addItemButton.matches('[data-item-id="balanceBall"]')) {
                
        // Balance Ball
        setPrice('89.99', 'balanceBallPrice');

    } else if(addItemButton.matches('[data-item-id="aerobicStepper"]')) {
                
        // Aerobic Stepper
        setPrice('59.99', 'aerobicStepperPrice');

    } else if(addItemButton.matches('[data-item-id="hexBar"]')) {
                
        // Hex Bar
        setPrice('219.99', 'hexBarPrice');

    } else if(addItemButton.matches('[data-item-id="techniqueBar"]')) {
                
        // 15lb Technique Bar
        setPrice('114.99', 'techniqueBarPrice');

    } else if(addItemButton.matches('[data-item-id="suspensionTrainer"]')) {
                
        // Suspension Trainer
        setPrice('99.99', 'suspensionTrainerPrice');

    } else if(addItemButton.matches('[data-item-id="gymnasticRings"]')) {
                
        // Gymnastic Rings
        setPrice('59.99', 'gymnasticRingsPrice');

    } else if(addItemButton.matches('[data-item-id="climbingRope"]')) {
                
        // Climbing Rope
        setPrice('50.99', 'climbingRopePrice');

    } else if(addItemButton.matches('[data-item-id="abMat"]')) {
                
        // Ab Mat
        setPrice('19.99', 'abMatPrice');

    } else if(addItemButton.matches('[data-item-id="2.5lbChangePlate"]')) {
                
        /*-----------------------------------------------------------------
        CHANGE PLATE PRICES WILL NEED TO BE CHANGED MANUALLY ON MOBILE SIZE
        -----------------------------------------------------------------*/

        // 2.5lb Change Plate
        setPrice('11.99', '2.5lbChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="5lbChangePlate"]')) {
                
        // 5lb Change Plate
        setPrice('16.99', '5lbChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="10lbChangePlate"]')) {
                
        // 10lb Change Plate
        setPrice('24.99', '10lbChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="0.5kgChangePlate"]')) {
                
        // 0.5kg Change Plate
        setPrice('7.99', '0.5kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="1kgChangePlate"]')) {
                
        // 1kg Change Plate
        setPrice('9.99', '1kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="1.25kgChangePlate"]')) {
                
        // 1.25kg Change Plate
        setPrice('11.99', '1.25kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="1.5kgChangePlate"]')) {
                
        // 1.5kg Change Plate
        setPrice('11.99', '1.5kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="2kgChangePlate"]')) {
                
        // 2kg Change Plate
        setPrice('13.99', '2kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="2.5kgChangePlate"]')) {
                
        // 2.5kg Change Plate
        setPrice('16.99', '2.5kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="5kgChangePlate"]')) {
                
        // 5kg Change Plate
        setPrice('24.99', '5kgChangePlatePrice');

    } else if(addItemButton.matches('[data-item-id="competitionCollar"]')) {
                
        // Competition Collars
        setPrice('119.99', 'competitionCollarPrice');

    } else if(addItemButton.matches('[data-item-id="plasticCollar"]')) {
                
        // Plastic Collars
        setPrice('24.99', 'plasticCollarPrice');

    } else if(addItemButton.matches('[data-item-id="springCollars"]')) {
                
        // Spring Collars
        setPrice('6.99', 'springCollarsPrice');

    } else if(addItemButton.matches('[data-item-id="25lbCompetitionPlate"]')) {
        
        /*----------------------------------------------------------
        PLATE PRICES WILL NEED TO BE CHANGED MANUALLY ON MOBILE SIZE
        ----------------------------------------------------------*/

        // 25lb Competition Plate
        setPrice('79.99', '25lbCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="35lbCompetitionPlate"]')) {
                
        // 35lb Competition Plate
        setPrice('97.99', '35lbCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="45lbCompetitionPlate"]')) {
                
        // 45lb Competition Plate
        setPrice('117.99', '45lbCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="55lbCompetitionPlate"]')) {
                
        // 55lb Competition Plate
        setPrice('134.99', '55lbCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="10kgCompetitionPlate"]')) {
                
        // 10kg Competition Plate
        setPrice('74.99', '10kgCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="15kgCompetitionPlate"]')) {
                
        // 15kg Competition Plate
        setPrice('92.99', '15kgCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="20kgCompetitionPlate"]')) {
                
        // 20kg Competition Plate
        setPrice('114.99', '20kgCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25kgCompetitionPlate"]')) {
                
        // 25kg Competition Plate
        setPrice('134.99', '25kgCompetitionPlatePrice');

    } else if(addItemButton.matches('[data-item-id="10lbEconomyPlate"]')) {
                
        // 10lb Economy Plate
        setPrice('22.99', '10lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="15lbEconomyPlate"]')) {
                
        // 15lb Economy Plate
        setPrice('29.99', '15lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25lbEconomyPlate"]')) {
                
        // 25lb Economy Plate
        setPrice('36.99', '25lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="35lbEconomyPlate"]')) {
                
        // 35lb Economy Plate
        setPrice('52.99', '35lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="45lbEconomyPlate"]')) {
                
        // 45lb Economy Plate
        setPrice('69.99', '45lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="55lbEconomyPlate"]')) {
                
        // 55lb Economy Plate
        setPrice('79.99', '55lbEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="5kgEconomyPlate"]')) {
                
        // 5kg Economy Plate
        setPrice('24.99', '5kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="10kgEconomyPlate"]')) {
                
        // 10kg Economy Plate
        setPrice('34.99', '10kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="15kgEconomyPlate"]')) {
                
        // 15kg Economy Plate
        setPrice('49.99', '15kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="20kgEconomyPlate"]')) {
                
        // 20kgEconomy Plate
        setPrice('69.99', '20kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25kgEconomyPlate"]')) {
                
        // 25kg Economy Plate
        setPrice('84.99', '25kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25lbStripedPlate"]')) {
        
        /*----------------------------------------------------------
        PLATE PRICES WILL NEED TO BE CHANGED MANUALLY ON MOBILE SIZE
        ----------------------------------------------------------*/

        // 25lb Striped Plate
        setPrice('79.99', '25lbStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="35lbStripedPlate"]')) {
                
        // 35lb Striped Plate
        setPrice('99.99', '35lbStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="45lbStripedPlate"]')) {
                
        // 45lb Striped Plate
        setPrice('119.99', '45lbStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="55lbStripedPlate"]')) {
                
        // 55lb Striped Plate
        setPrice('139.99', '55lbStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="10kgStripedPlate"]')) {
                
        // 10kg Striped Plate
        setPrice('74.99', '10kgStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="15kgStripedPlate"]')) {
                
        // 15kg Striped Plate
        setPrice('92.99', '15kgStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="20kgStripedPlate"]')) {
                
        // 20kg Striped Plate
        setPrice('114.99', '20kgStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25kgStripedPlate"]')) {
                
        // 25kg Striped Plate
        setPrice('134.99', '25kgStripedPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25lbTrainingPlate"]')) {
        
        /*----------------------------------------------------------
        PLATE PRICES WILL NEED TO BE CHANGED MANUALLY ON MOBILE SIZE
        ----------------------------------------------------------*/

        // 25lb Training Plate
        setPrice('74.99', '25lbTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="35lbTrainingPlate"]')) {
                
        // 35lb Training Plate
        setPrice('91.99', '35lbTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="45lbTrainingPlate"]')) {
                
        // 45lb Training Plate
        setPrice('108.99', '45lbTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="55lbTrainingPlate"]')) {
                
        // 55lb Training Plate
        setPrice('129.99', '55lbTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="10kgTrainingPlate"]')) {
                
        // 10kg Training Plate
        setPrice('69.99', '10kgTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="15kgTrainingPlate"]')) {
                
        // 15kg Training Plate
        setPrice('86.99', '15kgTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="20kgTrainingPlate"]')) {
                
        // 20kg Training Plate
        setPrice('106.99', '20kgTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="25kgTrainingPlate"]')) {
                
        // 25kg Training Plate
        setPrice('129.99', '25kgTrainingPlatePrice');

    } else if(addItemButton.matches('[data-item-id="2.5kgTechniquePlate"]')) {
                
        /*----------------------------------------------------------
        PLATE PRICES WILL NEED TO BE CHANGED MANUALLY ON MOBILE SIZE
        ----------------------------------------------------------*/

        // 2.5kg Technique Plate
        setPrice('59.99', '2.5kgTechniquePlatePrice');

    } else if(addItemButton.matches('[data-item-id="5kgPlasticTechniquePlate"]')) {
                
        // 5kg Plastic Technique Plate
        setPrice('69.99', '5kgPlasticTechniquePlatePrice');

    } else if(addItemButton.matches('[data-item-id="5kgRubberTechniquePlate"]')) {
                
        // 5kg Rubber Technique Plate
        setPrice('59.99', '5kgRubberTechniquePlatePrice');

    } else if(addItemButton.matches('[data-item-id="15lbTechniquePlate"]')) {
                
        // 15lb Technique Plate
        setPrice('59.99', '15lbTechniquePlatePrice');

    } else if(addItemButton.matches('[data-item-id="pinkShoe"]')) {
                
        // Pink Wei Rui Shoes
        setPrice('44.99', 'pinkShoePrice');

    } else if(addItemButton.matches('[data-item-id="purpleShoe"]')) {
                
        // Purple Wei Rui Shoes
        setPrice('54.99', 'purpleShoePrice');

    } else if(addItemButton.matches('[data-item-id="yellowShoe"]')) {
                
        // Yellow Do Win Shoes
        setPrice('174.99', 'yellowShoePrice');

    } else if(addItemButton.matches('[data-item-id="redShoe"]')) {
                
        // Red Do Win Shoes
        setPrice('174.99', 'yellowShoePrice');

    } else if(addItemButton.matches('[data-item-id="weightliftingBelt"]')) {
                
        // Weightlifting Belt
        setPrice('45.99', 'weightliftingBeltPrice');

    } else if(addItemButton.matches('[data-item-id="wristWraps"]')) {
                
        // Elastic Wrist Wraps
        setPrice('6.99', 'wristWrapsPrice');

    } else if(addItemButton.matches('[data-item-id="kneeSleeves"]')) {
                
        // Knee Sleeves
        setPrice('16.99', 'kneeSleevesPrice');

    } else if(addItemButton.matches('[data-item-id="weightliftingStraps"]')) {
                
        // Weightlifting Straps
        setPrice('11.99', 'weightliftingStrapsPrice');

    } else if(addItemButton.matches('[data-item-id="cottonWristWraps"]')) {
                
        // Cotton Wrist Wraps
        setPrice('11.99', 'cottonWristWrapsPrice');

    } else if(addItemButton.matches('[data-item-id="3inBox"]')) {
                
        // 3in Box
        setPrice('64.99', '3inBoxPrice');

    } else if(addItemButton.matches('[data-item-id="6inBox"]')) {
                
        // 6in Box
        setPrice('96.99', '6inBoxPrice');

    } else if(addItemButton.matches('[data-item-id="12inBox"]')) {
                
        // 12in Box
        setPrice('154.99', '12inBoxPrice');

    } else if(addItemButton.matches('[data-item-id="18inBox"]')) {
                
        // 18in Box
        setPrice('119.99', '18inBoxPrice');

    } else if(addItemButton.matches('[data-item-id="24inBox"]')) {
                
        // 24in Box
        setPrice('274.99', '24inBoxPrice');

    } else if(addItemButton.matches('[data-item-id="woodenJumpBox"]')) {
                
        // Wooden Jump Box
        setPrice('99.99', 'woodenJumpBoxPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered4kg"]')) {
                
        // 4kg Competition Powdered Kettlebell
        setPrice('29.99', 'kbcompetitionpowdered4kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered6kg"]')) {
                
        // 6kg Competition Powdered Kettlebell
        setPrice('29.99', 'kbcompetitionpowdered6kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered8kg"]')) {
                
        // 8kg Competition Powdered Kettlebell
        setPrice('29.99', 'kbcompetitionpowdered8kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered10kg"]')) {
                
        // 10kg Competition Powdered Kettlebell
        setPrice('29.99', 'kbcompetitionpowdered10kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered12kg"]')) {
                
        // 12kg Competition Powdered Kettlebell
        setPrice('29.99', 'kbcompetitionpowdered12kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered14kg"]')) {
                
        // 14kg Competition Powdered Kettlebell
        setPrice('34.99', 'kbcompetitionpowdered14kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered16kg"]')) {
                
        // 16kg Competition Powdered Kettlebell
        setPrice('39.99', 'kbcompetitionpowdered16kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered18kg"]')) {
                
        // 18kg Competition Powdered Kettlebell
        setPrice('44.99', 'kbcompetitionpowdered18kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered20kg"]')) {
                
        // 20kg Competition Powdered Kettlebell
        setPrice('49.99', 'kbcompetitionpowdered20kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered22kg"]')) {
                
        // 22kg Competition Powdered Kettlebell
        setPrice('54.99', 'kbcompetitionpowdered22kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionpowdered24kg"]')) {
                
        // 24kg Competition Powdered Kettlebell
        setPrice('59.99', 'kbcompetitionpowdered24kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl4kg"]')) {
                
        // 4kg Competition Vinyl Dipped Kettlebell
        setPrice('39.99', 'kbcompetitionvinyl4kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl6kg"]')) {
                
        // 6kg Competition Vinyl Dipped Kettlebell
        setPrice('39.99', 'kbcompetitionvinyl6kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl8kg"]')) {
                
        // 8kg Competition Vinyl Dipped Kettlebell
        setPrice('39.99', 'kbcompetitionvinyl8kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl10kg"]')) {
                
        // 10kg Competition Vinyl Dipped Kettlebell
        setPrice('39.99', 'kbcompetitionvinyl10kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl12kg"]')) {
                
        // 12kg Competition Vinyl Dipped Kettlebell
        setPrice('42.99', 'kbcompetitionvinyl12kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl16kg"]')) {
                
        // 16kg Competition Vinyl Dipped Kettlebell
        setPrice('47.99', 'kbcompetitionvinyl16kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl18kg"]')) {
                
        // 18kg Competition Vinyl Dipped Kettlebell
        setPrice('54.99', 'kbcompetitionvinyl18kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl20kg"]')) {
                
        // 20kg Competition Vinyl Dipped Kettlebell
        setPrice('59.99', 'kbcompetitionvinyl20kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl22kg"]')) {
                
        // 22kg Competition Vinyl Dipped Kettlebell
        setPrice('64.99', 'kbcompetitionvinyl22kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl24kg"]')) {
                
        // 24kg Competition Vinyl Dipped Kettlebell
        setPrice('69.99', 'kbcompetitionvinyl24kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl28kg"]')) {
                
        // 28kg Competition Vinyl Dipped Kettlebell
        setPrice('79.99', 'kbcompetitionvinyl28kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbcompetitionvinyl32kg"]')) {
                
        // 32kg Competition Vinyl Dipped Kettlebell
        setPrice('92.99', 'kbcompetitionvinyl32kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl2kg"]')) {
                
        // 2kg Training Vinyl Kettlebell
        setPrice('6.99', 'kbtrainingvinyl2kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl4kg"]')) {
                
        // 4kg Training Vinyl Kettlebell
        setPrice('10.99', 'kbtrainingvinyl4kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl6kg"]')) {
                
        // 6kg Training Vinyl Kettlebell
        setPrice('16.99', 'kbtrainingvinyl6kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl8kg"]')) {
                
        // 8kg Training Vinyl Kettlebell
        setPrice('22.99', 'kbtrainingvinyl8kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl10kg"]')) {
                
        // 10kg Training Vinyl Kettlebell
        setPrice('27.99', 'kbtrainingvinyl10kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl12kg"]')) {
                
        // 12kg Training Vinyl Kettlebell
        setPrice('32.99', 'kbtrainingvinyl12kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl16kg"]')) {
                
        // 16kg Training Vinyl Kettlebell
        setPrice('44.99', 'kbtrainingvinyl16kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl20kg"]')) {
                
        // 20kg Training Vinyl Kettlebell
        setPrice('54.99', 'kbtrainingvinyl20kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl24kg"]')) {
                
        // 24kg Training Vinyl Kettlebell
        setPrice('64.99', 'kbtrainingvinyl24kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl28kg"]')) {
                
        // 28kg Training Vinyl Kettlebell
        setPrice('76.99', 'kbtrainingvinyl28kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingvinyl32kg"]')) {
                
        // 32kg Training Vinyl Kettlebell
        setPrice('87.99', 'kbtrainingvinyl32kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered4kg"]')) {
                
        // 4kg Powdered Training Kettlebell
        setPrice('9.99', 'kbtrainingpowdered4kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered6kg"]')) {
                
        // 6kg Powdered Training Kettlebell
        setPrice('14.99', 'kbtrainingpowdered6kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered8kg"]')) {
                
        // 8kg Powdered Training Kettlebell
        setPrice('17.99', 'kbtrainingpowdered8kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered12kg"]')) {
                
        // 12kg Powdered Training Kettlebell
        setPrice('26.99', 'kbtrainingpowdered12kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered16kg"]')) {
                
        // 16kg Powdered Training Kettlebell
        setPrice('34.99', 'kbtrainingpowdered16kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered20kg"]')) {
                
        // 20kg Powdered Training Kettlebell
        setPrice('44.99', 'kbtrainingpowdered20kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered24kg"]')) {
                
        // 24kg Powdered Training Kettlebell
        setPrice('52.99', 'kbtrainingpowdered24kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered28kg"]')) {
                
        // 28kg Powdered Training Kettlebell
        setPrice('59.99', 'kbtrainingpowdered28kgPrice');

    } else if(addItemButton.matches('[data-item-id="kbtrainingpowdered32kg"]')) {
                
        // 32kg Powdered Training Kettlebell
        setPrice('69.99', 'kbtrainingpowdered32kgPrice');

    } else if(addItemButton.matches('[data-item-id="25kgEconomyPlate"]')) {
                
        // 25kg Economy Plate
        setPrice('84.99', '25kgEconomyPlatePrice');

    } else if(addItemButton.matches('[data-item-id="massageBall"]')) {
                
        // Massage Ball
        setPrice('5.99', 'massageBallPrice');

    } else if(addItemButton.matches('[data-item-id="doubleMassageBall"]')) {
                
        // Double Massage Ball
        setPrice('9.99', 'doubleMassageBallPrice');

    } else if(addItemButton.matches('[data-item-id="foamRoller"]')) {
                
        // Foam Roller
        setPrice('16.99', 'foamRollerPrice');

    } else if(addItemButton.matches('[data-item-id="61cmBands"]')) {
                
        // 61cm Bands
        setPrice('5.99', '61cmBandsPrice');

    } else if(addItemButton.matches('[data-item-id="yogaMat"]')) {
                
        // Yoga Mat
        setPrice('14.99', 'yogaMatPrice');

    } else if(addItemButton.matches('[data-item-id="yogaBall"]')) {
                
        // Yoga Ball
        setPrice('9.99', 'yogaBallPrice');

    } else if(addItemButton.matches('[data-item-id="barbellFloorRack"]')) {
                
        // Barbell Floor Rack
        setPrice('124.99', 'barbellFloorRackPrice');

    } else if(addItemButton.matches('[data-item-id="chalkBucket"]')) {
                
        // Chalk Bucket
        setPrice('109.99', 'chalkBucketPrice');

    } else if(addItemButton.matches('[data-item-id="3cmFloorMat"]')) {
                
        // 3cm Floor Mat
        setPrice('39.99', '3cmFloorMatPrice');

    } else if(addItemButton.matches('[data-item-id="2.5cmFloorMat"]')) {
                
        // 2.5cm Floor Mat
        setPrice('38.99', '2.5cmFloorMatPrice');

    } else if(addItemButton.matches('[data-item-id="2cmFloorMat"]')) {
                
        // 2cm Floor Mat
        setPrice('34.99', '2cmFloorMatPrice');

    } else if(addItemButton.matches('[data-item-id="1.5cmFloorMat"]')) {
                
        // 1.5cm Floor Mat
        setPrice('33.99', '1.5cmFloorMatPrice');

    } else if(addItemButton.matches('[data-item-id="1cmFloorMat"]')) {
                
        // 1cm Floor Mat
        setPrice('32.99', '1cmFloorMatPrice');

    } else if(addItemButton.matches('[data-item-id="beltHanger"]')) {
                
        // Belt Hanger
        setPrice('29.99', 'beltHangerPrice');

    } else if(addItemButton.matches('[data-item-id="plateRack"]')) {
                
        // Plate Rack
        setPrice('89.99', 'plateRackPrice');

    } else if(addItemButton.matches('[data-item-id="band208cmRed"]')) {
                
        // Band 208cm Red
        setPrice('6.99', 'band208cmRedPrice');

    } else if(addItemButton.matches('[data-item-id="band208cmBlack"]')) {
                
        // Band 208cm Black
        setPrice('10.99', 'band208cmBlackPrice');

    } else if(addItemButton.matches('[data-item-id="band208cmPurple"]')) {
                
        // Band 208cm Purple
        setPrice('14.99', 'band208cmPurplePrice');

    } else if(addItemButton.matches('[data-item-id="band208cmGreen"]')) {
                
        // Band 208cm Green
        setPrice('18.99', 'band208cmGreenPrice');

    } else if(addItemButton.matches('[data-item-id="band208cmBlue"]')) {
                
        // Band 208cm Blue
        setPrice('23.99', 'band208cmBluePrice');

    } else if(addItemButton.matches('[data-item-id="band208cmOrange"]')) {
                
        // Band 208cm Orange
        setPrice('29.99', 'band208cmOrangePrice');

    } else if(addItemButton.matches('[data-item-id="fatGrips"]')) {
                
        // Fat Grips
        setPrice('14.99', 'fatGripsPrice');

    } else if(addItemButton.matches('[data-item-id="squatPad"]')) {
                
        // Squat Pad
        setPrice('9.99', 'squatPadPrice');

    } else if(addItemButton.matches('[data-item-id="powerSled"]')) {
                
        // Power Sled
        setPrice('169.99', 'powerSledPrice');

    } else if(addItemButton.matches('[data-item-id="5lbMedBall"]')) {
                
        // 5lb Med Ball
        setPrice('14.99', '5lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="10lbMedBall"]')) {
                
        // 10lb Med Ball
        setPrice('16.99', '10lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="15lbMedBall"]')) {
                
        // 15lb Med Ball
        setPrice('19.99', '15lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="20lbMedBall"]')) {
                
        // 20lb Med Ball
        setPrice('24.99', '20lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="25lbMedBall"]')) {
                
        // 25lb Med Ball
        setPrice('29.99', '25lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="30lbMedBall"]')) {
                
        // 30lb Med Ball
        setPrice('33.99', '30lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="35lbMedBall"]')) {
                
        // 35lb Med Ball
        setPrice('37.99', '35lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="40lbMedBall"]')) {
                
        // 40lb Med Ball
        setPrice('49.99', '40lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="50lbMedBall"]')) {
                
        // 50lb Med Ball
        setPrice('64.99', '50lbMedBallPrice');

    } else if(addItemButton.matches('[data-item-id="3kgWallBall"]')) {
                
        // 3kg Wall Ball
        setPrice('49.99', '3kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="4kgWallBall"]')) {
                
        // 4kg Wall Ball
        setPrice('49.99', '4kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="5kgWallBall"]')) {
                
        // 5kg Wall Ball
        setPrice('49.99', '5kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="6kgWallBall"]')) {
                
        // 6kg Wall Ball
        setPrice('49.99', '6kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="7kgWallBall"]')) {
                
        // 7kg Wall Ball
        setPrice('49.99', '7kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="8kgWallBall"]')) {
                
        // 8kg Wall Ball
        setPrice('49.99', '8kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="9kgWallBall"]')) {
                
        // 9kg Wall Ball
        setPrice('54.99', '9kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="10kgWallBall"]')) {
                
        // 10kg Wall Ball
        setPrice('54.99', '10kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="12kgWallBall"]')) {
                
        // 12kg Wall Ball
        setPrice('54.99', '12kgWallBallPrice');

    } else if(addItemButton.matches('[data-item-id="wallBarRackHorizontal6Bar"]')) {
                
        // Wall-Mounted Horizontal 6-Bar Rack
        setPrice('49.99', 'wallBarRackHorizontal6BarPrice');

    } else if(addItemButton.matches('[data-item-id="wallBarRackVertical6Bar"]')) {
                
        // Wall-Mounted Vertical 6-Bar Rack
        setPrice('24.99', 'wallBarRackVertical6BarPrice');

    } else if(addItemButton.matches('[data-item-id="wallBarRackVertical10Bar"]')) {
                
        // Wall-Mounted Vertical 10-Bar Rack
        setPrice('34.99', 'wallBarRackVertical10BarPrice');

    } else if(addItemButton.matches('[data-item-id="wallBarRackHorizontal3Bar"]')) {
                
        // Wall-Mounted Horizontal 3-Bar Rack
        setPrice('14.99', 'wallBarRackHorizontal3BarPrice');

    } else if(addItemButton.matches('[data-item-id="jerkBlocks"]')) {
                
        // Jerk Blocks
        setPrice('699.99', 'jerkBlocksPrice');

    } else if(addItemButton.matches('[data-item-id="platform"]')) {
                
        // Platform
        setPrice('749.99', 'platformPrice');

    }
    
});








