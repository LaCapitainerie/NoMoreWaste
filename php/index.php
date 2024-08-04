<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

require_once __DIR__ . "/libraries/path.php";
require_once __DIR__ . "/libraries/method.php";
require_once __DIR__ . "/libraries/response.php";


if (isPath("register")) {
    if(isPostMethod()) {
        require_once __DIR__ . "/routes/users/post-reg.php";
        die();
    };
};

if (isPath("login")) {
    if(isPostMethod()) {
        require_once __DIR__ . "/routes/users/post-log.php";
        die();
    };
};


if (isPath("tasks")) {
    if (isGetMethod()) {
        require_once __DIR__ . "/routes/tasks/get.php";
        die();
    };

    if (isPostMethod()) {
        require_once __DIR__ . "/routes/tasks/post.php";
        die();
    };
};


if (isPath("tasks/:id")) {
    if (isDeleteMethod()) {
        require_once __DIR__ . "/routes/tasks/delete.php";
        die();
    };

    if (isPatchMethod()) {
        require_once __DIR__ . "/routes/tasks/patch.php";
        die();
    };
};