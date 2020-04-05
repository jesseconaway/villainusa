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

    } else if(addItemButton.matches('[data-item-id="agilityLadder"]')) {
                
        // Agility Ladder
        setPrice('49.99', 'agilityLadderPrice');

    }
    
});








