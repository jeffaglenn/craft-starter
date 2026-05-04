<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    ->convertFilenamesToAscii(true)
    ->cpTrigger(App::env('CP_TRIGGER') ?? 'admin')
    ->defaultImageQuality(90)
    ->defaultWeekStartDay(0)
    ->enableGql(0)
    ->errorTemplatePrefix('_errors/')
    ->isSystemLive(App::env('IS_SYSTEM_LIVE') ?? true)
    ->maxInvalidLogins(5)
    ->maxUploadFileSize('25M')
    ->omitScriptNameInUrls()
    ->preloadSingles()
    ->preventUserEnumeration()
    ->timezone(App::env('TIMEZONE') ?? 'America/Chicago')
    ->useEmailAsUsername()
    ->aliases([
        '@web'     => App::env('PRIMARY_SITE_URL'),
        '@webroot' => App::env('CRAFT_WEB_ROOT'),
        '@assets'  => dirname(__DIR__) . '/web/dist/',
    ])
;
