<?php

namespace Statamic\Addons\Resources;

use Statamic\Extend\Tags;
use Statamic\Addons\Pinned;

class ResourcesTags extends Tags
{
    function filterResources() {
        $this->get('tags_raw');
    }
}
