function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }

    newForm.style.display = "none";
}

function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (newForm.style.display === "flex") {
        newForm.style.display = "none";
    } else {
        newForm.style.display = "flex";
    }

    filterForm.style.display = "none";
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(function(article) {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    let articleType = "";
    let markerLabel = "";
    if (document.getElementById("opinionRadio").checked) {
        articleType = "opinion";
        markerLabel = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        articleType = "recipe";
        markerLabel = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        articleType = "update";
        markerLabel = "Update";
    }

    if (!title || !text || !articleType) {
        alert("Please fill in all fields and select an article type.");
        return;
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(articleType);

    newArticle.innerHTML = `
        <span class="marker">${markerLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    filterArticles();
}
