var mutations = new MutationObserver(function(mutations){
    mutations.forEach(m => {
        if(m.type === "childList"){
            if(m.addedNodes.length > 0){
                if(m.addedNodes[0].childElementCount === 1)
                    m.addedNodes[0].remove();
            }
        }
        else if(m.type === "attributes"){
            document.body.style.overflowY = "scroll";
        }
    });
});

mutations.observe(document.body, {attributes: true, childList: true});