// import $ from "jquery";

const tabs = () => {
    const allTabs = document.querySelectorAll(".tab");
    document.addEventListener("DOMContentLoaded", () => {
    
        if (allTabs.length > 0) {
            activeFirst();
    
            if(window.innerWidth < 768) {
                allAcc();
            }
    
            allTabs.forEach((tab) => {
                tab.addEventListener("click", () => {
                    let tabId = tab.id;
                    removeActiveTab();
                    tab.classList.add("active");
                    hideAllTabContent();
                    document.querySelector(`.${tabId}`).classList.add("show");
    
                    if(window.innerWidth < 768) {
                        allAcc();
                    }
                });
            });
        }

    });

    function removeActiveTab() {
        const activeTab = document.querySelector(".tab.active");
        if (activeTab != null) {
            activeTab.classList.remove("active");
        }
    }

    function hideAllTabContent() {
        const allTabsContent = document.querySelectorAll(".tabContent");
        allTabsContent.forEach((content) => {
            content.classList.remove("show");
        });
    }

    function activeFirst() {
        removeActiveTab();

        const activeTab = document.querySelector(".tab.active");

        if (activeTab == null) {
            allTabs[0].classList.add("active");
            let tabId = allTabs[0].id;

            hideAllTabContent();
            document.querySelector(`.${tabId}`).classList.add("show");
        }
    }

    function allAcc() {
        const allFaqBtns = document.querySelectorAll(".acc-btn");

        if(allFaqBtns != null) {
            allFaqBtns.forEach((btn) => {
                if(btn.classList.contains("open")) {
                    btn.nextElementSibling.style.maxHeight = `${btn.nextElementSibling.scrollHeight}px`;
                }
            });
        }
    }
};

export { tabs };
