const loginEl = document.querySelector(".login-nav");
let hoverCard = null;


function loginHover() {
  if (document.getElementById("mouse-leave")) return;

  hoverCard = document.createElement("div");
  hoverCard.className = "hover-card";
  hoverCard.id = "mouse-leave";
  hoverCard.innerHTML = `
    <div class="top">
      <p>New Customer?</p>
      <p class="sign-up">Sign Up</p>
    </div>
    <hr class="full-line" />
    <div class="hover-option">
      <img src="images/Login hover/Profile.png" alt="" class="hover-icon">
      <p class="hover-text">My Profile</p>
    </div>
    <div class="hover-option">
      <img src="images/Login hover/plus.png" alt="" class="hover-icon">
      <p class="hover-text">Flipkart Plus Zone</p>        
    </div>
    <div class="hover-option">
      <img src="images/Login hover/Orders.png" alt="" class="hover-icon">
      <p class="hover-text">Orders</p>
    </div>
    <div class="hover-option">
      <img src="images/Login hover/Wishlist.png" alt="" class="hover-icon">
      <p class="hover-text">Wishlist</p>        
    </div> 
    <div class="hover-option">
      <img src="images/Login hover/Rewards.png" alt="" class="hover-icon">
      <p class="hover-text">Rewards</p>
    </div>
    <div class="hover-option">
      <img src="images/Login hover/Gift card.png" alt="" class="hover-icon">
      <p class="hover-text">Gift Cards</p>        
    </div>
  `;

  document.body.appendChild(hoverCard);

  hoverCard.addEventListener("mouseleave", tryRemoveCard);
}

function tryRemoveCard() {
  if (!loginEl.matches(":hover") && !hoverCard.matches(":hover")) {
    hoverCard.remove();
    hoverCard = null;
  }
}

loginEl.addEventListener("mouseenter", loginHover);

loginEl.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (hoverCard && !loginEl.matches(":hover") && !hoverCard.matches(":hover")) {
      hoverCard.remove();
      hoverCard = null;
    }
  }, 300);
});
