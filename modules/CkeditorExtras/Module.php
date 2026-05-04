<?php

namespace modules\ckeditorextras;

use Craft;
use craft\ckeditor\helpers\CkeditorConfig;
use yii\base\Module as BaseModule;

class Module extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/ckeditorextras', __DIR__);

        parent::init();

        CkeditorConfig::registerFirstPartyPackage(['ImageResize'], []);
    }
}
