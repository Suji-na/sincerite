function questionsForm() {
    document.addEventListener("DOMContentLoaded", () => {

        const contactForm = document.querySelector(".question__form-contact");
        const contactTitle = document.querySelector(".form__steps-contact");
        const stepWrapper = document.querySelector(".form__steps-wrapper");
        const stepsDesc = document.querySelector(".form__steps-desc");

        let numbValue = "";

        makeBtnActive();

        const allNextBtn = document.querySelectorAll(".question__form-btn-next");
        const allPrevBtn = document.querySelectorAll(".question__form-btn-prev");

        if (allNextBtn != null) {
            allNextBtn.forEach(nextBtn => {
                nextBtn.addEventListener("click", (e) => {
                    if(nextBtn.type == "submit") return;
                    e.preventDefault();

                    let nextId = nextBtn.dataset.next;
                    let elem = nextBtn.closest(".question__form-area");

                    if (nextId == undefined) {
                        showContact();
                        slideToTop();
                    } else {
                        hideQuestion(elem);
                        showNext(nextId);
                        activeStepsDesc(nextId);
                        slideToTop();
                    }
                });
            });
        }

        if (allPrevBtn != null) {
            allPrevBtn.forEach(prevBtn => {
                prevBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    let prevId = prevBtn.dataset.prev;
                    let elem = prevBtn.closest(".question__form-area");
                    
                    if(prevId == undefined) {
                        hideContact();
                        slideToTop();
                    }else {
                        hideQuestion(elem);
                        let currentId = elem.id;
                        showPrev(prevId, currentId);
                        activeStepsDesc(prevId);
                        slideToTop();
                    }

                });
            });
        }

        function showContact() {
            stepWrapper.classList.add("hide");
            stepsDesc.classList.add("hide");
            contactForm.classList.remove("hide");
            contactTitle.classList.remove("hide");
            document.querySelector(".question__form-area.active").classList.remove("hide");
            document.querySelector(".question__form-area.active").classList.add("hide");
        }

        function hideContact() {
            stepWrapper.classList.remove("hide");
            stepsDesc.classList.remove("hide");
            contactForm.classList.add("hide");
            contactTitle.classList.add("hide");
            document.querySelector(".question__form-area.active").classList.add("hide");
            document.querySelector(".question__form-area.active").classList.remove("hide");
        }

        function hideQuestion(elem) {
            elem.classList.add("hide");
            elem.classList.remove("active");
        }

        function showNext(id) {
            if (document.getElementById(`${id}`) == null) return;
            document.getElementById(`${id}`).classList.add("active");
            document.getElementById(`${id}`).classList.remove("hide");

            let [steps, index] = id.split("-");
            index = +index;
            let stepsIndex = (+steps.slice(4)) - 1;
            updateStepsCount(stepsIndex, steps, index);
        }

        function updateStepsCount(stepNo, stepsName, index) {

            document.querySelector(`.step${stepNo}`).classList.remove("active");
            
            if (!isNaN(index)) {
                let allInnerSteps = document.querySelectorAll(`.${stepsName} .form__steps-box-sub span`);
                // let allInnerSteps = document.querySelectorAll(".form__steps-box-sub span");
                
                allInnerSteps.forEach(innrStep => {
                    innrStep.classList.remove("active");
                });

                for (let i = 0; i < allInnerSteps.length; i++) {
                    if (i < index) {
                        allInnerSteps[i].classList.add("active");
                    }
                }
            }

            document.querySelector(`.${stepsName}`).classList.add("active");
        }

        function showPrev(id, currentQues) {

            document.getElementById(`${id}`).classList.add("active");
            document.getElementById(`${id}`).classList.remove("hide");

            contactTitle.classList.add("hide");
            stepWrapper.classList.remove("hide");
            stepsDesc.classList.remove("hide");

            let [steps, index] = id.split("-");
            let [currentSteps] = currentQues.split("-");
            let stepsIndex = +(currentSteps.slice(4));

            if(index == undefined) {
                stepsIndex = 2;
            }else {
                index = (+index);
            }

            updateStepsCount(stepsIndex, steps, index);
        }

        function activeStepsDesc(id) {
            const allStepsDesc = document.querySelectorAll(".form__steps-desc .form__steps-desc-text");
            allStepsDesc.forEach(desc => {
                desc.classList.add("hide");
            });

            document.querySelector(`.form__steps-desc .form__steps-desc-text.${id}`).classList.remove("hide");
        }

        function slideToTop() {
            const header = document.getElementById("header");
            let headerHeigth = header.offsetHeight;

            if (scrollY > headerHeigth) {
                window.scrollTo({
                    top: headerHeigth,
                    behavior: "smooth"
                });
            }
        }

        function makeBtnActive() {
            // document.addEventListener("DOMContentLoaded", () => {
            const allStepsInp = document.querySelectorAll("form input[type=text]");
            const allStepsRad = document.querySelectorAll("form input[type=radio]");
            const allStepsNumber = document.querySelectorAll("form input[type=number]");

            if (allStepsInp != null) {
                allStepsInp.forEach(inp => {
                    inp.addEventListener("input", () => {
                        let activeQuestion = inp.closest(".question__form-area");
                        let btnActive = checkForm(activeQuestion);
                        let nextBtn = activeQuestion.querySelector(".question__form-navigation .question__form-btn-next");

                        // if(activeQuestion.id == "step1") {
                        //     changeBtnState(btnActive, nextBtn);
                        // }else {
                        changeBtnState(btnActive, nextBtn);
                        // }
                    });
                });
            }

            if (allStepsRad != null) {
                allStepsRad.forEach(rad => {
                    rad.addEventListener("change", () => {

                        let activeQuestion = rad.closest(".question__form-area");
                        let btnActive = checkForm(activeQuestion);
                        let nextBtn = activeQuestion.querySelector(".question__form-navigation .question__form-btn-next");

                        changeBtnState(btnActive, nextBtn);

                        const checkAllInp = checkQuestionAllInput(activeQuestion);

                        if (checkAllInp == true) {
                            let parentElement = rad.closest(".question__form-area");
                            let id = parentElement.querySelector(".question__form-btn-next").dataset.next;

                            let parentId = parentElement.id;

                            if(parentId == "step1") {
                                return;
                            }

                            if (id != undefined) {
                                showNext(id);
                                hideQuestion(parentElement);
                                activeStepsDesc(id);
                                slideToTop();
                            }else {
                                showContact();
                                slideToTop();
                            }
                        }
                    });
                });
            }

            if (allStepsNumber != null) {
                allStepsNumber.forEach(inp => {
                    inp.addEventListener("input", (e) => {

                        if(isNaN(e.data)) {
                            e.target.value = "";
                            e.target.value = numbValue;
                        }else {
                            numbValue = e.target.value;
                        }
                        
                        let activeQuestion = inp.closest(".question__form-area");
                        let btnActive = checkForm(activeQuestion);
                        let nextBtn = activeQuestion.querySelector(".question__form-navigation .question__form-btn-next");

                        changeBtnState(btnActive, nextBtn);
                    });
                });
            }

            function checkForm(activeQuestion) {
                let inputState = checkTextInput(activeQuestion);
                let radioState = checkRadio(activeQuestion);

                return (inputState && radioState);
            }

            function checkRadio(questionBox) {
                const allRadiosRow = questionBox.querySelectorAll(".question__row");
                let radioState = false;

                if (allRadiosRow != null) {
                    for (let i = 0; i < allRadiosRow.length; i++) {

                        let allRadios = allRadiosRow[i].querySelectorAll("input[type='radio']");

                        if (allRadios.length > 0) {
                            let allRadiosCommonName = allRadios[0].name;
                            let checkedRadio = allRadiosRow[i].querySelector(`input[type='radio'][name='${allRadiosCommonName}']:checked`);

                            if (checkedRadio == null) {
                                radioState = false;
                                return radioState;
                            } else {
                                radioState = true;
                            }
                        }
                    }
                } else {
                    radioState = true;
                }

                return radioState;
            }

            function checkTextInput(questionBox) {
                const allTextInput = questionBox.querySelectorAll(".question__row input[type='text']");
                const allNumberInput = questionBox.querySelectorAll(".question__row input[type='number']");
                let inputState = false;

                let flag = 0;

                if (allTextInput != null) {
                    allTextInput.forEach(inp => {
                        if (inp.value != 0) {
                            flag++;
                        }
                    });
                } else {
                    inputState = true;
                }

                if (allNumberInput != null) {
                    allNumberInput.forEach(inp => {
                        if (inp.value.length != 0) {
                            flag++;
                        }
                    });
                } else {
                    inputState = true;
                }

                if (flag == (allTextInput.length + allNumberInput.length)) {
                    inputState = true;
                } else {
                    inputState = false;
                }

                return inputState;
            }

            function changeBtnState(state, nextBtn) {
                if (state === true) {
                    nextBtn.removeAttribute("disabled");
                } else {
                    nextBtn.setAttribute("disabled", "true");
                }
            }

            function checkQuestionAllInput(parEl) {
                // let textInp = parEl.querySelectorAll("input[type='text']");
                // let numInp = parEl.querySelectorAll("input[type='number']");

                let inputState = checkTextInput(parEl);
                let radState = checkRadio(parEl);

                if (inputState == false || radState == false) return false;
                return true;
            }

            // });
        }
    });
}

export { questionsForm };