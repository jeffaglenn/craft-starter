<?php

use craft\config\GeneralConfig;
use craft\helpers\App;

return [
    // Transformer: 'craft' (local), 'imgix', 'sharp', etc.
    'transformer' => 'craft',

    // Allow upscaling of images
    'allowUpscale' => false,

    // Image quality defaults
    'jpegQuality' => 80,
    'webpQuality' => 80,
    'pngCompressionLevel' => 5,

    // Interlace images for progressive loading
    'interlace' => true,

    // Remove metadata from images
    'removeMetadata' => true,

    // Cache settings
    'cacheDuration' => 31536000, // 1 year
    'cacheDurationRemoteFiles' => 31536000,

    // Named transforms — add your project-specific transforms here
    // 'namedTransforms' => [
    //     'hero' => [
    //         ['width' => 400],
    //         ['width' => 800],
    //         ['width' => 1200],
    //         ['width' => 1600],
    //         ['width' => 2000],
    //     ],
    //     'thumbnail' => [
    //         ['width' => 200],
    //         ['width' => 400],
    //     ],
    // ],
];
