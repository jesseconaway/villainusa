const footer = document.getElementById('myFooter');
const nav = document.getElementById('myTopNav');

footer.innerHTML = '<div class="row mx-auto">     <div class="col-6 col-md-4 mx-auto footerColumn1">     <a href="customization.html" class="footerLink">Customization</a><br>     <a href="ordering.html" class="footerLink">Placing an Order</a><br>     <a href="production.html" class="footerLink">Production Facilities</a>     </div>     <div class="col-6 col-md-4 mx-auto footerColumn2">     <a href="shipping.html" class="footerLink">Shipping</a><br>     <a href="policies.html" class="footerLink">Product Policies</a><br>     <a href="contact.html" class="footerLink">Contact Us</a>     </div>     <div class="col-6 col-md-4 mx-auto footerColumn3">     <h1 class="footerItem"><a href="index.html">VillainUSA</a></h1><br>     <p class="footerItem">©2020 VillainUSA LLC</p>     </div>     </div>';

nav.innerHTML = '<a class="navbar-brand" href="index.html">VillainUSA</a>     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">     <span class="navbar-toggler-icon"></span>     </button>     <div class="collapse navbar-collapse" id="navbarSupportedContent">     <ul class="navbar-nav mr-auto">     <li class="nav-item dropdown">     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">     All Categories     </a>     <div class="dropdown-menu" aria-labelledby="navbarDropdown">     <a class="dropdown-item" href="barbells.html">Barbells</a>     <a class="dropdown-item" href="collars.html">Barbell Collars</a>     <a class="dropdown-item" href="weightliftingequipment.html">Weightlifting Equipment</a>     <a class="dropdown-item" href="outfitting.html">Gym Outfitting</a>     <a class="dropdown-item" href="agilityandaerobic.html">Agility & Aerobic Training</a>     <a class="dropdown-item" href="mobility.html">Mobility</a>     <a class="dropdown-item" href="strengthequipment.html">Strength Equipment</a>     <a class="dropdown-item" href="kettlebells.html">Kettlebells</a>     <a class="dropdown-item" href="dumbbells.html">Dumbbells</a>     <a class="dropdown-item" href="bodyweight.html">Bodyweight Strength</a>     <a class="dropdown-item" href="jumpboxes.html">Jump Boxes</a>     <a class="dropdown-item" href="plates.html">Plates</a>     <a class="dropdown-item" href="gear.html">Weightlifting Gear & Apparel</a>     <a class="dropdown-item" href="xendurance.html">Xendurance Supplements</a>     </div>     </li>     <li class="nav-item">     <a class="nav-link" href="barbells.html">Barbells</a>     </li>     <li class="nav-item">     <a class="nav-link" href="plates.html">Plates</a>     </li>     <li class="nav-item">     <a class="nav-link" href="mobility.html">Mobility</a>     </li>     <li class="nav-item">     <a class="nav-link" href="outfitting.html">Outfitting</a>     </li>     <li class="nav-item">     <a class="nav-link" href="gear.html">Gear & Apparel</a>     </li>     <li class="nav-item">     <a class="nav-link" href="xendurance.html">Xendurance Supplements</a>     </li>     </ul>     <div class="d-inline my-2 my-lg-0">     <div class="my-2 my-sm-0 snipcart-checkout cartIcon"><img style="width: 100%; height: auto;" src="images/cart.png"></div>     </div>     </div>'

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