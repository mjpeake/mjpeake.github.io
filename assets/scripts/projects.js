window.onload = loadProjects();

const ignoreList = ["mjpeake.github.io"];

function loadProjects() {
    var requestURL = 'https://api.github.com/users/mjpeake/repos';
    var request = $.get(requestURL, function () { }).done(function () {
        responseJSON = request.responseJSON;
        for (i = 0; i < responseJSON.length; i++) {
            var repo = parseRepo(responseJSON[i])

            if (ignoreList.includes(repo.name)) {
                continue
            }

            card = createCard(repo)
            $("#cards").append(card);
        }
    });
}

function parseRepo(response) {
    return {
        url: response.html_url,
        name: response.name,
        desc: response.description,
        lang: response.language,
        hasPage: response.has_pages,
    };
}

function createCard(repo) {
    var title = "<h5 class='projecttitle'>/" + repo.name + "</h5>";

    var description = "";
    if (repo.desc != null) {
        description = "<p class='card-text'>" + repo.desc + "</p>";
    }

    var language = "<p class='card-text my-auto'><small><i class='fab " + getLanguageIcon(repo.lang) + " fa-2x mr-3' data-toggle='popover' data-content='Javascript'></i></small></p>";

    var view = "";
    if (repo.hasPage) {
        view = "<h5 class='ml-2'><a href='" + repo.name + "' role='button' class='btn btn-outline-dark btn-sm'><i class='fas fa-eye'></i></a></h5>";
    }

    var github = "<h5 class='ml-2'><a href='" + repo.url + "' role='button' class='btn btn-outline-dark btn-sm'><i class='fab fa-github'></i></a></h5>";

    var card = "<div class='card'>" +
        "<div class='card-body bg-transparent'>" + title + description + "</div>" +
        "<div class='card-footer bg-transparent border-light'><div class='container-fluid'><div class='row'>" + language + "<div class='ml-auto'></div>" + view + github + "</div></div></div>" +
        "</div>"

    return card;
}

function getLanguageIcon(language) {
    var icon = ""
    switch (language) {
        case "JavaScript":
            icon = "fa-js"
            break;
        case "Java":
            icon = "fa-java"
            break;
    }
    return icon;
}