function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tbPage;
  tbPage = document.getElementsByClassName("tbPage");
  for (i = 0; i < tbPage.length; i++) {
    tbPage[i].style.display = "none";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openFaq(question, arrow) {
  var i, answerBlock;
  answerBlock = document.getElementsByClassName("answerBlock");
  for (i = 0; i < answerBlock.length; i++) {
    answerBlock[i].style.display = "none";
  }

  var faqArrows;
  faqArrows = document.getElementsByClassName("faq-arrow");
  for (i = 0; i < faqArrows.length; i++) {
    faqArrows[i].style.transform = "none";
  }

  document.getElementById(arrow).style.transform = "rotate(180deg)";

  document.getElementById(question).style.display = "block";
}

document.getElementById("defaultOpenQ").click();
