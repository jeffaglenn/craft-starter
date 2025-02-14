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
    ->isSystemLive(App::env('IS_SYSTEM_LIVE') ?? true)
    ->cpTrigger(App::env('CP_TRIGGER') ?? 'admin')
    ->timezone(App::env('TIMEZONE') ?? 'America/Chicago')
    ->errorTemplatePrefix('_errors/')
    ->defaultWeekStartDay(0)
    ->useEmailAsUsername()
    ->omitScriptNameInUrls()
    ->preloadSingles()
    ->preventUserEnumeration()
    ->useEmailAsUsername()
    ->enableGql(0)
    ->maxUploadFileSize('25M')
    ->defaultImageQuality(100)
    ->aliases([
        '@web' => App::env('PRIMARY_SITE_URL'),
        '@webroot' => App::env('CRAFT_WEB_ROOT'),
    ])
;
