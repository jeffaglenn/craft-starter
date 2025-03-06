<?php

use craft\helpers\App;

return [
    'checkDevServer' => true,
    'devServerInternal' => 'http://localhost:5173',
    'devServerPublic' => App::env('PRIMARY_SITE_URL') . ':5173',
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => App::env('CRAFT_WEB_ROOT') . '/dist/.vite/manifest.json',
];