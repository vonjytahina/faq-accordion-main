document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling; // Next sibling <p>
      const plusIcon = this.querySelector(".plus");
      const minusIcon = this.querySelector(".minus");

      // Hide all other answers
      questions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          const otherAnswer = otherQuestion.nextElementSibling;
          const otherPlusIcon = otherQuestion.querySelector(".plus");
          const otherMinusIcon = otherQuestion.querySelector(".minus");

          otherAnswer.style.display = "none";
          otherPlusIcon.style.display = "block";
          otherMinusIcon.style.display = "none";
        }
      });

      // Toggle the display of the clicked answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
      } else {
        answer.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      }
    });
  });
});
