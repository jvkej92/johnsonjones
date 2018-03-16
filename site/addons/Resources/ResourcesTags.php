<?php

namespace Statamic\Addons\Resources;

use Statamic\Extend\Tags;

class ResourcesTags extends Tags
{
    function filterResources() {
        $this->get('tags_raw');
    }
}
