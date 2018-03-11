var repoPath = "https://github.com/cs3041-18d/cs3041-18d.github.io/";

function getThisPath()
{
    var path = window.location.pathname;
    if (path === "/")
        path = "/index/";
    return path.slice(0, -1);
}

function createPullRequestURL()
{
    return repoPath + "edit/master" + getThisPath() + ".md";
}

function createFileBugURL()
{
    var title = "Fix content problem on " + getThisPath() + ".md";
    return repoPath + "issues/new/?title=" + encodeURIComponent(title);
}

function runMainScript()
{
    $("#file-bug-anchor").attr("href", createFileBugURL());
    $("#pull-request-anchor").attr("href", createPullRequestURL());
}