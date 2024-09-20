function observeMutations() {
    const targetNode = document.querySelector("#table > div.tableContent");
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        observer.disconnect();
        
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('Дерево DOM изменилось');
                document.querySelector("#reactHost > div > section > div.game__tableArea > div > div.showmanTableArea > div.tableArea > div.tableContextView > div > button.playerButton.mainAction.active").click();
                break; 
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

// Вызов функции
observeMutations();

